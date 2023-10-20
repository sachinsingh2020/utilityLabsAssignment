# utilityLabsAssignment</br>
</br>
First of All Here is the Deployed Link of the backend server of the assignment which is hosted on vercel</br>
--> https://utility-labs-assignment.vercel.app/</br>
</br>
INSTALLATION PROCESS</br>
1. Clone the repo in your local</br>
2. run command in terminal "npm i"</br>
3. now run command "npm run dev" to run it in your local environment it will work on PORT 4000 as it is mentioned in config file ( you can check the env file for environment variables)</br>
</br>
</br>
and here are the Endpoints of all the api's I have created
</br>
******-------- AUTH API'S START ------******</br>
</br>
POST /api/auth/register        --> https://utility-labs-assignment.vercel.app/api/auth/register or For Local Environment --> http://localhost:4000/api/auth/register   </br>
  ----------> sample JSON input for this route <------------- </br>
              {</br>
                  "firstName": "Sachin",</br>
                  "lastName":"Singh",</br>
                  "email":"sachin@gmail.com",</br>
                  "password":"sachin",</br>
                  "role":"buyer"</br>
              }
</br>
POST /api/auth/login           --> https://utility-labs-assignment.vercel.app/api/auth/login or For Local Environment --> http://localhost:4000/api/auth/login </br>
  ----------> sample JSON input for this route <-------------</br>
              {</br>
                  "email":"sachin@gmail.com",</br>
                  "password": "sachin"</br>
              }</br>
</br>
******-------- AUTH API'S ENDED ------******</br>
</br>
******-------- BUYER API'S START------******</br>
</br>
GET /api/buyer/list-of-sellers --> https://utility-labs-assignment.vercel.app/api/buyer/list-of-sellers or For Local Environment --> http://localhost:4000/api/buyer/list-of-sellers</br>
 </br>
GET /api/buyer/seller-catalog/:seller_id --> https://utility-labs-assignment.vercel.app/api/buyer/seller-catalog/{seller_id} or For Local Environment --> http://localhost:4000/api/buyer/seller-catalog/{seller_id}</br>
</br>
POST /api/buyer/create-order/:seller_id -->  https://utility-labs-assignment.vercel.app/api/buyer/create-order/{seller_id} or For Local Environment --> http://localhost:4000/api/buyer/create-order/{seller_id}</br>
 ----------> sample JSON input for this route <-------------</br>
              {</br>
                  "items":[</br>
                      {</br>
                          "orderName":"Phone",</br>
                          "orderPrice":5555</br>
                      },</br>
                       {</br>
                          "orderName":"Speaker",</br>
                          "orderPrice":879</br>
                      },</br>
                       {</br>
                          "orderName":"Ginger",</br>
                          "orderPrice":550</br>
                      }</br>
                    </br>
                  ]</br>
              }</br>
******-------- BUYER API'S ENDED------******</br>
</br>
******-------- SELLER API'S START------******</br>
</br>
POST /api/seller/create-catalog --> https://utility-labs-assignment.vercel.app/api/seller/create-catalog  or For Local Environment --> http://localhost:4000/api/seller/create-catalog</br>
 ----------> sample JSON input for this route <-------------</br>
              {</br>
              "items": [</br>
                  {</br>
                      "catalogName": "Item 1",</br>
                      "catalogDescription": "Description for Item 1",</br>
                      "catalogPrice": 19.99</br>
                  },</br>
                  {</br>
                      "catalogName": "Item 2",</br>
                      "catalogDescription": "Description for Item 2",</br>
                      "catalogPrice": 29.99</br>
                  },</br>
                  {</br>
                      "catalogName": "Item 3",</br>
                      "catalogDescription": "Description for Item 3",</br>
                      "catalogPrice": 39.99</br>
                  },</br>
                  {</br>
                      "catalogName": "new Item",</br>
                      "catalogDescription": "Description for Item 1",</br>
                      "catalogPrice": 19.99</br>
                  }</br>
              ]</br>
          }</br>
</br>
GET /api/seller/orders --> https://utility-labs-assignment.vercel.app/api/seller/orders  or For Local Environment --> http://localhost:4000/api/seller/orders</br>
</br>
******-------- SELLER API'S ENDED------******</br>
</br>
