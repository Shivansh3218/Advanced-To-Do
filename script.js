//Declaration of all variables

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
let completeds = document.getElementById("completed")


//FIRST TO SHOW THE TASK FILLING BOX

del.addEventListener("click", fun)
function fun() {
    edit.classList.add("active")
    edit.classList.remove("inactive")
    display.classList.add("disp")
    document.body.style.background = " rgb(188, 184, 178)"
    document.body.style.opacity = "0.7"


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

    document.body.style.background = "none"
    document.body.style.opacity = "1"

    // RED CONTAINER-----------------------------------------------------------------------------


    if (edit.classList.contains("red-added")) {
        let redd = document.createElement("div")
        redd.classList = "reddish"
        display.append(redd) 
        
        let red1 = document.createElement("textarea")
        red1.classList.add("shift")
        red1.style.width = "300px"
        red1.style.height = "150px"
        red1.value = hello.value
        redd.append(red1)
        red1.setAttribute("readonly", "readonly")
        

        edit.classList.remove("active")
        edit.classList.remove("red-added")
        edit.classList.add("inactive")

        ////Buttons creted inside of the box

        //div to wrap the all inside button to give flex

        let divider = document.createElement("div")
        divider.classList = "divis"
        redd.append(divider)
        divider.style.backgroundColor = "azure"
        divider.style.display = "flex"
        divider.style.justifyContent = "space-between"

        //div to wrap the edit delete and change priority button

        let division = document.createElement("div")
        division.classList = "isc bio"
        division.id = "mid"
        divider.append(division)
        // division.style.backgroundColor="red"
        //CHECKBOX MADE 

        let check = document.createElement("input")
        check.type = "checkbox"
        division.append(check)

        check.addEventListener("click", () => {
            completeds.appendChild(redd)

        })

        //EDIT DELETE BUTTONS

        let editButton = document.createElement("button")
        editButton.classList = "edit-button"
        editButton.innerText = "Edit"
        division.append(editButton)

        let deleting = document.createElement("button")
        deleting.classList = "delete"
        deleting.innerText = "Delete"
        division.append(deleting)

        //EDIT BUTTON FUNCTIONALITY
        editButton.addEventListener("click", () => {
            if (editButton.innerText == "save") {
                editButton.innerText = "edit"
                red1.setAttribute("readonly", "readonly")
            }
            else if (editButton.innerText = "edit") {
                editButton.innerText = "save"
                red1.removeAttribute("readonly")

            }
        })
        deleting.addEventListener("click", () => {
            if (completeds.contains(redd)) {
                completeds.removeChild(redd)
            }
            else {
                display.removeChild(redd)
            }
        })
        //COLOR CHANGING BOX TO BE MADE 
        let cul = document.createElement("button")
        cul.classList = "butt"
        division.append(cul)
        cul.style.width = "20px"
        cul.style.height = "20px"
        cul.addEventListener("click", () => {
            let arr = ["red", "blue", "yellow", "black"]
            let mouse = Math.floor(Math.random() * arr.length) 
            let mouser = arr[mouse]
            cul.style.backgroundColor = mouser 
            redd.style.borderTopColor = mouser

            if (mouser == "blue"){
                redd.classList.remove("reddish")
                redd.classList.add("blueish")
            }else if(mouser=="black"){
                redd.classList.remove("reddish")
                redd.classList.add("blackish")
            }else if(mouser == "yellow"){
                redd.classList.remove("reddish")
                redd.classList.add("yellowish")
            }
        })
        // ----LOCK UNLOCK CONTROLS
        let lock = document.createElement("button")
        lock.classList = "btt"
        lock.innerText = "lock"
        divider.append(lock)
        hello.value = ""
        lock.addEventListener("click", () => {
            if (lock.innerText == "lock") {
                lock.innerText = "unlocked"
                division.classList.remove("bio")
            }
            else if (lock.innerText = "unlocked") {
                lock.innerText = "lock"
                division.classList.add("bio")
            }
        })
        display.appendChild(redd) 
        // redBox.append(redd)
    }


    //BLUE CONTAINER-------------------------------------------------------------------------------------------


   else if (edit.classList.contains("blue-added")) {
        let bluee = document.createElement("div")
        bluee.classList = "blueish"
        display.append(bluee) 
        
        let blue1 = document.createElement("textarea")
        blue1.classList.add("shift")
        blue1.style.width = "300px"
        blue1.style.height = "150px"
        blue1.value = hello.value
        bluee.append(blue1)
        blue1.setAttribute("readonly", "readonly")
        

        edit.classList.remove("active")
        edit.classList.remove("red-added")
        edit.classList.add("inactive")

        ////Buttons creted inside of the box

        //div to wrap the all inside button to give flex

        let divider = document.createElement("div")
        divider.classList = "divis"
        bluee.append(divider)
        divider.style.backgroundColor = "azure"
        divider.style.display = "flex"
        divider.style.justifyContent = "space-between"

        //div to wrap the edit delete and change priority button

        let division = document.createElement("div")
        division.classList = "isc bio"
        division.id = "mid"
        divider.append(division)
        // division.style.backgroundColor="red"
        //CHECKBOX MADE 

        let check = document.createElement("input")
        check.type = "checkbox"
        division.append(check)

        check.addEventListener("click", () => {
            completeds.appendChild(bluee)
        })

        //EDIT DELETE BUTTONS

        let editButton = document.createElement("button")
        editButton.classList = "edit-button"
        editButton.innerText = "Edit"
        division.append(editButton)
        let deleting = document.createElement("button")
        deleting.classList = "delete"
        deleting.innerText = "Delete"
        division.append(deleting)

        //EDIT BUTTON FUNCTIONALITY

        editButton.addEventListener("click", () => {
            if (editButton.innerText == "save") {
                editButton.innerText = "edit"
                blue1.setAttribute("readonly", "readonly")
            }
            else if (editButton.innerText = "edit") {
                editButton.innerText = "save"
                blue1.removeAttribute("readonly")
            }
        })
        deleting.addEventListener("click", () => {
            if (completeds.contains(bluee)) {
                completeds.removeChild(bluee)
            }
            else {
                display.removeChild(bluee)
            }
        })

        //COLOR CHANGING BOX TO BE MADE 
        let cul = document.createElement("button")
        cul.classList = "butt"
        division.append(cul)
        cul.style.width = "20px"
        cul.style.height = "20px"
        cul.addEventListener("click", () => {
            let arr = ["red", "blue", "yellow", "black"]
            let mouse = Math.floor(Math.random() * arr.length)
            let mouser = arr[mouse]
            cul.style.backgroundColor = mouser
            bluee.style.borderTopColor = mouser

            if (mouser == "red"){
                bluee.classList.remove("blueish")
                bluee.classList.add("reddish")
            }else if(mouser=="black"){
                bluee.classList.remove("blueish")
                bluee.classList.add("blackish")
            }else if(mouser == "yellow"){
                bluee.classList.remove("blueish")
                bluee.classList.add("yellowish")
            }
        })
        // ----LOCK UNLOCK CONTROLS
        let lock = document.createElement("button")
        lock.classList = "btt"
        lock.innerText = "lock"
        divider.append(lock)
        hello.value = ""
        lock.addEventListener("click", () => {
            if (lock.innerText == "lock") {
                lock.innerText = "unlocked"
                division.classList.remove("bio")
            }
            else if (lock.innerText = "unlocked") {
                lock.innerText = "lock"
                division.classList.add("bio")
            }
        })
       
        display.appendChild(bluee)
        edit.classList.remove("blue-added")
    }

    // BLACK CONTAINER-----------------------------------------------------------------------------

    else if (edit.classList.contains("black-added")) {
        let blackk = document.createElement("div")
        blackk.classList = "blackish"
        console.log(blackk.classList)
        // display.appendChild(blackk)

        let black1 = document.createElement("textarea")
        black1.style.width = "300px"
        black1.style.height = "150px"
        black1.classList.add("shift")
        black1.value = hello.value
        blackk.append(black1)
        black1.setAttribute("readonly", "readonly")

        edit.classList.remove("black-added")
        edit.classList.remove("active")
        edit.classList.add("inactive")
        hello.value = ""


               ////Buttons creted inside of the box

        //div to wrap the all inside button to give flex

        let divider = document.createElement("div")
        divider.classList = "divis"
        blackk.append(divider)
        divider.style.backgroundColor = "azure"
        divider.style.display = "flex"
        divider.style.justifyContent = "space-between"

        //div to wrap the edit delete and change priority button

        let division = document.createElement("div")
        division.classList = "isc bio"
        division.id = "mid"
        divider.append(division)
        // division.style.backgroundColor="red"

        //CHECKBOX MADE 

        let check = document.createElement("input")
        check.type = "checkbox"
        division.append(check)

        check.addEventListener("click", () => {
            completeds.appendChild(blackk)
        })

        //EDIT DELETE BUTTONS

        let editButton = document.createElement("button")
        editButton.classList = "edit-button"
        editButton.innerText = "Edit"
        division.append(editButton)

        let deleting = document.createElement("button")
        deleting.classList = "delete"
        deleting.innerText = "Delete"
        division.append(deleting)

        //EDIT BUTTON FUNCTIONALITY

        editButton.addEventListener("click", () => {
            if (editButton.innerText == "save") {
                editButton.innerText = "edit"
                black1.setAttribute("readonly", "readonly")
            }
            else if (editButton.innerText = "edit") {
                editButton.innerText = "save"
               black1.removeAttribute("readonly")
            }
        })
        deleting.addEventListener("click", () => {
            if (completeds.contains(blackk)) {
                completeds.removeChild(blackk)
            }
            else {
                display.removeChild(blackk)
            }
        })

        //COLOR CHANGING BOX TO BE MADE 

        let cul = document.createElement("button")
        cul.classList = "butt"
        division.append(cul)
        cul.style.width = "20px"
        cul.style.height = "20px"
        cul.addEventListener("click", () => {
            let arr = ["red", "blue", "yellow", "black"]
            let mouse = Math.floor(Math.random() * arr.length)
            let mouser = arr[mouse]
            cul.style.backgroundColor = mouser
            blackk.style.borderTopColor = mouser
        })

        // ----LOCK UNLOCK CONTROLS
        let lock = document.createElement("button")
        lock.classList = "btt"
        lock.innerText = "lock"
        divider.append(lock)
        hello.value = ""
        lock.addEventListener("click", () => {
            if (lock.innerText == "lock") {
                lock.innerText = "unlocked"
                division.classList.remove("bio")
            }
            else if (lock.innerText = "unlocked") {
                lock.innerText = "lock"
                division.classList.add("bio")
            }
        })
        // display.append(blackk)
       display.appendChild(blackk)
    }




    //YELLOW CONTAINER----------------------------------------------------------------------------

    else if (edit.classList.contains("yellow-added")) {
        let yelloww = document.createElement("div")
        yelloww.classList = "yellowish"
        // display.appendChild(yelloww)
        let yellow1 = document.createElement("textarea")
        yellow1.style.width = "300px"
        yellow1.style.height = "150px"
        yellow1.classList.add("shift")
        yellow1.value = hello.value
        yelloww.append(yellow1)
        yellow1.setAttribute("readonly", "readonly")

        edit.classList.remove("yellow-added")
        edit.classList.remove("active")
        edit.classList.add("inactive")
        hello.value = ""
         ////Buttons creted inside of the box
        //div to wrap the all inside button to give flex

        let divider = document.createElement("div")
        divider.classList = "divis"
        yelloww.append(divider)
        divider.style.backgroundColor = "azure"
        divider.style.display = "flex"
        divider.style.justifyContent = "space-between"

        //div to wrap the edit delete and change priority button

        let division = document.createElement("div")
        division.classList = "isc bio"
        division.id = "mid"
        divider.append(division)
// division.style.backgroundColor="red"
//CHECKBOX MADE 
        let check = document.createElement("input")
        check.type = "checkbox"
        division.append(check)

        check.addEventListener("click", () => {
            completeds.appendChild( yelloww)
        })
        //EDIT DELETE BUTTONS
        let editButton = document.createElement("button")
        editButton.classList = "edit-button"
        editButton.innerText = "Edit"
        division.append(editButton)
        let deleting = document.createElement("button")
        deleting.classList = "delete"
        deleting.innerText = "Delete"
        division.append(deleting)
        //EDIT BUTTON FUNCTIONALITY
        editButton.addEventListener("click", () => {
            if (editButton.innerText == "save") {
                editButton.innerText = "edit"
                yellow1.setAttribute("readonly", "readonly")
            }
            else if (editButton.innerText = "edit") {
                editButton.innerText = "save"
                yellow1.removeAttribute("readonly")
            }
        })
        deleting.addEventListener("click", () => {
            if (completeds.contains(yelloww)) {
                completeds.removeChild(yelloww)
            }
            else {
                display.removeChild(yelloww)
            }
        })
        //COLOR CHANGING BOX TO BE MADE 
        let cul = document.createElement("button")
        cul.classList = "butt"
        division.append(cul)
        cul.style.width = "20px"
        cul.style.height = "20px"
        cul.addEventListener("click", () => {
            let arr = ["red", "blue", "yellow", "black"]
            let mouse = Math.floor(Math.random() * arr.length)
            let mouser = arr[mouse]
            cul.style.backgroundColor = mouser
            yelloww.style.borderTopColor = mouser
        })
        // ----LOCK UNLOCK CONTROLS
        let lock = document.createElement("button")
        lock.classList = "btt"
        lock.innerText = "lock"
        divider.append(lock)
        hello.value = ""
        lock.addEventListener("click", () => {
            if (lock.innerText == "lock") {
                lock.innerText = "unlocked"
                division.classList.remove("bio")
            }
            else if (lock.innerText = "unlocked") {
                lock.innerText = "lock"
                division.classList.add("bio")
            }
        })
        // display.append(yelloww) 
         display.appendChild(yelloww)
    }
})
let buttonn = document.getElementsByClassName("complete")[0]
buttonn.addEventListener("click", () => {
    blackBox.classList.remove("show")
    blueBox.classList.remove("show")
    redBox.classList.remove("show")
    yellowBox.classList.remove("show")


//COMPLETE BUTTON TO GET COMPLETED TASKS

    if (buttonn.innerText == "Completed") {
        completeds.classList.add("show")
        display.classList.add("hide")
        buttonn.innerText = "Close"
    } else if (buttonn.innerText == "Close") {
        completeds.classList.remove("show")
        buttonn.innerText = "Completed"
    }
})

