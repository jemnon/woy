const contentful = require('contentful-management');
const client = contentful.createClient({
  accessToken: `${process.env.CONTENTFUL_MANAGEMENT_API_TOKEN}`,
});

exports.handler = function(event, context, callback) {
  const fetchComments = async () => {
    let postComments = [];
    try {
      const id = await event.queryStringParameters.id;
      await client
        .getSpace(`${process.env.CONTENTFUL_SPACE_ID}`)
        .then(space => space.getEnvironment('master'))
        .then(environment => environment.getEntry(id))
        .then(entry => {
          // If no comments exist
          if (entry.fields.comments === undefined) {
            // Create the JSON needed to store comments
            entry.fields.comments = {
              'en-US': {
                comments: [],
              },
            };
            // Update entry
            return entry.update();
          } else {
            // Grab the comments
            entry.fields.comments['en-US'].comments.forEach(comment => {
              postComments.push(comment);
            });
          }
        })
        .then(() => {
          // Callback with comments to update state
          callback(null, {
            statusCode: 200,
            body: JSON.stringify({
              comments: postComments,
            }),
          });
        });
    } catch (error) {
      console.error('fetch comments error: ', error);
    }
  };
  fetchComments();
};
