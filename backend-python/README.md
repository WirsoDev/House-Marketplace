# Build with python | Flask
<br>

### Run Server:
python -m venv venv

pip install -r requirements.txt

python main.py

<br>
<br>

### Api endpoints
### "Running on localhost:5000"
<br>

#### localhost:5000/
```
{
    method: GET,
    description: Ping server
}
```

#### localhost:5000/all
```
{
    method: GET,
    description: Get all properties
}
```

#### localhost:5000/add
```
{
    method: POST,
    description: Add propertie,
    required body:{
        name:"name",
        units:"units",
        img:"img"
    }
}
```

#### localhost:5000/update
```
{
    method: PUT,
    description: Update propertie by id
    body:{
        id:"id
        name:"name",    //optional
        units:"units",  //optional
        img:"img"       //optional
    }
}
```

#### localhost:5000/remove/:id
```
{
    method: GET,
    description: Update propertie by id
}
```

#### localhost:5000/filterby/:qnt
```
{
    method: GET,
    description: Update propertie by id
    if qnt == 0: returns properties without bedrooms
}
```