let redBox = document.getElementById("redding")
let blueBox = document.getElementById("blueing")
let blackBox = document.getElementById("blacking")
let yellowBox= document.getElementById("yellowing")
let allBox = document.getElementById("alling")

//TO TAKE HTML COLLECTION AND CONVERT INTO ARRAY TO APPLY FILTER METHOD
let displayItems = Array.from(display.getElementsByTagName("div"))

// function definer(){
//     if(x.includes("reddish")){
//      redBox.appendChild(div)
//     }
// }
// function definer1(){
//     if(x.includes("blueish")){
//      blueBox.appendChild(div)
//     }
// }
// function definer2(){
//     if(x.includes("blackish")){
//      blackBox.appendChild(div)
//     }
// }
// function definer3(){
//     if(x.includes("yellowish")){
//      yellowBox.appendChild(div)
//     }
// }
// let filterItem = displayItems.filter(definer)
// let filterItem2 = displayItems.filter(definer1)
// let filterItem3 = displayItems.filter(definer2)
// let filterItem4 = displayItems.filter(definer3)

//BUTTONS ON HEADER FUNCTIONALITY OF SHOWING AND HIDING WHEN CLICKED
let redButton = document.getElementsByClassName("red")[0]
redButton.addEventListener("click",()=>{
redBox.classList.add("show")
redBox.classList.remove("hide")
})

let blueButton = document.getElementsByClassName("blue")[0]
blueButton.addEventListener("click",()=>{
blueBox.classList.add("show")
blueBox.classList.remove("hide")
redBox.classList.remove("show")
blackBox.classList.remove("show")
yellowBox.classList.remove("show")
})

let blackButton = document.getElementsByClassName("black")[0]
blackButton.addEventListener("click",()=>{
blackBox.classList.add("show")
blackBox.classList.remove("hide")
})

let yellowButton = document.getElementsByClassName("yellow")[0]
yellowButton.addEventListener("click",()=>{
yellowBox.classList.add("show")
yellowBox.classList.remove("hide")
redBox.classList.remove("show")
blackBox.classList.remove("show")
blueBox.classList.remove("show")
})

let allButton = document.getElementsByClassName("all")[0]
allButton.addEventListener("click",()=>{
    display.classList.remove("hide")
    display.classList.add("show")
    completeds.classList.remove("show")
})

