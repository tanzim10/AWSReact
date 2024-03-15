import { EMPLOYEE } from "./actiontype";

const initialState = {
    employees: [],
};

const employee = (state = initialState, action) => { 
    switch (action.type) {
        case EMPLOYEE.GET_EMPLOYEE:
            return {
                ...state,
                employees: action.payload,
            };
        case EMPLOYEE.CREATE_EMPLOYEE:
            return {
                ...state,
                employees: [...state.employees, action.payload],
            };
        case EMPLOYEE.UPDATE_EMPLOYEE:
            return {
                ...state,
                employees: state.employees.map((employee) => {
                    if (employee.EMPNO === action.payload.EMPNO) {
                        return action.payload;
                    }
                    return employee;
                }),
            };
        case EMPLOYEE.DELETE_EMPLOYEE:
            return {
                ...state,
                employees: state.employees.filter(
                    (employee) => employee.EMPNO !== action.payload.EMPNO
                ),
            };
        default:
            return state;
    }
}

export default employee;