function writeNewPost() {

    var receita = {
        nome: "",
        desc: "",
        url: ""
    };
    //
    nome = document.getElementById('nome');
    desc = document.getElementById('desc');
    url = document.getElementById('url');
    img = document.getElementById('imgUp');
    //
    receita.nome = nome.value;
    receita.desc = desc.value;
    receita.url = url.value;
   
  //  console.log(receita);

    var newPostKey = firebase.database().ref().child('items').push().key;
    

    var updates = {};


    if (receita.desc != "" && receita.url != "" && receita.nome != "") {
        updates['/items/' + newPostKey] = receita;

    url.value = nome.value = desc.value = "";

    
        alert("Adicionado com sucesso");
        return firebase.database().ref().update(updates);
    } else
        alert("VAZIO");

}