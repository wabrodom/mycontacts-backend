const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc get all contacts
//@route get api/contacts
//@access  public
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

//@desc Create new contact
//@route post api/contact
//@access  public
const createContact = asyncHandler(async (req, res) => {
  console.log(`req.body is :`, req.body);
  const { name, phone, email } = req.body;
  if (!name || !phone || !email) {
    res.status(400);
    throw new Error("All field are mandatory");
  }
  const contact = await Contact.create({
    name,
    phone,
    email,
  });
  res.status(201).json(contact);
});

//@desc Get contact
//@route get api/contact/:id
//@access  public
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    // dont find the contact what is the contact now
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

//@desc Update contact
//@route PUT api/contact/:id
//@access  public
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true } // query option
  );
  res.status(200).json(updatedContact);
});

//@desc Delete contact
//@route Delete api/contact/:id
//@access  public
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  await Contact.findByIdAndDelete(req.params.id);
  res.status(200).json(contact);
});

module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };

// whenever we interact with mongodb we get promise object
// in order to resolve a promise we make use of async await
// use express-async-handle
