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
  logout(name) {
    return fetch('/logout')
  }

  updateInformation(user, old, other) {
    return fetch(`/users/${user.id}`, {
      method: "PUT",
      mode: 'cors',
      body: JSON.stringify({
        name: user.name,
        old_password: old,
        password: other
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }
}
export default new Services();
