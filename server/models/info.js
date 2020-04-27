'use strict';
module.exports = (sequelize, DataTypes) => {
  const info = sequelize.define('info', {
    location_name: DataTypes.STRING,
    keyword_id: DataTypes.INTEGER
  }, {});
  info.associate = function(models) {
    // associations can be defined here
  };
  return info;
};