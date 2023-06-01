const formDirectorio = document.getElementById("formDirectorio")
const table = document.querySelector(".directorio")
const btnAgregar = document.getElementById('btnAgregar')
let acomulador = 0

btnAgregar.addEventListener('click', agregar)


function agregar(e){
    console.log(e);
    e.preventDefault()

    console.log('Entrando');
    acomulador += 1
    const nombre = document.getElementById("txtNombre").value
    const email = document.getElementById("txtEmail").value
    const telefono = document.getElementById("txtTelefono").value


    const nuevaFila = document.createElement("tr")
    nuevaFila.setAttribute("class","row")
    table.appendChild(nuevaFila)

    const nuevoId = document.createElement("td")
    const nuevoNombre = document.createElement("td")
    const nuevoEmail = document.createElement("td")
    const nuevoTelefono = document.createElement("td")

    nuevaFila.appendChild(nuevoId)
    nuevoId.textContent = acomulador
    nuevaFila.appendChild(nuevoNombre)
    nuevoNombre.textContent = nombre
    nuevaFila.appendChild(nuevoEmail)
    nuevoEmail.textContent = email
    nuevaFila.appendChild(nuevoTelefono)
    nuevoTelefono.textContent = telefono


    

}