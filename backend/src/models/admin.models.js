import sequelize from "../db/sequelize.js";
import employee from "./definitions/Employee.js";
import customer from "./definitions/Customer.js";

export async function createEmpService(data) {
    try {
        return await employee.create({
            emp_fname: data.emp_fname,
            emp_lname: data.emp_lname
        });
    } catch(error) {
        console.error(error.message);
        throw error;
    }
}

export async function viewEmpsService() {
    try {
        return await employee.findAll({
            attributes: ['emp_lname', 'emp_fname'],
            order: sequelize.col('emp_lname'),
        });
    } catch(error) {
        console.error(error.message);
        throw error;
    }
}

export async function viewCustomersService() {
    try {
        return await customer.findAll({
            attributes: ['lname', 'fname', `phone_no`, `email`],
            order: sequelize.col('lname'),
        });
    } catch(error) {
        console.error(error.message);
        throw error;
    }
}

export async function createCustomerService(data) {
    try {
        return await customer.create({
            fname: data.fname,
            lname: data.lname,
            phone_no: data.phone_no,
            email: data.email
        });
    } catch(error) {
        console.error(error.message);
        throw error;
    }
}