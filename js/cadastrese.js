
    // Função para validar os campos
    function validarCampos() {
        // Obtendo todos os campos do formulário
        var campos = document.querySelectorAll("#form-cadastro input");
        var preenchido = true;

        // Verificando se todos os campos estão preenchidos
        for (var i = 0; i < campos.length; i++) {
            if (campos[i].value === "") {
                preenchido = false;
                break; // Se algum campo estiver vazio, não passa para a próxima página
            }
        }

        if (preenchido) {
            // Se todos os campos estiverem preenchidos, segue para a próxima página
            window.location.href = "bem_vindo.html";  // Redireciona para a próxima página
        } else {
            alert("Por favor, preencha todos os campos antes de continuar.");
        }
    }