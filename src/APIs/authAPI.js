import axios from "axios";


export const loginUser = async (username, password) => {
    console.log(username)
    var data = JSON.stringify({
        
        // "user_id": "demo",
        // "pwd": "12345"
        user_id: username,
        pwd: password
      });

    var config = {
        method: 'post',
      maxBodyLength: Infinity,
        url: 'https://projects.penntelco.com/empire/auth',
        data : data
      };
      
      return new Promise((resolve, reject) => {
        axios(config)
        .then(
            (res => {
                resolve(res)
                console.log(res)
            }
            )
        )
        .catch(err => reject(err))
      })
      
  };