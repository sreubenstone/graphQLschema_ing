const graphql = require('graphql');
const knexConfig = require("./db/knex").development;
const knex = require("knex")(knexConfig);
import { data } from './fakedata'

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = graphql;


// Blog Post has Comments has user has likes has users who have friends

// Objective --> See friends of friends of people who liked the comments on a post

// Next Step: set up Database to mimic this in relational form


const BlogType = new GraphQLObjectType({
    name: 'Blog',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        comments: {
            type: new GraphQLList(CommentType),
            async resolve(parent, args) {
                const comments = await knex.table('comments').select().where({ blog_id: parent.id })
                return comments
            }
        }
    })
});

const CommentType = new GraphQLObjectType({
    name: 'Comment',
    fields: () => ({
        id: { type: GraphQLID },
        body: { type: GraphQLString },
        user_id: { type: GraphQLInt },
        blog_id: { type: GraphQLInt },
        likes: {
            type: new GraphQLList(LikeType),
            async resolve(parent, args) {
                const likes = await knex.table('likes').select().where({ comment_id: parent.id })
                return likes
            }
        }
    })
});

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        friends: {
            type: new GraphQLList(UserType),
            async resolve(parent, args) {
                const friends = await knex.raw(`SELECT users.name FROM users INNER JOIN connections ON users.id = connections.user_id::integer WHERE connections.user_id::integer = ${parent.id} OR connections.user_accepted_id = ${parent.id}`)
                console.log('friends:', friends)
                return friends.rows
            }
        }
    })
});

const LikeType = new GraphQLObjectType({
    name: 'Like',
    fields: () => ({
        id: { type: GraphQLID },
        user_id: { type: GraphQLInt },
        comment_id: { type: GraphQLInt },
        user: {
            type: UserType,
            async resolve(parent, args) {
                const user = await knex.table('users').select().where({ id: parent.user_id })
                return user[0]
            }
        }
    })
});


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        blogs: {
            type: new GraphQLList(BlogType),
            async resolve(parent, args) {
                const results = await knex.table('blogs').select()
                console.log(results)
                return results
            }
        },

    }

});


// const Mutation = new GraphQLObjectType({
//     name: 'Mutation',
//     fields: {
//         addAuthor: {
//             type: AuthorType,
//             args: {
//                 name: { type: GraphQLString },
//                 age: { type: GraphQLInt }
//             },
//             resolve(parent, args) {
//                 let author = new Author({
//                     name: args.name,
//                     age: args.age
//                 });
//                 return author.save();
//             }
//         },
//         addBook: {
//             type: BookType,
//             args: {
//                 name: { type: new GraphQLNonNull(GraphQLString) },
//                 genre: { type: new GraphQLNonNull(GraphQLString) },
//                 authorId: { type: new GraphQLNonNull(GraphQLID) }
//             },
//             resolve(parent, args) {
//                 let book = new Book({
//                     name: args.name,
//                     genre: args.genre,
//                     authorId: args.authorId
//                 });
//                 return book.save();
//             }
//         }
//     }
// });

export default new GraphQLSchema({
    query: RootQuery,
    // mutation: Mutation
});