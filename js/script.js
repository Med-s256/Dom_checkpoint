var item = document.getElementById('grid');
var add = document.getElementsByClassName('produit1');
//console.log(add);
var btn= document.getElementsByClassName('ajouter');
for(let j=0; j<btn.length;j++)
{
    btn[j].addEventListener('click', ajout);
}
function ajout(event)
 {
    var btn=event.target;
    var item=btn.parentElement.parentElement.parentElement;
    var name=item.getElementsByTagName('h4')[0].innerText;
    //console.log(name);
    var img=item.getElementsByClassName('image')[0].src;
    //console.log(img);
    var price= item.getElementsByTagName('h6')[0].innerText;
    
newProduit(name, img, price);

//removeProduit(name, img, price);
}
function newProduit(name, img, price){
    var newElement=document.createElement('div');
    var currentDiv=document.getElementById('acheter');
    currentDiv.append(newElement);
    var newList= document.createElement('li');
    newList.textContent= `${name}`;
    //newElement.append(newList);
    var newImg= document.createElement('img');
    newImg.src=`${img}`;
    newImg.classList.add('imgbas');
    //newElement.append(newImg);
    newElement.classList.add('list1');
    var newDiv= document.createElement('div');
    newDiv.append(`${name}`);
    newDiv.append(newImg);
    newDiv.classList.add('new');
    newElement.append(newDiv);
    var newPrice= document.createElement('li');
    newPrice.textContent=`${price}`;
    newPrice.classList.add('prix');
    newElement.append(newPrice);
    var quantity=document.createElement('input');
    quantity.type="Number";
    quantity.defaultValue=1;
    quantity.min=1;
    quantity.classList.add('quant');
    newElement.append(quantity);
    var p=parseFloat(price.replace("DT",""));
    var q=parseFloat(quantity.value);
    var newButton= document.createElement('button');
    newButton.textContent=`remove`;
    newElement.append(newButton);
    newButton.classList.add("button");
    newElement.getElementsByClassName('button')[0].addEventListener('click', removeItem);
    newElement.getElementsByClassName('quant')[0].addEventListener('change', change);
    
}
function removeItem(event){
    var btnClic= event.target;
    btnClic.parentElement.remove();
}

var btn1=document.getElementsByClassName('quant');
    for (var j = 0; j < btn1.length; j++) {
        var q1= btn1[j].addEventListener('click', change);
        //console.log(q1);
        
    }
    function change(event){
        var ch=event.target;
        var quantité= ch.parentElement;
        //console.log(quantité);
        var item1= document.getElementsByClassName('list1');
        var total=0;
        var totalG=0;
        for (let im = 0; im < item1.length; im++) {
            var prix= item1[im].getElementsByClassName('prix')[0].innerHTML;
            var p=parseFloat(prix.replace("DT",""));
            //console.log(p);
            var qu= item1[im].getElementsByClassName('quant')[0].value;
            //console.log(qu);
            total+=p*qu;
            
            
        }
        //totalG+=total;
        var general=document.getElementsByClassName('commander')[0].innerHTML=`Prix total : ${total} DT`;  

        
        
}



    

