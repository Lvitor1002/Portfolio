
const formulario = document.querySelector(".form")

formulario.addEventListener("submit",function(evento){

    evento.preventDefault(); // evita o envio do formulário até a validação passar

    let formularioValido = true 

    const nome = formulario.elements["nome"].value.trim(); 
    const tel = formulario.elements["celular"].value.trim(); 
    const email = formulario.elements["email"].value.trim(); 
    const mensagem = formulario.elements["mensagem"].value.trim(); 
    
    const campoNome = formulario.elements["nome"]; 
    const campoTelefone = formulario.elements["celular"]; 
    const campoEmail = formulario.elements["email"]; 
    const campoMensagem = formulario.elements["mensagem"]; 

    campoNome.style.border = ""
    campoTelefone.style.border = ""
    campoEmail.style.border = ""
    campoMensagem.style.border = ""

    if (nome === "" || !/^[A-Za-zÀ-ÿ\s]+$/.test(nome)) {

        formularioValido = false;

        alert("Por gentileza, digite um nome válido (somente letras).");
        campoNome.style.border = "2px solid red"
    }
    
    if (email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        
        formularioValido = false;
    
        alert("Por gentileza, digite um email válido.\nExemplo: usuario@dominio.com");
        campoEmail.style.border = "2px solid red";
    }
    

    if (mensagem === "") {

        formularioValido = false;

        alert("Por gentileza, escreva sua mensagem.");
        campoMensagem.style.border = "2px solid red"
    }

    if (formularioValido) {
        fetch("https://formsubmit.co/ajax/luizpierino@hotmail.com", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                'Nome do cliente': formulario.nome.value,
                'Email do Cliente': formulario.email.value,
                'Telefone do cliente': formulario.tel.value,
                'Mensagem do cliente': formulario.mensagem.value
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Mensagem enviada com sucesso.",
                    showConfirmButton: false,
                    timer: 1500
                });
                formulario.reset(); // limpa o formulário
            } else {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Erro inesperado ao enviar formulário à API - " + data.message,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
        .catch(error => {
            alert(error);
        });
    }
    
})

