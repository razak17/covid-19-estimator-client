import {
  impactEstimates,
  severeImpactEstimates
} from './handlers/handlers.js';

const covid19ImpactEstimator = (data) => ({
  data,
  impact: impactEstimates(data),
  severeImpact: severeImpactEstimates(data)
});

export default covid19ImpactEstimator;
