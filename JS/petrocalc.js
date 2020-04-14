"use strict";
document.getElementById('w-area').addEventListener('submit',estimateTotal);

function estimateTotal(event) {
    event.preventDefault();

if  (document.getElementById('perm-k').value === ''){
    alert ('Please fill me');
    document.getElementById('perm-k').focus();

}

if  (document.getElementById('pressure-p').value === ''){
    alert ('Please fill me');
    document.getElementById('pressure-p').focus();
}
if (document.getElementById('viscosity').value === ''){
    alert ('Please fill me');
    document.getElementById('viscosity').focus();
}
    
if (document.getElementById('distance-l').value === ''){
    alert ('Please fill me');
    document.getElementById('distance-l').focus();
}
    
if (document.getElementById('area').value === ''){
    alert ('Please fill me');
    document.getElementById('area').focus();
}

var AbsPerm = parseInt(document.getElementById('perm-k').value,10) || 0,
    PresP = parseInt(document.getElementById('pressure-p').value,10) || 0,
    VisC = parseInt(document.getElementById('viscosity').value,10) || 0,
    DisT = parseInt(document.getElementById('distance-l').value,10) || 0,
    AreA= parseInt(document.getElementById('area').value,10) || 0;
    
var estimate = ((0.001127*AbsPerm*AreA*PresP)/(VisC*DisT)).toFixed(2) + 'bbl/day';

document.getElementById('txt-estimate').value = estimate;

document.getElementById('results').innerHTML = 'Flow rate:' +estimate;
}

