'use strict';
module.exports = (sequelize, DataTypes) => {
  const site_info = sequelize.define('site_info', {
    site_name: DataTypes.STRING,
    center_coords: DataTypes.STRING,
    info_id: DataTypes.STRING
  }, {});
  site_info.associate = function(models) {
    // associations can be defined here
  };
  return site_info;
};