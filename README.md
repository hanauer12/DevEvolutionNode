API de controle de pedidos e produtos
Esta é uma API que oferece rotas CRUD para pedidos, produtos e dados de clientes. A documentação da API pode ser encontrada neste link: https://documenter.getpostman.com/view/26487953/2s93RKzwAF

Pré-requisitos
Antes de usar a API, é necessário ter as seguintes ferramentas instaladas:

Node.js v18.14.2
PM2
Banco de dados MongoDB
Instalação
Clone este repositório em sua máquina:
bash
Copy code
git clone https://github.com/hanauer12/DevEvolutionNode.git
Instale as dependências:
bash
Copy code
cd DevEvolutionNode
npm install
Certifique-se de que o MongoDB esteja em execução. Se estiver usando o serviço web do MongoDB Atlas, não será necessário fazer nada adicional. Caso contrário, certifique-se de que o MongoDB esteja instalado em sua máquina e em execução.
Uso
Para iniciar a API, execute o seguinte comando na pasta raiz do projeto:

lua
Copy code
pm2 start ecosystem.config.js
A API estará disponível em http://localhost:3000.

Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir um pull request.

Licença
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE.md para obter mais detalhes.
