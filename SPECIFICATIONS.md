## Json File (Acting as Database)

Json files [db.json](./data/db.json) contains the following collections

1. users

```
{
  "users": [
    {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
  ]
}
```

2. todos

```
{
  "todos": [
    {
      "userId": 1,
      "id": 15,
      "title": "ab voluptatum amet voluptas",
      "completed": true
    }
  ]
}
```

3. history

## Available Routes

You can also check [routes.json](./data/routes.json) & [servicesUrl](./src/configs/servicesUrl.ts)

1. `/api/users`
2. `/api/todos`
3. `/api/todos?userId=:id`
4. `/api/todos/:id`
5. `/api/history`
6. `/api/history?userId=:id`
