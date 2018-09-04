# Auth Suite in Rails and React

This small personal project is a rudimentary login/logout module using only `bcrypt` to provide the login/logout logic in Rails instead of the entire `Devise` suite to add user functionality.

This module also uses React as a front end to act as a UI to interact with the Rails server.

## Problems Encountered
* `fetch` requests are very particular about the syntax of the request
* `fetch` is also very particular about the URL that it makes a request to. [Source](https://daveceddia.com/unexpected-token-in-json-at-position-0/)
* `bcrypt` logic involves not only creating a user using their hash and salt algorithm, but also must generate a session to retain the `current_user` functionality. This was something that I took for granted while using Devise, and now have an appreciation for. [Source](https://medium.com/@ashleymcolletti/add-authentication-to-your-rails-app-with-bcrypt-a53917252159)


## Next Steps
* Build out more things to do with user information
* Make it easier to add more users from the UI. Right now it's just one test user and the UI only has a form for logging in (i.e. leveraging the session functionality, not the user creation functionality)