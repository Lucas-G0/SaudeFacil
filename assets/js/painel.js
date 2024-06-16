let users = JSON.parse(localStorage.getItem('usuarios')) || [];

function salvar() {
    localStorage.setItem("usuarios", JSON.stringify(users));
}


function create() {
    let nome = document.getElementById("input_nome").value;
    let data = document.getElementById("input_data").value;
    let email = document.getElementById("input_email").value;
    let telefone = document.getElementById("input_telefone").value;


    let indiceEdicao = -1;
    let objExistente = users.find((element, index) => {
        if (element.index === index) {
            indiceEdicao = index;
            return true
        } else return false;
    })

    if (indiceEdicao >= 0) {
        users[indiceEdicao] = { nome, data, email, telefone };
    } else {
        users.push({ nome, data, email, telefone });
    }
    salvar()
}

function editar(indice) {
    let obj = users[indice];
    obj.nome = document.getElementById("input_nome").value 
    obj.data = document.getElementById("input_data").value;
    obj.email = document.getElementById("input_email").value
    obj.telefone = document.getElementById("input_telefone").value;
    obj.index = indice;
    alert("Editado com Sucesso!");
    salvar()
    atualizarTabela()
}

function excluirItem(indice) {
    if (
        confirm(`Tem certeza que deseja excluir o item ${users[indice].nome}?`)
    ) {
        users.splice(indice, 1);
        salvar()
        atualizarTabela();
    }
}

function atualizarTabela() {
    let listBody = document.getElementById("body");
    listBody.innerHTML = "";

    users.forEach((item, indice) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let button_container = document.createElement("div");
        button_container.setAttribute("class", "button-container");

        td1.innerHTML = `<td><input type='text' id='input_nome' value=${item.nome}></td>`
        td2.innerHTML = `<td><input type='date' id='input_data' value='${item.data}'</td>`
        td3.innerHTML = `<td><input type='text' id='input_email' value='${item.email}'</td>`
        td4.innerHTML = `<td><input type='text' id='input_telefone' value='${item.telefone}'</td>`

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        button_container.innerHTML = `
        <a href="#" onclick="editar(${indice})" class="edit-button">Editar</a>
        <a href="#" onclick="excluirItem(${indice})" class="rmv-button">Remover</a>
        `

        listBody.appendChild(tr);
        tr.appendChild(button_container);
    });
}

atualizarTabela();