const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

// create -> /expense POST
const create = expense => {
  return fetch('/expense', {
    method: 'POST',
    headers: headers,
    credentials: 'include',
    body: JSON.stringify(expense)
  }).then(res => {
    return res.json();
  });
};

// find -> /expense/:id GET
const find = id => {
  return fetch(`/expense/:${id}`, {
    method: 'GET',
    credentials: 'include'
  }).then(res => {
    return res.json();
  });
};

// update -> /expense PUT
const update = (id, updated) => {
  return fetch(`/expense/:${id}`, {
    method: 'PUT',
    headers: headers,
    credentials: 'include',
    body: JSON.stringify(updated)
  }).then(res => {
    return res.json();
  });
};

// remove -> /expense DELETE
const remove = id => {
  return fetch(`/expense/:${id}`, {
    method: 'DELETE',
    credentials: 'include'
  }).then(res => {
    return res.json();
  });
};

export {create, find, update, remove}