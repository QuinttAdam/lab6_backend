module.exports.go = (server) => {
    const Primus = require("primus");
    const primus = new Primus(server, {
      /* options */
    });
  
    //check if connection, then console log
      primus.on("connection", (spark)=> {
        //   console.log("connection 😁");
          //check if data is received, then console log
          spark.on("data", (data) => {
            //   console.log("data 😎", data);
  
              //send data back to all client
              primus.write({ data }); //all
              // spark.write({ data }); //1
              
          });
      });
  };