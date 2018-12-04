
const user1 = {
    id: 1,
    name: 'Jason Rodrigues',
    friends: [2, 3]
}

const user2 = {
    id: 2,
    name: 'Alisha Keyes',
    friends: [3]
}

const user3 = {
    id: 3,
    name: 'Blanold Kurplatt',
    friends: [1, 2, 5, 6]
}

const user4 = {
    id: 4,
    name: 'Steven Reubenstone',
    friends: [2, 3]
}

const user5 = {
    id: 5,
    name: 'Jason Bourne',
    friends: [6]
}

const user6 = {
    id: 6,
    name: 'Alison Jane',
    friends: [2, 3]
}


const users = [user1, user2, user3, user4, user5, user6]


const blog1 = {
    id: 1,
    title: 'Dogs are blue',
    comments: [1, 2]
}

const blog2 = {
    id: 2,
    title: 'I love gold dogs',
    comments: [3, 4]
}


const blog3 = {
    id: 3,
    title: 'Dogs are purple',
    comments: [5, 6]
}


const blogs = [blog1, blog2, blog3]



const comment1 = {
    id: 1,
    body: 'great post',
    user: 1
}

const comment2 = {
    id: 1,
    body: 'cool',
    user: 3
}

const comment3 = {
    id: 1,
    body: 'i love cats blog poster',
    user: 4
}

const comment4 = {
    id: 1,
    body: 'greattttttt',
    user: 1
}

const comment5 = {
    id: 6,
    body: 'wowwww',
    user: 1
}

const comment6 = {
    id: 1,
    body: 'holy moleeee',
    user: 5
}


const comments = [comment1, comment2, comment3, comment4, comment5, comment6]

const like1 = {
    id: 1,
    user: 1,
    commentID: 2,
}

const like2 = {
    id: 1,
    user: 2,
    commentID: 1,
}
const like3 = {
    id: 1,
    user: 3,
    commentID: 1,
}
const like4 = {
    id: 1,
    user: 4,
    commentID: 1,
}
const like5 = {
    id: 1,
    user: 4,
    commentID: 1,
}

const like6 = {
    id: 1,
    user: 2,
    commentID: 1,
}

const like7 = {
    id: 1,
    user: 3,
    commentID: 1,
}

const likes = [like1, like2, like3, like4, like5, like6, like7]

export const data = {
    users: users,
    blogs: blogs,
    comments: comments,
    likes: likes
}

