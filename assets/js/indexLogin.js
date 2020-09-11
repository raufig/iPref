const formulario = document.getElementById('formulario');
let i1 = document.getElementById('iconit'),
i2=document.getElementById('iconombre'),
i3=document.getElementById('icoapellido'),
i4=document.getElementById('icodireccion'),
i5=document.getElementById('icoemail'),
i6=document.getElementById('iconocontraseña'),
i7=document.getElementById('iconosubir'),
i8=document.getElementById('hom'),
i9=document.getElementById('muj');

let e1 = document.getElementById('nit'),
e2=document.getElementById('nombre'),
e3=document.getElementById('apellido'),
e4=document.getElementById('direccion'),
e5=document.getElementById('email'),
e6=document.getElementById('contraseña'),
e7=document.getElementById('contraseña2');





function subir(label){
    let etiqueta = document.getElementById(label);
    etiqueta.style.top='-20px';
}
function bajar(label,input,icon){
    let etiqueta = document.getElementById(label);
    let inputC = document.getElementById(input);
    let icono = document.getElementById(icon);
    if(inputC.value ===''){
        etiqueta.style.top='4px';
        inputC.style.borderBottomColor='#cc0000';
        etiqueta.style.color='#cc0000';
        icono.style.color='#cc0000';
    }
    if(inputC.value !==''){
        icono.style.color='green';
        inputC.style.borderBottomColor='#d1d1b477';
        etiqueta.style.color='#000';
    }
}

function selectg(s,ic,hom,muj){
  let select = document.getElementById(s);
  let icono = document.getElementById(ic);
  let hombre = document.getElementById(hom);
  let mujer = document.getElementById(muj);
 
  if(select.value === ''){
      select.style.borderBottomColor='#cc0000';
      icono.style.display='block';
      icono.style.color='#cc0000';
      select.style.color='#cc0000';
      hombre.style.display='none';
      mujer.style.display='none';
  }else{
      if(select.value === 'masculino'){
        select.style.borderBottomColor='#d1d1b477';
        select.style.color='#000';
        icono.style.display='none';
        mujer.style.display='none';
        hombre.style.display='block';
        
      }if(select.value ==='femenino'){
        select.style.borderBottomColor='#d1d1b477';
        select.style.color='#000';
        icono.style.display='none';
        mujer.style.display='block';
        hombre.style.display='none';
      }
    
  }

}

function bajarIconos(){
  e1.style.top='4px';
  e2.style.top='4px';
  e3.style.top='4px';
  e4.style.top='4px';
  e5.style.top='4px';
  e6.style.top='4px';
  e7.style.top='4px';
}
function colorearIconos(){
    i1.style.color='#000';
    i2.style.color='#000';
    i3.style.color='#000';
    i4.style.color='#000';
    i5.style.color='#000';
    i6.style.color='#000';
    i7.style.color='#000';
    i8.style.color='#000';
    i9.style.color='#000';
}


formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
     let nit = document.getElementById('nit');
     let nombre = document.getElementById('inombre');
     let apellido = document.getElementById('iapellido');
     let direccion = document.getElementById('idireccion');
     let email = document.getElementById('iemail');
     let contraseña = document.getElementById('icontraseña');
     let repeticionContraseña = document.getElementById('icontraseña2');
     let sexo = document.getElementById('select-sexo');
     let error = document.getElementById('error');
     let errorc = document.getElementById('errorContra');
     let spinner = document.getElementById('spinner');
     let msjExito = document.getElementById('exito');
     if(nit.value==='' || nombre.value==='' || apellido.value==='' || direccion.value==='' || email.value==='' ||contraseña.value==='' || repeticionContraseña.value==='' || sexo.value==='' ){
         
         error.style.display='block';
         let errorc = document.getElementById('errorContra');
             errorc.style.display='none';
     
     }else{
         if(contraseña.value === repeticionContraseña.value){
          
            localStorage.setItem('usuario',nombre.value);
             localStorage.setItem('contraseña',repeticionContraseña.value);
            
             let error = document.getElementById('error');
             bajarIconos();
             colorearIconos();
             error.style.display='none';
             errorc.style.display='none';
            
             spinner.style.display='block';
             formulario.reset();
         

             setTimeout(()=>{
                spinner.style.display='none';
             },4000)
             setTimeout(()=>{
                msjExito.style.display='block';
             },4001)
             setTimeout(()=>{
                msjExito.style.display='none';
             },6000)
             
         }else{
            let errorc = document.getElementById('errorContra');
             errorc.style.display='block';
            error.style.display='none';
          
         }
     }
})

//validacion formulario login


let formularioLogin = document.getElementById('loginf');

formularioLogin.addEventListener('submit',e=>{
   e.preventDefault();
   let usuario  = document.getElementById('userlogin');
   let contraseña  = document.getElementById('contralogin');
   let error  = document.getElementById('error-modal');
   let errorDatos  = document.getElementById('error-datos');
   
console.log(usuario.value)
   if(usuario.value==='' || contraseña.value ===''){
       error.style.display='block';
       errorDatos.style.display='none';
     
   }else{
   
       let usu = localStorage.getItem('usuario');
       let contra = localStorage.getItem('contraseña');
       if(usu === usuario.value && contra === contraseña.value){
           window.location='../assets/pages/usuario.html';
           
       }else{
        error.style.display='none';
        errorDatos.style.display='block';
         
         
       }
   }
})

let cerrarLogin = document.getElementById('cerrarLogin');
cerrarLogin.addEventListener('click',()=>{
    let error  = document.getElementById('error-modal');
   let errorDatos  = document.getElementById('error-datos');
    formularioLogin.reset();
    error.style.display='none';
        errorDatos.style.display='none';
})