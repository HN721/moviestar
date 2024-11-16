const Film = require("../model/film");

const filmController = {
  create: async (req, res) => {
    try {
      const { judul, deskripsi, durasi, gambar } = req.body;
      if (!judul || !deskripsi || !durasi || !gambar)
        throw new Error("All fields are required");

      const film = await Film.create({ judul, deskripsi, durasi, gambar });
      res.status(201).json(film);
    } catch (error) {}
  },
  getAll: async (req, res) => {
    try {
      const films = await Film.find();
      res.status(200).json(films);
    } catch (error) {}
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const film = await Film.findByIdAndDelete(id);
      res.status(200).json(film);
    } catch (error) {}
  },
};
