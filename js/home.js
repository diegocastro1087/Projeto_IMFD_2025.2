const DIV_GRAFICO1 = document.getElementById("grafico1");
const DIV_GRAFICO2 = document.getElementById("grafico2");

// DIV_GRAFICO1.innerHTML = "<h2>Gráfico de Vendas Mensais</h2><canvas id='chart1'></canvas>";
// DIV_GRAFICO2.innerHTML = "<h2>Gráfico de Veículos por Categoria</h2><canvas id='chart2'></canvas>";

//elemento que ira receber os graficos
new Chart(DIV_GRAFICO1, {
    type: 'bar',
    //dados
    data: {
      labels: ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'],
      datasets: [{
        label: 'visitas ao site',
        data: [20, 25, 22, 18, 30, 15],
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

new Chart(DIV_GRAFICO2, {
    type: 'line',
    //dados
    data: {
      labels: ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'],
      datasets: [{
        label: 'movimentação de veiculos',
        data: [20, 25, 22, 18, 30, 15],
        borderWidth: 5
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
