import React, {Component} from 'react';
import {render} from 'react-dom';

export default class ListElement extends Component{
  constructor(props){
    super(props);
    this.state = {
      linkHover: false
    };
  }

  /**
  Function to toggle the state of the link 
  **/
  toggleHover(e){
    this.setState({linkHover: !this.state.linkHover})
  }  


  render(){
   // return (<li key={this.props.index}><a href="#">{this.props.itemName}</a></li>)

   /*style={{listStyleType: 'none', paddingTop: 5, paddingBottom: 5, margin: 0, borderWidth: 1, borderColor: 'red', borderStyle: 'solid',
    backgroundColor: this.state.linkHover ? 'blue' : 'red', cursor: 'pointer'}} */
    //RGB(232, 245, 253) !important
   return (<li 
    style={{backgroundColor: this.state.linkHover ? 'rgb(234, 245, 253)' : '#FFF', color: this.state.linkHover ? 'RGB(29, 161, 242)' : '#333'  }}
    onMouseLeave={this.toggleHover.bind(this)}
    onMouseEnter={this.toggleHover.bind(this)}
    ><a href="#">{this.props.value}</a></li>)
  }

}