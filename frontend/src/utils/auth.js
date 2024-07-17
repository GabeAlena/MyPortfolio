import { BASE_URL } from './utils';

const checkResponse = (res) => {
    if (res.ok) {
        return res.json()
    } else {
        return Promise.reject(`Ошибка: ${res.status}`)
    }
}

export const register = (data) => {
    console.log(data);
    return fetch(`${BASE_URL}/SignUp`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            firstName: data.firstName, 
            familyName: data.familyName, 
            email: data.email, 
            password: data.password,
            confirmPassword: data.confirmPassword,
        })
    })
    .then(checkResponse);
};

export const authorization = (data) => {
    console.log(data);
    return fetch(`${BASE_URL}/SignIn`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: data.email,
            password: data.password,
        })
    })
    .then(checkResponse)
};

export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        //credentials: 'include',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`,
        }
    })
    .then(res => res.json())
    .then(checkResponse);
}

/*export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then((response) => {
      console.log('Response status:', response.status); // Log status code
      if (!response.ok) {
        return response.json().then((err) => { // Parse JSON error response if available
          console.log('Error response:', err);
          throw new Error(err.message || 'Token validation failed');
        });
      }
      return response.json();
    })
    .catch((err) => {
      console.error('Error in checkToken:', err); // Log detailed error
      throw err;
    });
  };*/