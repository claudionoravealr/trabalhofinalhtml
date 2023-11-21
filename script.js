document.getElementById('calculator-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const idade = parseInt(document.getElementById('idade').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
  
    const imc = peso / (altura * altura);
  
    const operatorAPrices = {
      basic: 100 + (idade * 10 * (imc / 10)),
      standard: (150 + (idade * 15)) * (imc / 10),
      premium: (200 - (imc * 10) + (idade * 20)) * (imc / 10),
    };
  
    const comorbidityFactor = getComorbidityFactor(imc);
    const operatorBPrices = {
      basic: 100 + comorbidityFactor * 10 * (imc / 10),
      standard: (150 + comorbidityFactor * 15) * (imc / 10),
      premium: (200 - imc * 10 + comorbidityFactor * 20) * (imc / 10),
    };
  
    const lowestPriceA = Math.min(
      operatorAPrices.basic,
      operatorAPrices.standard,
      operatorAPrices.premium
    );
  
    const lowestPriceB = Math.min(
      operatorBPrices.basic,
      operatorBPrices.standard,
      operatorBPrices.premium
    );
  
    displayResults(operatorAPrices, operatorBPrices, lowestPriceA, lowestPriceB);
  });
  
  document.getElementById('reset-btn').addEventListener('click', function() {
    document.getElementById('calculator-form').reset();
    document.getElementById('results').innerHTML = '';
  });
  
  function getComorbidityFactor(imc) {
    if (imc < 18.5) {
      return 10;
    } else if (imc >= 18.5 && imc < 24.9) {
      return 1;
    } else if (imc >= 25 && imc < 29.9) {
      return 6;
    } else if (imc >= 30 && imc < 34.9) {
      return 10;
    } else if (imc >= 35 && imc < 39.9) {
      return 20;
    } else {
      return 30;
    }
  }
  
  function displayResults(operatorAPrices, operatorBPrices, lowestPriceA, lowestPriceB) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
  
    const table = document.createElement('table');
  
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
  
    const th1 = document.createElement('th');
    th1.textContent = 'Plano';
  
    const th2 = document.createElement('th');
    th2.textContent = 'Operadora A';
  
    const th3 = document.createElement('th');
    th3.textContent = 'Operadora B';
  
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
  
    thead.appendChild(tr);
    table.appendChild(thead);
  
    const tbody = document.createElement('tbody');
  
    const basicTr = document.createElement('tr');
    const basicTd1 = document.createElement('td');
    basicTd1.textContent = 'Básico';
    const basicTd2 = document.createElement('td');
    basicTd2.textContent = operatorAPrices.basic.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
    const basicTd3 = document.createElement('td');
    basicTd3.textContent = operatorBPrices.basic.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
    basicTr.appendChild(basicTd1);
    basicTr.appendChild(basicTd2);
    basicTr.appendChild(basicTd3);
    tbody.appendChild(basicTr);
  
    const standardTr = document.createElement('tr');
    const standardTd1 = document.createElement('td');
    standardTd1.textContent = 'Standard';
    const standardTd2 = document.createElement('td');
    standardTd2.textContent = operatorAPrices.standard.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
    const standardTd3 = document.createElement('td');
    standardTd3.textContent = operatorBPrices.standard.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
    standardTr.appendChild(standardTd1);
    standardTr.appendChild(standardTd2);
    standardTr.appendChild(standardTd3);
    tbody.appendChild(standardTr);
  
    const premiumTr = document.createElement('tr');
    const premiumTd1 = document.createElement('td');
    premiumTd1.textContent = 'Premium';
    const premiumTd2 = document.createElement('td');
    premiumTd2.textContent = operatorAPrices.premium.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
    const premiumTd3 = document.createElement('td');
    premiumTd3.textContent = operatorBPrices.premium.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
    premiumTr.appendChild(premiumTd1);
    premiumTr.appendChild(premiumTd2);
    premiumTr.appendChild(premiumTd3);
    tbody.appendChild(premiumTr);
  
    table.appendChild(tbody);
  
    resultsDiv.appendChild(table);
  
    const recommendation = document.createElement('p');
    recommendation.id = "recommendation";
    if (lowestPriceA < lowestPriceB) {
      recommendation.textContent = 'Recomenda-se o plano da Operadora A.';
    } else if (lowestPriceA > lowestPriceB) {
      recommendation.textContent = 'Recomenda-se o plano da Operadora B.';
    } else {
      recommendation.textContent = 'Ambos os planos têm o mesmo preço e valor.';
    }
  
    resultsDiv.appendChild(recommendation);
  }
  
