import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import "../../../node_modules/codemirror/lib/codemirror.css";
import styled from 'styled-components'
import { connect } from 'react-redux';
import {getCode} from '../../actions'

require('codemirror/mode/javascript/javascript');

const Button = styled.button`
  background: black;
  border-radius: 2px;
  border: 2px solid white;
  color: white;
  margin: 10px;
  padding: 5px;
`




class CodeEditor extends Component{
  constructor() {
    super();
    this.state ={
      code:""
    }
  }
  updateCode = (newCode) => {

    this.setState({
      code: newCode,
    });
  }
  submit = () => {
    
    this.props.getCode(this.state.code);
  }
  render() {
    var options = {
      lineNumbers: true,
      mode:'javascript'
    };
    return (
        <div>
          <CodeMirror value={this.state.code} onChange={this.updateCode} options={options} />
          <Button onClick={this.submit}> Submit </Button>
        </div>

    )


  }
}
const mapStateToProps= (state) => {
  return {
    code: state.code
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCode :() => dispatch(getCode())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CodeEditor);
