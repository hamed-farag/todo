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

```
{
  "history": [
    {
      "id": 1224505355,
      "user": {
        "id": 1,
        "name": "Leanne Graham"
      },
      "oldItem": {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      "method": "delete",
      "createAt": "2022-07-27T22:33:07.014Z"
    },
    {
      "id": 251757977,
      "user": {
        "id": 1,
        "name": "Leanne Graham"
      },
      "oldItem": {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      "newItem": {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": true
      },
      "method": "put",
      "createAt": "2022-07-27T22:33:09.140Z"
    },
    {
      "id": 1264619460,
      "user": {
        "id": 1,
        "name": "Leanne Graham"
      },
      "oldItem": {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
      },
      "newItem": {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": false
      },
      "method": "put",
      "createAt": "2022-07-27T22:33:10.566Z"
    },
    {
      "id": 354323401,
      "user": {
        "id": 1,
        "name": "Leanne Graham"
      },
      "oldItem": {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
      },
      "newItem": {
        "userId": 1,
        "id": 5,
        "title": "todo item",
        "completed": false
      },
      "method": "put",
      "createAt": "2022-07-27T22:33:17.410Z"
    },
    {
      "id": 380545191,
      "user": {
        "id": 1,
        "name": "Leanne Graham"
      },
      "newItem": {
        "id": 1225851203,
        "title": "My new todo item",
        "completed": false,
        "userId": 1
      },
      "method": "post",
      "createAt": "2022-07-27T22:33:52.207Z"
    }
  ]
}
```

## Available Routes

You can also check [routes.json](./data/routes.json) & [servicesUrl](./src/configs/servicesUrl.ts)

1. `/api/users`
2. `/api/todos`
3. `/api/todos?userId=:id`
4. `/api/todos/:id`
5. `/api/history`
6. `/api/history?userId=:id`
