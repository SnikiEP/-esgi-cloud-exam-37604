const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'postgres://postgres://esgi_cloud_exam_postgree_37604_user:alEslNW4f44kteJjdJPWZ8eMN7nBs599@dpg-co5taa6v3ddc7396cle0-a/esgi_cloud_exam_postgree_37604', // TODO
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;
