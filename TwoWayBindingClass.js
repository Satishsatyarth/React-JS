import React from "react";


export default class TwoWayBindingClass extends React.Component
{
    constructor(props){
        super(props)
        this.state = {
            username : "Satish"
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
    }

    handleUsernameChange(e){
        this.setState({
            username : e.target.value
        })
    }

    render(){
        return(
            <div className="container-fluid">
            <h2>User Details</h2>
            <input type="text" onChange={this.handleUsernameChange}/>
            <br/>
            <p>Hello! {this.state.username}</p>
        </div>
        )
    }
}
