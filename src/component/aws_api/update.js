import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const UpdateAWS = () => {
    
    const { employees } = useSelector((state) => state.employee);
    console.log(employees);


    const baseUrl = process.env.REACT_APP_API_BASE_URL;
    const { EMPNO } = useParams(); // Assuming EMPNO is a string
    const employeeData =employees && employees.find((item) => item.EMPNO === EMPNO);
    console.log(employeeData);
    const [data, setData] = useState({
        LastName: employeeData.LastName,
        DOB: employeeData.DOB,
        HiredDate: employeeData.HiredDate,
        Salary: employeeData.Salary,
        Bonus: employeeData.Bonus,
        WorkDept: employeeData.WorkDept,
        PhoneNo: employeeData.PhoneNo, 
        Job: employeeData.Job, 
        EDLevel: employeeData.EDLevel, 
        Sex: employeeData, 
        Email: employeeData.Email
    });
    const empnoInt = parseInt(EMPNO, 10); // Convert to integer with base 10

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const filteredData = Object.entries(data).reduce((acc, [key, value]) => {
            if (value !== "") acc[key] = value; 
            return acc;
        }, {});
        submitData(filteredData);
    };
    useEffect(() => {
        // Convert EMPNO to an integer if necessary
        const empnoInt = parseInt(EMPNO, 10);

        // Check if EMPNO is a valid number before making the fetch call
        if (!isNaN(empnoInt)) {
            fetch(`${baseUrl}/emp/${empnoInt}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch');
                    }
                    return response.json();
                })
                .then(responseData => {

                    if (responseData.status === "SUCCESS" && responseData.data.length > 0) {
                        const employeeData = responseData.data[0]; 
                        
                        setData({
                            LastName: employeeData.LastName || "",
                            DOB: employeeData.DOB || "",
                            HiredDate: employeeData.HiredDate || "",
                            Salary: employeeData.Salary || "",
                            Bonus: employeeData.Bonus || "",
                            WorkDept: employeeData.WorkDept || "",
                            PhoneNo: employeeData.PhoneNo || "",
                            Job: employeeData.Job || "",
                            EDLevel: employeeData.EDLevel || "",
                            Sex: employeeData.Sex || "",
                            Email: employeeData.Email || ""
                        });
                    } else {
                        
                        console.log('No data found or fetch was not successful');
                    }
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    
                });
        }
    }, [EMPNO, baseUrl]); 

    const submitData = (filteredData) => {
        fetch(`${baseUrl}/update_emp/${empnoInt}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({employee: filteredData}),
        })
        .then((response) => response.json())
        .then((json) => {
            console.log('Success', json);
        })
        .catch((error) => {
            console.error('Error', error);
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit} method = "PATCH">
            <div> 
                <h1>Update AWS Data</h1>
            </div>
            <br></br>
            <div>
                <label>Last Name</label>
                <input type="text" name="LastName" value={data.LastName} onChange={handleChange}/>
            </div>
            <div>
                <label>Date of Birth</label>
                <input type="text" name="DOB" value={data.DOB} onChange={handleChange}/>
            </div>
            <div>
                <label>Hired Date</label>
                <input type="text" name="HiredDate" value={data.HiredDate} onChange={handleChange}/>
            </div>
            <div>
                <label>Salary</label>
                <input type="text" name="Salary" value={data.Salary} onChange={handleChange}/>
            </div>
            <div>
                <label>Bonus</label>
                <input type="text" name="Bonus" value={data.Bonus} onChange={handleChange}/>
            </div>
            <div>
                <label>Work Department</label>
                <input type="text" name="WorkDept" value={data.WorkDept} onChange={handleChange}/>
            </div>
            <div>
                <label>Phone Number</label>
                <input type="text" name="PhoneNo" value={data.PhoneNo} onChange={handleChange}/>
            </div>
            <div>
                <label>Job</label>
                <input type="text" name="Job" value={data.Job} onChange={handleChange}/>
            </div>
            <div>
                <label>Education Level</label>
                <input type="text" name="EDLevel" value={data.EDLevel} onChange={handleChange}/>
            </div>
            <div>
                <label>Sex</label>
                <input type="text" name="Sex" value={data.Sex} onChange={handleChange}/>
            </div>
            <div>
                <label>Email</label>
                <input type="text" name="Email" value={data.Email} onChange={handleChange}/>
            </div>
            <button type="button" onClick ={handleSubmit}>Update Item</button>
        </form>
    );

};

export default UpdateAWS;




