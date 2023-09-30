const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const updateFavorite = async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  // { new: true }  - показує оновлену версію зразу

  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.json(result);
};

module.exports = updateFavorite;
