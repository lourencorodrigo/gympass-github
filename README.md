## Instalação de dependências

### Demo

[Clique aqui](https://gympass-github.firebaseapp.com/) para visualizar a demo do sistema

### `npm install`

Instale as dependências do projeto.

### `npm install`

Execute o app em ambiente de desenvolvimento. Será levantando um servidor em `http://localhost:3000`

### `npm test`

Execute os testes unitários em modo interativo.

### `npm run coverage`

Execute os testes unitários com o coverage para análise de cobertura de código.

### `npm run build`

Execute o build da aplicação para produção.

## Feature do ES6 utilizadas neste projeto

#### let e const

Todas as declarações de variáveis deste projeto foram feitas const. Esta nova forma de declaração de variável soluciona o problema de escopo que o var possue. Além disto as declarações com const não poderão ter novas atribuições após sua declaração já que é uma constante.

#### spread operator

Todos os reducers deste projeto utilizaram o spread operator para criar uma cópia de todas as propriedades do state e com isso manter a imutabilidade do Redux.

#### arrow functions

Além de ter uma sintaxe menor que a declaração de funções normais a arrow function não mantém um this próprio, ele mantém o this do contexto no qual é declarado. Com isso evitamos, por exemplo, o .bind(this) quando trabalhamos com o JSX.

#### destructuring

Alguns variáveis deste projeto são atribuídas utilizando o destructuring de objetos. Os imports do tipo `import { objeto } = ...` também são com destructuring.
