# Review 

- why break the api into routers?
- endpoints hard to build (update/delete)?
- async/await as an alternative syntax for dealing with promises 

_Code is a communication medium_

Noise vs signal

User <--> [Router -- DataAccess]

Router 
- accept input from clients 
- send responses to clients

Data Access (Models) Layer

- persistence of data (to disk, to db, to external api)
- serve the routing layer

Complexity (this is where bugs hide)
- doing too much in a single unit (function, file, module, component)

const promise = axios.get(url)
- 3 states of a promise 
  1. pending (working on it)
  2. resolved (success) .then(function() { //runs on success })
  3. reject (fail) .catch(function() { // runs on failure })

