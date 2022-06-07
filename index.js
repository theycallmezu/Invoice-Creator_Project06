/*

/// BUTTON OPTION 01 /// 
////////////////////////
document.getElementById("s-block-01").onclick = function() {btnClick1(), btnClick2()};

function btnClick1() {
    alert("It works 1")
}

function btnClick2() {
    alert("It works 2")
}


/// BUTTON OPTION 02 ///
////////////////////////
const BlockBtn1 = document.getElementById("s-block-01")

BlockBtn1.addEventListener("click", function() {
    alert("It works 1")
})

*/



///////////////////////
///// DATA ARRAYS /////
///////////////////////

let data = [
    {
        task: "Wash Car",
        total: 10
    }, 
    {
        task: "Mow Lawn",
        total: 20
    },
    {
        task: "Pull Weeds",
        total: 30
    }
]

let priceData = [ ]

///////////////////////////
///// SERVICE BUTTONS /////
///////////////////////////

const washCar = document.getElementById("wash-car")
const mowLawn = document.getElementById("mow-lawn")
const pullWeeds = document.getElementById("pull-weeds")

const amountColumnRight = document.getElementById("amount-column-right")


washCar.addEventListener("click", function() { 
    
    // THIS ADDS "TASK" & "TOTAL" TO THE SERVICE WRAPPER
    washCarService()

    // THIS RECALCULATES THE TOTAL

    let totalAmountDOM = `
        <div id="total-amount">
            $${accumulate(priceData)}
        </div>
    `
    accumulate(priceData)

    amountColumnRight.innerHTML = totalAmountDOM
})


mowLawn.addEventListener("click", function() {
    // THIS ADDS "TASK" & "TOTAL" TO THE SERVICE WRAPPER
    mowLawnService()

    // THIS RECALCULATES THE TOTAL

    let totalAmountDOM = `
        <div id="total-amount">
            $${accumulate(priceData)}
        </div>
    `
    accumulate(priceData)

    amountColumnRight.innerHTML = totalAmountDOM
})


pullWeeds.addEventListener("click", function() {
    // THIS ADDS "TASK" & "TOTAL" TO THE SERVICE WRAPPER
    pullWeedsService()

    // THIS RECALCULATES THE TOTAL

    let totalAmountDOM = `
        <div id="total-amount">
            $${accumulate(priceData)}
        </div>
    `
    accumulate(priceData)

    amountColumnRight.innerHTML = totalAmountDOM
})



///////////////////////
///// OUTPUT DATA /////
///////////////////////

let serviceColumnLeft = document.getElementById("service-column-left")
let serviceColumnRight = document.getElementById("service-column-right")

let washCarChecker = " "
let mowLawnChecker = " "
let pullWeedsChecker = " "


function washCarService() {
    
    if (washCarChecker === data[0].total) {
        console.log("Already Logged")
    } else {
        priceData.push(data[0].total);

        let taskDOM = `
            <div class="service-task">
                <span>${data[0].task}</span>
            </div>
        `
        let totalDOM = `
            <div class="service-total">
                <span>$</span>${data[0].total}
            </div>
        `
        serviceColumnLeft.innerHTML += taskDOM
        serviceColumnRight.innerHTML += totalDOM
    }

    washCarChecker = data[0].total
    
}





function mowLawnService() {

    if (mowLawnChecker === data[1].total) {
        console.log("Already Logged")
    } else {
        priceData.push(data[1].total);

        let taskDOM = `
            <div class="service-task">
                <span>${data[1].task}</span>
            </div>
        `
        let totalDOM = `
            <div class="service-total">
                <span>$</span>${data[1].total}
            </div>
        `
        serviceColumnLeft.innerHTML += taskDOM
        serviceColumnRight.innerHTML += totalDOM
        
        
    }
    
    mowLawnChecker = data[1].total
}

function pullWeedsService() {
    
    if (pullWeedsChecker === data[2].total) {
        console.log("Already Logged")
    } else {
        priceData.push(data[2].total);

        let taskDOM = `
            <div class="service-task">
                <span>${data[2].task}</span>
            </div>
        `
        let totalDOM = `
            <div class="service-total">
                <span>$</span>${data[2].total}
            </div>
        `
        serviceColumnLeft.innerHTML += taskDOM
        serviceColumnRight.innerHTML += totalDOM

    }

    pullWeedsChecker = data[2].total
}



////////////////////////
///// TOTAL AMOUNT /////
////////////////////////

function accumulate(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

let totalAmountDOM = `
    <div id="total-amount">
        $${accumulate(priceData)}
    </div>
`
accumulate(priceData)

amountColumnRight.innerHTML = totalAmountDOM



////////////////////////
///// SEND INVOICE /////
////////////////////////


let sendInvoiceBtn = document.getElementById("send-invoice")

sendInvoiceBtn.addEventListener("click", function() { 
    
    // THIS ADDS "TASK" & "TOTAL" TO THE SERVICE WRAPPER
    serviceColumnLeft.innerHTML = `<div id="task-title">Task</div>`
    serviceColumnRight.innerHTML = `<div id="total-title">Total</div>`

    washCarChecker = 0
    mowLawnChecker = 0
    pullWeedsChecker = 0

    priceData = []

    let totalAmountDOM = `
        <div id="total-amount">
            $${accumulate(priceData)}
        </div>
    `
    accumulate(priceData)

    amountColumnRight.innerHTML = totalAmountDOM

})