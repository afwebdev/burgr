const db = require("./connection");

module.exports = {
  selectAll: function(callback) {
    db.query("SELECT * FROM burgers", (err, res) => {
      callback(res);
    });
  },
  insertOne: function(burger, callback) {
    if (!burger) {
      return;
    } else {
      db.query(
        `INSERT INTO burgers(burger_name)
			VALUES(?)`,
        [burger],
        (err, res) => {
          callback(res);
        }
      );
    }
  },

  updateOne: function(id, callback) {
    if (!id) {
      this.insertOne(burger, callback);
    } else {
      db.query(`UPDATE burgers SET devoured = 1 WHERE id = ?`, [id], function(res) {
        callback(res);
      });
    }
  }
};
