'use strict';
module.exports = (sequelize, DataTypes) => {
  const on_site_location = sequelize.define('on_site_location', {
    site_name: DataTypes.STRING,
    coords: DataTypes.FLOAT
  }, {});
  on_site_location.associate = function(models) {
    // associations can be defined here
  };
  return on_site_location;
};