import React, { Component } from 'react';
import './NewPerson.css'

class NewPerson extends Component {
    state = {
        name: '',
        job: '',
        gender: ''
    }

    setValue = (e) =>{
        let id = e.target.id;
        this.setState({
            [id] : e.target.value

        })
    }
    
 
    save = (e)=>{
        e.preventDefault();
      this.props.insertNewPerson(this.state)
    }




    render() {
        return (
            <div className="center" >

                <form action="" onSubmit={this.save}>
                    <input className="field" id="name" onChange={this.setValue} type="text" placeholder="name" /><br/>
                    <input className="field" id="job" onChange={this.setValue} type="text" placeholder="job" />
                    <input className="field" id ="gender" onChange={this.setValue} type="text" placeholder="gender" />
                    <button className="btn" type="submit">Save</button>
                </form>
            </div>

        )
    }
}
export default NewPerson