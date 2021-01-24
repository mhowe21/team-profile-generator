function htmlTemlate(htmlString) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
      crossorigin="anonymous"
    />
    <title>Team</title>
  </head>
  <body>
    <header class="Document-head">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">My Team</span>
        </div>
      </nav>
    </header>
    <div class="row">
      <div class="col-sm-6"></div>
        ${htmlString}
    </div>

  </body>
</html>

`;
}

module.exports = htmlTemlate;
