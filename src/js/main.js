import covid19ImpactEstimator from './estimator.js';
const estimatesForm = document.getElementById('estimates-form');

const $ = (elem) => document.querySelector(`#${elem}`);

// INITIALIZE DATA
let data = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 4,
    avgDailyIncomePopulation: 0.73
  },
  periodType: 'days',
  timeToElapse: 0,
  reportedCases: 0,
  population: 0,
  totalHospitalBeds: 0
};

// ESTIMATES
const periodTypeLabel = $('periodType');
const populationReport = $('population');
const period = $('period');
const allReportedCases = $('reportedCases');
const hospitalBeds = $('hospitalBeds');

// IMPACT
const currentlyInfected = $('currentlyInfected');
const infectionsByRequestedTime = $('infectionsByRequestedTime');
const severeCasesByRequestedTime = $('severeCasesByRequestedTime');
const hospitalBedsByRequestedTime = $('hospitalBedsByRequestedTime');
const casesForICUByRequestedTime = $('casesForICUByRequestedTime');
const casesForVentilatorsByRequestedTime = $('casesForVentilatorsByRequestedTime');
const dollarsInFlight = $('dollarsInFlight');

// SEVERE IMPACT
const severeImpactCurrentlyInfected = $('severeImpactCurrentlyInfected');
const severeImpactInfectionsByRequestedTime = $('severeImpactInfectionsByRequestedTime');
const severeImpactSevereCasesByRequestedTime = $('severeImpactSevereCasesByRequestedTime');
const severeImpactHospitalBedsByRequestedTime = $('severeImpactHospitalBedsByRequestedTime');
const severeImpactCasesForICUByRequestedTime = $('severeImpactCasesForICUByRequestedTime');
const severeImpactCasesForVentilatorsByRequestedTime = $('severeImpactCasesForVentilatorsByRequestedTime');
const severeImpactDollarsInFlight = $('severeImpactDollarsInFlight');

// POPULATE DATA UNTO UI
const populateInfo = (result) => {
  populationReport.innerHTML = data.population;
  period.innerHTML = data.timeToElapse;
  allReportedCases.innerHTML = data.reportedCases;
  hospitalBeds.innerHTML = data.totalHospitalBeds

  currentlyInfected.innerHTML = result.impact.currentlyInfected;
  infectionsByRequestedTime.innerHTML = result.impact.infectionsByRequestedTime;
  severeCasesByRequestedTime.innerHTML = result.impact.severeCasesByRequestedTime;
  hospitalBedsByRequestedTime.innerHTML = result.impact.hospitalBedsByRequestedTime;
  casesForICUByRequestedTime.innerHTML = result.impact.casesForICUByRequestedTime;
  casesForVentilatorsByRequestedTime.innerHTML = result.impact.casesForVentilatorsByRequestedTime;
  dollarsInFlight.innerHTML = ` $${result.impact.dollarsInFlight}`;

  severeImpactCurrentlyInfected.innerHTML = result.severeImpact.currentlyInfected;
  severeImpactInfectionsByRequestedTime.innerHTML = result.severeImpact.infectionsByRequestedTime;
  severeImpactSevereCasesByRequestedTime.innerHTML = result.severeImpact.severeCasesByRequestedTime;
  severeImpactHospitalBedsByRequestedTime.innerHTML = result.severeImpact.hospitalBedsByRequestedTime;
  severeImpactCasesForICUByRequestedTime.innerHTML = result.severeImpact.casesForICUByRequestedTime;
  severeImpactCasesForVentilatorsByRequestedTime.innerHTML = result.severeImpact.casesForVentilatorsByRequestedTime;
  severeImpactDollarsInFlight.innerHTML = ` $${result.severeImpact.dollarsInFlight}`;
}

// CALCULATE ESTIMATES
const calculate = () => {
  const results = covid19ImpactEstimator(data);
  populateInfo(results);
}

// CLEAR INPUT FIELDS
const clearFields = () => {
  let fields;
  let fieldsArr;
  fields = document.querySelectorAll(
      '#data-population, #data-time-to-elapse, #data-reported-cases, #data-total-hospital-beds'
  );
  fieldsArr = Array.prototype.slice.call(fields);
  fieldsArr.forEach((current, index, array) => {
      current.value = '';
  });
  // fieldsArr[0].focus();
  // region.focus();
}

// SET LISTENER FOR ESTIMATES FORM
estimatesForm.addEventListener('submit', (e) => {
  const { ...region } = data;

  // FETCH ELEMENTS
  const $ = (ele) => document.querySelector(`[${ele}]`);

  const population = $('data-population').value;
  const timeToElapse = $('data-time-to-elapse').value;
  const reportedCases = $('data-reported-cases').value;
  const totalHospitalBeds = $('data-total-hospital-beds').value;
  const periodType = $('data-period-type').value;

  data = {
    ...region,
    population,
    timeToElapse,
    reportedCases,
    totalHospitalBeds,
    periodType,
  };

  calculate();
  periodTypeLabel.innerHTML = periodType;

  event.preventDefault();
  clearFields();

  return data;
})
