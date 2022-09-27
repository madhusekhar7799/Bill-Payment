var formEl = document.getElementById("form");

let biryani = 1800;
let staters = 1400;

formEl.addEventListener("change", () => {
    var nameEl = document.getElementById("name").value
    console.log(nameEl);
    var customernameEl = document.getElementById("customername").value = nameEl
    var mobilenumberEl = document.getElementById("mobilenumber").value
    var mobileEl = document.getElementById("mobile").value = mobilenumberEl

    var biryaniEl = document.getElementById("types-of-biryani").value * biryani

    var statersEl = document.getElementById("types-of-staters").value * staters
    var billEl = document.getElementById("bill").value = biryaniEl
    subEl = billEl + statersEl
    var newBillEll = document.getElementById("bill").value = subEl
    var gstEl = document.getElementById("gst").value = (newBillEll * 18) / 100
    if (newBillEll === 0) {
        var tipEl = document.getElementById("tip").value = 0;
    } else if (newBillEll > 2000) {
        var tipEl = document.getElementById("tip").value = 200;
    }
    var totalbillEl = document.getElementById("totalbill").value = newBillEll + gstEl + tipEl

    var chooseYourBiryaniEl = document.getElementById("choose-your-biryani").value
    var chooseYourStatersEl = document.getElementById("choose-your-staters").value;
    var numberOfBiryanisEl = document.getElementById("numberOfBiryanis").value = chooseYourBiryaniEl
    var numberOfStatersEl = document.getElementById("numberOfStaters").value = chooseYourStatersEl
})




function hide() {
    var newoneEl = document.getElementById("newone")
    newoneEl.style.cssText = " display:block; display:flex; flex-direction:column; align-items:center; gap:25px;"
    formEl.style.display = "none"
    var submitEl = document.querySelector(".submit").style.display = "none"

}

function home() {
    formEl.style.display = "block"
    newoneEl.style.cssText = " display:none;"
}


