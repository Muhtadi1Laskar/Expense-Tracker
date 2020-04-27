let btn = document.getElementById("btn");
let paragraph = document.getElementById("paragraph");
let right = document.getElementById("#right");
let graph = document.getElementById("#graph");
let charts = document.querySelector("#chart");



const calculate_expense = () => {
  let monthly_income = parseFloat(document.getElementById("monthly-income").value) || 0;
  let rent = parseFloat(document.getElementById("rent").value) || 0;
  let food = parseFloat(document.getElementById("food").value) || 0;
  let utilities = parseFloat(document.getElementById("utilities").value) || 0;
  let result = monthly_income - (rent + food + utilities);
  let savings = monthly_income * 0.20;
  // right.style.visibility = "visible";
  paragraph.style.visibility = "visible";


  if (isNaN(result)) {
    paragraph.innerText = "You didn't enter anything. Try again ya filthy animal.";
  } else if (result === 0) {
    document.getElementById("paragraph").innerText = `After your expenses you have $0  left in your budget. You might want to try and reduce your spending this month`;
  } else if (result < 0) {
    result = String(result)
    paragraph.innerText = ` After your expenses you have $0  left in your budget and spent $ Tk ${result.replace(/\D/g,'')} extra. You might want to try and reduce your spending this month`;
  } else {
    paragraph.innerText = ` After your expenses you have $ Tk ${result} left in your budget. But you should save at least ${savings}`;
    generateGraph([rent, food, utilities, savings], ["Rent", "Food", "Utilities", "Savings"]);

  }



  // Clear Inputs
  document.getElementById("monthly-income").value = "";
  document.getElementById("rent").value = "";
  document.getElementById("food").value = "";
  document.getElementById("utilities").value = "";

}

// Generate graph
const generateGraph = (series_arr, labels_arr) => {
  let myChart = document.getElementById('myChart').getContext('2d');

  // Global Options
  Chart.defaults.global.defaultFontFamily = 'Reem Kufi';
  Chart.defaults.global.defaultFontSize = 18;
  Chart.defaults.global.defaultFontColor = '#777';

  let massPopChart = new Chart(myChart, {
    type: 'pie', 
    data: {
      labels: labels_arr,
      datasets: [{
        label: 'Monthly Expense',
        data: series_arr,
        backgroundColor: 'green',
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1,
        borderColor: 'white',
        hoverBorderWidth: 2,
        hoverBorderColor: '#5CDB95'
      }]
    },
    options: {
      title: {
        display: false,
        text: '',
        fontSize: 25
      },
      legend: {
        display: true,
        position: 'right',
        labels: {
          fontColor: '#5CDB95'
        }
      },
      layout: {
        padding: {
          left: 50,
          right: 0,
          bottom: 0,
          top: 0
        }
      },
      tooltips: {
        enabled: true
      }
    }
  });
}


// Event Listeners
btn.addEventListener("click", calculate_expense);