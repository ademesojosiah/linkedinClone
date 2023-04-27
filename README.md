# OURPASS_CAPSTONE

Oupass Backend task

---

## Stack

<div align="center">

<a href="">![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)</a>
<a href="">![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)</a>
<a href="">![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)</a>
<a href="">![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)</a>

</div>

<div align="center">

<a href="">![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)</a>
<a href="">![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)</a>

</div>

## Useful Links.

- [Postman Documentation](https://documenter.getpostman.com/view/26999767/2s93Y6sJkQ)

---

## Basic Features

- Login
- Registration
- Inventory List
- Inventory creation
- Unit test case for all functions and apis

---

## User

| field            | data_type | constraints      |
| ---------------- | --------- | ---------------- |
| email            | string    | required, unique |
| username         | string    | required, unique |
| displayName      | string    | required         |
| password         | string    | required         |
| confirm_password | string    | required         |

---

### Signup User

- Route: auth/register
- Method: POST
- Body:

```
{
    "name": "Janetty Doellyy",
    "businessName": "TellyPastarp Inc",
    "email": "tellyourb@gmail.com",
    "phoneNumber": "0990498009920",
    "password": "password23",

```

- Responses

Success

```javascript
{
    "status": "success",
    "message": "Account Creation Successful!",
    "data": {
        "data": {
            "name": "Janetty Doellyy",
            "businessName": "TellyPastarp Inc",
            "email": "tellyourb@gmail.com",
            "phoneNumber": "0990498009920",
            "id": "03a2d279-7b86-464b-9b49-b7a2f0cc8b46",
            "createdAt": "1682332024866"
        },
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwM2EyZDI3OS03Yjg2LTQ2NGItOWI0OS1iN2EyZjBjYzhiNDYiLCJmdWxsTmFtZSI6IkphbmV0dHkgRG9lbGx5eSIsImVtYWlsIjoidGVsbHlvdXJiQGdtYWlsLmNvbSIsImlhdCI6MTY4MjMzMjA0NiwiZXhwIjoxNjgyMzMzODQ2fQ.zy894ZTwDK3iH7-hnCP0vnhVWnS02vd_jQtzLScIm0A"
    }
}
```

- Response statusCodes

```javascript
  - 201: success || Created
  - 409: error || Conflict Error
  - 400: error || Bad Request
  - 500: error || Internal Server Error
```

---

### Login User

- Route: auth/login
- Method: POST
- Body:

```
{
    "email": "janetdoe@gmail.com",
    "password": "password"
}
```

- Responses

Success

```
{
    "status": "success",
    "message": "Login Successful",
    "data": {
        "payload": {
            "userId": "4fb2ff09-fa9d-4621-91e1-0d6ec5d089cf",
            "fullName": "Janet Doe",
            "email": "janetdoe@gmail.com"
        },
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0ZmIyZmYwOS1mYTlkLTQ2MjEtOTFlMS0wZDZlYzVkMDg5Y2YiLCJmdWxsTmFtZSI6IkphbmV0IERvZSIsImVtYWlsIjoiamFuZXRkb2VAZ21haWwuY29tIiwiaWF0IjoxNjgyNDExNTA5LCJleHAiOjE2ODI0MTMzMDl9.N36xJBna2geYixgjj7HRJelCiaqco9akdjn0sYsBOtE"
    }
}
```

---

### Inventory

| field           | data_type | constraints | enums            |
| --------------- | --------- | ----------- | ---------------- |
| ProductName     | string    | required    |                  |
| ProductCategory | enums     | required    | enum1,enum2      |
| OrderType       | enums     | required    | enum1,enum2      |
| sellingPrice    | number    | required    |                  |
| costPrice       | number    | required    |                  |
| quantityInStock | number    | required    |                  |
| discountType    | enums     | required    | fixed,percentage |
| discountValue   | number    | required    |                  |
| expiryDate      | Date      | optional    |                  |
| returnPolicy    | boolean   | required    |                  |
| dateAdded       | Date      | required    |                  |
| imageUrl        | imagepath | optional    |                  |
| status          | enums     | required    |  Draft,Published |

---

## Inventory Routes

---

### create an inventory -Pubished (logged in users only )

- Route: /inventory/publish
- Method: POST
- Header
  -authorization : Bearer {token}
- Body: Form data

  | KEY             | VALUE                                                    |
  | --------------- | -------------------------------------------------------- |
  | productName     | 3d printer                                               |
  | sellingPrice    | 56                                                       |
  | costPrice       | 67                                                       |
  | quantityInStock | 4                                                        |
  | discountType    | percentage                                               |
  | discountValue   | 20                                                       |
  | expiryDate      | 04/07/2021                                               |
  | returnPolicy    | false                                                    |
  | dateAdded       | 04/07/2021                                               |
  | imageUrl        | /C:/Users/josiah/Pictures/Screenshots/Screenshot (3).png |
  | imageUrl        | /C:/Users/josiah/Pictures/Screenshots/Screenshot (1).png |
  | status          | Published                                                |
- Responses

Success

```
{
    "productName": "3d printer",
    "productCategory": "gadgets"
    "sellingPrice": "56",
    "costPrice": "67",
    "quantityInStock": "4",
    "discountType": "percentage",
    "orderType": "purchase",
    "discountValue": "20",
    "expiryDate": "04/07/2021",
    "productLongDescription": "jshbdoiawbibd",
    "returnPolicy": "false",
    "imageUrl": [
        "C:\\Users\\USER\\Desktop\\jojo files\\ourpass_capstone\\images\\9f3e0f33-428c-41ad-98ca-3720e141346d.PNG",
        "C:\\Users\\USER\\Desktop\\jojo files\\ourpass_capstone\\images\\51289ba0-8fb8-4ccd-ac90-4ab0e5e0cd42.PNG"
    ],
    "status": "Published",
    "dateAdded": "04/07/2021",
    "user": {
        "id": "4fb2ff09-fa9d-4621-91e1-0d6ec5d089cf",
        "createdAt": "1682126367497",
        "name": "Janet Doe",
        "businessName": "OurPass Ltd",
        "email": "janetdoe@gmail.com",
        "phoneNumber": "08198485980"
    },
    "userId": "4fb2ff09-fa9d-4621-91e1-0d6ec5d089cf",
    "id": "64b25a22-eaea-48f9-9e59-bcadd068d58d",
    "createdAt": "1682411981927",
}
```


---

### Edit post (logged in users only )

- Route: /inventory/:inventoryId
- Method: patch
- Header
  -authorization : Bearer {token}
- Body: Form data

  | KEY          | VALUE                                                     |
  | ------------ | --------------------------------------------------------- |
  | sellingPrice | 56                                                        |
  | media_url    | /C:/Users/josiah/Pictures/Screenshots/Screenshot (15).png |

- Responses

Success

```
{
    "generatedMaps": [],
    "raw": [],
    "affected": 1
}
```

---

### Delete an inventory (logged in users only )

- Route: /inventory/:inventoryId
- Method: DELETE
- Header
  -authorization : Bearer {token}
- Responses

Success

```
{
    "raw": [],
    "affected": 1
}


```

---

### Get all Inventories ( users only )

- Route: /inventory/all/
- Method: GET
- Header:
  -authorization : Bearer {token}
- Query params:
  - status (default: Published )- Published, Draft
  - productCategory - enum 1, enum2
  - orderType - enum 1, enum2
  - productName - enum 1, enum2
- Responses

Success

```
{
 status: true,
 blog:[]
}
```

---
### Get all Inventories ( admin )

- Route: /inventory/admin/all
- Method: GET
- Header:
  -authorization : Bearer {token}
- Query params:
  - status (default: Published )- Published, Draft
  - productCategory - enum 1, enum2
  - orderType - enum 1, enum2
  - productName - enum 1, enum2

- Responses

Success

```
{
 status: true,
 blog:[]
}
```

---

### Get inventory by id (logged in users only )

- Route: /inventory/:inventoryId
- Method: GET
- Header
  -authorization : Bearer {token}
- Responses

Success

```
{
    "id": "ae38936d-c5d4-4ccf-927f-8a126219350b",
    "createdAt": "1682413093108",
    "productName": "3d printer",
    "productCategory": "automobile",
    "sellingPrice": 1000000,
    "costPrice": 67,
    "quantityInStock": 4,
    "discountType": "percentage",
    "orderType": "out of stock",
    "discountValue": 20,
    "expiryDate": "2021-04-06T22:00:00.000Z",
    "productLongDescription": "jshbdoiawbibd",
    "returnPolicy": false,
    "imageUrl": [
        "C:\\Users\\USER\\Desktop\\jojo files\\ourpass_capstone\\images\\f6645584-6b4b-4337-9c7f-73ff1ef38dc4.PNG"
    ],
    "status": "Draft",
    "dateAdded": "2021-04-06T22:00:00.000Z",
    "userId": "4fb2ff09-fa9d-4621-91e1-0d6ec5d089cf",
    "user": {
        "id": "4fb2ff09-fa9d-4621-91e1-0d6ec5d089cf",
        "createdAt": "1682126367497",
        "name": "Janet Doe",
        "businessName": "OurPass Ltd",
        "email": "janetdoe@gmail.com",
        "phoneNumber": "08198485980"
    }
}
```

## Contributors

- Josiah Ademeso
- Victoria Igbobi Chinecherem
- Ayo Adeleke
- Bliss Abhademere
