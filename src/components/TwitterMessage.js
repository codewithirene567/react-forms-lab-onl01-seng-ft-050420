import React from "react";

class TwitterMessage extends React.Component {
  //chrome developer tools for react
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      maxChars: this.props.maxChars
    };
  }

  handleChange = event => {
    //debugger
     this.setState({
      message : event.target.value
     })
    
  }

  render() {
   //debugger
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" 
        onChange = {this.handleChange} value={this.state.message}
        />
        <div>
        <p>{this.props.maxChars - this.state.message.length}</p>
        </div>
        </div>
    );
  }
}

export default TwitterMessage;
