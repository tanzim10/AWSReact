import React,{ useState, useEffect } from "react";


const CreateAWS = () => {
    const[data, setData] = useState({
        FirstName: "",
        LastName: "",
        EMPNO: "",
        DOB: "",
        HiredDate: "",
        Salary: "",
        Bonus: "",
        WorkDept: "",
        PhoneNo: "", 
        Job: "", 
        EDLevel: "", 
        Sex: "", 
        Email: ""
    });

    const baseUrl = process.env.REACT_APP_API_BASE_URL;

    const handleSubmit = (e) => {
        e.preventDefault(); 
        submitData(data);
    };
    
    // useEffect(() => {
    //     submitData();
    // }, []);

    const submitData = (data) => {
        fetch(`${baseUrl}/create_emp`, {
            method: "POST",
            body: JSON.stringify({employee: data}),
            // body: JSON.stringify({FirstName: data.FirstName})
            headers: {
                'Content-Type': 'application/json'
              },
        })
        .then((response) => response.json())
        .then((json) => {
            console.log('Success', data);
        })
        .catch((error) => {
            console.error('Error', error);
        });
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit} method = "POST">
            <div>
                <h1> Create AWS Data</h1>
            </div>
            <br></br>
            <div>
                <label>First Name</label>
                <input type="text" name="FirstName" value={data.FirstName} onChange={handleChange}/>
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" name="LastName" value={data.LastName} onChange={handleChange}/>
            </div>
            <div>
                <label>Employee Number</label>
                <input type="text" name="EMPNO" value={data.EMPNO} onChange={handleChange}/>
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
            <button type="button" onClick ={handleSubmit}>Create Item</button>
        </form>
    );

};

export default CreateAWS;







