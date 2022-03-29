const axios = require('axios');
axios({
    method: 'get',
    responseType: 'stream'
  
  })
    .then(function (response) {
    response.data.map(function (user) {
        console.log(user);
        return user;
        
    });
     
      }); 