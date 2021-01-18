const Spot = require('../models/Spot');
module.exports = {
  async show(req, res) {
    const { user_id } = req.headers;
    const spot = await Spot.find({ user: user_id });
    return res.status(202).json(spot);
  },
};
