import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
const bcryptSalt = process.env.BCRYPT_SALT;
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please enter an email."],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Please enter a valid email."],
    },
    password: {
      type: String,
      required: [true, "Please enter a password."],
      minlength: 8,
      select: false,
    },
    confirmPassword: {
      type: String,
      required: [true, "Please confirm your password."],
      validate: {
        validator: function (val) {
          return val === this.password;
        },
        message: "Password & Confirm Password does not match!",
      },
    },
    passwordChangedAt: Date,
    firstName: {
      type: String,
      required: [true, "Please enter a first name."],
    },
    lastName: {
      type: String,
      required: [true, "Please enter a last name."],
    },
    photo: String,
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, Number(bcryptSalt));
  this.confirmPassword = undefined;
  next();
});

userSchema.methods.comparePWD = async function (pswd, pswdDB) {
  return await bcrypt.compare(pswd, pswdDB);
};

userSchema.methods.isPasswordChanged = async function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const pswdChangedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    console.log(
      `pswdChangedTimestamp: ${pswdChangedTimestamp}, JWTTimestamp: ${JWTTimestamp}`
    );

    return JWTTimestamp < pswdChangedTimestamp;
  }
  return false;
};
const User = mongoose.model("User", userSchema);

export default User;
