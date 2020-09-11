


let menulog = document.getElementById('saludo');
let nombrelocal = localStorage.getItem('usuario');

if(nombrelocal){

    menulog.innerHTML = `<i class="fas fa-user-alt"></i> Hola ${nombrelocal}`;
}else{
    
menulog.innerHTML = `<i class="fas fa-user-alt"></i> Hola Invitado`;
}
