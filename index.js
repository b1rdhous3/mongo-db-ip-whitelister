const ipify = require("ipify");
var request = require("request");

module.exports = function (user, pass, groupId, callback) {
  ipify({ useIPv6: false }).then(function (ip) {
    var options = {
      uri:
        "https://cloud.mongodb.com/api/atlas/v1.0/groups/" +
        groupId +
        "/whitelist",
      auth: {
        user: user,
        pass: pass,
        sendImmediately: false,
      },
      method: "POST",
      json: [{ ipAddress: ip, comment: "From mongoDbIpWhitelister" }],
    };
    request(options, function (error, response, body) {
      callback(body);
    });
  });
};
