# Smash Court REST API Specification

---

- **`[POST]` User Login [Admin & User]**
    
    
    | Description | Login user [admin & user] |
    | --- | --- |
    | URL | [http://s671int511v016.sit.kmutt.ac.th:3333](http://s671int511v016.sit.kmutt.ac.th:3333/)/api/users/login |
    | Auth Required | No |
    - **Request Body [Admin]**
        
        ```json
        {
            "username": "smashAdmin",
            "password": "smashadmin123"
        }
        ```
        
    - **Request Body [User]**
        
        ```json
        {
            "username": "nicholas_wang",
            "password": "nicholaswang2002"
        }
        ```
        
    - **✅ Response 200**
        
        ```json
        
        {
            "type": "bearer",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoic21hc2hBZG1pbiIsImlhdCI6MTczNDk0OTQ1NCwiZXhwIjoxNzM0OTUzMDU0fQ.vFNz4Rz7n5gXYTrtOUW1gqoNfXYBmY8MTQuCAYkYm3k",
            "expiresIn": "1h"
        }
        
        ```
        
    - **✅ Response 400**
        
        ```jsx
        {
            "errors": [
                {
                    "message": "Invalid user credentials"
                }
            ]
        }
        ```
        
    
- **`[POST]` User Register**
    
    
    | Description | Register user |
    | --- | --- |
    | URL | [http://s671int511v016.sit.kmutt.ac.th:3333](http://s671int511v016.sit.kmutt.ac.th:3333/)/api/users/register |
    | Auth Required | No |
    - **Request Body**
        
        ```json
        {
            "username":"user7",
            "password":"7777777",
            "password_confirmation":"7777777"
        }
        ```
        
    - **✅ Response 200**
        
        ```json
        The user is register successfully.
        ```
        
    - **✅ Response 400 [username has already in DB]**
        
        ```jsx
        [
            {
                "message": "The username has already been taken",
                "rule": "database.unique",
                "field": "username"
            }
        ]
        ```
        
    - **✅ Response 400 [password is not more than 7 characters]**
        
        ```jsx
        [
            {
                "message": "The password field must have at least 7 characters",
                "rule": "minLength",
                "field": "password",
                "meta": {
                    "min": 7
                }
            }
        ]
        ```
        
    - **✅ Response 400 [password field & password_confirmation are not same]**
        
        ```jsx
        [
            {
                "message": "The password field and password_confirmation field must be the same",
                "rule": "confirmed",
                "field": "password",
                "meta": {
                    "otherField": "password_confirmation"
                }
            }
        ]
        ```
        
    
- **`[GET]` User Logout**
    
    
    | Description | Logout user |
    | --- | --- |
    | URL | [http://s671int511v016.sit.kmutt.ac.th:3333](http://s671int511v016.sit.kmutt.ac.th:3333/)/api/users/logout |
    | Auth Required | No |
    - **✅ Response 200**
        
        ```json
        {
            "message": "Logout successful"
        }
        ```
        
    

---

- **`[GET]` Retrieve court list**
    
    
    | Description | List all courts |
    | --- | --- |
    | URL | [http://s671int511v016.sit.kmutt.ac.th:3333](http://s671int511v016.sit.kmutt.ac.th:3333/)/api/courts |
    | Auth Required | Bearer {{token}} |
    - **✅ Response 200**
        
        ```jsx
        [
            {
                "id": 10,
                "name": "Tennis Court 5",
                "location": "Westside Arena",
                "pricePerHour": 700,
                "status": "Available",
                "openingTime": "06.00",
                "closingTime": "20.00",
                "type": "Tennis",
                "createdAt": "2024-12-22T12:28:16.000+00:00",
                "updatedAt": "2024-12-22T12:28:16.000+00:00"
            },
            {
                "id": 9,
                "name": "Tennis Court 4",
                "location": "Eastside Gym",
                "pricePerHour": 600,
                "status": "Available",
                "openingTime": "07.30",
                "closingTime": "21.30",
                "type": "Tennis",
                "createdAt": "2024-12-22T12:28:16.000+00:00",
                "updatedAt": "2024-12-22T12:28:16.000+00:00"
            },
            {
                "id": 8,
                "name": "Tennis Court 3",
                "location": "Eastside Gym",
                "pricePerHour": 600,
                "status": "Available",
                "openingTime": "07.00",
                "closingTime": "21.00",
                "type": "Tennis",
                "createdAt": "2024-12-22T12:28:16.000+00:00",
                "updatedAt": "2024-12-22T12:28:16.000+00:00"
            },
            {
                "id": 7,
                "name": "Tennis Court 2",
                "location": "Downtown Sports Center",
                "pricePerHour": 500,
                "status": "Not Available",
                "openingTime": "08.00",
                "closingTime": "22.00",
                "type": "Tennis",
                "createdAt": "2024-12-22T12:28:16.000+00:00",
                "updatedAt": "2024-12-22T12:28:16.000+00:00"
            },
            {
                "id": 6,
                "name": "Tennis Court 1",
                "location": "Downtown Sports Center",
                "pricePerHour": 500,
                "status": "Available",
                "openingTime": "08.00",
                "closingTime": "22.00",
                "type": "Tennis",
                "createdAt": "2024-12-22T12:28:16.000+00:00",
                "updatedAt": "2024-12-22T12:28:16.000+00:00"
            },
            {
                "id": 5,
                "name": "Badminton Court 5",
                "location": "Westside Arena",
                "pricePerHour": 350,
                "status": "Available",
                "openingTime": "06.00",
                "closingTime": "20.00",
                "type": "Badminton",
                "createdAt": "2024-12-22T12:28:16.000+00:00",
                "updatedAt": "2024-12-22T12:28:16.000+00:00"
            },
            {
                "id": 4,
                "name": "Badminton Court 4",
                "location": "Eastside Gym",
                "pricePerHour": 300,
                "status": "Not Available",
                "openingTime": "07.00",
                "closingTime": "21.00",
                "type": "Badminton",
                "createdAt": "2024-12-22T12:28:16.000+00:00",
                "updatedAt": "2024-12-22T12:28:16.000+00:00"
            },
            {
                "id": 3,
                "name": "Badminton Court 3",
                "location": "Eastside Gym",
                "pricePerHour": 300,
                "status": "Available",
                "openingTime": "07.00",
                "closingTime": "21.00",
                "type": "Badminton",
                "createdAt": "2024-12-22T12:28:16.000+00:00",
                "updatedAt": "2024-12-22T12:28:16.000+00:00"
            },
            {
                "id": 2,
                "name": "Badminton Court 2",
                "location": "Downtown Sports Center",
                "pricePerHour": 250,
                "status": "Not Available",
                "openingTime": "09.00",
                "closingTime": "22.00",
                "type": "Badminton",
                "createdAt": "2024-12-22T12:28:16.000+00:00",
                "updatedAt": "2024-12-23T02:37:48.000+00:00"
            },
            {
                "id": 1,
                "name": "Badminton 1",
                "location": "Pompeii",
                "pricePerHour": 300,
                "status": "Available",
                "openingTime": "09.00",
                "closingTime": "20.00",
                "type": "Badminton",
                "createdAt": "2024-12-22T12:28:16.000+00:00",
                "updatedAt": "2024-12-23T03:29:15.000+00:00"
            }
        ]
        ```
        
    
- **`[GET]` Retrieve a court detail**
    
    
    | Description | **Show a court detail** |
    | --- | --- |
    | URL | [http://s671int511v016.sit.kmutt.ac.th:3333](http://s671int511v016.sit.kmutt.ac.th:3333/)/api/courts/{courtId} |
    | Auth Required | Bearer {{token}} |
    - **✅ Response 200**
        
        ```jsx
        {
            "id": 1,
            "name": "Badminton 1",
            "location": "Pompeii",
            "pricePerHour": 300,
            "status": "Available",
            "openingTime": "09.00",
            "closingTime": "20.00",
            "type": "Badminton",
            "createdAt": "2024-12-22T12:28:16.000+00:00",
            "updatedAt": "2024-12-23T03:29:15.000+00:00"
        }
        ```
        
    
- **`[POST]` Create a new court**
    
    
    | Description | Make a new court in DB |
    | --- | --- |
    | URL | [http://s671int511v016.sit.kmutt.ac.th:3333](http://s671int511v016.sit.kmutt.ac.th:3333/)/api/courts |
    | Auth Required | Bearer {{token}} |
    - **Request Body**
        
        ```json
        {
            "name":"Tennis 7",
            "location" : "LA",
            "price_per_hour": "1000",
            "status": "Not Available",
            "opening_time":"08.00",
            "closing_time":"23.00",
            "type":"Tennis"
        }
        ```
        
    - **✅ Response 200**
        
        ```jsx
        {
            "name": "Tennis 7",
            "type": "Tennis",
            "status": "Not Available",
            "location": "LA",
            "pricePerHour": 1000,
            "openingTime": "08.00",
            "closingTime": "23.00",
            "createdAt": "2024-12-23T11:00:03.987+00:00",
            "updatedAt": "2024-12-23T11:00:03.987+00:00",
            "id": 26
        }
        ```
        
    - **✅ Response 422 [Court name has already in DB]**
        
        ```jsx
        {
            "errors": [
                {
                    "message": "The name has already been taken",
                    "rule": "database.unique",
                    "field": "name"
                }
            ]
        }
        ```
        
    - **✅ Response 422 [Price of court is not a number]**
        
        ```jsx
        {
            "errors": [
               {
                    "message": "The price_per_hour field must be a number",
                    "rule": "number",
                    "field": "price_per_hour"
                }
            ]
        }
        ```
        
    - **✅ Response 422 [Court status is incorrect]**
        
        ```jsx
        {
            "errors": [
               {
                    "message": "The selected status is invalid",
                    "rule": "enum",
                    "field": "status",
                    "meta": {
                        "choices": [
                            "Available",
                            "Not Available"
                        ]
                    }
                }
            ]
        }
        ```
        
    - **✅ Response 422 [Court location name are more than 200 characters]**
        
        ```jsx
        {
            "errors": [
               {
                    "message": "The location field must not be greater than 200 characters",
                    "rule": "maxLength",
                    "field": "location",
                    "meta": {
                        "max": 200
                    }
                }
            ]
        }
        ```
        
- **`[PUT]` Update a court detail**
    
    
    | Description | Update a court detail in DB |
    | --- | --- |
    | URL | [http://s671int511v016.sit.kmutt.ac.th:3333](http://s671int511v016.sit.kmutt.ac.th:3333/)/api/courts/{courtId} |
    | Auth Required | Bearer {{token}} |
    - **Request Body**
        
        ```json
        {
            "name":"Tennis 7",
            "location" : "LA",
            "price_per_hour": "1000",
            "status": "Not Available",
            "opening_time":"08.00",
            "closing_time":"23.00",
            "type":"Tennis"
        }
        ```
        
    - **✅ Response 200**
        
        ```jsx
        {
            "name": "Tennis 7",
            "type": "Tennis",
            "status": "Not Available",
            "location": "LA",
            "pricePerHour": 1000,
            "openingTime": "08.00",
            "closingTime": "23.00",
            "createdAt": "2024-12-23T11:00:03.987+00:00",
            "updatedAt": "2024-12-23T11:00:03.987+00:00",
            "id": 26
        }
        ```
        
    - **✅ Response 422 [Court name has already in DB]**
        
        ```jsx
        {
            "errors": [
                {
                    "message": "The name has already been taken",
                    "rule": "database.unique",
                    "field": "name"
                }
            ]
        }
        ```
        
    - **✅ Response 422 [Price of court is not a number]**
        
        ```jsx
        {
            "errors": [
               {
                    "message": "The price_per_hour field must be a number",
                    "rule": "number",
                    "field": "price_per_hour"
                }
            ]
        }
        ```
        
    - **✅ Response 422 [Court status is incorrect]**
        
        ```jsx
        {
            "errors": [
               {
                    "message": "The selected status is invalid",
                    "rule": "enum",
                    "field": "status",
                    "meta": {
                        "choices": [
                            "Available",
                            "Not Available"
                        ]
                    }
                }
            ]
        }
        ```
        
    - **✅ Response 422 [Court location name are more than 200 characters]**
        
        ```jsx
        {
            "errors": [
               {
                    "message": "The location field must not be greater than 200 characters",
                    "rule": "maxLength",
                    "field": "location",
                    "meta": {
                        "max": 200
                    }
                }
            ]
        }
        ```
        
- **`[DELETE]` Delete a court**
    
    
    | Description | Delete a court  in DB |
    | --- | --- |
    | URL | [http://s671int511v016.sit.kmutt.ac.th:3333](http://s671int511v016.sit.kmutt.ac.th:3333/)/api/courts/{courtId} |
    | Auth Required | Bearer {{token}} |
    - **Request Body**
        
        ```json
        {
            "name":"Tennis 7",
            "location" : "LA",
            "price_per_hour": "1000",
            "status": "Not Available",
            "opening_time":"08.00",
            "closing_time":"23.00",
            "type":"Tennis"
        }
        ```
        
    - **✅ Response 200**
        
        ```jsx
        {
            "name": "Tennis 7",
            "type": "Tennis",
            "status": "Not Available",
            "location": "LA",
            "pricePerHour": 1000,
            "openingTime": "08.00",
            "closingTime": "23.00",
            "createdAt": "2024-12-23T11:00:03.987+00:00",
            "updatedAt": "2024-12-23T11:00:03.987+00:00",
            "id": 26
        }
        ```
        
    - **✅ Response 404**
        
        ```jsx
        {
            "message": "Court not found"
        }
        ```
        

---

- **`[GET]` Retrieve bookings list**
    
    
    | Description | List all bookings  |
    | --- | --- |
    | URL | [http://s671int511v016.sit.kmutt.ac.th:3333](http://s671int511v016.sit.kmutt.ac.th:3333/)/api/bookings |
    | Auth Required | Bearer {{token}} |
    - **✅ Response 200**
        
        ```jsx
        {
            "data": [
                {
                    "id": 1,
                    "userId": 2,
                    "courtId": 10,
                    "bookingDate": "2024-12-25T00:00:00.000+00:00",
                    "startTime": "15.00",
                    "endTime": "16.00",
                    "status": "canceled",
                    "createdAt": "2024-12-22T12:53:57.000+00:00",
                    "updatedAt": "2024-12-23T03:28:35.000+00:00",
                    "user": {
                        "id": 2,
                        "username": "jake_sim",
                        "createdAt": "2024-12-22T07:26:58.000+00:00",
                        "updatedAt": "2024-12-22T07:26:58.000+00:00"
                    },
                    "court": {
                        "id": 10,
                        "name": "Tennis Court 5",
                        "location": "Westside Arena",
                        "pricePerHour": 700,
                        "status": "Available",
                        "openingTime": "06.00",
                        "closingTime": "20.00",
                        "type": "Tennis",
                        "createdAt": "2024-12-22T12:28:16.000+00:00",
                        "updatedAt": "2024-12-22T12:28:16.000+00:00"
                    }
                },
                {
                    "id": 2,
                    "userId": 2,
                    "courtId": 2,
                    "bookingDate": "2024-12-15T00:00:00.000+00:00",
                    "startTime": "08.00",
                    "endTime": "09.00",
                    "status": "confirmed",
                    "createdAt": "2024-12-22T12:53:57.000+00:00",
                    "updatedAt": "2024-12-23T02:56:32.000+00:00",
                    "user": {
                        "id": 2,
                        "username": "jake_sim",
                        "createdAt": "2024-12-22T07:26:58.000+00:00",
                        "updatedAt": "2024-12-22T07:26:58.000+00:00"
                    },
                    "court": {
                        "id": 2,
                        "name": "Badminton Court 2",
                        "location": "Downtown Sports Center",
                        "pricePerHour": 250,
                        "status": "Not Available",
                        "openingTime": "09.00",
                        "closingTime": "22.00",
                        "type": "Badminton",
                        "createdAt": "2024-12-22T12:28:16.000+00:00",
                        "updatedAt": "2024-12-23T02:37:48.000+00:00"
                    }
                },
                {
                    "id": 3,
                    "userId": 2,
                    "courtId": 3,
                    "bookingDate": "2024-12-15T00:00:00.000+00:00",
                    "startTime": "12.00",
                    "endTime": "13.00",
                    "status": "confirmed",
                    "createdAt": "2024-12-22T12:53:57.000+00:00",
                    "updatedAt": "2024-12-22T12:53:57.000+00:00",
                    "user": {
                        "id": 2,
                        "username": "jake_sim",
                        "createdAt": "2024-12-22T07:26:58.000+00:00",
                        "updatedAt": "2024-12-22T07:26:58.000+00:00"
                    },
                    "court": {
                        "id": 3,
                        "name": "Badminton Court 3",
                        "location": "Eastside Gym",
                        "pricePerHour": 300,
                        "status": "Available",
                        "openingTime": "07.00",
                        "closingTime": "21.00",
                        "type": "Badminton",
                        "createdAt": "2024-12-22T12:28:16.000+00:00",
                        "updatedAt": "2024-12-22T12:28:16.000+00:00"
                    }
                },
                {
                    "id": 4,
                    "userId": 3,
                    "courtId": 4,
                    "bookingDate": "2024-12-16T00:00:00.000+00:00",
                    "startTime": "14.00",
                    "endTime": "15.00",
                    "status": "canceled",
                    "createdAt": "2024-12-22T12:53:57.000+00:00",
                    "updatedAt": "2024-12-22T12:53:57.000+00:00",
                    "user": {
                        "id": 3,
                        "username": "anton_lee",
                        "createdAt": "2024-12-22T07:26:58.000+00:00",
                        "updatedAt": "2024-12-22T07:26:58.000+00:00"
                    },
                    "court": {
                        "id": 4,
                        "name": "Badminton Court 4",
                        "location": "Eastside Gym",
                        "pricePerHour": 300,
                        "status": "Not Available",
                        "openingTime": "07.00",
                        "closingTime": "21.00",
                        "type": "Badminton",
                        "createdAt": "2024-12-22T12:28:16.000+00:00",
                        "updatedAt": "2024-12-22T12:28:16.000+00:00"
                    }
                },
                {
                    "id": 5,
                    "userId": 3,
                    "courtId": 5,
                    "bookingDate": "2024-12-16T00:00:00.000+00:00",
                    "startTime": "20.00",
                    "endTime": "21.00",
                    "status": "confirmed",
                    "createdAt": "2024-12-22T12:53:57.000+00:00",
                    "updatedAt": "2024-12-22T12:53:57.000+00:00",
                    "user": {
                        "id": 3,
                        "username": "anton_lee",
                        "createdAt": "2024-12-22T07:26:58.000+00:00",
                        "updatedAt": "2024-12-22T07:26:58.000+00:00"
                    },
                    "court": {
                        "id": 5,
                        "name": "Badminton Court 5",
                        "location": "Westside Arena",
                        "pricePerHour": 350,
                        "status": "Available",
                        "openingTime": "06.00",
                        "closingTime": "20.00",
                        "type": "Badminton",
                        "createdAt": "2024-12-22T12:28:16.000+00:00",
                        "updatedAt": "2024-12-22T12:28:16.000+00:00"
                    }
                },
                {
                    "id": 6,
                    "userId": 3,
                    "courtId": 6,
                    "bookingDate": "2024-12-16T00:00:00.000+00:00",
                    "startTime": "16.00",
                    "endTime": "17.00",
                    "status": "confirmed",
                    "createdAt": "2024-12-22T12:53:57.000+00:00",
                    "updatedAt": "2024-12-22T12:53:57.000+00:00",
                    "user": {
                        "id": 3,
                        "username": "anton_lee",
                        "createdAt": "2024-12-22T07:26:58.000+00:00",
                        "updatedAt": "2024-12-22T07:26:58.000+00:00"
                    },
                    "court": {
                        "id": 6,
                        "name": "Tennis Court 1",
                        "location": "Downtown Sports Center",
                        "pricePerHour": 500,
                        "status": "Available",
                        "openingTime": "08.00",
                        "closingTime": "22.00",
                        "type": "Tennis",
                        "createdAt": "2024-12-22T12:28:16.000+00:00",
                        "updatedAt": "2024-12-22T12:28:16.000+00:00"
                    }
                },
                {
                    "id": 7,
                    "userId": 4,
                    "courtId": 7,
                    "bookingDate": "2024-12-17T00:00:00.000+00:00",
                    "startTime": "18.00",
                    "endTime": "19.00",
                    "status": "canceled",
                    "createdAt": "2024-12-22T12:53:57.000+00:00",
                    "updatedAt": "2024-12-22T12:53:57.000+00:00",
                    "user": {
                        "id": 4,
                        "username": "nicholas_wang",
                        "createdAt": "2024-12-22T07:26:58.000+00:00",
                        "updatedAt": "2024-12-22T07:26:58.000+00:00"
                    },
                    "court": {
                        "id": 7,
                        "name": "Tennis Court 2",
                        "location": "Downtown Sports Center",
                        "pricePerHour": 500,
                        "status": "Not Available",
                        "openingTime": "08.00",
                        "closingTime": "22.00",
                        "type": "Tennis",
                        "createdAt": "2024-12-22T12:28:16.000+00:00",
                        "updatedAt": "2024-12-22T12:28:16.000+00:00"
                    }
                },
                {
                    "id": 8,
                    "userId": 4,
                    "courtId": 8,
                    "bookingDate": "2024-12-17T00:00:00.000+00:00",
                    "startTime": "15.00",
                    "endTime": "16.00",
                    "status": "confirmed",
                    "createdAt": "2024-12-22T12:53:57.000+00:00",
                    "updatedAt": "2024-12-22T12:53:57.000+00:00",
                    "user": {
                        "id": 4,
                        "username": "nicholas_wang",
                        "createdAt": "2024-12-22T07:26:58.000+00:00",
                        "updatedAt": "2024-12-22T07:26:58.000+00:00"
                    },
                    "court": {
                        "id": 8,
                        "name": "Tennis Court 3",
                        "location": "Eastside Gym",
                        "pricePerHour": 600,
                        "status": "Available",
                        "openingTime": "07.00",
                        "closingTime": "21.00",
                        "type": "Tennis",
                        "createdAt": "2024-12-22T12:28:16.000+00:00",
                        "updatedAt": "2024-12-22T12:28:16.000+00:00"
                    }
                },
                {
                    "id": 9,
                    "userId": 4,
                    "courtId": 9,
                    "bookingDate": "2024-12-17T00:00:00.000+00:00",
                    "startTime": "13.00",
                    "endTime": "14.00",
                    "status": "canceled",
                    "createdAt": "2024-12-22T12:53:57.000+00:00",
                    "updatedAt": "2024-12-22T12:53:57.000+00:00",
                    "user": {
                        "id": 4,
                        "username": "nicholas_wang",
                        "createdAt": "2024-12-22T07:26:58.000+00:00",
                        "updatedAt": "2024-12-22T07:26:58.000+00:00"
                    },
                    "court": {
                        "id": 9,
                        "name": "Tennis Court 4",
                        "location": "Eastside Gym",
                        "pricePerHour": 600,
                        "status": "Available",
                        "openingTime": "07.30",
                        "closingTime": "21.30",
                        "type": "Tennis",
                        "createdAt": "2024-12-22T12:28:16.000+00:00",
                        "updatedAt": "2024-12-22T12:28:16.000+00:00"
                    }
                },
                {
                    "id": 10,
                    "userId": 2,
                    "courtId": 10,
                    "bookingDate": "2024-12-18T00:00:00.000+00:00",
                    "startTime": "14.00",
                    "endTime": "15.00",
                    "status": "confirmed",
                    "createdAt": "2024-12-22T12:53:57.000+00:00",
                    "updatedAt": "2024-12-22T12:53:57.000+00:00",
                    "user": {
                        "id": 2,
                        "username": "jake_sim",
                        "createdAt": "2024-12-22T07:26:58.000+00:00",
                        "updatedAt": "2024-12-22T07:26:58.000+00:00"
                    },
                    "court": {
                        "id": 10,
                        "name": "Tennis Court 5",
                        "location": "Westside Arena",
                        "pricePerHour": 700,
                        "status": "Available",
                        "openingTime": "06.00",
                        "closingTime": "20.00",
                        "type": "Tennis",
                        "createdAt": "2024-12-22T12:28:16.000+00:00",
                        "updatedAt": "2024-12-22T12:28:16.000+00:00"
                    }
                },
                {
                    "id": 12,
                    "userId": 2,
                    "courtId": 1,
                    "bookingDate": "2024-12-25T00:00:00.000+00:00",
                    "startTime": "15:00:00",
                    "endTime": "16:00:00",
                    "status": "confirmed",
                    "createdAt": "2024-12-22T13:43:52.000+00:00",
                    "updatedAt": "2024-12-22T13:43:52.000+00:00",
                    "user": {
                        "id": 2,
                        "username": "jake_sim",
                        "createdAt": "2024-12-22T07:26:58.000+00:00",
                        "updatedAt": "2024-12-22T07:26:58.000+00:00"
                    },
                    "court": {
                        "id": 1,
                        "name": "Test Badminton1",
                        "location": "Pompeii",
                        "pricePerHour": 1000,
                        "status": "Available",
                        "openingTime": "08.30",
                        "closingTime": "23.30",
                        "type": "Tennis",
                        "createdAt": "2024-12-22T12:28:16.000+00:00",
                        "updatedAt": "2024-12-23T11:10:38.000+00:00"
                    }
                },
                {
                    "id": 13,
                    "userId": 2,
                    "courtId": 8,
                    "bookingDate": "2024-12-25T00:00:00.000+00:00",
                    "startTime": "15.00",
                    "endTime": "16.00",
                    "status": "confirmed",
                    "createdAt": "2024-12-22T13:44:46.000+00:00",
                    "updatedAt": "2024-12-22T13:44:46.000+00:00",
                    "user": {
                        "id": 2,
                        "username": "jake_sim",
                        "createdAt": "2024-12-22T07:26:58.000+00:00",
                        "updatedAt": "2024-12-22T07:26:58.000+00:00"
                    },
                    "court": {
                        "id": 8,
                        "name": "Tennis Court 3",
                        "location": "Eastside Gym",
                        "pricePerHour": 600,
                        "status": "Available",
                        "openingTime": "07.00",
                        "closingTime": "21.00",
                        "type": "Tennis",
                        "createdAt": "2024-12-22T12:28:16.000+00:00",
                        "updatedAt": "2024-12-22T12:28:16.000+00:00"
                    }
                },
                {
                    "id": 16,
                    "userId": 2,
                    "courtId": 1,
                    "bookingDate": "2024-12-25T00:00:00.000+00:00",
                    "startTime": "06.00",
                    "endTime": "07.00",
                    "status": "confirmed",
                    "createdAt": "2024-12-22T13:56:36.000+00:00",
                    "updatedAt": "2024-12-22T13:56:36.000+00:00",
                    "user": {
                        "id": 2,
                        "username": "jake_sim",
                        "createdAt": "2024-12-22T07:26:58.000+00:00",
                        "updatedAt": "2024-12-22T07:26:58.000+00:00"
                    },
                    "court": {
                        "id": 1,
                        "name": "Test Badminton1",
                        "location": "Pompeii",
                        "pricePerHour": 1000,
                        "status": "Available",
                        "openingTime": "08.30",
                        "closingTime": "23.30",
                        "type": "Tennis",
                        "createdAt": "2024-12-22T12:28:16.000+00:00",
                        "updatedAt": "2024-12-23T11:10:38.000+00:00"
                    }
                },
                {
                    "id": 17,
                    "userId": 2,
                    "courtId": 10,
                    "bookingDate": "2024-12-18T00:00:00.000+00:00",
                    "startTime": "06.00",
                    "endTime": "07.00",
                    "status": "confirmed",
                    "createdAt": "2024-12-23T03:12:53.000+00:00",
                    "updatedAt": "2024-12-23T03:12:53.000+00:00",
                    "user": {
                        "id": 2,
                        "username": "jake_sim",
                        "createdAt": "2024-12-22T07:26:58.000+00:00",
                        "updatedAt": "2024-12-22T07:26:58.000+00:00"
                    },
                    "court": {
                        "id": 10,
                        "name": "Tennis Court 5",
                        "location": "Westside Arena",
                        "pricePerHour": 700,
                        "status": "Available",
                        "openingTime": "06.00",
                        "closingTime": "20.00",
                        "type": "Tennis",
                        "createdAt": "2024-12-22T12:28:16.000+00:00",
                        "updatedAt": "2024-12-22T12:28:16.000+00:00"
                    }
                },
                {
                    "id": 18,
                    "userId": 2,
                    "courtId": 10,
                    "bookingDate": "2024-12-18T00:00:00.000+00:00",
                    "startTime": "06.00",
                    "endTime": "07.00",
                    "status": "confirmed",
                    "createdAt": "2024-12-23T03:17:38.000+00:00",
                    "updatedAt": "2024-12-23T03:17:38.000+00:00",
                    "user": {
                        "id": 2,
                        "username": "jake_sim",
                        "createdAt": "2024-12-22T07:26:58.000+00:00",
                        "updatedAt": "2024-12-22T07:26:58.000+00:00"
                    },
                    "court": {
                        "id": 10,
                        "name": "Tennis Court 5",
                        "location": "Westside Arena",
                        "pricePerHour": 700,
                        "status": "Available",
                        "openingTime": "06.00",
                        "closingTime": "20.00",
                        "type": "Tennis",
                        "createdAt": "2024-12-22T12:28:16.000+00:00",
                        "updatedAt": "2024-12-22T12:28:16.000+00:00"
                    }
                },
                {
                    "id": 19,
                    "userId": 2,
                    "courtId": 10,
                    "bookingDate": "2024-12-25T00:00:00.000+00:00",
                    "startTime": "06.00",
                    "endTime": "07.00",
                    "status": "confirmed",
                    "createdAt": "2024-12-23T03:18:11.000+00:00",
                    "updatedAt": "2024-12-23T03:18:11.000+00:00",
                    "user": {
                        "id": 2,
                        "username": "jake_sim",
                        "createdAt": "2024-12-22T07:26:58.000+00:00",
                        "updatedAt": "2024-12-22T07:26:58.000+00:00"
                    },
                    "court": {
                        "id": 10,
                        "name": "Tennis Court 5",
                        "location": "Westside Arena",
                        "pricePerHour": 700,
                        "status": "Available",
                        "openingTime": "06.00",
                        "closingTime": "20.00",
                        "type": "Tennis",
                        "createdAt": "2024-12-22T12:28:16.000+00:00",
                        "updatedAt": "2024-12-22T12:28:16.000+00:00"
                    }
                },
                {
                    "id": 20,
                    "userId": 4,
                    "courtId": 10,
                    "bookingDate": "2024-12-25T00:00:00.000+00:00",
                    "startTime": "06.00",
                    "endTime": "07.00",
                    "status": "confirmed",
                    "createdAt": "2024-12-23T03:32:24.000+00:00",
                    "updatedAt": "2024-12-23T03:32:24.000+00:00",
                    "user": {
                        "id": 4,
                        "username": "nicholas_wang",
                        "createdAt": "2024-12-22T07:26:58.000+00:00",
                        "updatedAt": "2024-12-22T07:26:58.000+00:00"
                    },
                    "court": {
                        "id": 10,
                        "name": "Tennis Court 5",
                        "location": "Westside Arena",
                        "pricePerHour": 700,
                        "status": "Available",
                        "openingTime": "06.00",
                        "closingTime": "20.00",
                        "type": "Tennis",
                        "createdAt": "2024-12-22T12:28:16.000+00:00",
                        "updatedAt": "2024-12-22T12:28:16.000+00:00"
                    }
                },
                {
                    "id": 21,
                    "userId": 4,
                    "courtId": 10,
                    "bookingDate": "2024-12-25T00:00:00.000+00:00",
                    "startTime": "22.00",
                    "endTime": "23.00",
                    "status": "canceled",
                    "createdAt": "2024-12-23T03:33:32.000+00:00",
                    "updatedAt": "2024-12-23T03:34:02.000+00:00",
                    "user": {
                        "id": 4,
                        "username": "nicholas_wang",
                        "createdAt": "2024-12-22T07:26:58.000+00:00",
                        "updatedAt": "2024-12-22T07:26:58.000+00:00"
                    },
                    "court": {
                        "id": 10,
                        "name": "Tennis Court 5",
                        "location": "Westside Arena",
                        "pricePerHour": 700,
                        "status": "Available",
                        "openingTime": "06.00",
                        "closingTime": "20.00",
                        "type": "Tennis",
                        "createdAt": "2024-12-22T12:28:16.000+00:00",
                        "updatedAt": "2024-12-22T12:28:16.000+00:00"
                    }
                }
            ]
        }
        ```
        
    
- **`[GET]` Retrieve bookings list by user**
    
    
    | Description | List all bookings  |
    | --- | --- |
    | URL | [http://s671int511v016.sit.kmutt.ac.th:3333](http://s671int511v016.sit.kmutt.ac.th:3333/)/api/bookings/user/{userId} |
    | Auth Required | Bearer {{token}} |
    - **✅ Response 200**
        
        ```jsx
        {
            "data": [
                {
                    "id": 1,
                    "userId": 2,
                    "courtId": 10,
                    "bookingDate": "2024-12-25T00:00:00.000+00:00",
                    "startTime": "15.00",
                    "endTime": "16.00",
                    "status": "canceled",
                    "createdAt": "2024-12-22T12:53:57.000+00:00",
                    "updatedAt": "2024-12-23T03:28:35.000+00:00",
                    "court": {
                        "id": 10,
                        "name": "Tennis Court 5",
                        "location": "Westside Arena",
                        "pricePerHour": 700,
                        "status": "Available",
                        "openingTime": "06.00",
                        "closingTime": "20.00",
                        "type": "Tennis",
                        "createdAt": "2024-12-22T12:28:16.000+00:00",
                        "updatedAt": "2024-12-22T12:28:16.000+00:00"
                    },
                    "user": {
                        "id": 2,
                        "username": "jake_sim",
                        "createdAt": "2024-12-22T07:26:58.000+00:00",
                        "updatedAt": "2024-12-22T07:26:58.000+00:00"
                    }
                },
                {
                    "id": 2,
                    "userId": 2,
                    "courtId": 2,
                    "bookingDate": "2024-12-15T00:00:00.000+00:00",
                    "startTime": "08.00",
                    "endTime": "09.00",
                    "status": "confirmed",
                    "createdAt": "2024-12-22T12:53:57.000+00:00",
                    "updatedAt": "2024-12-23T02:56:32.000+00:00",
                    "court": {
                        "id": 2,
                        "name": "Badminton Court 2",
                        "location": "Downtown Sports Center",
                        "pricePerHour": 250,
                        "status": "Not Available",
                        "openingTime": "09.00",
                        "closingTime": "22.00",
                        "type": "Badminton",
                        "createdAt": "2024-12-22T12:28:16.000+00:00",
                        "updatedAt": "2024-12-23T02:37:48.000+00:00"
                    },
                    "user": {
                        "id": 2,
                        "username": "jake_sim",
                        "createdAt": "2024-12-22T07:26:58.000+00:00",
                        "updatedAt": "2024-12-22T07:26:58.000+00:00"
                    }
                },
                {
                    "id": 3,
                    "userId": 2,
                    "courtId": 3,
                    "bookingDate": "2024-12-15T00:00:00.000+00:00",
                    "startTime": "12.00",
                    "endTime": "13.00",
                    "status": "confirmed",
                    "createdAt": "2024-12-22T12:53:57.000+00:00",
                    "updatedAt": "2024-12-22T12:53:57.000+00:00",
                    "court": {
                        "id": 3,
                        "name": "Badminton Court 3",
                        "location": "Eastside Gym",
                        "pricePerHour": 300,
                        "status": "Available",
                        "openingTime": "07.00",
                        "closingTime": "21.00",
                        "type": "Badminton",
                        "createdAt": "2024-12-22T12:28:16.000+00:00",
                        "updatedAt": "2024-12-22T12:28:16.000+00:00"
                    },
                    "user": {
                        "id": 2,
                        "username": "jake_sim",
                        "createdAt": "2024-12-22T07:26:58.000+00:00",
                        "updatedAt": "2024-12-22T07:26:58.000+00:00"
                    }
                },
                {
                    "id": 10,
                    "userId": 2,
                    "courtId": 10,
                    "bookingDate": "2024-12-18T00:00:00.000+00:00",
                    "startTime": "14.00",
                    "endTime": "15.00",
                    "status": "confirmed",
                    "createdAt": "2024-12-22T12:53:57.000+00:00",
                    "updatedAt": "2024-12-22T12:53:57.000+00:00",
                    "court": {
                        "id": 10,
                        "name": "Tennis Court 5",
                        "location": "Westside Arena",
                        "pricePerHour": 700,
                        "status": "Available",
                        "openingTime": "06.00",
                        "closingTime": "20.00",
                        "type": "Tennis",
                        "createdAt": "2024-12-22T12:28:16.000+00:00",
                        "updatedAt": "2024-12-22T12:28:16.000+00:00"
                    },
                    "user": {
                        "id": 2,
                        "username": "jake_sim",
                        "createdAt": "2024-12-22T07:26:58.000+00:00",
                        "updatedAt": "2024-12-22T07:26:58.000+00:00"
                    }
                },
                {
                    "id": 12,
                    "userId": 2,
                    "courtId": 1,
                    "bookingDate": "2024-12-25T00:00:00.000+00:00",
                    "startTime": "15:00:00",
                    "endTime": "16:00:00",
                    "status": "confirmed",
                    "createdAt": "2024-12-22T13:43:52.000+00:00",
                    "updatedAt": "2024-12-22T13:43:52.000+00:00",
                    "court": {
                        "id": 1,
                        "name": "Test Badminton1",
                        "location": "Pompeii",
                        "pricePerHour": 1000,
                        "status": "Available",
                        "openingTime": "08.30",
                        "closingTime": "23.30",
                        "type": "Tennis",
                        "createdAt": "2024-12-22T12:28:16.000+00:00",
                        "updatedAt": "2024-12-23T11:10:38.000+00:00"
                    },
                    "user": {
                        "id": 2,
                        "username": "jake_sim",
                        "createdAt": "2024-12-22T07:26:58.000+00:00",
                        "updatedAt": "2024-12-22T07:26:58.000+00:00"
                    }
                },
                {
                    "id": 13,
                    "userId": 2,
                    "courtId": 8,
                    "bookingDate": "2024-12-25T00:00:00.000+00:00",
                    "startTime": "15.00",
                    "endTime": "16.00",
                    "status": "confirmed",
                    "createdAt": "2024-12-22T13:44:46.000+00:00",
                    "updatedAt": "2024-12-22T13:44:46.000+00:00",
                    "court": {
                        "id": 8,
                        "name": "Tennis Court 3",
                        "location": "Eastside Gym",
                        "pricePerHour": 600,
                        "status": "Available",
                        "openingTime": "07.00",
                        "closingTime": "21.00",
                        "type": "Tennis",
                        "createdAt": "2024-12-22T12:28:16.000+00:00",
                        "updatedAt": "2024-12-22T12:28:16.000+00:00"
                    },
                    "user": {
                        "id": 2,
                        "username": "jake_sim",
                        "createdAt": "2024-12-22T07:26:58.000+00:00",
                        "updatedAt": "2024-12-22T07:26:58.000+00:00"
                    }
                },
                {
                    "id": 16,
                    "userId": 2,
                    "courtId": 1,
                    "bookingDate": "2024-12-25T00:00:00.000+00:00",
                    "startTime": "06.00",
                    "endTime": "07.00",
                    "status": "confirmed",
                    "createdAt": "2024-12-22T13:56:36.000+00:00",
                    "updatedAt": "2024-12-22T13:56:36.000+00:00",
                    "court": {
                        "id": 1,
                        "name": "Test Badminton1",
                        "location": "Pompeii",
                        "pricePerHour": 1000,
                        "status": "Available",
                        "openingTime": "08.30",
                        "closingTime": "23.30",
                        "type": "Tennis",
                        "createdAt": "2024-12-22T12:28:16.000+00:00",
                        "updatedAt": "2024-12-23T11:10:38.000+00:00"
                    },
                    "user": {
                        "id": 2,
                        "username": "jake_sim",
                        "createdAt": "2024-12-22T07:26:58.000+00:00",
                        "updatedAt": "2024-12-22T07:26:58.000+00:00"
                    }
                },
                {
                    "id": 17,
                    "userId": 2,
                    "courtId": 10,
                    "bookingDate": "2024-12-18T00:00:00.000+00:00",
                    "startTime": "06.00",
                    "endTime": "07.00",
                    "status": "confirmed",
                    "createdAt": "2024-12-23T03:12:53.000+00:00",
                    "updatedAt": "2024-12-23T03:12:53.000+00:00",
                    "court": {
                        "id": 10,
                        "name": "Tennis Court 5",
                        "location": "Westside Arena",
                        "pricePerHour": 700,
                        "status": "Available",
                        "openingTime": "06.00",
                        "closingTime": "20.00",
                        "type": "Tennis",
                        "createdAt": "2024-12-22T12:28:16.000+00:00",
                        "updatedAt": "2024-12-22T12:28:16.000+00:00"
                    },
                    "user": {
                        "id": 2,
                        "username": "jake_sim",
                        "createdAt": "2024-12-22T07:26:58.000+00:00",
                        "updatedAt": "2024-12-22T07:26:58.000+00:00"
                    }
                },
                {
                    "id": 18,
                    "userId": 2,
                    "courtId": 10,
                    "bookingDate": "2024-12-18T00:00:00.000+00:00",
                    "startTime": "06.00",
                    "endTime": "07.00",
                    "status": "confirmed",
                    "createdAt": "2024-12-23T03:17:38.000+00:00",
                    "updatedAt": "2024-12-23T03:17:38.000+00:00",
                    "court": {
                        "id": 10,
                        "name": "Tennis Court 5",
                        "location": "Westside Arena",
                        "pricePerHour": 700,
                        "status": "Available",
                        "openingTime": "06.00",
                        "closingTime": "20.00",
                        "type": "Tennis",
                        "createdAt": "2024-12-22T12:28:16.000+00:00",
                        "updatedAt": "2024-12-22T12:28:16.000+00:00"
                    },
                    "user": {
                        "id": 2,
                        "username": "jake_sim",
                        "createdAt": "2024-12-22T07:26:58.000+00:00",
                        "updatedAt": "2024-12-22T07:26:58.000+00:00"
                    }
                },
                {
                    "id": 19,
                    "userId": 2,
                    "courtId": 10,
                    "bookingDate": "2024-12-25T00:00:00.000+00:00",
                    "startTime": "06.00",
                    "endTime": "07.00",
                    "status": "confirmed",
                    "createdAt": "2024-12-23T03:18:11.000+00:00",
                    "updatedAt": "2024-12-23T03:18:11.000+00:00",
                    "court": {
                        "id": 10,
                        "name": "Tennis Court 5",
                        "location": "Westside Arena",
                        "pricePerHour": 700,
                        "status": "Available",
                        "openingTime": "06.00",
                        "closingTime": "20.00",
                        "type": "Tennis",
                        "createdAt": "2024-12-22T12:28:16.000+00:00",
                        "updatedAt": "2024-12-22T12:28:16.000+00:00"
                    },
                    "user": {
                        "id": 2,
                        "username": "jake_sim",
                        "createdAt": "2024-12-22T07:26:58.000+00:00",
                        "updatedAt": "2024-12-22T07:26:58.000+00:00"
                    }
                }
            ]
        }
        ```
        
    - **✅ Response 404 [No bookings for that user]**
        
        ```jsx
        {
            "message": "No bookings found for this user"
        }
        ```
        
    
- **`[GET]` Retrieve a booking detail**
    
    
    | Description | List all bookings  |
    | --- | --- |
    | URL | [http://s671int511v016.sit.kmutt.ac.th:3333](http://s671int511v016.sit.kmutt.ac.th:3333/)/api/bookings/{bookingId} |
    | Auth Required | Bearer {{token}} |
    - **✅ Response 200**
        
        ```jsx
        {
            "data": [
                {
                    "id": 1,
                    "userId": 2,
                    "courtId": 10,
                    "bookingDate": "2024-12-25T00:00:00.000+00:00",
                    "startTime": "15.00",
                    "endTime": "16.00",
                    "status": "canceled",
                    "createdAt": "2024-12-22T12:53:57.000+00:00",
                    "updatedAt": "2024-12-23T03:28:35.000+00:00"
                }
            ]
        }
        ```
        
    
- **`[POST]` Create a new booking**
    
    
    | Description | Make a new booking in DB |
    | --- | --- |
    | URL | [http://s671int511v016.sit.kmutt.ac.th:3333](http://s671int511v016.sit.kmutt.ac.th:3333/)/api/bookings/create |
    | Auth Required | Bearer {{token}} |
    - **Request Body**
        
        ```json
        {
            "courtId": 8,
            "userId":2,
            "bookingDate": "2024-12-25",
            "startTime": "15.00",
            "endTime": "16.00",
            "status": "confirmed"
        }
        ```
        
    - **✅ Response 201**
        
        ```jsx
        {
            "message": "Booking created successfully",
            "data": {
                "userId": 1,
                "courtId": 8,
                "bookingDate": "2024-12-25",
                "startTime": "15.00",
                "endTime": "16.00",
                "status": "confirmed",
                "createdAt": "2024-12-23T11:26:01.717+00:00",
                "updatedAt": "2024-12-23T11:26:01.717+00:00",
                "id": 22
            }
        }
        ```
        
    - **✅ Response 400**
        
        ```jsx
        {
            "message": "Failed to create booking",
            "error": "insert into `bookings` (`booking_date`, `court_id`, `created_at`, `end_time`, `start_time`, `status`, `updated_at`, `user_id`) values ('2024-12-25', 20, '2024-12-23 11:26:50', '16.00', '15.00', 'confirmed', '2024-12-23 11:26:50', 1) - Cannot add or update a child row: a foreign key constraint fails (`smashcourt`.`bookings`, CONSTRAINT `bookings_court_id_foreign` FOREIGN KEY (`court_id`) REFERENCES `courts` (`id`) ON DELETE CASCADE)"
        }
        ```
        
- **`[PUT]` Update a booking details**
    
    
    | Description | Update a booking detail in DB |
    | --- | --- |
    | URL | [http://s671int511v016.sit.kmutt.ac.th:3333](http://s671int511v016.sit.kmutt.ac.th:3333/)/api/bookings/{bookingId} |
    | Auth Required | Bearer {{token}} |
    - **Request Body**
        
        ```json
        {
            "bookingDate": "2024-12-20",
            "startTime": "15.00",
            "endTime": "16.00",
            "status": "confirmed",
            "courtId": 10,
            "userId" :2
        }
        ```
        
    - **✅ Response 200**
        
        ```jsx
        {
            "message": "Booking updated successfully",
            "booking": {
                "id": 1,
                "userId": 2,
                "courtId": 10,
                "bookingDate": "2024-12-20",
                "startTime": "15.00",
                "endTime": "16.00",
                "status": "confirmed",
                "createdAt": "2024-12-22T12:53:57.000+00:00",
                "updatedAt": "2024-12-23T11:34:11.985+00:00"
            }
        }
        ```
        
    - **✅ Response 404 [Court not found]**
        
        ```jsx
        {
            "message": "Court not found"
        }
        ```
        
- **`[DELETE]` Delete a booking**
    
    
    | Description | Delete a booking  in DB |
    | --- | --- |
    | URL | [http://s671int511v016.sit.kmutt.ac.th:3333](http://s671int511v016.sit.kmutt.ac.th:3333/)/api/bookings/{bookingId} |
    | Auth Required | Bearer {{token}} |
    - **✅ Response 200**
        
        ```jsx
        {
            "message": "Delete success!"
        }
        ```
        
    - **✅ Response 400 [Booking ID is not exist in DB or Booking ID is incorrect]**
        
        ```jsx
        {
            "message": "Failed to delete booking",
            "error": "Row not found"
        }
        ```