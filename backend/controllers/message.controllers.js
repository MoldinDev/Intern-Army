import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"

export const sendMessages = async(req, res) => {
  try {
    const {message} = req.body
    const {id: receiverId} = req.params
    const senderId = req.user._id

    let conversation = await Conversation.findOne({
      participants: {$all: [receiverId, senderId]}
    })

    if(!conversation){
      conversation = await Conversation.create({
        participants: [receiverId, senderId]
      })
    }

    const newMessage = new Message({
      receiverId,
      senderId,
      message
    })
    
    if(newMessage){
      conversation.messages.push(newMessage._id)
    }

    // SOCKET.IO will go here

    await Promise.all([
      conversation.save(),
      newMessage.save()
    ])

    
    res.status(201).json(newMessage)

  } catch (error) {
    console.log("Error in message controller: ", error.message)
    res.status(400).json({error: "Internal server error"})
  }
}

export const getMessages = async(req, res) => {
  try {
    const {id: userToChatId} = req.params
    const userId = req.user._id

    const conversation = await Conversation.findOne({participants: {$all: [userToChatId, userId]} })
    .populate("messages") // No Reference but actual messages

    if(!conversation) return res.status(200).json([])

    const messages = conversation.messages

    res.status(200).send(messages)

  } catch (error) {
    console.log("error on get message controller: ", error.message)
    res.status(500).json({error: "Internal server error"})
  }
}