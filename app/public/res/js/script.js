// Index - btn
const btnMore = document.getElementById("ReadMore");

/* Muda o texto da div com o texto Ver Mais ao expandir os cards no catálogo */
if(btnMore)
{
    btnMore.addEventListener("click", e => {

        if(btnMore.attributes.getNamedItem("aria-expanded").value == "true")
            btnMore.innerHTML = "Ver Menos";
        else
            btnMore.innerHTML = "Ver Mais";
    });
}

