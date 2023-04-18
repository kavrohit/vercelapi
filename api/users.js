let users = [{name:'Rohit',email:"rohit@gmail.com"},{name:'Kashyap',email:"kashyap@gmail.com"}]

module.exports=(req,res)=>{
  if(req.method==="GET"){
   res.status(200).json(users);
  }
  else if(req.method==="POST"){
    users.push(req.body);
    res.status(200).json(users);
  }
  else if(req.method==='PUT'){
    const {data,index} = req.body;
    users[index] = data;
    res.status(200).json(users);
  }
  else if(req.method==="DELETE"){
    const {index} = req.body;
    users = users.filter((p)=>(_,idx)=> idx !== index);
    res.status(200).json(users);
  }
}