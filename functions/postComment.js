const contentful = require('contentful-management');
const client = contentful.createClient({
  accessToken: `${process.env.CONTENTFUL_MANAGEMENT_API_TOKEN}`,
});

exports.handler = function (event, context, callback) {
  const postComment = async () => {
    try {
      const data = JSON.parse(event.body);
      const {
        email,
        id,
        message,
        name,
        postId,
        rating,
        // replies,
        replyId,
        timestamp,
      } = data || {};
      const postComments = [];
      await client
        .getSpace(`${process.env.CONTENTFUL_SPACE_ID}`)
        .then(space => space.getEnvironment('master'))
        .then(environment => environment.getEntry(postId))
        .then(entry => {
          // Get current comments
          entry.fields.comments['en-US'].comments.forEach(comment => {
            postComments.push(comment);
          });
          if (replyId) {
            postComments.forEach(comment => {
              if (comment.id === replyId) {
                comment.replies.push({
                  email,
                  id,
                  message,
                  name,
                  timestamp,
                });
              }
            });
          }
          if (!replyId) {
            postComments.push({
              email,
              id,
              message,
              name,
              rating,
              replies: [],
              timestamp,
            });
          }
        });
      await client
        .getSpace(`${process.env.CONTENTFUL_SPACE_ID}`)
        .then(space => space.getEnvironment('master'))
        .then(environment => environment.getEntry(postId))
        .then(entry => {
          // Update comments
          entry.fields.comments = { 'en-US': { comments: postComments } };
          // Update post
          return entry.update();
        });
      // Callback with updated comments to update state
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          comments: postComments,
        }),
      });
    } catch (error) {
      console.error('post comment error: ', error);
    }
  };
  postComment();
};
