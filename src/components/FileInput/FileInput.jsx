import React, { Component } from 'react';

class FileInput extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
  }
  handleSubmit(e) {

    e.preventDefault();
    alert(
      `Selected file - ${this.fileInput.current.files[0].name}`
    );
  }

  render() {

    return (
      <form className='file_input'>
        <input
          type="file"
          ref={this.fileInput} />
      </form>
    );
  }
}

export default FileInput;