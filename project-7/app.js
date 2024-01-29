const $input = document.getElementById("input");
const $button = document.getElementById("button");
const $tareas = document.querySelector(".tareas-container");

function aregarTarea(){
	if(input.value){
		let $tareaNueva = document.createElement("div");
		$tareaNueva.classList.add("tarea");

		let $texto = document.createElement("p");
		$texto.innerHTML = input.value;

		let $iContainer = document.createElement("div");
		$iContainer.classList.add("icon-container");

		let $checkIcon = document.createElement("i");
		$checkIcon.classList.add("bi", "bi-check-circle-fill");
		$checkIcon.addEventListener("click", completarTarea);
		let $trashIcon = document.createElement("i");
		$trashIcon.classList.add("bi", "bi-trash-fill");
		$trashIcon.addEventListener("click", eliminarTarea);

		$iContainer.append($checkIcon, $trashIcon);

		$tareaNueva.appendChild($texto);
		$tareaNueva.appendChild($iContainer);

		$tareas.appendChild($tareaNueva);
		input.value = "";
	}
	else alert("Debes ingresar una tarea");
}

function completarTarea(e){
	let tarea = e.target.parentNode.parentNode;
  tarea.classList.toggle('complete');
}

function eliminarTarea(e){
  let tarea = e.target.parentNode.parentNode;
  tarea.remove();
}

$button.addEventListener("click", aregarTarea);
$input.addEventListener("keydown", (e) => {
	if (e.key == "Enter") {
		aregarTarea();
	}
})

