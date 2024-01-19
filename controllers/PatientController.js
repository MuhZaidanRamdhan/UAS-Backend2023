// import Model Patient
const Patient = require("../models/Patient");
// buat class PatientController
class PatientController {

  // membuat function index untuk memanggil seluruh data pasien
  async index(req, res) {

    // menampilkan data menggunakan function all 
    const patients = await Patient.all();

    // mengecek jika pasien ada akan menampilkan seluruh data pasien
    if (patients) {
      const data = {
        message: "Get All Resource",
        data: patients,
      };

      return res.status(200).json(data);
    }

    // jika tidak ada data maka akan menampilkan pesan data is empty
    const data = {
      message: "Data is empty",
    };

    return res.status(200).json(data);
  }

  // membuat function store untuk menambahkan data pasien baru
  async store(req, res) {

    // melakukan destructring pada structure tabel patients
    const { name, phone, address, status, in_date_at, out_date_at } = req.body;

    // mengecek jika salah satu data tidak terisi maka akan memberikan pesan untuk mengisi seluruh data 
    if (!name || !phone || !address || !status || !in_date_at || !out_date_at) {
      const data = {
        message: "All fields must be filled correctly",
      };

      return res.status(422).send(data);
    }

    // membuat data dari function create
    const patients = await Patient.create(req.body);

    const data = {
      message: "Resource is added successfully",
      data: patients,
    };

    return res.status(201).json(data);
  }

  // membuat function update untuk mengedit data pasien
  async update(req, res) {
    
    // menggunakan parameter id
    const { id } = req.params;

    // menampilkan data menggunakan method find dengan parameter berdasarkan id
    const patients = await Patient.find(id);

    // mengecek jika terdapat data pasien dengan id tertentu maka akan ditampilkan datanya
    if (patients) {
      const patients = await Patient.update(id, req.body);
      const data = {
        message: `Rosource is update successfully`,
        data: patients,
      };

      return res.status(200).json(data);
    }

    // jika tidak ada data maka akan mengembalikan pesan resource not found
    const data = {
      message: `Resource not found`,
    };

    return res.status(404).json(data);
  }

  // membuat function destroy untuk menghapus data pasien
  async destroy(req, res) {

    // menggunakan paramater id
    const { id } = req.params;

    // mencari data pasien dengan menggunakan function find dengan berdasarkan id
    const patients = await Patient.find(id);

    // jika data pasien ada
    if (patients) {
      // jika ada maka akan menghapus data pasien dengan function delete berdasarkan id
      const patients = await Patient.delete(id);
      const data = {
        message: `Resource is delete successfully`,
      };

      return res.status(200).json(data);
    }

    // jika tidak ada data pasien berdasarkan id maka akan menampilkan pesan resource not found
    const data = {
      message: `Resource not found`,
    };

    return res.status(404).json(data);
  }

  // membuat function show untuk menampilkan data dengan id tertentu
  async show(req, res) {

    // menggunakan paramater id
    const { id } = req.params;

    // menampilkan data pasien berdasarkan id
    const patients = await Patient.find(id);

    // jika pasien dengan id ada maka akan menampilkan data pasien tersebut
    if (patients) {
      const data = {
        message: `Get detail Resource with id ${id}`,
        data: patients,
      };

      return res.status(200).send(data);
    }

    // jika tidak ada maka mengembalikan pesan resource not found
    const data = {
      message: `Resource not found`,
    };

    return res.status(404).send(data);
  }

  // membuat function search untuk mencari data berdasarkan name
  async search(req, res) {

    // menggunakan parameter nama
    const { name } = req.params;

    // menampilkan data dengan search 
    const patients = await Patient.search(name);

    // jika data yang dicari ada maka akan menampilkan data tersebut
    if (patients) {
      const data = {
        message: "Get searched resource",
        data: patients,
      };

      return res.status(200).json(data);
    }

    // jika tidak ada data yang di search
    const data = {
      message: "Resource not found",
    };

    return res.status(404).json(data);
  }

  // membuat function positive untuk menampilkan data dengan status positive
  async positive(req, res) {

    // membuat variabel status dengan value positive
    const status = "positive";

    // mencari data berdasarkan status positive
    const patients = await Patient.findByStatus(status);

    // jika data pasien dengan status positive ada maka akan menampilkan data dengan status positive
    if (patients) {
      const data = {
        message: "Get positive resource",
        data: patients,
      };

      return res.status(200).json(data);
    }

    // jika tidak ada data pasien dengan status positive maka akan mengembalikan pesan data is empty
    const data = {
      message: "Data is empty",
    };

    return res.status(204).json(data);
  }

  // membuat function recovered untuk menampilkan data dengan status recovered
  async recovered(req, res) {

    // membuat variabel status dengan value recovered
    const status = "recovered";

    // mencari data berdasarkan status recovered
    const patients = await Patient.findByStatus(status);

    // jika data pasien dengan status recovered ada maka akan menampilkan data dengan status recovered
    if (patients) {
      const data = {
        message: "Get recovered resource",
        data: patients,
      };

      return res.status(200).json(data);
    }

    // jka tidak ada data pasien dengan status recovered maka akan mengembalikan pesan data is empty
    const data = {
      message: "Data is empty",
    };

    return res.status(204).json(data);
  }

  // membuat function dead untuk menampilkan data dengan status dead
  async dead(req, res) {

    // membuat variabel status dengan value dead
    const status = "dead";

    // mencari data berdasarkan status dead
    const patients = await Patient.findByStatus(status);

    // jika data pasien dengan status dead ada maka akan menampilkan data dengan status dead
    if (patients) {
      const data = {
        message: "Get dead resource",
        data: patients,
      };

      return res.status(204).json(data);
    }

    // jika tidak ada data pasien dengan status dead maka akan mengembalikan pesan data is empty  
    const data = {
      message: "Data is empty",
    };

    return res.status(204).json(data);
  }
}

// membuat object PatientController
const object = new PatientController();

// export object PatientController
module.exports = object;
