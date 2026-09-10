
      // Função para validar os campos do formulário
      function validarCampos() {
        // Obtendo todos os campos do formulário
        var campos = document.querySelectorAll(".form-grid input");
        var preenchido = true;

        // Verificando se todos os campos estão preenchidos
        for (var i = 0; i < campos.length; i++) {
          if (campos[i].value === "") {
            preenchido = false;
            break; // Se algum campo estiver vazio, não envia a solicitação
          }
        }

        if (preenchido) {
          // Se todos os campos estiverem preenchidos, envia o formulário
          window.location.href = "enviado.html";  // Redireciona para a página de sucesso
        } else {
          alert("Por favor, preencha todos os campos antes de enviar sua solicitação.");
        }
      }