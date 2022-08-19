import React, { Component } from 'react'
import './todoAdd.css'


export default class TodoAdd extends Component {

  state = {
    nickname : '',
    age : ''
  }

  handleChange = (e) =>{
      this.setState({
        [e.target.id] : e.target.value,
        
      })
    
       
    }
  handleSubmit = (e) => {
      e.preventDefault();
      this.props.addItem(this.state)
      if (e.target.nickname.value == '' ) {


        return (false)

      } else {
        this.setState({

          nickname: '',
          age : ''
        })
      }
     }

    
      
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type= 'text' placeholder='Enter Name ...' id='nickname' onChange={this.handleChange}  value = {this.state.nickname}/>
          <input type= 'number' placeholder='Enter Age ...' id='age' onChange={this.handleChange}  value = {this.state.age}/>
          <input type= 'submit' value='add'  />

        </form>
      </div>
    )
  }
}
