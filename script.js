let edit = document.getElementById("hello-div")
let text = document.getElementById("hello")
let del = document.getElementsByClassName("create-task")[0]
let red = document.getElementsByClassName("red-inside")[0]
let blue = document.getElementsByClassName("blue-inside")[0]
let yellow = document.getElementsByClassName("yellow-inside")[0]
let black = document.getElementsByClassName("black-inside")[0]
let form = document.getElementById("form")
let arr = Array.from(edit.classList)
let done = document.querySelector(".submit-me")
let display = document.getElementById("disp")
// let deleting = document.getElementsByClassName("delete")[0]
del.addEventListener("click", fun)
function fun() {
    edit.classList.add("active")
    edit.classList.remove("inactive")
    display.classList.add("display")
    display.classList.remove("disp")

    red.addEventListener("click", function () {
        edit.classList.add("red-added")
        // console.log(edit.classList)

    })
    black.addEventListener("click", function () {
        edit.classList.add("black-added")
    })
    blue.addEventListener("click", function () {
        edit.classList.add("blue-added")
    })
    yellow.addEventListener("click", function () {
        edit.classList.add("yellow-added")
    })

}
done.addEventListener("click", (e) => {
    e.preventDefault()

    if (edit.classList.contains("red-added")) {
        let redd = document.createElement("div")
        redd.classList = "reddish"
        display.appendChild(redd)


        let red1 = document.createElement("textarea")
        red1.classList.add("shift")
        red1.value = hello.value
        redd.append(red1)
        red1.setAttribute("readonly","readonly")

        
        edit.classList.remove("active")
        edit.classList.remove("red-added")
        edit.classList.add("inactive")

    }
   else if (edit.classList.contains("blue-added")) {
        let bluee = document.createElement("div")
        bluee.classList = "blueish"
        display.appendChild(bluee)


        let blue1 = document.createElement("textarea")
        blue1.classList.add("shift")
        blue1.value = hello.value
        bluee.append(blue1)
        blue1.setAttribute("readonly","readonly")
        edit.classList.remove("blue-added")
        edit.classList.remove("active")
        edit.classList.add("inactive")

    }
  else  if (edit.classList.contains("black-added")) {
        let blackk = document.createElement("div")
        blackk.classList = "blackish"
        display.appendChild(blackk)


        let black1 = document.createElement("textarea")
        black1.classList.add("shift")
        black1.value = hello.value
        blackk.append(black1)
        black1.setAttribute("readonly","readonly")

        edit.classList.remove("black-added")
        edit.classList.remove("active")
        edit.classList.add("inactive")

    }
   else if (edit.classList.contains("yellow-added")) {
        let yelloww = document.createElement("div")
        yelloww.classList = "reddish"
        display.appendChild(yelloww)


        let yellow1 = document.createElement("textarea")
        yellow1.classList.add("shift")
        yellow1.value = hello.value
        yelloww.append(yellow1)
        yellow1.setAttribute("readonly","readonly")

        edit.classList.remove("yellow-added")
        edit.classList.remove("active")
        edit.classList.add("inactive")

    }
})


