## json-server

a fake REST API (using a tool called JSON Server)

so others can fetch and post data to it, just like a real backend.

JSON Server

It’s a lightweight Node.js package that instantly turns a JSON file into a mock REST API.

Great for front-end developers who need some backend data without building an actual server.

For example, if you have a db.json file:
```
{
  "users": [
    { "id": 1, "name": "Sanjeet" },
    { "id": 2, "name": "Kumar" }
  ]
}
```
Then running:
```
npx json-server --watch db.json --port 3000
```
creates endpoints like:
```
GET    /users
GET    /users/1
POST   /users
PUT    /users/1
DELETE /users/1
```
So your frontend (Angular/React/etc.) can fetch data as if it’s talking to a real API!

2. Hosted on Render Platform

Render.com
 is a free hosting platform (like Vercel or Netlify, but supports backend apps).

Developers deploy the JSON Server there so it’s available online 24/7.
```
backend/
├── db.json
├── package.json
└── public/
```

## architecture
```
Angular App (Vercel)
     ↓ API calls
JSON Server (Render)
     ↓
Mock Data (db.json)
```

full architecture
```
enterprise-app/
│
├── frontend/            # Angular app (to be deployed on Vercel)
│   ├── src/
│   ├── angular.json
│   ├── package.json
│   └── ...
│
├── backend/             # JSON Server mock API (to be deployed on Render)
│   ├── db.json
│   ├── package.json
│   └── README.md
│
└── README.md

```
Mocki: Mock API - Create and Simulate APIs for Testing

https://mocki.io/

## setup

```
npx @angular/cli@17 new front-end --no-standalone

ng new front-end --no-standalone

ng generate environments

ng generate environments --development --staging
```

in backend folder

# Initialize JSON Server
npm init -y

npm install json-server

## Why this setup is ideal

✅ Only one repo to maintain

✅ Works perfectly with Vercel + Render

✅ Easy migration — you can later replace JSON Server with a NestJS or Express API (MEAN stack) under /backend

✅ Great for portfolio or enterprise-style learning projects

## for edit inline

This uses PUT (you can switch to PATCH if you prefer partial updates).
