import Message from "../models/message";

export const createMessage = async (req, res) => {
  try {
    const { conversationId, senderId, recipientId, content } = req.body;
    const message = await Message.create({
      conversationId,
      senderId,
      recipientId,
      content,
    });
    res.status(201).json({
      success: true,
      message,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.json({
      success: true,
      messages,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const getMessagesByConversationId = async (req, res) => {
  try {
    const { conversationId } = req.params;
    const messages = await Message.find({ conversationId });
    res.json({
      success: true,
      messages,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
