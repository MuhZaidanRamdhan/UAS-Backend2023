// import database
const db = require("../config/database");

// membuat class Patient
class Patient {

  // menampilkan seluruh data pasien
  static all() {
    return new Promise((resolve, reject) => {
      // query menampilkan seluruh data pasien
      const sql = "SELECT * from patients";
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }

  // menambahkan data pasien
  static async create(data) {
    const id = await new Promise((resolve, reject) => {
      // query menambahkan data pasien
      const sql = "INSERT INTO patients SET ?";
      db.query(sql, data, (err, result) => {
        resolve(result.insertId);
      });
    });

    // memanggil function find
    const patients = this.find(id);
    return patients;
  }

  // mengubah atau mengedit data pasien
  static async update(id, data) {
    await new Promise((resolve, reject) => {
      // query mengupdate atau mengedit data pasien
      const sql = "UPDATE patients SET ? WHERE id = ?";
      db.query(sql, [data, id], (err, result) => {
        resolve(result);
      });
    });

    // memanggil function find
    const patient = await this.find(id);
    return patient;
  }

  // mencari data pasien berdasarkan id
  static find(id) {
    return new Promise((resolve, reject) => {
      // mencari data pasien berdasarkan id
      const sql = "SELECT * FROM patients WHERE id = ?";
      db.query(sql, id, (err, result) => {
        const [patient] = result;
        resolve(patient);
      });
    });
  }

  // menghapus data pasien
  static delete(id) {
    return new Promise((resolve, reject) => {
      // menghapus data pasien berdasarkan id
      const sql = "DELETE FROM patients WHERE id = ?";
      db.query(sql, id, (err, result) => {
        resolve(result);
      });
    });
  }

  // mencari pasien berdasarkan status tertentu
  static findByStatus(data) {
    return new Promise((resolve, reject) => {
      // mencari data pasien berdasarkan status
      const sql = "SELECT * FROM patients WHERE status = ?";
      db.query(sql, data, (err, result) => {
        resolve(result);
      });
    });
  }

  // mencari data pasien berdasarkan name
  static search(data) {
    return new Promise((resolve, reject) => {
      // mencari data pasien berdasarkan name 
      const sql = " SELECT * FROM patients WHERE name LIKE ?";
      db.query(sql, data, (err, result) => {
        resolve(result);
      });
    });

  }
}

// export class Patient
module.exports = Patient;
