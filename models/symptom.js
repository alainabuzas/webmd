'use strict';
module.exports = function(sequelize, DataTypes) {
    var symptom = sequelize.define('symptom', {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        affectedSystems: DataTypes.STRING,
        severity: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function(models) {
                models.symptom.belongsToMany(models.disease, { through: models.diseaseSymptom })
            }
        }
    });
    return symptom;
};
