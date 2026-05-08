import * as adminModels from "../models/admin.models.js";

export async function createEmpService(data) {
    return await adminModels.createEmpService(data);
}

export async function viewEmpsService() {
    return await adminModels.viewEmpsService();
}