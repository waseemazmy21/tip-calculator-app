// handle click or change custom input
const btns = document.querySelectorAll(".btn");
const customBtn = document.querySelector("#custom");

btns.forEach( btn => {
    btn.addEventListener("click", handleClick);
})

customBtn.addEventListener("change", handleClick);
customBtn.addEventListener("click", handleClick);

function handleClick(e) {
    e.preventDefault();
    let percent
    if(e.target.tagName == "BUTTON") {
        percent = getBtnPercent(e.target);
    } else {
        percent = getCustomPercent(e.target);
    }

    const num = getNum();
    const bill = getBill();

    if(validPercent(percent) && validNum(num) && validBill(bill)) {
        printData(bill, num, percent);

    }
}

// get percent => valid

function getBtnPercent(btn) {
    let percent = btn.textContent;
    percent = percent.slice(0, -1);
    percent = +percent;
    return percent;
}

function getCustomPercent(input) {
    let percent = +input.value;
    return percent;
}

function validPercent(percent) {
    if(typeof percent != "number" || percent <= 0) {
        document.querySelector("#custom").classList.add("error");
        return false;
    } else {
        document.querySelector("#custom").classList.remove("error");
        return true;
    }
}

// get bill => valid bill

function getBill() {
    const input = document.querySelector("#bill");
    const bill = +input.value;
    return bill;
}

function validBill(bill) {
    if(typeof bill != "number" || bill <= 0) {
        document.querySelector("#bill").classList.add("error");
        return false;
    } else {
        document.querySelector("#bill").classList.remove("error");
        return true;
    }
}

// get get number of people => valid

function getNum() {
    const input = document.querySelector("#num_of_people");
    const num = +input.value;
    return num;
}

function validNum(num) {
    if(typeof num != "number" || num <= 0) {
        document.querySelector(".error-message").classList.remove("hidden");
        document.querySelector("#num_of_people").classList.add("error");
        return false;
    } else {
        document.querySelector(".error-message").classList.add("hidden");
        document.querySelector("#num_of_people").classList.remove("error");
        return true;
    }
}

// calc total tip
// calc tip per person
// print tips

function printData(bill, num, percent) {
    const tip = bill * percent / 100;
    let tip_per_person = tip/num;
    tip_per_person = Math.round(tip_per_person * 100) / 100;
    let total = (bill + tip) / num;
    total = Math.round(total * 100) / 100;

    document.querySelector(".tip").textContent = tip_per_person;
    document.querySelector(".total").textContent = total;
}


// reset input fields
const btnReset = document.querySelector(".btnReset");
btnReset.addEventListener("click", reset);

function reset() {
    document.querySelector("#num_of_people").value = "";
    document.querySelector("#bill").value = "";
    document.querySelector("#custom").value = "";
}