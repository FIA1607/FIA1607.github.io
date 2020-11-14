window.addEventListener('DOMContentLoaded', () => {
    let next = document.querySelector(".next")
    let i = 0
    let previous = document.querySelectorAll(".create")

    next.addEventListener("click", function(){
        previous.item(i).style.display = "none"
        i++
        previous.item(i).style.display = "flex"
        if(i == previous.length-1){
            next.style.display = "none"
        }
    })

})