import React, { useState, useEffect } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import './Captcha.css';

function Captcha() {
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        loadCaptchaEnginge(7);
    });

    const captchaSubmit = () => {

        let user_captcha_value = document.getElementById('user_captcha_input').value;

        if (validateCaptcha(user_captcha_value) == true) {
            alert('Проверка пройдена, спасибо!');
            setDisabled(false)
        }

        else {
            alert('Введено неверное значение. Попробуйте еще раз!');
            setDisabled(true)
        }
    };

    return (
        <div>
            <div className="captcha">

                <div className="captcha_template">
                    <LoadCanvasTemplate />
                </div>

                <div className="captcha_input">
                    <div>
                        <input
                            placeholder="Enter Captcha Value"
                            id="user_captcha_input"
                            name="user_captcha_input"
                            type="text">
                        </input>
                    </div>
                    <button
                        class="form_button_type-captcha"
                        onClick={captchaSubmit}>Submit
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Captcha;