import * as http2 from 'http2';

const options = {
  host: '192.168.43.51',
  port: 10000,
  path: '/hello?key=myKey', // Adjust the key parameter as needed
  method: 'GET',
};

const client = http2.connect('http://192.168.43.51:10000');
const req = client.request({
    ":method": "GET",
    ":path": '/hello',
    "content-type": "application/json",
});


let data = "";

req.on("response", (headers, flags) => {
 for (const name in headers) {
  console.log(`${name}: ${headers[name]}`);
 }

});

req.on("data", chunk => {
 data += chunk;
});
req.on("end", () => {
 console.log(data);
 client.close();
});
req.end();
