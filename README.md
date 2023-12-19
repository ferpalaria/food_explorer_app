[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# Requisitos Front-end
1. Implementação das telas de login, página principal, página de detalhes do prato, e outras conforme o layout disponibilizado no Figma.
2. Funcionalidades para visualização de pratos, busca por nome e ingredientes, e interação com os pratos.
3. Suporte para upload de imagens durante o cadastro dos pratos.
    1. Interface de usuário responsiva de acordo com o conceito Mobile First.
4. Implementação de animações e transições para melhorar a experiência do usuário.
5. Integração com a API do back-end para o consumo de dados.
6. Documentação detalhada no README, incluindo instruções de execução do projeto e link de deploy.

# Módulos utilizados
- react-router-dom
- axios
- react

# Avaliação
### Obrigatórios

Atende a todas as especificações na Descrição da Aplicação

Um projeto estruturado, com uma boa organização das pastas, divisão de componentes no front-end, etc.

Os dados do admin, do restaurante e dos usuários serão armazenados em um banco de dados.

Os usuários deverão se autenticar para entrar na aplicação através da tela de login, utilizando autenticação JWT. A autenticação deve ser validada com senha.

Funções, variáveis, classes, arquivos, tabelas e todos os outros elementos do código devem ter nomes significativos, de acordo com as boas práticas no mercado;

Usuário e admin podem fazer uma busca tanto pelo nome do prato quanto pelos ingredientes;

O admin irá fazer upload de imagens para cadastrar os pratos.

A aplicação deve ser responsiva, de acordo com o conceito Mobile First que foi aprendido em aula e seguindo o modelo do Figma;

O repositório deverá conter um README bem detalhado tanto no back-end quanto no front-end com link do deploy, previews e instruções para a execução do projeto.

Use os conceitos aprendidos em aula sobre animações e inclua transições e transformações (entre outros exemplos) para deixar a experiência da aplicação mais fluida.

A sua aplicação deverá consumir a sua própria API;

Faça o deploy da sua aplicação (front-end e back-end)
Atende ao modelo proposto no Figma e contém elementos indicativos de ação e estado

### Opcionais

Você pode adicionar quaisquer novas funcionalidades no seu projeto. Se desafie.

O usuário poderá incluir itens no carrinho, clicando no botão incluir. Já a quantidade é controlada pelos botões “-” e “+”.

Ao clicar no botão meu pedido, o usuário será redirecionado para uma tela onde irá ver o seu pedido, a soma e os métodos de pagamento.

O usuário poderá excluir um prato do carrinho e o valor total do pedido deve ser atualizado automaticamente.

O usuário poderá marcar um prato como favorito, basta clicar no coração que aparece ao lado de cada um;

O admin irá visualizar e controlar o status de cada pedido, por um campo do tipo select. Os pedidos irão aparecer em uma tabela ao clicar em Pedidos;
Já que o projeto está em dark mode, você pode aplicar a versão light mode;