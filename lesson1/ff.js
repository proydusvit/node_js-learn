const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactPath = path.join(__dirname, "contacts.json");

const updateContacts = async (contacts) =>
  await fs.writeFile(contactPath, JSON.stringify(contacts, null, 2));

const getAll = async () => {
  const data = await fs.readFile(contactPath);
  return JSON.parse(data);
};

const getById = async (id) => {
  const contacts = await getAll();
  const resust = contacts.find((item) => item.id === id);
  return resust || null;
};

const add = async ({ name, phone, email }) => {
  const contacts = await getAll();
  const newContacts = {
    id: nanoid(),
    name,
    phone,
    email
  };
  contacts.push(newContacts);
  await updateContacts(contacts);
  return newContacts;
};

const updateById = async (id, data) => {
  const contacts = await getAll();
  const index = contacts.findIndex((item) => item.id === id);
  if (id === -1) {
    return null;
  }
  contacts[index] = { id, ...data };
  await updateContacts(contacts);

  return contacts[index];
};

const removeById = async (id) => {
  const contacts = await getAll();
  const index = contacts.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await updateContacts(contacts);
  return result;
};

module.exports = {
  getAll,
  getById,
  add,
  updateById,
  removeById
};
