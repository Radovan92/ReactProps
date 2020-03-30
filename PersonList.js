import React from 'react'
import Person from './Person'


const PersonsList = ({data, deletePerson}) =>{
    const listOfPersons = data.map(person=>{
        return(
            <Person deletePerson={deletePerson} person = {person} key = {person.id} />
        )
    })
    return(
        <div >
            {listOfPersons}
        </div>

    )
}

export default PersonsList