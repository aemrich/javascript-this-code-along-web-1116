const app = "I don't do much."

function visitTable() {
  console.log("The server is visiting " + this.name + " at table number " + this.tableNumber)
}

function Customer(name, tableNumber){
  this.tableNumber = tableNumber
  this.name = name
}

var sally = new Customer("sally", "4")


var visitSally = visitTable.bind(sally)

setTimeout(visitSally, 1000)
