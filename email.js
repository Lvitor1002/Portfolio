document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form-contato").addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        let nome = document.getElementById("idnome").value;
        let email = document.getElementById("idnemail").value;
        let mensagem = document.getElementById("idmensagem").value;

        // Criando o link mailto
        let mailtoLink = `mailto:luizpierino@hotmail.com?subject=Contato de ${nome}&body=Nome: ${nome}%0AEmail: ${email}%0AMensagem: ${mensagem}`;

        // Abrindo o link no cliente de e-mail padrão do usuário
        window.location.href = mailtoLink;
    });
});
