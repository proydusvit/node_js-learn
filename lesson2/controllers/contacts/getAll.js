const { Contact } = require("../../models");

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  console.log(req.query);
  const result = await Contact.find({ owner }, "-createdAt -updateAt", {
    skip,
    limit
  }).populate("owner", "name email");

  res.json(result);
};
module.exports = getAll;
