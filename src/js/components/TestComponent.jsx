import React, {Component} from 'react';
import {render} from 'react-dom';

export default class TestComponent extends Component{
    constructor(props){
    super(props);
  }

  render(){
    return(<div>
      <p className='style-greeting'>{this.props.greeting}</p>
      <input type="text" value={this.props.inputValue}/>
    </div>)

  }

}