import generateTokenAndSetCookie from "../utils/generateToken.js"
import User from "../models/user.model.js"
import bcrypt from "bcryptjs"

export const signup = async (req, res) => {
  try {
   const {fullname, username, password, confirmPassword, gender} = req.body

    if(password !== confirmPassword){
      return res.status(400).json({error: "Password doesn't match"})
    }

    const user = await User.findOne({username})

    if(user) {
      return res.status(400).json({error: "username already exist"})
    }

    // Hash Pasword here
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const profilePic = `https://robohash.org/${username}.png`

    const newUser = new User({
      fullname,
      username,
      password: hashedPassword,
      gender,
      profilePic
    })

    if(newUser) {
      // Generate JWT Token Here
      generateTokenAndSetCookie(newUser._id, res)
      await newUser.save()

      res.status(201).json({
      _id: newUser._id,
      fullname,
      username,
      password: hashedPassword,
      gender,
      profilePic
      })
    } else {
        res.status(400).json({error: "invalid user data"})
      }

  } catch (error) {
    res.status(500).json("Internal server error")
    console.log("Error in Sign-up controller", error.message)
  }
}

export const login = async (req, res) => {
  try {
    const {username, password} = req.body

    const user = await User.findOne({username})
    const isPasswordCorrect = await bcrypt.compare(password, user?.password || "")

    if(!user) {
      return res.status(400).json({error: "invalid username"})
    }

    if(!isPasswordCorrect ) {
      return res.status(400).json({error: "invalid password"})
    }

    generateTokenAndSetCookie(user._id, res)

    res.status(200).json({
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      profilePic: user.profilePic
    })

  } catch (error) {
    console.log("error in login controller: ", error.message)
    res.status(400).json({error: "internal server error"})
  }
}

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", {maxAge: 0})
    res.status(200).send("Logout Succesfully!")
    
  } catch (error) {
    console.log("error in logout controller: ", error.message)
    res.status(400).json({error: "internal server error"})
  }
}