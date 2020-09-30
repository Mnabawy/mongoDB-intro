const Post = require('./post')

const postByTitle = (title) => {
  // const post = await Post.create({
  //   title: 'any', content: 'test',
  //   contentLength: 12,
  //   isFeatured: true,
  //   author: {
  //     name: 'moh',
  //     bio: 'test',
  //     social: {
  //       twitter: 'any@test.com',
  //       linkedin: 'test@test.com'
  //     }

  //   }
  // })

  const match =  Post.findOne({title:title});
  return match;
}

const postsForAuthor = (authorId) => {
  const postsFromAuthor = Post.findById(authorId)
  return postsForAuthor;
}

const fullPostById = (id) => {
  const fpostById = Post.find({id:id});
  return fpostById
}

const allPostsSlim = (fieldsToSelect) => {
  const allpostsS = Post.find(fieldsToSelect)
  return allpostsS
}

const postByContentLength = (maxContentLength, minContentLength) => {
  const pBContentLenth = Post.find({contentLength:{$gte:maxContentLength,$lt:minContentLength}})
}

const addSimilarPosts = (postId, similarPosts) => {
  // const addSimPosts = await Post.find({})
}

module.exports = {
  postByTitle,
  postsForAuthor,
  fullPostById,
  allPostsSlim,
  postByContentLength,
  addSimilarPosts
}
