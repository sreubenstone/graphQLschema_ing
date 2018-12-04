const graphql = require('graphql');
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



const BlogType = new GraphQLObjectType({
    name: 'Blog',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        comments: { type: GraphQLString },
    })
});

const CommentType = new GraphQLObjectType({
    name: 'Comment',
    fields: () => ({
        id: { type: GraphQLID },
        body: { type: GraphQLString },
        user: { type: GraphQLString },
    })
});

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        friends: { type: GraphQLString },
    })
});

const LikeType = new GraphQLObjectType({
    name: 'Like',
    fields: () => ({
        id: { type: GraphQLID },
        user: { type: GraphQLString },
        commentID: { type: GraphQLString },
    })
});


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        blogs: {
            type: new GraphQLList(BlogType),
            resolve(parent, args) {
                console.log(data.blogs)
                return data.blogs
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