# nest-frequentWord

## challenge 
---

Find the word that most appears on the paragraph sended from the request.
---

## Run
---
### Step 1

```
npm install
```


### Step 2

```
npm start
```

### Tests
- Controller
```
npm run test
```

- end to end
```
npm run test:e2e
```


### Requests

- Get paragraph example
```
curl --location -g --request GET 'localhost:3000/frequent?paragraph=Bob hit a ball, the hit BALL flew long after it was hit.&forbidden=["hit"]'
```