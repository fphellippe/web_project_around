function enableValidation(config) {
  const formElements = document.querySelectorAll(config.formSelector);

  formElements.forEach((formElement) => {
      const inputs = formElement.querySelectorAll(config.inputSelector);
      const formButton = formElement.querySelector(config.submitButtonSelector);

      // Função para verificar a validade do formulário
      function checkFormValidity() {
          formButton.disabled = !formElement.checkValidity();
          formButton.classList.toggle(config.inactiveButtonClass, !formElement.checkValidity());
      }

      // Função para exibir mensagem de erro
      function showInputError(input) {
          const errorElement = input.nextElementSibling;
          errorElement.textContent = input.validationMessage;
          errorElement.classList.add(config.errorClass);
          input.classList.add(config.inputErrorClass);
      }

      // Função para ocultar mensagem de erro
      function hideInputError(input) {
          const errorElement = input.nextElementSibling;
          errorElement.textContent = "";
          errorElement.classList.remove(config.errorClass);
          input.classList.remove(config.inputErrorClass);
      }

      // Função para validar input individualmente
      function validateInput(input) {
          if (input.checkValidity()) {
              hideInputError(input);
          } else {
              showInputError(input);
          }
          checkFormValidity();
      }

      // Adicionando eventos de input para validação dinâmica
      inputs.forEach((input) => {
          input.addEventListener("input", () => validateInput(input));
      });

      // Verificação inicial da validade do formulário ao carregar a página
      checkFormValidity();
  });
}

// Configuração da validação
enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "invalid-input",
  errorClass: "input__errorMessage_block",
});