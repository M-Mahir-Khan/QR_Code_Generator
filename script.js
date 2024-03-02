const qrinput = document.getElementById("qr-input");
const qrimg = document.getElementById("qr-img");
const qrbtn = document.getElementById("qr-btn");

console.log(qrinput,qrimg,qrbtn);


qrbtn.addEventListener("click", ()=>{
    const inputValue = qrinput.value;
    if(!inputValue){
        alert("Please enter a valid URL")
        return;
    }else{
        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
        console.log(qrimg.src);
        qrimg.alt = `QR code for ${inputValue}`
    }
})