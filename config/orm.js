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
    }
    db.query(
      `INSERT INTO burgers(burger_name)
			VALUES("${burger}")`,
      (err, res) => {
        callback(res);
      }
    );
  },

  updateOne: function(burger, callback) {
    const { id, burger_name, devoured } = burger;
    console.log(id, burger_name, devoured);
    if (!id) {
      this.insertOne(burger, callback);
    }
    db.query(
      `UPDATE burgers SET burger_name = ?, 
			devoured = ? WHERE id = ?`,
      [burger_name, devoured, id],
      function(res) {
        callback(res);
      }
    );
  }
};
