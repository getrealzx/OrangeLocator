# sequelize model:generate --name site_info --attributes site_name:string,center_coords:string,info_id:string

sequelize model:generate --name on_site_location --attributes site_name:string,coords:float

sequelize model:generate --name info --attributes location_name:string,keyword_id:integer

sequelize model:generate --name keyword_id --attributes keyword:string