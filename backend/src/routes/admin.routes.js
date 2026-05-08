import { Router } from "express";
import { createEmp, viewEmps } from "../controllers/admin.controllers.js";

const router = Router();

// Create a new employee
router.post("/emp", createEmp);

// View all employees
router.get("/emp", viewEmps);

export default router;