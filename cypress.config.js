const { defineConfig } = require("cypress");

module.exports = defineConfig({
    reporter: 'junit',

    reporterOptions: {
      mochaFile: 'cypress/reports/junit/test-results.xml',
      toConsole: true,
      includeLogs: true,
      attachments: true
    },

  // reporter: "cypress-mochawesome-reporter",
  
  // reporterOptions: {
  //   charts: true,    // gráficos
  //   reportPageTitle: 'SENAI - Testes',    // título da página/ABA do relatório
  //   embeddedScreenshots: true,    // capturas de tela incorporadas
  //   inlineAssets: true,    // Ativos em linha
  //   reportDir: 'cypress/reports/mochawesome',    // Destino relatório Dir
  //   reportFilename: `Relatorio-Teste-QAS-Hoje`,  // ${gerarData(0, 'minutes', 'dd-MM-yyyy-HH-mm')}`,    // Nome do arquivo de relatório
  //   reportTitle: 'Resultado execução de casos de testes - SENAI',    // título do relatório
  //   reportJsonFile: 'mochawesome.json',    // relatar arquivo Json
  //   // overwrite: true,    // substituir relatório após nova execução
  //   quiet: true,    // Quieto
  //   // autoOpen: true    // abertura automática
  // },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
         
      // require('junit')(on);
      // require('cypress-mochawesome-reporter/plugin')(on);
    },
    video: false,
  },
});
