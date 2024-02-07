import React, { useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";

const DeleteItemAWS = () => {
    const { EMPNO } = useParams(); // Extract EMPNO from URL parameters
    const navigate = useNavigate(); // Hook to programmatically navigate
    const baseUrl = process.env.REACT_APP_API_BASE_URL; // Base URL for API

    useEffect(() => {
        // Define the deletion operation as an immediately invoked async function inside useEffect
        (async () => {
            const empnoInt = parseInt(EMPNO, 10); // Convert EMPNO to an integer

            if (!isNaN(empnoInt)) { // Proceed if empnoInt is a valid number
                try {
                    const response = await fetch(`${baseUrl}/destroy_emp/${empnoInt}`, {
                        method: 'DELETE', // Specify the method to delete
                    });

                    if (!response.ok) {
                        throw new Error('Failed to delete');
                    }

                    const json = await response.json(); // Optionally process the response
                    console.log('Success', json);
                    navigate("/aws"); // Redirect to the '/aws' route after successful deletion
                } catch (error) {
                    console.error('There has been a problem with your fetch operation:', error);
                }
            }
        })();
    }, [EMPNO, navigate, baseUrl]); // Depend on EMPNO, navigate, and baseUrl to re-run effect if they change

    return null; // Assuming this component doesn't render anything
};

export default DeleteItemAWS;
