
const nbValues = 12;
const defaultValue = 1;
const MIN_VALUE = 0;
const MAX_VALUE = 10;


const allLabels = new Array(nbValues).fill(defaultValue).map( (_,i) => String.fromCharCode('A'.charCodeAt(0)+i));
//const allLabels = ['J','F','M','A','M','J','J','A','S','O','N','D'];

let myChart;

const socket = io();


let valueArray = new Array(nbValues);
let labelArray = new Array(nbValues);


socket.on('randomInt', (int) => {
  valueArray.pop();
  labelArray.pop();
  valueArray.unshift(int);
  labelArray.unshift(String.fromCharCode('A'.charCodeAt(0)+int))
  myChart.update();
}); 

// l'objet Chart

const setup = () => {
  const ctxt = document.getElementById('myChart').getContext('2d');

  myChart = new Chart(ctxt, {
    type: 'bar',
    data: {
        labels: labelArray,
        datasets: [{
            label : `mes ${nbValues} dernières données`,
            data :  valueArray,
            backgroundColor: 'rgba(128,255,128,0.5)',
            borderColor: 'rgba(0, 0, 0, 1)',
            borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        y: {
              min: MIN_VALUE,
              max: MAX_VALUE
            }
      }
    }
  });
}

window.addEventListener('DOMContentLoaded', setup);
