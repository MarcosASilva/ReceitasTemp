bodyTable = document.querySelector("tbody")

function getAll() {
    //var cont, keys;
    
    var receitas = firebase.database().ref().child('items/')
    receitas.on('value', sucess);
    //h = document.getElementById("title");
    //r = JSON.parse(cont);
   // h.innerText = r[0].nome;
   
}
function sucess(snapshot) {
  console.log(snapshot.val()['brigadeiro']);
    cont = snapshot.val();
    console.log(cont)
    keys = Object.keys(cont);
    console.log(keys.length);
    renderTable(cont,keys)
    

}
function excluir(key){
    //String(key)
  console.log(key)
    
        
    return firebase.database().ref('items/'+key).remove();
}
function renderTable(cont,keys){

    bodyTable.innerHTML = ''
  //  u = document.createElement('ul')
    for(var i=0;i<keys.length;i++){
        var k = keys[i];
        console.log(cont[k])
        var tableElement = document.createElement("tr");
        
        var nameElement = document.createElement("td")
        var nameContent = document.createTextNode(cont[k].nome)
        nameElement.appendChild(nameContent)
        
        var gerElement = document.createElement("td")
        var gerContent = document.createElement("a")
        gerContent.setAttribute("href","#")
        var gerText = document.createTextNode("Gerenciar")

        gerContent.appendChild(gerText)

        gerElement.appendChild(gerContent)

        var gerContent = document.createElement("a")
        gerContent.setAttribute("href","#")
        
        gerContent.setAttribute('onclick','excluir("'+k + '")')
        var gerText = document.createTextNode(" Excluir")

        gerContent.appendChild(gerText)

        gerElement.appendChild(gerContent)


        tableElement.appendChild(nameElement)
        tableElement.appendChild(gerElement)

        bodyTable.appendChild(tableElement)
    }

}
getAll()
//renderTable(cont,keys);