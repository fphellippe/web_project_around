# Projeto EUA Around - Sprint 7 (bootcamp tripleten) 

"EUA Around" é um site interativo que permite aos usuários visualizar cartões de locais, curtir fotos, e editar informações de perfil. Este projeto é parte de um ciclo de desenvolvimento com entregas por sprints, e esta documentação descreve a implementação parte no sprint 7 do bootcamp da TripleTen.

## Visão Geral do Projeto
    
Este site foi projetado para oferecer uma experiência visual imersiva e interativa, simulando uma plataforma onde os usuários podem explorar e interagir com fotos de locais incríveis.

## Funcionalidades Implementadas

### 1. Layout e Design Responsivo

- **Objetivo**: Fornecer uma interface responsiva, adaptável para diferentes tamanhos de tela (320px a 1280px).
- **Como foi Implementado**:
  - Utilizamos **CSS Flexbox** e **Media Queries** para ajustar o layout com base na largura da tela.
  - O design segue o modelo do **Figma**, com responsividade para dispositivos móveis, tablets e desktops, e adapta o número de cartões por linha conforme o tamanho da tela.
  - **Largura mínima (320px)**: Um cartão por linha.
  - **Largura média (tablet)**: Dois cartões por linha.
  - **Largura máxima (1280px)**: Três cartões por linha com um limite de largura para o conteúdo.

### 2. Estrutura e Organização do Código

- **Objetivo**: Facilitar a manutenção e escalabilidade do projeto.
- **Como foi Implementado**:
  - Utilizamos a metodologia **BEM (Bloco, Elemento, Modificador)** para organizar as classes CSS, resultando em um código mais modular e legível.
  - A estrutura de arquivos está organizada da seguinte maneira:
    - **HTML** (`index.html`): Estrutura básica do site.
    - **CSS** (`/pages/index.css`): Contém o estilo principal, com sub-blocos CSS organizados conforme a estrutura BEM.
    - **JavaScript** (`/scripts/index.js`): Contém a lógica de interatividade, como a abertura e fechamento de pop-ups e atualização de dados de perfil.
    - **Imagens e Fontes**: Armazenadas na pasta `vendor`, incluindo ícones, imagens e fontes.

### 3. Pop-up de Edição de Perfil

- **Objetivo**: Permitir que o usuário edite informações de perfil, como Nome e Sobre Mim.
- **Como foi Implementado**:
  - O **pop-up de edição** é ativado ao clicar no botão "Editar" no perfil e fecha ao clicar no botão de fechar ("X") ou ao salvar.
  - **Posicionamento e Estilo**: Utilizamos CSS com posicionamento fixo e fundo semitransparente para destacar a janela modal sobre o restante do conteúdo.
  - **Ação de Salvar**: O nome e o campo "Sobre mim" no perfil são atualizados com base nos valores do formulário. Essa atualização é realizada por meio de manipulação do **DOM** com JavaScript.

### 4. Exibição de Cartões

- **Objetivo**: Exibir uma galeria inicial de seis cartões de fotos.
- **Como foi Implementado**:
  - Criamos um array `initialCards` no JavaScript que armazena dados para seis cartões iniciais. Estes cartões são renderizados automaticamente ao carregar a página.
  - **Estrutura do Cartão**: Cada cartão inclui uma imagem e um título do local. O HTML utiliza um `<template>` para o layout do cartão, que é clonado e preenchido via JavaScript.
  - **Mensagem Condicional**: Caso não haja cartões, uma mensagem "Ainda não há cartões" será exibida.

### 5. Botão de "Curtir"

- **Objetivo**: Adicionar interatividade visual ao botão de "Curtir" para futuros recursos de engajamento.
- **Como foi Implementado**:
  - Cada cartão possui um botão de "Curtir" representado por um ícone de coração. O estado do botão muda quando o usuário clica nele, alternando entre um estado normal e um estado "ativo".
  - **Funcionalidade Extra (Próximas Sprints)**: Embora atualmente o botão "Curtir" apenas muda de visual, futuras sprints poderão incluir persistência do estado curtido.

## Tecnologias Utilizadas

1. **HTML5**: Fornece a estrutura semântica para o conteúdo do site.
2. **CSS3**: Estiliza o layout responsivo, efeitos de transição e posicionamento do conteúdo.
   - **Flexbox**: Utilizado para alinhar e distribuir o conteúdo.
   - **Media Queries**: Implementadas para garantir a responsividade em diversos dispositivos.
3. **JavaScript (ES6)**: Controla a interatividade e manipulação do DOM.
   - **Manipulação do DOM**: Atualiza o conteúdo do perfil e controla o comportamento do pop-up.
   - **Eventos**: Utiliza `addEventListener` para abrir/fechar o pop-up e alternar o estado do botão de "Curtir".
4. **BEM (Bloco, Elemento, Modificador)**: Organização do CSS para garantir uma estrutura modular, facilitando manutenção e escalabilidade.

## Organização do Projeto
- **Páginas e Estrutura**:
  - `index.html`: Página principal do projeto.
  - `favicon.ico`: Ícone da aplicação.
- **Blocos CSS Modulares**:
  - `blocks/`: Diretório que contém os estilos organizados por componentes.
    - `header.css`: Estilos para o cabeçalho.
    - `footer.css`: Estilos para o rodapé.
    - `profile.css`: Estilos para a seção de perfil.
    - `popup.css`: Estilos para janelas modais e pop-ups.
- **Imagens**:
  - `images/`: Diretório contendo todas as imagens e ícones usados na aplicação.
- **Configurações de Projeto**:
  - `.gitignore`: Arquivo que define quais arquivos serão ignorados pelo Git.
  - `README.md`: Arquivo de documentação do projeto.
  - `.prettierignore`: Define arquivos ignorados pelo Prettier.
  - `editorconfig`: Mantém o estilo de código consistente entre diferentes IDEs.
---
## Acesse o Projeto Online
Confira a versão publicada do projeto no GitHub Pages através do link:  

[Web Project Around - GitHub Pages](https://fphellippe.github.io/web_project_around/)
