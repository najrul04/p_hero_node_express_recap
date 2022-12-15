const express = require("express");
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("First Nodess whewwwww!");
});

const users = [
  { id: 1, name: "Leanne", email: "Sincere@april.biz", phone: "0154796321" },
  { id: 2, name: " Graham", email: "Sincere@april.biz", phone: "015746458" },
  { id: 3, name: "Bell", email: "Sincere@april.biz", phone: "0145637547" },
  { id: 4, name: "Lorenzo", email: "Sincere@april.biz", phone: "0145788647" },
  { id: 5, name: "Donnaruma", email: "Sincere@april.biz", phone: "014587687" },
  { id: 6, name: "Totti", email: "Sincere@april.biz", phone: "0156787678" },
];

app.get("/users", (req, res) => {
  console.log( 'query' ,req.query)
  // filter search by query parameter
  if(req.query.name){
    const search = req.query.name.toLowerCase();
    const matched = users.filter(user => user.name.toLowerCase().includes(search))
    res.send(matched)
  }
  else{
    res.send(users);
  }
  
});

app.get('/user/:id',(req, res) => {
    console.log(req.params)
    const id = parseInt(req.params.id);
    // const user = users[id]
    const user = users.find(u=> u.id === id);
    res.send(user)
}) 

app.post('/user',(req, res)=>{
  console.log( 'request' ,req.body)
  const user = req.body;
  user.id = users.length + 1;
  users.push(user)
  res.send(user)
  
}
)

app.listen(port, () => {
  console.log("Example app listening on port", port);
});
