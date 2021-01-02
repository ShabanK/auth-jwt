done:

- POST http://localhost:5000/auth/signup you post this

```{
    "email": "shabankhawar99@gmail.com",
    "firstName": "Shaban",
    "lastName": "Khawar",
    "password": "whatever"
  }
```

to save to db

-it checks if email already exists
-passwords are hashed before they are saved

- can fetch all users with GET http://localhost:5000/auth

to do:

-login
-jwt
