import React from 'react';
import './App.css'

const Person =({person, deletePerson})=>{
    return (
        <div className="center">
            <h3>{person.name}</h3>
            <h3>{person.job}</h3>
            <h3>{person.gender}</h3>
            <button className="delete-btn" onClick={()=>{deletePerson(person.id)}}>delete</button>
        </div>
    )

}
export default Person