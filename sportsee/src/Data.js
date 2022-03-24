const axios = require('axios');


axios({
    method: 'get',
    url: 'http://localhost:3000/user',
    responseType: 'stream'
  })
    .then(function (response) {
    response.data.map(function (user) {
        console.log(user);
        return user;
        
    });
     
      }); 