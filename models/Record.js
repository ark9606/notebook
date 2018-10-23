module.exports = (sequelize, DataTypes) => {
  return sequelize.define('record', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.BIGINT(11)
    },
    name: DataTypes.STRING(100),
    phone: DataTypes.STRING(45),
    email: DataTypes.STRING(45),


    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  })
}