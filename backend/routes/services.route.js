import express from "express";
import {
  createService,
  getAllServices,
} from "../controllers/service.controller.js";

// import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// Create Service (Admin)
router.post("/admin/add-new-service", createService);
router.get("/service-list", getAllServices);

// Get All Services
// router.get("/", protect, getAllServices);

// // Get Single Service
// router.get("/:id", protect, getServiceById);

// // Update Service (Admin)
// router.put("/:id", protect, adminOnly, updateService);

// // Delete Service (Admin)
// router.delete("/:id", protect, adminOnly, deleteService);

export default router;
