const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

// create -> /user POST
const create = user => {
  return fetch('/user', {
    method: 'POST',
    headers: headers,
    credentials: 'include',
    body: JSON.stringify(user)
  }).then(res => {
    return res.json();
  });
};

// login => /user/login POST
const login = user => {
  return fetch('/user/login', {
    method: 'POST',
    headers: headers,
    credentials: 'include',
    body: JSON.stringify(user)
  }).then(res => {
    return res.json();
  });
};

// logout -> /user/logout POST
const logout = () => {
  return fetch('/user/logout', {method: 'POST', credentials: 'include'});
};

// auth -> /user/auth GET
const auth = () => {
  return fetch('/user/auth', {
    method: 'GET',
    headers: headers,
    credentials: 'include'
  }).then(res => {
    return res.json();
  });
};

export {create, login, logout, auth}