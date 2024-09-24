# Bodygoal

## [ON LIVE](https://bodygoalapp.netlify.app/)  
- It is a Flight Booking app that you can search and booking for flights based on locations and date.  
- User can continue to use app after refreshing page.  
- Location options are coming from [here](https://raw.githubusercontent.com/algolia/datasets/master/airports/airports.json), because [Schiphol Api](https://developer.schiphol.nl/apis/flight-api/v4) provides only airport codes.

## Run project on local

#### API 
Please write an .env file in the root directory of api and write your keys in the following format, then run the commands;


- `SCHIPHOL_APP_ID = xxxxxxxx`
- `SCHIPHOL_APP_KEY = xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
- `MONGO_URI = mongodb+srv://yourusername:yourpassword@cluster0.dcvt3.mongodb.net/yourcollectionname?retryWrites=true&w=majority&appName=Cluster0`
- `JWT_SECRET = randomjwtsecret`

##### `cd api`
##### `npm i`
##### `nodemon`

#### CLIENT

##### `cd client`
##### `npm i`
##### `npm run dev`

## Technologies
- `NodeJs`
- `ExpressJs`
- `ReactJs`
- `Redux Toolkit`
- `Shadcn Ui`
- `Tailwind`

## Resources
- [Schiphol Airport Api](https://developer.schiphol.nl/apis/flight-api/v4)
- [Algolia Airports Dataset](https://raw.githubusercontent.com/algolia/datasets/master/airports/airports.json)

[![Flightify](https://raw.githubusercontent.com/sinansk/flightify/refs/heads/main/client/src/assets/login.png?token=GHSAT0AAAAAACXL4K6ZFAGMTS3F3XQFOE7IZXS4A5A)](https://raw.githubusercontent.com/sinansk/flightify/refs/heads/main/client/src/assets/login.png?token=GHSAT0AAAAAACXL4K6ZFAGMTS3F3XQFOE7IZXS4A5A)
[![Flightify](https://raw.githubusercontent.com/sinansk/flightify/refs/heads/main/client/src/assets/searchFlights.png?token=GHSAT0AAAAAACXL4K6ZVAQ2DCSRDGUF7B6WZXS4CWQ)](https://raw.githubusercontent.com/sinansk/flightify/refs/heads/main/client/src/assets/searchFlights.png?token=GHSAT0AAAAAACXL4K6ZVAQ2DCSRDGUF7B6WZXS4CWQ)
[![Flightify](https://raw.githubusercontent.com/sinansk/flightify/refs/heads/main/client/src/assets/beforeLogin.PNG?token=GHSAT0AAAAAACXL4K6ZLBV4RGBLS5IRUZX4ZXS4CCQ)](https://raw.githubusercontent.com/sinansk/flightify/refs/heads/main/client/src/assets/beforeLogin.PNG?token=GHSAT0AAAAAACXL4K6ZLBV4RGBLS5IRUZX4ZXS4CCQ)
[![Flightify](https://raw.githubusercontent.com/sinansk/flightify/refs/heads/main/client/src/assets/bookingModal.PNG?token=GHSAT0AAAAAACXL4K6ZR5QM77MSVOXNT7AYZXS4DXA)](https://raw.githubusercontent.com/sinansk/flightify/refs/heads/main/client/src/assets/bookingModal.PNG?token=GHSAT0AAAAAACXL4K6ZR5QM77MSVOXNT7AYZXS4DXA)
[![Flightify](https://raw.githubusercontent.com/sinansk/flightify/refs/heads/main/client/src/assets/bookingToast.PNG?token=GHSAT0AAAAAACXL4K6YB6RL2X4QMC7CHHGAZXS4EHA)](https://raw.githubusercontent.com/sinansk/flightify/refs/heads/main/client/src/assets/bookingToast.PNG?token=GHSAT0AAAAAACXL4K6YB6RL2X4QMC7CHHGAZXS4EHA)
[![Flightify](https://raw.githubusercontent.com/sinansk/flightify/refs/heads/main/client/src/assets/myFlights.png?token=GHSAT0AAAAAACXL4K6YWJDN5ASHMECBD2MWZXS4E7A)](https://raw.githubusercontent.com/sinansk/flightify/refs/heads/main/client/src/assets/myFlights.png?token=GHSAT0AAAAAACXL4K6YWJDN5ASHMECBD2MWZXS4E7A)
[![Flightify](https://raw.githubusercontent.com/sinansk/flightify/refs/heads/main/client/src/assets/logoutModal.png?token=GHSAT0AAAAAACXL4K6YXWUTYJ6GZ4ABDD3AZXS4FRQ)](https://raw.githubusercontent.com/sinansk/flightify/refs/heads/main/client/src/assets/logoutModal.png?token=GHSAT0AAAAAACXL4K6YXWUTYJ6GZ4ABDD3AZXS4FRQ)
