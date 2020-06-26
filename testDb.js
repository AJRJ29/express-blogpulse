var db = require('./models')

db.article.create({
  title: 'Local Events: Capitol Hill Art Walk',
  content: 'Celebrate community and expression at the next Capitol Hill Art Walk.',
  articleId: 2
})
.then(function(article) {
  console.log(article.get())
})

// db.article.findOne({
//     where: { id: 1 },
//     include: [db.comment]
//   }).then(function(article) {
//     // by using eager loading, the article model should have a comments key
//     console.log(article.comments)
//   })

// models.comment.belongsTo(models.article)