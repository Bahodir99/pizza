var fullObj = {
    qalinligi : '',
    kattaligi : '',
    tarkibi : [],
    qoshimcha : [],
}



var elSelect = document.querySelector('.sel__pizza');
var elBtn1 = document.querySelector('.btn__1');
var elBtn2 = document.querySelector('.btn__2');
var elBtn3 = document.querySelector('.btn__3');
var elNon = document.querySelector('.non');
var elXajmi = document.querySelector('.xajmi');

elSelect.addEventListener('change', (e)=>{
    fullObj.qalinligi = elSelect.value
    elNon.textContent = elSelect.value  
});

elBtn1.addEventListener('click', (e)=>{
    fullObj.kattaligi = elBtn1.value
    elXajmi.textContent = '20 sm'
});

elBtn2.addEventListener('click', (e)=>{
    fullObj.kattaligi.push( '25sm')
    elXajmi.textContent = '25 sm' 
});

elBtn3.addEventListener('click', (e)=>{
    fullObj.kattaligi = elBtn3.value
    elXajmi.textContent = '30 sm' 
});


var arr = ['Pomidor', 'Bodring', 'Karom', 'Sir', 'Mayonez', 'Ketchup'];

var elPomidor = document.querySelector('.pomidor');
var elBodring = document.querySelector('.bodring');
var elKarom = document.querySelector('.karom');
var elSir = document.querySelector('.sir');
var elMayonez = document.querySelector('.mayonez');
var elKetchup = document.querySelector('.ketchup');
var elTarkibi = document.querySelector('.tarkibi');


elPomidor.addEventListener('click', ()=>{
    if (elPomidor.checked == true){
        var elPom = document.createElement('li')
        elPom.textContent = 'Pomidor'
        fullObj.tarkibi.push('pomidor')
        elTarkibi.appendChild(elPom)
    }
    else {
        elPom.textContent = '';        
    }
})

elBodring.addEventListener('click', ()=>{
    if (elBodring.checked == true){
        var elBod = document.createElement('li')
        elBod.textContent = 'Bodring'
        fullObj.tarkibi.push('Bodring')
        elTarkibi.appendChild(elBod)
    }
    else {
        elPom.textContent = '';        
    }
})

elKarom.addEventListener('click', ()=>{
    if (elKarom.checked == true){
        var elKar = document.createElement('li')
        elKar.textContent = 'Karom'
        fullObj.tarkibi.push('karom')
        elTarkibi.appendChild(elKar)
    }
    else {
        elPom.textContent = '';        
    }
})

elSir.addEventListener('click', ()=>{
    if (elSir.checked == true){
        var elPish = document.createElement('li')
        elPish.textContent = 'Sir'
        fullObj.tarkibi.push('sir')
        elTarkibi.appendChild(elPish)
    }
    else {
        elPom.textContent = '';        
    }
})

elMayonez.addEventListener('click', ()=>{
    if (elMayonez.checked == true){
        var elMay = document.createElement('li')
        elMay.textContent = 'Mayonez'
        fullObj.tarkibi.push('mayonez')
        elTarkibi.appendChild(elMay)
    }
    else {
        elPom.textContent = '';        
    }
})

elKetchup.addEventListener('click', ()=>{
    if (elKetchup.checked == true){
        var elKet = document.createElement('li')
        elKet.textContent = 'Ketchup'
        fullObj.tarkibi.push('ketchup')
        elTarkibi.appendChild(elKet)
    }
    else {
        elPom.textContent = '';        
    }
})

console.log(fullObj);