import { Router } from "express";
import { createEmp, viewEmps, createCustomer, viewCustomers } from "../controllers/admin.controllers.js";

const router = Router();

// Create a new employee
router.post("/emp", createEmp);

// Create a new customer
router.post("/customer", createCustomer);

// View all employees
router.get("/emp", viewEmps);

// view all customers
router.get("/customer", viewCustomers);

export default router;