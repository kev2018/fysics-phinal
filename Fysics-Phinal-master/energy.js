var exports = module.exports = {};

exports.kineticEnergy = function(m,v){
  return (m*v*v)/2;
};
exports.mass = function(ke,v){
  return (ke+ke)/v*v;
};
exports.velocity3=function(ke,m){
  return Math.sqrt((ke+ke)/m);
};
