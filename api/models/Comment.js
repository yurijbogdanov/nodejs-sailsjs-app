/**
 * Model Comment
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
    content: {
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
  }
};
