//importando o package express
import express from "express";
import cors from "cors";
import controllerUsuarios from "./controllers/controller.usuarios.js";
import controllerMercados from "./controllers/controller.mercados.js";
import controllerProdutos from "./controllers/controller.produtos.js";
import controllerPedidos from "./controllers/controller.pedidos.js";
import BasicAuth from "./config/basic-auth.js";

<Page>
    <Text variant="h2" className="mb-6">
        Password-protected page demo
    </Text>
    <List>
        <li>username: nutrifit</li>
        <li>password: 123456</li>
    </List>
</Page>

//não modificar a variavel e instanciando a variável e recebendo o package express
const app = express();

//Middleware JSON
app.use(express.json());

//Middleware CORS
app.use(cors());

// Basic Auth
app.use(BasicAuth); //para continuar a execução

//Controllers
app.use(controllerUsuarios);
app.use(controllerMercados);
app.use(controllerProdutos);
app.use(controllerPedidos);

//método para criar a lista na porta 
app.listen(3000, function(){
    console.log('Servidor no ar.');
});





