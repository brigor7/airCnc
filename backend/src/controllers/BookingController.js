const Booking = require('../models/Booking');

module.exports = {
  async store(req, res) {
    const { user_id } = req.headers;
    const { spot_id } = req.params;
    const { date } = req.body;

    console.log('user_id' + user_id);
    console.log('spot_id' + spot_id);
    console.log('date' + date);

    const booking = await Booking.create({
      user: user_id,
      spot: spot_id,
      date,
    });
    await booking.populate('spot').populate('user').execPopulate();

    return res.json(booking);
  },
  async show(_, res) {
    const booking = await booking.find();
    return res.status(200).json({ message: booking });
  },
};
