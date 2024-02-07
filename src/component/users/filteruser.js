import React, { useState, useEffect } from "react";
import useDataFilter from "../../lib/hooks/useDataFilter";

const FilterUser = () => {
    const {userID, filteredData, handleUserIDChange, handleDataFilter} = useDataFilter();
    

    return (
        <>
            <h2>Filter User</h2>
            <form>
                <input type="text" value={userID} onChange={(e)=> handleUserIDChange(e.target.value)} placeholder="Enter User ID" />
                <button type="button" onClick={() => handleDataFilter('todos')}>Filter todos</button>
            </form>
            <ul>
                {filteredData && filteredData.length> 0 && filteredData.map((todo, index) => (
                    <li key={todo.id}> 
                        <h3>{todo.title}</h3>
                        <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default FilterUser;
