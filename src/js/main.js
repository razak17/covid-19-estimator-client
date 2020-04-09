// Import covid19ImpactEstimator from '../../src/estimator';
const submit = document.getElementById('data-go-estimate');
const population = document.getElementById('data-population');
const timeToElapse = document.getElementById('data-time-to-elapse');
const reportedCases = document.getElementById('data-reported-cases');
const hospitalBeds = document.getElementById('data-total-hospital-beds');
const periodType = document.getElementById('period-type');
// const covid19ImpactEstimator = require('../../src/estimator');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const data = {
    population: parseInt(population.value, 10),
    timeToElapse: parseInt(timeToElapse.value, 10),
    reportedCases: parseInt(reportedCases.value, 10),
    hospitalBeds: parseInt(hospitalBeds.value, 10),
    periodType: periodType.value
  };
  console.log(data);
});
