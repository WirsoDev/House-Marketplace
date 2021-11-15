# Build with mode.js
## Express js
<br>
<br>

### Api endpoints
### "Running on localhost:8000"
<br>

#### localhost:8000/
```
{
    method: GET,
    description: Ping server
}
```
#### localhost:8000/all
```
{
    method: GET,
    description: Get all properties in db
}
```
#### localhost:8000/delete
```
{
    method: DELETE,
    description: Delete a propertie by id
    required body:{
        id:"id"
    }
}
```
#### localhost:8000/add
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
#### localhost:8000/update
```
{
    method: put,
    description: Update propertie by id
    required body (if) :{
        name:"name",
        units:"units",
        img:"img"
    }
}
```
