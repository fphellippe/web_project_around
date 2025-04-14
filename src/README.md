# Projeto: EUA Afora - Sprint 12

## 📌 Descrição
Este projeto é uma aplicação web interativa chamada **EUA Afora**, conectada a um servidor externo via API. Ele permite aos usuários visualizar cartões de paisagens, curtir, adicionar e remover cartões, bem como editar e salvar informações de perfil e avatar. O sistema foi desenvolvido utilizando Programação Orientada a Objetos (POO) e segue padrões modernos de modularização e responsividade.

## 🚀 Funcionalidades
- Carregamento dinâmico do perfil do usuário via API
- Listagem de cartões armazenados no servidor
- Adição de novos cartões (nome + imagem)
- Exclusão de cartões com confirmação
- Curtir e descurtir cartões
- Edição de nome, profissão e avatar do usuário
- Feedback visual ao usuário com botões “Salvando...”
- Validação de formulários com mensagens dinâmicas
- Fechamento de pop-ups com `Esc` e clique externo

## 🏗️ Estrutura do Projeto
A organização do código segue uma arquitetura modular, com classes separadas para cada funcionalidade principal. A estrutura de arquivos é a seguinte:

```
📂 web_project_around/
├── 📄 index.html
├── 📂 blocks/
├── 📂 page/
│   ├── index.css
│   ├── index.js
├── 📂 images/
├── 📂 components/
│   ├── Api.js
│   ├── Card.js
│   ├── FormValidator.js
│   ├── UserInfo.js
│   ├── Section.js
│   ├── Popup.js
│   ├── PopupWithForm.js
│   ├── PopupWithImage.js
│   ├── PopupWithConfirmation.js
├── 📄 README.md
```

## 🛠️ Tecnologias Utilizadas
- **HTML5** - Estrutura do projeto.
- **CSS3** - Estilização com metodologia BEM.
- **JavaScript (ES6+)** - Funcionalidades dinâmicas e POO.

## 📌 Classes Implementadas

### `Section`
Gerencia e renderiza listas de elementos na página.

- **Métodos:**
  - `renderItems()` - Renderiza todos os itens.
  - `addItem(element)` - Adiciona um item ao contêiner.

### `Popup`
Controla a exibição e fechamento das janelas pop-up.

- **Métodos:**
  - `open()` - Abre o pop-up.
  - `close()` - Fecha o pop-up.
  - `_handleEscClose(event)` - Fecha com tecla `Esc`.
  - `setEventListeners()` - Adiciona eventos de fechamento.

### `PopupWithImage`
Extensão de `Popup` para exibir imagens em um modal.

- **Métodos:**
  - `open(name, link)` - Abre a imagem com descrição.

### `PopupWithForm`
Extensão de `Popup` para gerenciar formulários.

- **Métodos:**
  - `_getInputValues()` - Coleta dados dos inputs.
  - `setEventListeners()` - Adiciona eventos de submissão.
  - `close()` - Fecha e limpa o formulário.

### `UserInfo`
Gerencia as informações do usuário na interface.

- **Métodos:**
  - `getUserInfo()` - Obtém os dados do usuário.
  - `setUserInfo(data)` - Atualiza as informações do usuário.

### `Card`
Gerencia os cartões exibidos na página.

- **Métodos:**
  - `createCard()` - Retorna o elemento do cartão.
  - `handleLikeClick()` - Gerencia o botão curtir.
  - `handleDeleteClick()` - Remove o cartão.

## 📌 Padrões e Boas Práticas
✔ Código estruturado seguindo **POO** e **BEM**.  
✔ Uso adequado de **camelCase** para nomes de variáveis e funções.  
✔ Separação de responsabilidades em arquivos distintos.  
✔ Uso de **const** e **let** de forma adequada.  
✔ Eliminação de código duplicado e uso de funções reutilizáveis.

## 🛠️ Como Executar o Projeto
1. Clone o repositório:
   ```sh
   git clone https://github.com/fphellippe/web_project_around.git
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd web_project_around
   ```
3. Abra o arquivo `index.html` em seu navegador.

---
📌 **Desenvolvido por: [Phellippe Fernandes] — Projeto EUA Afora (TripleTen)** 🚀
