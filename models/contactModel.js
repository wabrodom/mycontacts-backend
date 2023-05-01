const mongoose = require("mongoose");

// have all data in contacts, create mongoose object
const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the contact name"],
    },
    email: {
      type: String,
      required: [true, "Please add the email"],
    },
    phone: {
      type: String,
      required: [true, "Please add the phone number"],
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
// export mongoose model ("string" , schema)
// timestamps is not camel case
