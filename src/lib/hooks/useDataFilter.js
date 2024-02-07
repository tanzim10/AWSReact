import React, {useState} from 'react'

const useDataFilter = () => {
    const [userID, setUserID] = useState(''); // For storing the user input
    const [filteredData, setFilteredData] = useState([]); // For storing the fetched todos

    const handleUserIDChange = (userId) => {
        setUserID(userId);
    };

    const handleDataFilter = (api) => {
        setFilteredData([]);
        if (userID) {
            fetch(`${process.env.REACT_APP_API_FAKE_URL}/${api}?userId=${userID}`)
                .then(response => response.json())
                .then(json => setFilteredData(json))
                .catch(error => console.error('Error fetching data:', error));
        }
    }; 
    const handleUserFilterById = (api) => {
        setFilteredData([]);
        if (userID) {
            fetch(`${process.env.REACT_APP_API_FAKE_URL}/${api}/${userID}`)
                .then(response => response.json())
                .then(json => setFilteredData(json))
                .catch(error => console.error('Error fetching data:', error));
        }
    }; 
    return{
        userID,
        filteredData,
        handleUserIDChange,
        handleDataFilter
    }
}

export default useDataFilter
