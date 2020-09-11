
let foto = document.getElementById('imgp');
        function mostrarImagen(e) {
            let reader = new FileReader();
            reader.onload = function (e) {
                foto.src = e.target.result;
            }
            reader.readAsDataURL(e.files[0]);
            // objeto.style.backgroundImage= "url("+laurl+")
        }
 