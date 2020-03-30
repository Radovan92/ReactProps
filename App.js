import React from 'react';
import PersonsList from './PersonList.js';

import NewPerson from './NewPerson'


class App extends React.Component {
    state = {
        name: "Sanja",
        data: [
            {name:"Radovan",  job:"Web-Developer", gender:"Musko", id:7},
            {name:"Aleksandar",  job:"Student", gender:"Musko",id:9},
            {name:"Zeljko",  job:"Advokat", gender:"Musko", id:6},
            
        ]


    }
    insertNewPerson = (person) =>{
       let dataCopy = [...this.state.data,person]
       this.setState({
           data : dataCopy
       })
    }
    deletePerson = (id) =>{
        let filterData = this.state.data.filter(el =>{
            return el.id !== id;
        })
        this.setState({
            data : filterData
        })
        
       
    }
    
    render() {
        return (
            <div>    
                <PersonsList deletePerson={this.deletePerson} data = {this.state.data}/>
                <NewPerson insertNewPerson={this.insertNewPerson} />
                <div>{this.state.name}</div>
            </div>
        )
    }
}
export default App