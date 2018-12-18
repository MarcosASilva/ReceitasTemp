function writeNewPost() {

    var receita = {
        nome: "",
        desc: "",
        url: ""
    };
    nome = document.getElementById('nome');
    desc = document.getElementById('desc');
    url = document.getElementById('url');
    receita.nome = nome.value;
    receita.desc = desc.value;
    receita.url = url.value;
    console.log(receita);
    var newPostKey = firebase.database().ref().child('items').push().key;


    var updates = {};
    if (receita.desc != "" && receita.url != "" && receita.nome != "") {
        updates['/items/' + newPostKey] = receita;
        alert("Adicionado com sucesso");
    } else
        alert("VAZIO");

    url.value = nome.value = desc.value = "";

    return firebase.database().ref().update(updates);
}