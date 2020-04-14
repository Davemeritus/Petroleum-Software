"use strict";
document.getElementById('w-area').addEventListener('submit',estimateTotal);

function estimateTotal(event) {
    event.preventDefault();

    if  (document.getElementById('flowrate-q').value === ''){
        alert ('Please fill me');
        document.getElementById('flowrate-q').focus();
    
    }
    
    if  (document.getElementById('area').value === ''){
        alert ('Please fill me');
        document.getElementById('area').focus();
    }
    
  var FlowR= parseFloat(document.getElementById('flowrate-q').value,10) || 0,
    AreA = parseFloat(document.getElementById('area').value,10) || 0;

    var estimate = ((5.615*FlowR)/AreA).toFixed(4) + 'ft/day';

document.getElementById('txt-estimate').value = estimate;

document.getElementById('results').innerHTML = 'Apparent Velocity:' +estimate;
}

   