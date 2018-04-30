require("./bundle-config");
var application = require("application");

application.run({ moduleName: "app-root" });
// code below application.run is never executed on iOS
