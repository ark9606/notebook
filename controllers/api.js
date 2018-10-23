const obj = {};

const Sequelize = require('sequelize');
const db = require('../config/db');

const sequelize = new Sequelize(db.name, db.user, db.password, db.config);
const Record = sequelize.import('../models/Record');

obj.getRecords = (req, res) => {
  const response = {
    data: [],
    status: true,
  };

  Record.findAll()
  .then(records => {
    response.data = records;
    res.send(response);
  })
  .catch(err => {
    console.log(err);
    response.status = false;
    response.error = 'Failed to select records from DB';
    res.send(response);
  });
};

obj.putRecord = (req, res) => {
  const response = {
    data: [],
    status: true,
  };

  const {name, phone, email} = req.body;

  Record.findOrCreate({ where:{
    phone,
  }, defaults:{ ...req.body}})
  .spread((rec, created)=> {
    if(created){
      return Record.findAll()
    }
    response.status = false;
    response.error = 'Запись с таким номером уже существует';
    res.send(response);
  })
  .then(records => {
    response.data = records;
    res.send(response);
  })
  .catch(err => {
    console.log(err);
    response.status = false;
    response.error = 'Failed to insert record to DB';
    res.send(response);
  });

};

obj.editRecord = (req, res) => {
  const response = {
    data: [],
    status: true,
  };

  const {id, name, phone, email} = req.body;

  Record.update({name, phone, email},{ where:{ id }})
  .then(rec => {
    if(rec){
      return Record.findAll()
    }
    response.status = false;
    response.error = 'Ошибка при изменении данных';
    res.send(response);
  })
  .then(records => {
    response.data = records;
    res.send(response);
  })
  .catch(err => {
    console.log(err);
    response.status = false;
    response.error = 'Failed to update record in DB';
    res.send(response);
  });

};

obj.deleteRecord = (req, res) => {
  const response = {
    data: [],
    status: true,
  };

  const {id } = req.body;

  Record.findById(id)
  .then(rec => {
    if(rec){
      return rec.destroy();
    }
    response.status = false;
    response.error = 'Запись не найдена';
    res.send(response);
  })
  .then(() => {
    return Record.findAll()
  })
  .then(records => {
    response.data = records;
    res.send(response);
  })
  .catch(err => {
    console.log(err);
    response.status = false;
    response.error = 'Failed to delete record from DB';
    res.send(response);
  });

};

module.exports = obj;