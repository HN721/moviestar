const Bioskop = require("../model/bioskop");
const { getAll } = require("./FilmCtrl");

const BioskopCtrl = {
  create: async (req, res) => {
    const { nama, lokasi } = req.body;

    if (!nama || !lokasi) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const bioskop = await Bioskop.create({ nama, lokasi });
    res.status(201).json(bioskop);
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { nama, lokasi } = req.body;
    if (!nama || !lokasi) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const bioskop = await Bioskop.findByIdAndUpdate(
      id,
      { nama, lokasi },
      { new: true }
    );
    res.status(200).json(bioskop);
  },
  getAll: async (req, res) => {
    try {
      const bioskops = await Bioskop.find();
      res.status(200).json(bioskops);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  findOne: async (req, res) => {
    try {
      const { id } = req.params;

      const bioskop = await Bioskop.findById(id);
      res.status(200).json(bioskop);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = BioskopCtrl;
