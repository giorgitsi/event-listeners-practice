let btnRandom = document.querySelector(".btn-random")
let btnColor = document.querySelector(".btn-color")
let box = document.querySelector(".box")
let hoverBox = document.querySelector(".hover-box")
let numberBox = document.querySelector(".number-box")
let numberBoxBtnIncrease  = document.querySelector(".number-box-btn-increase")
let numberBoxBtnDecrease= document.querySelector(".number-box-btn-decrease")


console.log(btnRandom)
console.log(btnColor)
console.log(box)




let num1 = Math.floor(Math.random()*11) + 10

// let, const, var



btnRandom.addEventListener("click", function (){
    let randomNum = Math.floor(Math.random()*101) + 100
    btnRandom.textContent = randomNum
})


function func2(num1, num2, num3){

    let jami = num1 + num2 + num3   
    console.log(jami)

    const maxNumber = Math.max(num1, num2, num3)

    console.log("max number:", maxNumber)

}


func2(21, 33 ,12)
func2(54, 43, 20)

const num3 = 102*4786487
const num2 = 894*776464
const num4 = 894*77646



let maxNum = Math.max(num2, num3, 76, 765765, 6576)


if (num2>num3){
    console.log(num2)
}else(
    console.log(num3)
)


func3(66, 77)

function func3(num1, num2){
    let res = num1*num1+num2*num2
    return res
}

let res = func3(3,2)



// maxString




function func6(str1, str2){
    let str 

    if (str1.length > str2.length){

        str = str1
    }else if(str1.length < str2.length){
        str = str2
        
    }
    
    return str
}




const longest = func6("abc", "abcd")
console.log(longest)


btnColor.addEventListener("click", function func7(){
    box.style.background = "Green"
    
})


box.addEventListener("dblclick", changeColor)

function changeColor(){
    box.style.background = "red"
}


hoverBox.addEventListener("mouseenter", function (){
    box.style.background = "pink"
})

hoverBox.addEventListener("mouseleave", function (){
    box.style.background = "yellow"
})


let num5 = Number(numberBox.textContent)
// let num5 = 100
numberBox.addEventListener("dblclick", function (){
    // num5 = num5*2
    num5 *= 2
    numberBox.textContent = num5
})



numberBoxBtnIncrease.addEventListener("click", function (){
    num5 += 1
    numberBox.textContent = num5
})


numberBoxBtnDecrease.addEventListener("click", function (){
    num5 -= 1
    numberBox.textContent = num5
})
