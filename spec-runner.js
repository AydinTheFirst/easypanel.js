import Jasmine from "jasmine";

const jasmine = new Jasmine();
jasmine.loadConfig({
  spec_dir: "tests",
  spec_files: ["**/*.spec.js"],
  random: false,
  failSpecWithNoExpectations: true,
});

jasmine.execute();
