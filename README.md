# FlowerShop
Simple example with Adonis serving json to a React app. 

## Getting started
Download the repo and follow the steps below.

### Install dependencies

- Go to the `backend/` directory and run:
```
npm install
```

- Go to the `frontend/` directory and run:
```
npm install
```

- Install AdonisJs CLI:
```
npm i -g @adonisjs/cli
```

### Env variables

On the file `backend/.env.example`, do the following:

- choose the port you wish the server to run. Default is `PORT=3333`
- choose the port on which your database is running. Default for PostgreSQL is `DB_PORT=5432`
- save it and rename the file to `.env`

### Populate database

Have your PostgreSQL server running. Go to the `backend/` directory and run:
```
adonis seed
```

### Run the dev servers
- Go to the `backend/` directory and run:
```
adonis serve --dev
```

- Go to the `frontend/` directory and run:
```
npm start
```

## Api endpoints