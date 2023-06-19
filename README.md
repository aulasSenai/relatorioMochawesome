# <h2> Projeto de Automação de Testes com Relatório utilizando as bibliotecas: Mochawesome e Junit </h2>

Este repositório contém o projeto de automação de testes utilizando as bibliotecas Mochawesome e JUnit para geração de relatórios de testes e integração contínua (CI/CD) com o GitHub Actions.

## Objetivo

O objetivo deste projeto é demonstrar a configuração e implementação de testes automatizados para uma aplicação web utilizando as seguintes tecnologias:

- Cypress: Framework de teste end-to-end que permite escrever testes em JavaScript.
- Mochawesome: Biblioteca de relatório que gera relatórios HTML estilizados e detalhados dos resultados dos testes.
- JUnit: Biblioteca de relatório amplamente utilizada para testes unitários, também suportada pelo Cypress para relatórios de testes.

Combinando o Cypress com as bibliotecas Mochawesome e JUnit, é possível gerar relatórios detalhados de fácil leitura e integração contínua com o GitHub Actions para execução automatizada dos testes.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

```
├── cypress
│   ├── e2e
│   ├── fixtures
│   ├── support
│   ├── ...
├── .github/workflows
├── cypress.config
├── .gitignore
├── package.json
├── README.md
└── ...
```

- A pasta `cypress` contém os testes automatizados, organizados em pastas e arquivos dependendo do fluxo de teste.
- A pasta `.github/workflows` contém o arquivo de configuração do GitHub Actions para integração contínua e execução automatizada dos testes.
- O arquivo `.gitignore` especifica quais arquivos devem ser ignorados pelo Git.
- O arquivo `package.json` contém as informações e dependências do projeto.
- O arquivo `README.md` é este documento.

## Como Executar os Testes

Para executar os testes:

1. Clone o repositório em seu ambiente local.
2. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
3. Abra o terminal na pasta raiz do projeto.
4. Execute o comando `npm install` para instalar as dependências.
5. Execute o comando `npm run test` para rodar os testes no Cypress.
6. Os relatórios serão gerados na pasta `./mochawesome-report`.
7. Para integração contínua, as configurações do GitHub Actions já estão definidas no arquivo `.github/workflows/ci-cd.yml`.

## Contribuições

Contribuições e sugestões são bem-vindas! Sinta-se à vontade para enviar pull requests para melhorar o projeto e fornecer feedbacks.

## Licença

Este projeto está licenciado sob a licença MIT.

----