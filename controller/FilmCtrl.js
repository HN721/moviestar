const Film = require("../model/film");

const filmController = {
  create: async (req, res) => {
    try {
      const { judul, deskripsi, durasi, gambar } = req.body;

      // Input validation
      if (!judul || !deskripsi || !durasi || !gambar) {
        return res.status(400).json({ error: "All fields are required" });
      }

      const film = await Film.create({ judul, deskripsi, durasi, gambar });
      res.status(201).json(film);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const films = await Film.find();
      res.status(200).json(films);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { judul, deskripsi, durasi, gambar } = req.body;

      // Input validation
      if (!judul || !deskripsi || !durasi || !gambar) {
        return res.status(400).json({ error: "All fields are required" });
      }

      const updatedFilm = await Film.findByIdAndUpdate(
        id,
        { judul, deskripsi, durasi, gambar },
        { new: true } // Return the updated document
      );

      if (!updatedFilm) {
        return res.status(404).json({ error: "Film not found" });
      }

      res.status(200).json(updatedFilm);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;

      const deletedFilm = await Film.findByIdAndDelete(id);

      if (!deletedFilm) {
        return res.status(404).json({ error: "Film not found" });
      }

      res.status(200).json(deletedFilm);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = filmController;
