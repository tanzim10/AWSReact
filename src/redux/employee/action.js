import { EMPLOYEE } from "./actiontype";

const createEmployee = (employee) => ({
    type: EMPLOYEE.CREATE_EMPLOYEE,
    payload: employee
});

const getEmployee = (employee) => ({
    type: EMPLOYEE.GET_EMPLOYEE,
    payload: employee
});

const updateEmployee = (employee) => ({
    type: EMPLOYEE.UPDATE_EMPLOYEE,
    payload: employee
});

const deleteEmployee = (employee) => ({
    type: EMPLOYEE.DELETE_EMPLOYEE,
    payload: employee
});

const employee = { createEmployee, getEmployee, updateEmployee, deleteEmployee };
export default employee;




