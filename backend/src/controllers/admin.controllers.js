import { createEmpService, viewEmpsService } from "../services/admin.service.js";

export async function createEmp(req, res) {
    try {
        const employee = await createEmpService(req.body);
        res.json({employee});
    } catch(error) {
        console.error("Failure to create emp: ", error.message)
        res.status(500).json({error: "Failure to create employee user"});
    }
}

export async function viewEmps(req, res) {
    try {
        const employees = await viewEmpsService();
        res.json({employees});
    } catch(error) {
        console.error("Failure to retrieve employees: ", error.message);
        res.status(500).json({error: "Failure to view employees"});
    }
}