let users = [
    {id:1,name:"asdf", bio:"letters"},
    {id:2,name:"jo", bio:"schmo"},
    {id:1,name:"elon musk", bio:"spacebro"}
  
]

function getUsers(){
    return users;
}

function findById(id) {
    return users.find((u) => u.id ===id);
  }

  function createUser(data){
      const payload = {
          id: String(users.length + 1)
          ...data,
      }

users.push(payload)
return payload

  }

  function updateUser(id, data){
      const index = users.findIndex((u) => u.id ===id);
      users[index] = {
          ...users[index],
          ...data,
      };
      return users[index];
  }

function deleteuser(id, data){
    const index = users
}



