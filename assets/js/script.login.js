let users = JSON.parse(localStorage.getItem('usuarios')) || [];

function limparForm() {
    document.getElementById("email").value = "";
    document.getElementById("senha").value = '';
}

function validaForm() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (!email ||!senha) {
        alert("Por favor, preencha todos os campos corretamente.");
        return false;
    } else {
        return true;
    }
}

function create() {
    if (validaForm()) {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

      let indiceEdicao = -1;
      let objExistente = users.find((element, index) => {
        if(element.email===email){
            indiceEdicao=index;
            return true
        } else return false;
      });
  
      if (indiceEdicao >= 0) {
        if(users[indiceEdicao].email === email && users[indiceEdicao].senha === senha){
            alert("Sucesso");
            window.location.replace('../../index.html')
        } else {
            alert('Dados Incorretos!')
            window.location.reload();
        }
      } else {
        alert('Usuário não encontrado!')
        window.location.replace('cadastro.html')
      }
  
      salvar();
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
      salvar();
    }
  }