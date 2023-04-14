import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
export const registerUserApi = newUser => {
  return axios.post('/users/signup', newUser).then(({ data }) => {
    token.set(data.token);
    return data;
  });
};

export const loginUserApi = ({ email, password }) => {
  console.log({ email, password });
  return axios.post('/users/login', { email, password }).then(({ data }) => {
    token.set(data.token);
    return data;
  });
};

export const logoutUserApi = () => {
  return axios.post('/users/logout').then(({ data }) => {
    token.unset();
    return data;
  });
};
export const refreshtUserApi = (persistedToken) => {
    token.set(persistedToken)
    return axios.get('/users/current').then(({ data }) => {
      return data;
    });
  };

export const addContactApi = contact => {
    return axios.post('/contacts', contact).then(({ data }) => ({ ...contact, id: data.id }));
  
  };


export const getContactsApi = () => {
  return axios
    .get('/contacts', {
      headers: { 'content-type': 'application/json' },
    })
    .then(({ data }) => data);
};


export const removeContactApi = (id)=>{
    return axios.delete(`/contacts/${id}`).then(()=>id)
}

