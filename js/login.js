        // Função para validar os campos
        function validarCampos() {
            // Obtendo os campos do formulário
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;

            // Verificando se ambos os campos estão preenchidos
            if (email === "" || password === "") {
                alert("Por favor, preencha ambos os campos antes de continuar.");
            } else {
                // Se ambos os campos estiverem preenchidos, redireciona para a página de login
                window.location.href = "../index.html";  // Redireciona para a página de login
            }
        }