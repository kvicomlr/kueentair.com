import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Token from "../models/token.model.js";
import sendEmail from "../utils/Emails/sendEmail.js";
import crypto from "crypto";
const bcryptSalt = process.env.BCRYPT_SALT;
const clientURL = process.env.FRONTEND_URL;
import { createError } from "../utils/error.js";
//@desc   Register a new user
//route   POST /api/auth/register
//@access Public

export const register = async (req, res, next) => {
  const { email } = req.body;

  try {
    //Check if user exist
    let user = await User.findOne({ email });
    if (user) {
      return next(createError(400, "User already exists!"));
    }

    //Create User
    user = new User({
      ...req.body,
    });
    await user.save();
    res.status(200).json({ success: true, message: "User has been created." });
  } catch (err) {
    next(err);
  }
};

//@desc  Password reset request
//route   POST /api/auth/reqpwdreset
//@access Public
export const reqPwdReset = async (req, res, next) => {
  const { email } = req.body;

  try {
    //Check if user exist
    let user = await User.findOne({ email });
    if (user) {
      return next(createError(400, "User already exists!"));
    }

    let token = await Token.findOne({ userId: user._id });
    if (token) await token.deleteOne();

    let resetToken = crypto.randomBytes(32).toString("hex");
    const hash = await bcrypt.hash(resetToken, Number(bcryptSalt));

    await new Token({
      userId: user._id,
      token: hash,
      createdAt: Date.now(),
    }).save();

    const link = `${clientURL}/passwordReset?token=${resetToken}&id=${user._id}`;

    sendEmail(
      user.email,
      "Password Reset Request",
      {
        name: user.name,
        link: link,
      },
      "./template/requestResetPassword.handlebars"
    );
    return { link };
  } catch (err) {
    next(err);
  }
};

//@desc  Password reset
//route   POST /api/auth/pwdreset
//@access Public

export const resetPassword = async (userId, token, password) => {
  let passwordResetToken = await Token.findOne({ userId });

  if (!passwordResetToken) {
    throw new Error("Invalid or expired password reset token");
  }

  console.log(passwordResetToken.token, token);

  const isValid = await bcrypt.compare(token, passwordResetToken.token);

  if (!isValid) {
    throw new Error("Invalid or expired password reset token");
  }

  const hash = await bcrypt.hash(password, Number(bcryptSalt));

  await User.updateOne(
    { _id: userId },
    { $set: { password: hash } },
    { new: true }
  );

  const user = await User.findById({ _id: userId });

  sendEmail(
    user.email,
    "Password Reset Successfully",
    {
      name: user.name,
    },
    "./template/resetPassword.handlebars"
  );

  await passwordResetToken.deleteOne();

  return { message: "Password reset was successful" };
};
/* export const resetPassword = async (userId, token, password) => {
  let passwordResetToken = await Token.findOne({ userId });

  if (!passwordResetToken) {
    throw new Error("Invalid or expired password reset token");
  }

  console.log(passwordResetToken.token, token);

  const isValid = await bcrypt.compare(token, passwordResetToken.token);

  if (!isValid) {
    throw new Error("Invalid or expired password reset token");
  }

  const hash = await bcrypt.hash(password, Number(bcryptSalt));

  await User.updateOne(
    { _id: userId },
    { $set: { password: hash } },
    { new: true }
  );

  const user = await User.findById({ _id: userId });

  sendEmail(
    user.email,
    "Password Reset Successfully",
    {
      name: user.name,
    },
    "./template/resetPassword.handlebars"
  );

  await passwordResetToken.deleteOne();

  return { message: "Password reset was successful" };
};
 */
