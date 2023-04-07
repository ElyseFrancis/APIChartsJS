
async function bringData(){
let data=[1]
const host = 'api.frankfurter.app';
let resp=await fetch(`https://${host}/latest?amount=1&from=EUR&to=USD`)
const data1=await resp.json()
data.push(data1.rates.USD)
 resp=await fetch(`https://${host}/latest?amount=1&from=CAD&to=USD`)
const data2=await resp.json()
data.push(data2.rates.USD)
 resp=await fetch(`https://${host}/latest?amount=1&from=CHF&to=USD`)
const data3=await resp.json()
data.push(data3.rates.USD)
   resp=await fetch(`https://${host}/latest?amount=1&from=JPY&to=USD`)
const data4=await resp.json()
data.push(data4.rates.USD)

  document.getElementById("eur").innerHTML=data[1]
  document.getElementById("cad").innerHTML=data[2]
    document.getElementById("chf").innerHTML=data[3]
    document.getElementById("jpy").innerHTML=data[4]



  
const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['USD', 'EUR', 'CAD', 'CHF', 'JPY'],
      datasets: [{
        label: 'Exchange ratio',
        data: data,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });



  

}

bringData();

