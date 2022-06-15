Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };
  
  Array.prototype.min = function() {
    return Math.min.apply(null, this);
  };
  
  let p = [14,28,3,8,2];
  
  console.log(`Max value is: ${p.max()}` +
    `\nMin value is: ${p.min()}`);
  console.log("max and min values of array p");