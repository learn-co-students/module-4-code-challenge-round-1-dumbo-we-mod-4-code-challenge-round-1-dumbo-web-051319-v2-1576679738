import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div>

<select onChange = {(event) => this.props.setFilterTerm(event.target.value)}>
<option value="boring"> All </option>
  <option value="boring"> Boring </option>
  <option value="wonderful"> Wonderful </option>
</select>
                
            </div>
        )
    }
}

 
