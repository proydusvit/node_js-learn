const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const removeById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove({ _id: id });
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.json({
    message: "Delete success"
  });
};

module.exports = removeById;
