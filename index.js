var recipes = {};

function updateObjectWithKeyAndValue(obj, k, v){
  var newObj = Object.assign({}, obj);
  obj[k] = v;
  return obj;
}