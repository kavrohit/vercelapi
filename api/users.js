module.exports=(req,res)=>{
  if(req.method==="GET"){
    res.json([
      {name:'Rohit',location:"shimla"},
      {name:'Rohit',location:"shimla"}

    ])
  }
  else{
    const {name,location} = req.body;
    res.send({status:"user created",name,location});
  }
}