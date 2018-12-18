function getAll() {
    //var cont, keys;
    
    var receitas = firebase.database().ref().child('items/');
    receitas.on('value', sucess);
    //h = document.getElementById("title");
    //r = JSON.parse(cont);
   // h.innerText = r[0].nome;
   
}
function sucess(snapshot) {
  console.log(snapshot.val()['brigadeiro']);
    cont = snapshot.val();
    keys = Object.keys(cont);
    console.log(keys.length);
    renderTable(cont,keys)
    

}
function renderTable(cont,keys){
    tableContent = document.getElementById('table');
    H = document.getElementById('title');
  //  u = document.createElement('ul')
    for(var i=0;i<keys.length;i++){
        var k = keys[i];
        console.log(cont[k])

       // console.log(cont[k])

  //  textContent = document.createTextNode()
    }
    var row = table.insertRow(0);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerText = cont[k].nome
    cell2.innerText = cont[k].desc
 //   tableContent.appendChild(t);
}
getAll()
//renderTable(cont,keys);