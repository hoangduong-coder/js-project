var enterButton = document.getElementById("addButton");
var input = document.getElementById("inputItem");
var ul = document.querySelector("#myItem");             //get the first element with id "myItem", in this case is the <ul> list
var li = document.getElementsByTagName("li");

function inputLength(){
    return input.value.length;
}

function addItem(){
    var newItem = document.createElement("li");
    var itemTitle = document.createTextNode(input.value);
    newItem.appendChild(itemTitle);
    ul.appendChild(newItem);
    input.value = "";

    function itemFinish(){
        newItem.classList.toggle("done");
        var circle = document.createElement("p");
        circle.className = "tickBox";
        var checkSymbol = document.createTextNode("\u2713");
        circle.appendChild(checkSymbol);
        newItem.appendChild(circle);
    }

    newItem.addEventListener("click",itemFinish);

    var deleteButton = document.createElement("button");
    var deleteSymbol = document.createTextNode("\u274C");
    deleteButton.appendChild(deleteSymbol);
    deleteButton.className = "closeBtn";
    newItem.appendChild(deleteButton);
    deleteButton.addEventListener("click",deleteItem);

    function deleteItem(){
        newItem.classList.toggle("clear");
    }

}

function createElement(){
    if(inputLength() > 0){
        addItem();
    }
}

function createElementByEnter(event){
    if(inputLength() > 0 && event.keyCode == 13){
        addItem();
        event.preventDefault();
    }
}

enterButton.addEventListener("click",createElement);

input.addEventListener("keypress",createElementByEnter);
