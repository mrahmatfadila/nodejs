import https from "https";

 const endpoint = "https://eojzsqdterpb007.m.pipedream.net";
 const request = https.request(endpoint, {
     method: "POST",
     headers: {
         "Content-Type": "application/json",
         "Accept" : "application/json",
     }
 }, (response) => {
    response.addListener("data", (data) => {
        console.info(`Receive data : ${data.toString()}`);
    })
 });

 const body = JSON.stringify({
     name: "Rahmat",
     age: 21
 })

 request.write(body);
 request.end();