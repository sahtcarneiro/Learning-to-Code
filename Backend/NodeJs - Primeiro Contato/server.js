const http = require("http");

http
    .createServer((request, response) => {
        response.writeHead(200, { "Content-Type": "application/kson"});

        if ( request.url === '/produto' ) {
            response.end(JSON.stringify ({
                message: "Rota de produto"
            }))
        }

        if ( request.url === '/usuario' ) {
            response.end(JSON.stringify ({
                message: "Rota de usuário"
            }))
        }
    })
    .listen(4001, () => console.log("Servidor está rodando na porta 4001"));
