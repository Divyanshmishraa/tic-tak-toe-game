let boxes = document.querySelectorAll(".c")
let Reset = document.querySelector("#reset_btn")
let msg = document.querySelector("#msg")
let msg_container = document.querySelector(".msg_container")
let new_game = document.querySelector("#new_button")

const WinPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let count = true;
boxes.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        if (count) {
            ele.innerHTML = "X"
            count = false
        }
        else {
            ele.innerHTML = "O"
            count = true
        }
        ele.disabled = true  //// not to rewrite x on o
        checkWinner()
    })
})

function disableBox() {
    for (let i of boxes) {
        i.disabled = true;
    }
}

function enableBox() {
    for (let i of boxes) {
        i.disabled = false;
        i.innerText = ""
    }
}

let Winner = (w) => {
    msg.innerText = `The person ${w} Won the Game"`
    msg_container.classList.remove("hide")
    disableBox()
}

const checkWinner = () => {
    for (let pattern of WinPattern) {
        let cob1 = boxes[pattern[0]].innerText;
        let cob2 = boxes[pattern[1]].innerText;
        let cob3 = boxes[pattern[2]].innerText;

        if (cob1 != "" && cob2 != "" && cob3 != "") {
            if (cob1 === cob2 && cob2 === cob3) {
                console.log("The person " + cob1 + " Won the Game")
                Winner(cob1)
            }
        }
    }
}

const ReStart = () => {
    count = true
    enableBox()
    msg_container.classList.add("hide")
}

new_game.addEventListener("click", ReStart)

Reset.addEventListener("click", ReStart)