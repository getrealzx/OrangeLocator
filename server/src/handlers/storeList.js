const express = require('express');
const mongoose = require('mongoose');
const Store = mongoose.model('Store');
const router = express.Router();


router.get('/stores', async (req, res) => {
    const stores = await Store.find({ userId: req.user._id });

    res.send(stores);
});


// router.post('/stores', async (req, res) => {
//     const { name, locations } = req.body;

//   if (!name || !locations) {
//     return res
//       .status(422)
//       .send({ error: 'You must provide a name and locations' });
//   }

//   try {
//     const track = new Track({ name, locations, userId: req.user._id });
//     await track.save();
//     res.send(track);
//   } catch (err) {
//     res.status(422).send({ error: err.message });
//   }
// });

module.exports = router;
