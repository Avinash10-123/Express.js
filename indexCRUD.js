import express from "express";


// express get method 

const app = express();


// app.get('/',(req,res)=>{
//     res.send('hello world')
// })

// app.listen(3000, () => {
//   console.log("server is running on http://localhost3000");
// });


// express POST METHOD

// let users=[]
// app.use(express.json())

// app.post('/post',(req,res)=>{
//     const name = req.body
//     users.push(name)
//     res.send(users)
// })


// PUT/update


let users = ['avinash','govind','dudue']
app.use(express.json())
app.put('/put',(req,res)=>{
    const name=req.body
    users.push(name)
    res.send(users)
})


// Delete


// let users = ['messi','leo']
// app.use(express.json())
// app.delete('/',(req,res)=>{
//     const name=req.body
//     users.pop(name)
//     res.send(users)
// })


  app.listen(4000);
  