import apiConfig from "./Utils";

class Api {
    constructor(apiConfig) {
        this._baseUrl = apiConfig.baseUrl;
    }

    _handleResponse = (res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    sendFile() {
        return fetch(`${this._baseUrl}/api/speech`, {
            method: 'POST',
            headers: this._headers
        })
            .then(this._handleResponse);
    }
}

const api = new Api(apiConfig);
export default api;