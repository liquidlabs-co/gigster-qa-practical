// create -> /user POST
const query = (start, end) => {
  return fetch(`/report?start=${start.toJSON()}&end=${end.toJSON()}`, {
    method: 'GET',
    credentials: 'include'
  }).then(res => {
    return res.json();
  });
};

export {query}