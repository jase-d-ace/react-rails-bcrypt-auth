class Services {
  authenticate(url, user) {
    return fetch(url, {
      method: "POST",
      mode: 'cors',
      body: JSON.stringify({
        name: user.name,
        password: user.password
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  };
}
export default new Services();
