# Web Project Around - Sprint 11

## 📌 Sobre o Projeto
Este projeto é uma aplicação web interativa que permite aos usuários adicionar, curtir e visualizar imagens em pop-ups. Ele segue princípios modernos de desenvolvimento web, como Programação Orientada a Objetos (POO), modularização e boas práticas de acessibilidade.

## 🚀 Funcionalidades
- Criar cartões de imagem dinâmicos.
- Exibir imagens em um pop-up ao clicar no cartão.
- Implementação de botão de Like funcional.
- Validação de formulários.
- Layout responsivo seguindo metodologia BEM.
- Código modular utilizando classes ES6.

## 📁 Estrutura do Projeto
A estrutura do projeto segue um padrão modularizado:

```
web_project_around/
│── blocks/           # Arquivos CSS para os blocos BEM
│── images/           # Imagens utilizadas no projeto
│── pages/            # Páginas HTML adicionais
│── scripts/          # Código JavaScript modularizado
│   │── index.js      # Arquivo principal de execução
│   │── utils.js      # Funções auxiliares
│   │── Card.js       # Classe para criação de cartões
│   │── FormValidation.js  # Classe para validação de formulários
│── index.html        # Página principal do projeto
│── README.md         # Documentação do projeto
│── .gitignore        # Arquivos ignorados pelo Git
│── .editorconfig     # Configuração do editor
│── favicon.ico       # Ícone do site
```

## 🛠️ Tecnologias Utilizadas
- **HTML5** e **CSS3** (Metodologia BEM)
- **JavaScript (ES6+)**
- **Modularização com JS**
- **Programação Orientada a Objetos (POO)**
- **Git/GitHub**

## 🖥️ Instalação e Execução
### 1️⃣ Clonar o Repositório
```bash
git clone https://github.com/fphellippe/web_project_around.git
```

### 2️⃣ Acessar o Diretório do Projeto
```bash
cd web_project_around
```

### 3️⃣ Rodar o Servidor Local
Para executar a aplicação corretamente com módulos JavaScript, utilize o Live Server:

```bash
code .  # (Opcional) Abre o projeto no VSCode
```

Caso tenha o Live Server instalado, basta abrir o `index.html` com ele.

## 🔧 Como Utilizar
1. **Adicionar um novo cartão**: Preencha o formulário e adicione um cartão à lista.
2. **Curtir um cartão**: Clique no botão de coração para marcar como curtido.
3. **Visualizar imagem ampliada**: Clique em um cartão para abrir o pop-up com a imagem em tamanho maior.
4. **Fechar pop-ups**: Clique fora da janela ou pressione `Esc`.

## 🏗️ Estrutura dos Arquivos JS
- **Card.js**: Classe responsável pela criação de cartões.
- **FormValidation.js**: Classe que implementa validação de formulários.
- **utils.js**: Funções auxiliares, como abrir e fechar pop-ups.
- **index.js**: Script principal que inicializa o projeto.

## 👥 Contribuição
Contribuições são bem-vindas! Para contribuir:
1. Faça um fork do projeto.
2. Crie uma branch (`git checkout -b feature-nova`).
3. Commit suas alterações (`git commit -m 'Adiciona nova funcionalidade'`).
4. Envie um push (`git push origin feature-nova`).
5. Abra um Pull Request.

## 📜 Licença
Este projeto está sob a licença MIT. Sinta-se livre para modificá-lo e distribuí-lo conforme necessário.

