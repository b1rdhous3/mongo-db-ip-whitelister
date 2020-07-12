# MongoDb.com IP Whitelister

A Network Whitelister for Mongodb.com. Uses current IP Address resolved from ipify.org.

### Installation
```sh
$ npm install --save mongodb-ip-whitelister
```

### Usage
```
const mongoDbIpWhitelister = require("./index.js");

mongoDbIpWhitelister(
  "APIusername",
  "APIpassword",
  "GroupID from Database",
  function (result) {
    console.log(result.detail);
  }
);
```

### Changelog

1.0.0 (2020-07-12): First Version

