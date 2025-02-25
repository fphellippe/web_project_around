# Projeto: Web Project Around - Sprint 11

## 📌 Descrição
Este projeto é uma aplicação web interativa que permite aos usuários adicionar, remover e visualizar cartões com imagens, além de editar suas informações pessoais. O sistema foi refatorado seguindo princípios de Programação Orientada a Objetos (POO) para garantir modularidade e escalabilidade.

## 🚀 Funcionalidades
- Adicionar novos cartões com imagens e descrições.
- Excluir cartões.
- Curtir cartões.
- Abrir imagens em um modal.
- Editar e salvar informações do usuário.
- Validação de formulários.
- Fechar pop-ups com clique externo e tecla `Esc`.

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
│   ├── Card.js
│   ├── FormValidator.js
│   ├── UserInfo.js
│   ├── Section.js
│   ├── Popup.js
│   ├── PopupWithForm.js
│   ├── PopupWithImage.js
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

## 📌 Melhorias Futuras
- Implementação de um backend para persistência de dados.
- Melhorias na acessibilidade.
- Adição de animações CSS para melhor experiência do usuário.

---
📌 **Desenvolvido por: [Phellippe Fernandes]** 🚀
