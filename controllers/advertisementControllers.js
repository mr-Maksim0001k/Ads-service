import { Advertisement } from "../models/advertisement";

export const createAdvertisement = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      price,
      images,
      location,
      contactInfo,
      userId,
    } = req.body;

    const advertisement = await Advertisement.create({
      title,
      description,
      category,
      price,
      images,
      location,
      contactInfo,
      userId,
    });

    res.status(201).json({
      success: true,
      advertisement,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getAllAdvertisement = async (req, res) => {
  try {
    const advertisements = await Advertisement.find();
    res.json({
      success: true,
      advertisements,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const getOneAdvertisement = async (req, res) => {
  try {
    const postId = req.params.id;

    console.log("postId", postId);

    const advertisement = await Advertisement.findById(postId);
    if (!advertisement) {
      return res.status(404).json({ message: "Advertisement not found" });
    }
    res.json({
      success: true,
      advertisement,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const updateAdvertisement = async (req, res) => {
  try {
    const postId = req.params.id;

    const {
      title,
      description,
      category,
      price,
      images,
      location,
      contactInfo,
    } = req.body;
    const advertisement = await Advertisement.findByIdAndUpdate(
      postId,
      { title, description, category, price, images, location, contactInfo },
      { new: true }
    );
    if (!advertisement) {
      return res.status(404).json({ message: "Advertisement not found" });
    }
    res.json({
      success: true,
      advertisement,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const removeAdvertisement = async (req, res) => {
  try {
    const postId = req.params.id;

    const advertisement = await Advertisement.findByIdAndDelete(postId);
    if (!advertisement) {
      return res.status(404).json({ message: "Advertisement not found" });
    }
    res.json({
      success: true,
      message: "Advertisement deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
