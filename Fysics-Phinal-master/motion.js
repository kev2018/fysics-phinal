var exports = module.exports = {};

exports.distance = function(v,t){
     return (v*t);
};
exports.velocity = function(d,t){
    return d/t;
};
exports.time = function(v,d){
    return d/v;
};
/*exports.acceleration=function(vi,vf,t){
  return (vf-vi)/t;
};*/
/*exports.properDistance=function(vint,vfin,t){
  return (acceleration(vint,vfin,t)*t*t)/2+i*t;
}*/
/*exports.awesomeDistance=function(vi,vf,t){
    return ((vf+vi)t)/2;
}*/
exports.velocity2 =function(d,a,t){
    return (d/t)-(a*t/2);
};
exports.time2=function(vf,vi,a){
    return (vf-vi)/a;
};
exports.distance2=function(a,t,v){
   return (v*t)+(a*t*t)/2;
};
exports.acceleration=function(d,v,t){
  return (2*(d-(v*t)))/(t*t);
};
