import React, { useState } from 'react';

function FileInput() {

  const fileInput = React.createRef();

  function handleChange(e){    
    e.preventDefault();

    if(e.target.files.length == 0){
      alert('низя так мало')
      return;
    }

    if(e.target.files.length > 1){
      alert('низя так много')
      return;
    }

    const file = e.target.files[0];
    const fileName = file["name"].split('.').reverse()[0]
    if(file && fileName !== "wav"){  
      alert('низяяяя!');
      return;
    }
  }

  return (
    <input
      type="file"
      onChange={handleChange}
      ref={fileInput} />);

}

export default FileInput;