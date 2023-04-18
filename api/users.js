module.exports=(req,res)=>{
  if(req.method==="GET"){
    res.json([
      {name:'Rohit',email:"kashyaprkav7@gmail.com"},
      {name:'Kashyap',email:"kashyap69489@gmail.com"}

    ])
  }
  else{
    const {name,email} = req.body;
    res.send({status:"user created",name,email});
  }
}