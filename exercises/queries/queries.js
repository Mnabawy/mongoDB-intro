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

  const match = Post.findOne({ title });
  return match;
}

const postsForAuthor = (authorId) => {
  const match = Post.find({ author: authorId })
  return match;
}

const fullPostById = (id) => {
  return Post.findById(id)
    .populate('author')
    .exec()
}

const allPostsSlim = (fieldsToSelect) => {
  return Post.find({})
    .select(fieldsToSelect)
    .exec()

}

const postByContentLength = (maxContentLength, minContentLength) => {
  const pBContentLenth = Post.find({ contentLength: { $gte: maxContentLength, $lt: minContentLength } })
  return pBContentLenth;
}

const addSimilarPosts = (postId, similarPosts) => {
  return Post.findByIdAndUpdate(postId, {
    $push: { similarPosts: { $each: similarPosts } }
  },{new:true})
  .exec()
}

module.exports = {
  postByTitle,
  postsForAuthor,
  fullPostById,
  allPostsSlim,
  postByContentLength,
  addSimilarPosts
}
