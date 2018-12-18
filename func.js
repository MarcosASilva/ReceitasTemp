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
    img = document.getElementById('imgUp');
    console.log(receita);
    var newPostKey = firebase.database().ref().child('items').push().key;
    var storageRef = firebase.storage().ref();

    // Create a reference to 'mountains.jpg'
    var mountainsRef = storageRef.child(img.value);
    console.log(img.value);

    var updates = {};
    if (receita.desc != "" && receita.url != "" && receita.nome != "") {
        updates['/items/' + newPostKey] = receita;
        alert("Adicionado com sucesso");
    } else
        alert("VAZIO");

    url.value = nome.value = desc.value = "";

    return firebase.database().ref().update(updates);
}