import { BASE_URL } from "./utils";

class Api {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json()
        } else {
            return Promise.reject(`Ошибка: ${res.status}`)
        }
    }
    
    // загрузка информации о пользователе с сервера
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
        })
        .then(this._checkResponse)
        .then((data) => {
            localStorage.setItem('userId', data._id);
            return data;
        });
    }

    //загрузка информации о пользователе по userId
    getUserById(userId) {
        console.log (userId);
        return fetch(`${this._baseUrl}/users/portfolio/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'            
            }
        })
        .then(this._checkResponse)
    }

        //загрузка информации о пользователе по userId
    getUserByIdInNews(userId) {
        return fetch(`${this._baseUrl}/users/news/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'            
            }
        })
        .then(this._checkResponse)
    }

    //редактирование профиля
    editProfileData(data) {
        console.log(data);
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            credentials: 'include',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: data.firstName,
                familyName: data.familyName,
                dateOfBirth: data.dateOfBirth,
                country: data.country,
                occupation: data.occupation,
                phoneNumber: data.phoneNumber,
                socialMediaInst: data.socialMediaInst,
                socialMediaTeleg: data.socialMediaTeleg,
                avatar: data.avatar,
                life: data.life,
            })
        })
        .then(this._checkResponse)
    };

    //обновление аватара пользователя
    patchAvatar(formData) {
        console.log(formData.get('avatar'));
        //const formData = new FormData();
        //formData.append('avatar', data.avatar);
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            credentials: 'include',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
                //'Content-Type': 'application/json'
            },
            body: formData
        })
        .then(this._checkResponse)
    }
    
    /*patchAvatar(data) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            credentials: 'include',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: data.avatar
            })
        })
        .then(this._checkResponse)
    };*/

    //добавление/редактироваие данных о карьере, семье, новостях - ?
}

export const api = new Api({
    baseUrl: BASE_URL,
});
