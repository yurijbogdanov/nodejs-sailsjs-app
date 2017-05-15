/**
 * ArticleController
 *
 * @description :: Server-side logic for managing Articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  find: function (req, res) {
    Article.find({}).exec(function (err, records) {
      if (err) return res.ok(err);
      return res.ok(records);
    });
  }
};

