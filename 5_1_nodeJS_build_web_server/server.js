const http = require('http');


const PORT = process.env.PORT || 3500;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
} )

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


