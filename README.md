<h3 align="center">React e Typescript</h3>
<p align="center">Template para iniciar rapidamente novos projetos Front-End.</p>

<p
  align="center"s
>
  <img
    alt="Principal linguagem do repositório"
    src="https://img.shields.io/github/languages/top/dalissongabriel/template-react-typescript-completo"
  />

  <a href="https://github.com/dalissongabriel/">
    <img
      alt="Desenvolvido por"
      src="https://img.shields.io/badge/Desenvolvido%20por-Alisson%20Gabriel-green"
    />
  </a>

<img
    alt="Tamanho do repositório"
    src="https://img.shields.io/github/repo-size/dalissongabriel/template-react-typescript-completo"
  />

  <a href="https://github.com/dalissongabriel/template-react-typescript-completo/commits/main">
    <img
      alt="Último commit no repositório"
      src="https://img.shields.io/github/last-commit/dalissongabriel/template-react-typescript-completo"
    />
  </a>
  <a
    href="https://github.com/dalissongabriel/template-react-typescript-completo/issues"
  >
    <img
      alt="Issues do repositórios"
      src="https://img.shields.io/github/issues/dalissongabriel/template-react-typescript-completo"
    />
  </a>
</p>

## 👨🏻‍💻 Sobre este projeto

Template para aplicações Front-End com React e Typescript com várias
configurações prontas.

## 🚀 Tecnologias utilizadas

- React com Typescript;
- React Router Dom;
- ViteJs;
- Eslint e Prettier;
- Story Book;
- React Testing Library;
- Git Hooks com Husky;
- Git Commit Message Linter;
- NPM Interactive Scripts;

## ⚡ Configurações para otimizar o VSCode

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

## 👍 Snippets

~/.config/Code/User/snippets/typescript.json

```json
{
  "Exportar componentes": {
    "prefix": "exp",
    "body": ["export { default as $1} from '@/$2/$1/$1';", " $0"],
    "description": "Exportar componentes."
  }
}
```

~/.config/Code/User/snippets/typescriptreact.json

```json
{
  "Criar componente funcional": {
    "prefix": "comp",
    "body": [
      "const $1 = () => {",
      "return (<$0></$0>);",
      "}",
      "",
      "export default $1;"
    ],
    "description": "Criar componente funcional."
  },
  "Importação": {
    "prefix": "imp",
    "body": ["import { $2 } from '@/$1'"],
    "description": "Importação."
  }
}
```
