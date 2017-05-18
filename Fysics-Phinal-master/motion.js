var exports = module.exports = {};

exports.distance = function(v,t){
     return v*t;
};
exports.velocity = function(d,t){
    return d/t;
};
exports.time = function(v,t){
    d/v;
};
exports.acceleration=function(vi,vf,t){
  return (vf-vi)/t;
};
exports.properDistance=function(vint,vfin,time){
  return (acceleration(vint,vfin,time)*t*t)/2+i*t;
}
/*exports.awesomeDistance=function(vi,vf,t){
    return ((vf+vi)t)/2;
}*/
eports.velocity2 =function(vi,a,t){
    return vi+a*t;
}
exports.time2=function(vf,vi,a){
    return (vf-vi)/a;
}
