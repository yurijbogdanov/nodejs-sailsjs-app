/**
 * Model User
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
    email: {
      type: 'string',
      unique: true
    },
    createdAt: {
      type: 'datetime'
    },
    updatedAt: {
      type: 'datetime'
    },
    articles: {
      collection: 'Article',
      via: 'user'
    },
    categories: {
      collection: 'Category',
      via: 'user'
    },
    tags: {
      collection: 'Tag',
      via: 'user'
    },
    comments: {
      collection: 'Comment',
      via: 'user'
    },
  }
};
