'use strict';
module.exports = (sequelize, DataTypes) => {
  const keyword_id = sequelize.define('keyword_id', {
    keyword: DataTypes.STRING
  }, {freezeTableName:true});
  keyword_id.associate = function(models) {
    // associations can be defined here
  };
  return keyword_id;
};