const ENDPOINT = "https://jsonplaceholder.typicode.com/users/";

export function getUsers() {
  return fetch(ENDPOINT)
    .then(response => {
      console.info(response);
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then(json => json);
}