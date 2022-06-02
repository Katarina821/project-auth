var contentful = require('contentful');

var client = contentful.createClient({
  space: 'jr0jxguam2zu',
  accessToken: 'ejZqf05ORVDaPteDalAx-DOPzw4hnfZvpWa_GtoPNkg'
});

client.getEntry('7GJmpwctVWdAz0WDej2YOJ')
.then(function (entry) {
  console.log(entry.fields.quote) //log post title
});