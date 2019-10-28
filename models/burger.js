const orm = require("../config/orm");

const burger = {
  all: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  add: function(burger, cb) {
    orm.insertOne(burger, function(res) {
      cb(res);
    });
  },
  update: function(id, cb) {
    orm.updateOne(id, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
