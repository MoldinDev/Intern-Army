import User from "../models/user.model.js"

export const getUsersForSidebar = async (req, res) => {
  try {

    const loggedInUserId = req.user._id 

    const filteredUsers = await User.find({ _id: {$ne: loggedInUserId} }).select("-password")

    res.status(200).send(filteredUsers)
  } catch (error) {
    console.log("error in user sidebar controller: ", error.message)
    res.status(500).json({error: "Internal server error"})
    
  }
}