let maincount = document.querySelector("#maincount")
let add = document.querySelector("#add")
let save = document.querySelector("#save")
let savenumber = document.querySelector("#savenumber")
let refresh = document.querySelector("#refresh")
add.addEventListener('click', function () {
    maincount.innerHTML = +maincount.innerHTML + 1
    refresh.classList.add("refrehopacity")
})
save.addEventListener('click', function () {
    if (maincount.innerHTML == 0) {
        alert("add value first")
    }
    else if (savenumber.innerHTML == 0) {
        savenumber.innerHTML = maincount.innerHTML
    }
    else {
        savenumber.innerHTML += ", " + maincount.innerHTML
    }
    maincount.innerHTML = 0
})
refresh.addEventListener('click', function () {
    maincount.innerHTML = 0;
    savenumber.innerHTML = ""
    refresh.classList.remove("refrehopacity")
})
