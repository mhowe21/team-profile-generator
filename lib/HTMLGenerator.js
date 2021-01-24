const fs = require("fs");
const htmlTemlate = require("../src/htmlTemplate");

class GenerateHTML {
  constructor(htmlString) {
    this.htmlString = htmlString;
    //this.fullHTML;
  }

  __genTemplate() {
    return htmlTemlate(this.htmlString);
  }

  __makeFile() {
    fs.writeFile("Team.html", this.__genTemplate(), function (err) {
      if (err) throw err;
      console.log("file Created");
    });
  }
  create() {
    this.__genTemplate();
    this.__makeFile();
  }
}

module.exports = GenerateHTML;
