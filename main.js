
let a = { name: "anshu" };

function printName() {
  console.log("my name is " + this.name);
}

printName.call(a)