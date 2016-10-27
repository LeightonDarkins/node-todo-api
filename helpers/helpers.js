module.exports.prettyPrint = (object) => {
  prettyObject = JSON.stringify(object, undefined, 2);

  console.log(prettyObject);
}
