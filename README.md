# utilityLabsAssignment

First of All Here is the Deployed Link of the backend server of the assignment which is hosted on vercel
--> https://utility-labs-assignment.vercel.app/

INSTALLATION PROCESS
1. Clone the repo in your local
2. run command in terminal "npm i"
3. now run command "npm run dev" to run it in your local environment it will work on PORT 4000 as it is mentioned in config file ( you can check the env file for environment variables)


and here are the Endpoints of all the api's I have created

******-------- AUTH API'S START ------******

POST /api/auth/register        --> https://utility-labs-assignment.vercel.app/api/auth/register or For Local Environment --> http://localhost:4000/api/auth/register </br>
  ----------> sample JSON input for this route <-------------
              {
                  "firstName": "Sachin",
                  "lastName":"Singh",
                  "email":"sachin@gmail.com",
                  "password":"sachin",
                  "role":"buyer"
              }
POST /api/auth/login           --> https://utility-labs-assignment.vercel.app/api/auth/login or For Local Environment --> http://localhost:4000/api/auth/login
  ----------> sample JSON input for this route <-------------
              {
                  "email":"sachin@gmail.com",
                  "password": "sachin"
              }
******-------- AUTH API'S ENDED ------******

******-------- BUYER API'S START------******

GET /api/buyer/list-of-sellers --> https://utility-labs-assignment.vercel.app/api/buyer/list-of-sellers or For Local Environment --> http://localhost:4000/api/buyer/list-of-sellers
 
GET /api/buyer/seller-catalog/:seller_id --> https://utility-labs-assignment.vercel.app/api/buyer/seller-catalog/{seller_id} or For Local Environment --> http://localhost:4000/api/buyer/seller-catalog/{seller_id}

POST /api/buyer/create-order/:seller_id -->  https://utility-labs-assignment.vercel.app/api/buyer/create-order/{seller_id} or For Local Environment --> http://localhost:4000/api/buyer/create-order/{seller_id}
 ----------> sample JSON input for this route <-------------
              {
                  "items":[
                      {
                          "orderName":"Phone",
                          "orderPrice":5555
                      },
                       {
                          "orderName":"Speaker",
                          "orderPrice":879
                      },
                       {
                          "orderName":"Ginger",
                          "orderPrice":550
                      }
                    
                  ]
              }
******-------- BUYER API'S ENDED------******

******-------- SELLER API'S START------******

POST /api/seller/create-catalog --> https://utility-labs-assignment.vercel.app/api/seller/create-catalog  or For Local Environment --> http://localhost:4000/api/seller/create-catalog
 ----------> sample JSON input for this route <-------------
              {
              "items": [
                  {
                      "catalogName": "Item 1",
                      "catalogDescription": "Description for Item 1",
                      "catalogPrice": 19.99
                  },
                  {
                      "catalogName": "Item 2",
                      "catalogDescription": "Description for Item 2",
                      "catalogPrice": 29.99
                  },
                  {
                      "catalogName": "Item 3",
                      "catalogDescription": "Description for Item 3",
                      "catalogPrice": 39.99
                  },
                  {
                      "catalogName": "new Item",
                      "catalogDescription": "Description for Item 1",
                      "catalogPrice": 19.99
                  }
              ]
          }

GET /api/seller/orders --> https://utility-labs-assignment.vercel.app/api/seller/orders  or For Local Environment --> http://localhost:4000/api/seller/orders

******-------- SELLER API'S ENDED------******
