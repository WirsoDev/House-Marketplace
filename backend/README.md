# Build with node.js | express js
<br>

### Run Server:
npm install || npm start
<br>
<br>

### Api endpoints
### "Running on localhost:3000"
<br>

#### localhost:3000/
```
{
    method: GET,
    description: Ping server
}
```
#### localhost:3000/all
```
{
    method: GET,
    description: Get all properties in db
}
```
#### localhost:3000/delete
```
{
    method: DELETE,
    description: Delete a propertie by id
    required body:{
        id:"id"
    }
}
```
#### localhost:3000/add
```
{
    method: post,
    description: Add new propertie
    required body:{
        name:"name",
        units:"units",
        img:"img"
    }
}
```
#### localhost:3000/update
```
{
    method: put,
    description: Update propertie by id
    required body:{
        name:"name",
        units:"units",
        img:"img"
    }
}
```
#### localhost:3000/byroom
```
{
    method: post,
    description: Get properties by number of bedrooms
    required body:{
        "qnt":"{number of rooms}"
    }
}
