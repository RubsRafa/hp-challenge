# Book de Harry Potter

O __Book de Harry Potter__ é um projeto relacionado ao universo de Harry Potter, onde os usuários podem explorar e obter informações sobre os livros da série. 

Além disse, o projeto conta com uma Home Page, onde os usuários podem personalizar a experiência do site escolhendo a cor da interface de acordo com a sua casa em Hogwarts!

#### Tecnologias utilizadas
- Linguagens: TypeScript
- Framework: NextJS

### Bibliotecas
- Cypress: Para testes E2E.
- Husky: Para garantir hooks do git antes de commits.
- Lint-staged: Roda scripts específicos nos arquivos a serem commitados.

### Testes com Cypress

Este projeto utiliza o [Cypress](https://www.cypress.io/) para realizar testes end-to-end (E2E). Os testes automatizados garantem a estabilidade e robustez da aplicação, permitindo uma experiência mais confiável para os usuários.

### Como Rodar os Testes
Certifique-se de que a aplicação está rodando localmente antes de executar os testes. Se não estiver, utilize o seguinte comando:
```bash
npm start
```

Agora, para rodar os testes com Cypress, utilize o seguinte comando:
```bash
npm run test
```


### Testes desenvolvidos
__TopBar__
- Deveria renderizar imagem na barra de naveção com box-shadow
- Deveria renderizar navbar com somente 2 itens
- Deveria ter um border-bottom para o item 'Home' ou 'Books'
- Deveria mudar o foco para Books ao clicar e atualizar URL
- Deveria mudar o foco para Home ao clicar e atualizar URL

__Home__
- Deveria renderizar a página Home
- Deveria renderizar imagens para troca de casas
- Deveria alterar a cor de fundo
- Apresenta Sorting Hat para sortear casa


__Books__
- Deveria renderizar esqueletos antes de renderizar livros
- Deveria renderizar livros com imagens e botão para ler
- Deveria mostrar título do livro no hover 
- Deveria redirecionar para detalhes do livro ao clicar no livro
- Deveria apresentar esqueleto antes do conteúdo do livro
- Deveria renderizar detalhes do livro, incluindo título, autor, sumário, data de lançamento e dedicatória
- Deveria renderizar capítulos com efeito hover



## Instalação
1. Abra o terminal e clone o repositório usando HTTPS ou SSH. Segue um exemplo usando SSH:
```bash
git clone git@github.com:RubsRafa/hp-challenge.git
```

2. Navegue até a pasta do projeto:
```bash
cd hp-challenge
```

3. Instale as dependências:
```bash
npm install
```

4. Faça o build do projeto:
```bash
npm run build
```

5. Inicialize o projeto:
```bash
npm start
```

*A aplicação estará disponível locamente na porta 3000.

Você também pode acessar a aplicação online [aqui](https://hp-challenge-1wkv.vercel.app/), com o deploy realizado pela [Vercel](https://vercel.com/).