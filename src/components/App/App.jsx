import React, { useState } from 'react';
import './App.css';
import api from '../../utils/Api';
import Captcha from '../Captcha/Captcha';
import FileInput from '../FileInput/FileInput'
import logo from '../../images/logo.png';

function App() {
    const [disabled, setDisabled] = useState(true);

    function handleUploadFile(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }


    function handleSendSumbit(file) {
        const formData = new FormData();
        formData.append('customFile', file);

        api.sendFile()
            .then(res => {
                console.log(`Success` + res.data);
            })
            .catch(err => {
                console.log(err);
            })
    };

    return (
        <div className='page'>
            <div className='header'>
                <img className='logo' src={logo} alt='лого' />
                <h1 className='logo_name'>WAV-to-DOC</h1>
            </div>
            <form className='form'>
                <div>
                    <FileInput />
                </div>
                <div>
                    <Captcha />
                </div>
                <button
                    className='form_button'
                    type='submit'
                    onSubmit={handleSendSumbit}
                    >Отправить
                </button>
            </form>
        </div>
    )
}

export default App;