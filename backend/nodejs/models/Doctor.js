const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
  },
  qualifications: [
    {
      qualification: {
        type: String,
      },
    },
  ],
  specializations: [
    {
      subspecialization: {
        speciality: {
          speciality: String,
        },
        subspecialization: String,
      },
    },
  ],
  photos: [
    {
      photo_url: String,
      photo_default: Boolean,
    },
  ],
  relations: [
    {
      practice: {
        id: Number,
        name: String,
        new_slug: String,
        practice_type: String,
        street_address: String,
        locality: {
          name: String,
          city: {
            name: String,
            state: {
              name: String,
              country: {
                name: String,
                currency: String,
                helpline_number: String,
                tzdata_identifier: String,
                tz_offset: Number,
                country_code: String,
              },
            },
          },
        },
        latitude: String,
        longitude: String,
        photos: [
          {
            url: String,
            logo: Boolean,
          },
        ],
      },
    },
  ],
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
