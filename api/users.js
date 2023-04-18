let users = [{name:'Rohit',email:"rohit@gmail.com"},{name:'Kashyap',email:"kashyap@gmail.com"}]

module.exports=(req,res)=>{
  if(req.method==="GET"){
   res.status(200).json(users);
  }
  else if(req.method==="POST"){
    users.push(req.body);
    // res.send({status:"user created",name,email});
    res.status(200).json(users);
  }

}