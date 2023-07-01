const { planets } = require("../../models/planets.model");

function getAllPlanets(req, res) {
  res.status(200).json(planets);
  console.log(`request for planets`);
}
console.log("router working");
module.exports = {
  getAllPlanets,
};
