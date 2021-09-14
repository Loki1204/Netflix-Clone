import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// @desc Register authentication
// @route REGISTER /api/auth/register
//  @access Public
export const register = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    // If the user already exists in the database
    if (existingUser)
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });

    // If the user doesn't exists in the database, comparing the password
    if (password !== confirmPassword)
      return res
        .status(400)
        .json({ success: false, message: "Passwords don't match" });

    // If the passwords match, hashing the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Creating the user profile
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.SECRET_KEY,
      {
        expiresIn: "5d",
      }
    );

    // Sending the response
    res.status(201).json({ user, token });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

// @desc Login authentication
// @route LOGIN /api/auth/login
//  @access Public
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    // If the user is not in the database
    if (!existingUser)
      return res
        .status(404)
        .json({ success: false, message: "User doesn't exist" });

    // If the User exists in the database, comparing the password
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    // If the password is incorrect
    if (!isPasswordCorrect)
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });

    // If the password is correct, generating a jsonwebtoken
    const token = jwt.sign(
      { isAdmin: existingUser.isAdmin, id: existingUser._id },
      process.env.SECRET_KEY,
      { expiresIn: "5d" }
    );

    // Sending the response
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};
