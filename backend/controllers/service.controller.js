import Service from "../models/service.model.js";

// Create Government Service
export const createService = async (req, res) => {
  try {
    const {
      name,
      department,
      category,
      description,
      eligibility,
      documents,
      // applicationProcess,
      // officialWebsite,
      // serviceCharge,
      status,
    } = req.body;
    console.log(documents);

    const service = await Service.create({
      name,
      department,
      category,
      description,
      eligibility,
      documents,
      // applicationProcess,
      // officialWebsite,
      // serviceCharge,
      status,
      //   createdBy: req.user?._id,
    });

    res.status(201).json({
      success: true,
      message: " service created successfully",
      service,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Government Services
export const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    // .populate("createdBy", "name email")
    // .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: services.length,
      services,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Service
export const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id).populate(
      "createdBy",
      "name email",
    );

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.status(200).json({
      success: true,
      service,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Government Service
export const updateService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Service updated successfully",
      service,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Government Service
export const deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Service deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
