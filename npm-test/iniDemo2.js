const fs = require("fs"),
  ini = require("ini");

var config = ini.parse(fs.readFileSync("./config.ini", "utf-8"));

console.log(config);
config.scope = "local";
config.database.database = "use_another_database";
config.paths.default.tmpdir = "/tmp";
delete config.paths.default.datadir;
config.paths.default.array.push("fourth value");

console.log("modified ini string =====");
console.log(ini.stringify(config, "LOL"));
fs.writeFileSync(
  "./config_modified.ini",
  ini.stringify(config, { section: "LOL", whitespace: true })
);

var config_modified = ini.parse(
  fs.readFileSync("./config_modified.ini", "utf-8")
);
console.log(typeof config_modified);

console.log(config_modified.LOL.paths.default);
