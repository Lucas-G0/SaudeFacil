let users = JSON.parse(localStorage.getItem('usuarios')) || [];

function salvar() {
    localStorage.setItem("usuarios", JSON.stringify(users));
}

function limparForm() {
    document.getElementById("nome").value = "";
    document.getElementById("data-nascimento").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = '';
    document.getElementById("senha").value = '';
}

function validaForm() {
    let nome = document.getElementById("nome").value;
    let data = document.getElementById("data-nascimento").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let senha = document.getElementById("senha").value;

    if (!nome || !data || !telefone || !email ||!senha) {
        alert("Por favor, preencha todos os campos corretamente.");
        return false;
    } else {
        return true;
    }
}

function create() {
    if (validaForm()) {
    let nome = document.getElementById("nome").value;
    let data = document.getElementById("data-nascimento").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let senha = document.getElementById("senha").value;

      let indiceEdicao = -1;
      let objExistente = users.find((element, index) => {
        if(element.email===email){
            indiceEdicao=index;
            return true
        } else return false;
      })
  
      if (indiceEdicao >= 0) {
        alert("Já existe um usuário com esse e-mail")
        window.location.replace('login.html');
      } else {
        users.push({nome, data, email, telefone, senha});
      }
      salvar()
      limparForm()
    }
  }

  function editar(indice) {
    let obj = users[indice];
    let nome = document.getElementById("nome").value;
    let data = document.getElementById("data-nascimento").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
  }

  function excluirItem(indice) {
    if (
      confirm(`Tem certeza que deseja excluir o item ${users[indice].nome}?`)
    ) {
      users.splice(indice, 1);
    }
  }