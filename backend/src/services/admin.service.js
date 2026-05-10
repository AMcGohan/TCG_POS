import * as adminModels from "../models/admin.models.js";

export async function createEmpService(data) {
    return await adminModels.createEmpService(data);
}

export async function viewEmpsService() {
    return await adminModels.viewEmpsService();
}

export async function viewCustomersService() {
    return await adminModels.viewCustomersService();
}

export async function createCustomerService(data) {
    return await adminModels.createCustomerService(data);
}