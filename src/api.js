export const baseURL = "localhost:3000";
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

export const login = username => {
  let user = { username: username };
  return fetch(`http://${baseURL}/login`, {
    method: "POST",
    headers,
    body: JSON.stringify(user)
  }).then(res => res.json());
};

export const postMessage = message => {
  return fetch(`http://${baseURL}/messages`, {
    method: "POST",
    headers,
    body: JSON.stringify(message)
  });
};

export const getMessages = () => {
  return fetch(`http://${baseURL}/chatroom`, { headers }).then(res =>
    res.json()
  );
};
