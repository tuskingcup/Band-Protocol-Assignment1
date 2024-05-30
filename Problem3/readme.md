# Transaction Broadcasting and Monitoring Client

## Installation
### Prerequisites
- Node.js
- npm (Node Package Manager)
### Install Dependencies
To use this module, you need to install axios:
```
npm install
```

## Example of usage
[see the example code](./main.js)


### Run node
```
node main
```

### Handling Transaction Status
- CONFIRMED: The transaction has been successfully processed. You can take appropriate actions, like updating a database or notifying a user.
- FAILED: The transaction failed. You may want to log this and potentially alert the user or retry the transaction.
- PENDING: The transaction is still being processed. The monitoring function will continue to check the status at the specified interval.
- DNE: The transaction does not exist. This might indicate an error in the transaction hash or an issue on the server side.
