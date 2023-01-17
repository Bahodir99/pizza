var elSelect = document.querySelector('.sel__pizza');
var elBtn1 = document.querySelector('.btn__1');
var elBtn2 = document.querySelector('.btn__2');
var elBtn3 = document.querySelector('.btn__3');
var elNon = document.querySelector('.non');
var elXajmi = document.querySelector('.xajmi');
var elPomidor = document.querySelector('.pomidor');
var elBodring = document.querySelector('.bodring');
var elKarom = document.querySelector('.karom');
var elSir = document.querySelector('.sir');
var elMayonez = document.querySelector('.mayonez');
var elKetchup = document.querySelector('.ketchup');
var elTarkibi = document.querySelector('.tarkibi');
var elQalampir = document.querySelector('.qalampir');
var elQazi = document.querySelector('.qazi');
var elQoshimcha = document.querySelector('.qoshimcha');
var elNatija = document.querySelector('.natija');
var elBuyurtma = document.querySelector('.Btn_buyurtma');
var elObj = document.querySelector('.list');



var fullObj = {
    qalinligi : '',
    kattaligi : '',
    tarkibi : [],
    qoshimcha : [],
}

elSelect.addEventListener('change', (e)=>{
    fullObj.qalinligi = elSelect.value
    elNon.textContent = fullObj.qalinligi  
});

elBtn1.addEventListener('click', (e)=>{
    fullObj.kattaligi = elBtn1.textContent
    elXajmi.textContent = '20 sm'
});

elBtn2.addEventListener('click', (e)=>{
    fullObj.kattaligi = elBtn2.textContent
    elXajmi.textContent = '25 sm' 
});

elBtn3.addEventListener('click', (e)=>{
    fullObj.kattaligi = elBtn3.textContent
    elXajmi.textContent = '30 sm' 
});

elPomidor.addEventListener('click', ()=>{
    if (elPomidor.checked == true){
        fullObj.tarkibi.push('Pomidor')
        elTarkibi.textContent = fullObj.tarkibi           
    }
    else{
        var index = fullObj.tarkibi.indexOf('Pomidor')
        if (index > -1){
            fullObj.tarkibi.splice(index, 1)
            elTarkibi.textContent = fullObj.tarkibi
        }
    }
})


elBodring.addEventListener('click', ()=>{
    if (elBodring.checked == true){
        fullObj.tarkibi.push('Bodring')
        elTarkibi.textContent = fullObj.tarkibi           
    }
    else{
        var index = fullObj.tarkibi.indexOf('Bodring')
        if (index > -1){
            fullObj.tarkibi.splice(index, 1)
            elTarkibi.textContent = fullObj.tarkibi
        }
    }
})


elKarom.addEventListener('click', ()=>{
    if (elKarom.checked == true){
        fullObj.tarkibi.push('Karom')
        elTarkibi.textContent = fullObj.tarkibi           
    }
    else{
        var index = fullObj.tarkibi.indexOf('Karom')
        if (index > -1){
            fullObj.tarkibi.splice(index, 1)
            elTarkibi.textContent = fullObj.tarkibi
        }
    }
})

elSir.addEventListener('click', ()=>{
    if (elSir.checked == true){
        fullObj.tarkibi.push('Pishloq')
        elTarkibi.textContent = fullObj.tarkibi           
    }
    else{
        var index = fullObj.tarkibi.indexOf('Pishloq')
        if (index > -1){
            fullObj.tarkibi.splice(index, 1)
            elTarkibi.textContent = fullObj.tarkibi
        }
    }
})


elMayonez.addEventListener('click', ()=>{
    if (elMayonez.checked == true){
        fullObj.tarkibi.push('Mayonez')
        elTarkibi.textContent = fullObj.tarkibi           
    }
    else{
        var index = fullObj.tarkibi.indexOf('Mayonez')
        if (index > -1){
            fullObj.tarkibi.splice(index, 1)
            elTarkibi.textContent = fullObj.tarkibi
        }
    }
})


elKetchup.addEventListener('click', ()=>{
    if (elKetchup.checked == true){
        fullObj.tarkibi.push('Ketchup')
        elTarkibi.textContent = fullObj.tarkibi           
    }
    else{
        var index = fullObj.tarkibi.indexOf('Ketchup')
        if (index > -1){
            fullObj.tarkibi.splice(index, 1)
            elTarkibi.textContent = fullObj.tarkibi
        }
    }
})


elQalampir.addEventListener('click', ()=>{
    if (elQalampir.checked == true){
        fullObj.qoshimcha.push('Qalampir')
        elQoshimcha.textContent = fullObj.qoshimcha           
    }
    else{
        var index = fullObj.qoshimcha.indexOf('Qalampir')
        if (index > -1){
            fullObj.qoshimcha.splice(index, 1)
            elQoshimcha.textContent = fullObj.qoshimcha
        }
    }
})


elQazi.addEventListener('click', ()=>{
    if (elQazi.checked == true){
        fullObj.qoshimcha.push('Qazi')
        elQoshimcha.textContent = fullObj.qoshimcha          
    }
    else{
        var index = fullObj.qoshimcha.indexOf('Qazi')
        if (index > -1){
            fullObj.qoshimcha.splice(index, 1)
            elQoshimcha.textContent = fullObj.qoshimcha
        }
    }
})

elBuyurtma.addEventListener('click', ()=>{
   console.log(fullObj);
})