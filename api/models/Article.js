/**
 * Model Article
 * @link http://sailsjs.com/documentation/concepts/models-and-orm
 * @link http://sailsjs.com/documentation/reference/waterline-orm/models
 */
module.exports = {
  /**
   * Attributes
   * @link http://sailsjs.com/documentation/concepts/models-and-orm/attributes
   */
  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },
    title: {
      type: 'string'
    },
    createdAt: {
      type: 'datetime'
    },
    updatedAt: {
      type: 'datetime'
    },
    user: {
      model: 'User'
    },
    category: {
      model: 'Category'
    },
    tags: {
      collection: 'Tag',
      via: 'articles',
      dominant: true
    },
    comments: {
      collection: 'Comment'
    },
  },

  /**
   * Lifecycle callbacks
   * @link http://sailsjs.com/documentation/concepts/models-and-orm/lifecycle-callbacks
   */
  beforeCreate: function (values, cb) {
    //if(err) return cb(err);

    values.user = 3;

    //values.password = hash;

    cb();
  }
};
