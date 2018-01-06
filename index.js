var recipes = {};

function updateObjectWithKeyAndValue(obj, k, v){
  var newObj = Object.assign({}, obj);
  newObj[k] = v;
  return newObj;
}