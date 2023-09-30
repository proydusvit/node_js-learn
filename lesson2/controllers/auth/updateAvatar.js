const { User } = require("../../models");
const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");

const avatarDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  const { _id } = req.user;
  console.log(req.file);

  await Jimp.read(`${avatarDir}/${originalname}`)
    .then((avatar) => {
      return avatar
        .resize(256, 256, Jimp.RESIZE_BEZIER)
        .quality(60)
        .invert()
        .write(`${avatarDir}/${originalname}`);
    })
    .catch((err) => {
      console.error(err);
    });

  const fileName = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarDir, originalname);
  await fs.rename(tempUpload, resultUpload);
  const avatarUrl = path.join("avatars", fileName);
  await User.findByIdAndUpdate(_id, { avatarUrl });

  res.json({
    avatarUrl
  });
};
module.exports = updateAvatar;
