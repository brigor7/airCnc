const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const { tech } = req.query;
    const spot = await Spot.find({ techs: tech });
    if (!spot || spot.length === 0) {
      res.status(400).json({ error: 'Tecnologia não encontrada' });
    }
    res.status(202).json(spot);
  },
  async store(req, res) {
    const { filename } = req.file;
    const { company, price, techs } = req.body;
    const { user_id } = req.headers;
    const user = await User.findById(user_id);
    if (!user) {
      return res.status(400).json({ error: 'Usuário não cadastrado!' });
    }

    try {
      const spot = await Spot.create({
        user: user_id,
        thumbnail: filename,
        company,
        price,
        techs: techs.split(',').map((tech) => tech.trim()),
      });
      return res.status(201).json({ spot });
    } catch (error) {
      throw new Error('Ocorreu um erro: ' + error);
    }
  },
};