function displayResults(operatorAPrices, operatorBPrices, lowestPriceA, lowestPriceB) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
  
    const table = document.createElement('table');
  
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
  
    const th1 = document.createElement('th');
    th1.textContent = 'Plano';
  
    const th2 = document.createElement('th');
    th2.textContent = 'Operadora A';
  
    const th3 = document.createElement('th');
    th3.textContent = 'Operadora B';
  
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
  
    thead.appendChild(tr);
    table.appendChild(thead);
  
    const tbody = document.createElement('tbody');
  
    const basicTr = document.createElement('tr');
    const basicTd1 = document.createElement('td');
    basicTd1.textContent = 'Básico';
    const basicTd2 = document.createElement('td');
    basicTd2.textContent = operatorAPrices.basic.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
    const basicTd3 = document.createElement('td');
    basicTd3.textContent = operatorBPrices.basic.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
    basicTr.appendChild(basicTd1);
    basicTr.appendChild(basicTd2);
    basicTr.appendChild(basicTd3);
    tbody.appendChild(basicTr);
  
    const standardTr = document.createElement('tr');
    const standardTd1 = document.createElement('td');
    standardTd1.textContent = 'Standard';
    const standardTd2 = document.createElement('td');
    standardTd2.textContent = operatorAPrices.standard.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
    const standardTd3 = document.createElement('td');
    standardTd3.textContent = operatorBPrices.standard.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
    standardTr.appendChild(standardTd1);
    standardTr.appendChild(standardTd2);
    standardTr.appendChild(standardTd3);
    tbody.appendChild(standardTr);
  
    const premiumTr = document.createElement('tr');
    const premiumTd1 = document.createElement('td');
    premiumTd1.textContent = 'Premium';
    const premiumTd2 = document.createElement('td');
    premiumTd2.textContent = operatorAPrices.premium.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
    const premiumTd3 = document.createElement('td');
    premiumTd3.textContent = operatorBPrices.premium.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
    premiumTr.appendChild(premiumTd1);
    premiumTr.appendChild(premiumTd2);
    premiumTr.appendChild(premiumTd3);
    tbody.appendChild(premiumTr);
  
    table.appendChild(tbody);
    resultsDiv.appendChild(table);
  
    const recommendation = document.createElement('p');
    recommendation.id = "recommendation";
    
    if (lowestPriceA < lowestPriceB) {
      recommendation.textContent = 'Recomenda-se o plano da Operadora A: ';
      if (lowestPriceA === operatorAPrices.basic) {
        recommendation.textContent += 'Básico';
      } else if (lowestPriceA === operatorAPrices.standard) {
        recommendation.textContent += 'Standard';
      } else {
        recommendation.textContent += 'Premium';
      }
    } else if (lowestPriceA > lowestPriceB) {
      recommendation.textContent = 'Recomenda-se o plano da Operadora B: ';
      if (lowestPriceB === operatorBPrices.basic) {
        recommendation.textContent += 'Básico';
      } else if (lowestPriceB === operatorBPrices.standard) {
        recommendation.textContent += 'Standard';
      } else {
        recommendation.textContent += 'Premium';
      }
    } else {
      recommendation.textContent = 'Ambos os planos têm o mesmo preço e valor.';
    }
  
    resultsDiv.appendChild(recommendation);
  }
  