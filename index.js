debugger
var x = 1
a()
b()

console.log(x)

function a() {
  var x = 10
  this.alert(this.x)
  console.log(x)
}

function b() {
  var x = 100
  console.log(x)
}
