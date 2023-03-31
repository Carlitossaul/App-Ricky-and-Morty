const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Favorite",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false, // no permito que sea nulo
      },
      status: {
        type: DataTypes.ENUM("Alive", "Dead", "unknown"),
        allowNull: false, // no permito que sea nulo
      },
      species: {
        type: DataTypes.STRING,
        allowNull: false, // no permito que sea nulo
      },
      gender: {
        type: DataTypes.ENUM("Female", "Male", "Genderless", "unknown"),
        allowNull: false,
      },
      origin: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // date_added: {
      //   type: DataTypes.DATEONLY,
      //   defaultValue: DataTypes.NOW,
      // },
    },
    {
      timestamps: false,
    }
  );
};
