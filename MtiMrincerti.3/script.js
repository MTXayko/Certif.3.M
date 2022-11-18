function changeName(evento) {
    console.log(evento.innerText=="Login");
    if (evento.innerText=="Login") {
        evento.innerText="Logout"
    }else{
        evento.innerText="Login"
    }
}

function eliminar(evento) {
    evento.remove()
}

var count = 319;
var countElement = document.querySelector("#count");

console.log(countElement1);

function add1() {
    count++;
    countElement.innerText = "" + count;
    console.log(count);
}

function eliminar(countElement) {
    countElement1.remove()
}

var count = 164;
var countElement = document.querySelector("#count2");

console.log(countElement);

function add2() {
    count++;
    countElement.innerText = "" + count;
    console.log(count);
}
