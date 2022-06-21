# Nova API
## To Run
`npm install`<br />
`npm run dev`
<br /><br />

## Endpoints
### - To Nominate a new user<br />
Request Type: `POST`<br />
url: `localhost:3000/api/nomination`<br />
headers: `Bearer user email`<br />
body: `{
    "email": "newuser@test.com",
    "description": "some description",
    "score": {
        "community": 4,
        "talent": 9
    }
}`<br /><br />

### - To Get all users<br />
Request Type: `GET`<br />
url: `localhost:3000/api/users`<br />
headers: `Bearer admin email`<br />