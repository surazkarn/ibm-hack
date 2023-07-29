const Doctor = require('../models/Doctor');

const getDoctors = async (req, res) => {
  try {
    // Fetch all doctors from the database
    const doctors = await Doctor.find();

    // Return the list of doctors as JSON response
    res.json(doctors);
  } catch (err) {
    // Handle any errors that occur during database operations
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getDoctors,
};
