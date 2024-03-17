import User from "../models/user.model.js";
import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("error in user sidebar controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getUsersLastest = async (req, res) => {
  try {
    const userId = req.user._id;

    const conversation = await Message.find({
      $or: [{ senderId: userId }, { receiverId: userId }],
    })
      .populate("receiverId")
      .populate("senderId");

    console.log(conversation);

    if (!conversation) return res.status(200).json([]);

    res.status(200).json(conversation);
  } catch (error) {
    console.log("error on get message controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
