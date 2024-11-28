const Film = require("../model/film");
const cloudinary = require("../fileUploads");

const filmController = {
  create: async (req, res) => {
    try {
      const { judul, deskripsi, durasi } = req.body;

      let gambar;
      if (req.file) {
        const uploadResult = await cloudinary.uploader.upload(req.file.path, {
          folder: "films", // Folder di Cloudinary
        });
        gambar = uploadResult.secure_url;
      }

      // Validasi input
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
      const { judul, deskripsi, durasi } = req.body;

      let gambar;
      if (req.file) {
        const uploadResult = await cloudinary.uploader.upload(req.file.path, {
          folder: "films",
        });
        gambar = uploadResult.secure_url;
      }

      const updateData = { judul, deskripsi, durasi };
      if (gambar) updateData.gambar = gambar;

      const updatedFilm = await Film.findByIdAndUpdate(id, updateData, {
        new: true,
      });

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
