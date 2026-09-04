
Backend de uma aplicação para cadastrar usuários, projetos e tarefas. O projeto utiliza Node.js, Express, MongoDB, Mongoose, JWT, REST e GraphQL.


```bash
npm install
npm run setup
npm run dev
```


O sistema possui três entidades:

- um usuário pode possuir vários projetos;
- cada projeto pertence a um usuário;
- um projeto pode possuir várias tarefas;
- cada tarefa pertence a um projeto.


No começo do arquivo requisicoes.http existem variáveis usadas nas requisições. A baseUrl indica onde o servidor está rodando. Depois do cadastro ou login, é necessário copiar o token recebido e colocar na variável token. Quando um projeto é criado, copiamos o _id retornado e colocamos em projectId. Assim, não precisa alterar todas as requisições manualmente, porque elas usam esses valores automaticamente
