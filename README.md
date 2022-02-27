# Template: React + Typescript Completo.

Esse é um template para aplicações Front-End com React e Typescript com algumas configurações comuns já feitas. Estão inclusas estas:

- Eslint e Prettier configurados;
- Story Book e stories de exemplo;
- Jest com React Testing Library configurados;
- ViteJs como empacator, com path alias cofigurado;
- Git Hooks com Husky para validar mensagem de commit, rodar eslint durante os commits e test coverage durante os PRs;
- Rotas configuradas com React Router Dom;
- Pastas/Camadas comuns em projetos FrontEnd;
- NPM Interactive Scripts para rodar mais facilmente os scripts do package.json;

Optei por não configurar nenhum biblioteca de UI ou alguma de CSS in JS. Isso muda muito de projeto para projeto, então fugiria da proposta desse template.

Sinta-se a vontade para utiliza-lo :)

Além disto, também estou disponibilizando as configurações do VS Code neste [Gist](https://gist.github.com/dalissongabriel/1e4fabdcf709e88f40e4e33338e45481), elas formatam o código de acordo com as regras do prettier.

```json
 // FORMAT ON SAVE
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll": true
  },
  // TYPESCRIPT E TSX
  "[typescript]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "[typescriptreact]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "typescript.preferences.quoteStyle": "single",
  "typescript.suggest.autoImports": true,
  "typescript.updateImportsOnFileMove.enabled": "always",
  // JAVASCRIPT
  "javascript.preferences.quoteStyle": "single",
  "javascript.validate.enable": false,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "javascript.suggest.autoImports": true,
  "[javascript]": {
    "editor.suggestSelection": "recentlyUsed",
    "editor.suggest.showKeywords": false
  },
```
