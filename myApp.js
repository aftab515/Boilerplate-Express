let express = require("express");
let app = express();
// The below line will be used in Task No. 6 to Onward
require('dotenv').config(); 

// Task Node. 1

// console.log("Hello World")


// Task Node. 2

// app.get('/', (req, res) => {
//     res.send('Hello Express');
// });

// Task Node. 3

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/views/index.html');
// });

// Task Node. 4

// app.use("/public", express.static(__dirname + "/public"))
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/views/index.html');
// });


// Task Node. 5

// app.use("/public", express.static(__dirname + "/public"))
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/views/index.html');
// });

// app.get("/json", (req, res) => {
//     res.json({"message": "Hello json"});
// })

// Task Node. 6

// app.use('/public', express.static(__dirname + "/public"));

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/views/index.html');
// });

// app.get("/json", (req, res) => {
//     let greeting = 'Hello json';

//     if(process.env.MESSAGE_STYLE == 'uppercase') {
//         greeting = greeting.toUpperCase();
//     }
//     res.json({ message: greeting });
// })

// Task Node. 7

// app.use('/public', express.static(__dirname + '/public'));
// app.use(function(req, res, next) {
//     console.log(req.method + " " + req.path + " - " + req.ip);
//     next();
// });

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/views/index.html');
// });

// app.get('/json', (req, res) => {
//     let greeting = 'Hello json';

//     if(process.env.MESSAGE_STYLE == 'uppercase') {
//         greeting = greeting.toUpperCase();
//     }
//     res.json({ message: greeting });
// })

// Task Node. 8

// app.get(
//     "/now",
//     (req, res, next) => {
//       req.time = new Date().toString();
//       next();
//     },
//     (req, res) => {
//       res.send({
//         time: req.time
//       });
//     }
//   );

// Task Node. 9

// app.get("/:word/echo", (req, res) => {
//     const { word } = req.params;
//     res.json({
//       echo: word
//     });
//   });

// Task Node. 10

// app.get("/name", function(req, res) {
//     var firstName = req.query.first;
//     var lastName = req.query.last;
//     // OR you can destructure and rename the keys
//     var { first: firstName, last: lastName } = req.query;
//     // Use template literals to form a formatted string
//     res.json({
//       name: `${firstName} ${lastName}`
//     });
//   });


// Task Node. 11

// let bodyParser = require("body-parser")
// app.use(bodyParser.urlencoded({extended: false}))

// Task Node. 12

app.use('/public', express.static(__dirname + '/public'));
app.use(function(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', (req, res) => {
  let greeting = 'Hello json';

  if (process.env.MESSAGE_STYLE == 'uppercase') {
    greeting = greeting.toUpperCase();
  }
  res.json({ message: greeting });
})

let bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});


app.post("/name", (req, res) => {
  res.json({ name: req.body.first + " " + req.body.last })
})
module.exports = app;
