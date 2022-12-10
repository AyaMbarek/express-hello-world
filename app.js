const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


const html = `
<!doctype html>
<html>
   <head>
      <script>
         function somme(){
             var nbr1, nbr2, sum;
             nbr1 = Number(document.getElementById("nbr1").value);
             nbr2 = Number(document.getElementById("nbr2").value);
             sum = nbr1 + nbr2;
             document.getElementById("sum").value = sum;
         }
      </script>
   </head>
   <body>
      <input id="nbr1"> + <input id="nbr2">
      <button onclick="somme()">Calculer la somme</button>
      = <input id="sum">
   </body>
</html>
`
