Operation = {total: 0, value:0} // Creation of an Object called Operation that has 2 attributes

function Sum(value, total){ //A function to Sum the number on the display with another value 
  console.log(`\n${value} + ${total}`)
  Operation.total = value + total
  return Operation.total
}

function Sub(value, total){ //A function to Subtract a value from the number on the display
  console.log(`\n${total} - ${value}`)
  Operation.total = total - value 
  return Operation.total
}

function Mult(value, total){ //A function to Multiply the number on the display for another value 
  console.log(`\n${value} * ${total}`)
  Operation.total = value * total
  return Operation.total
}

function Div(value, total){ //A function to Divide the number on the display for another value
  console.log(`\n${total} / ${value}`)
  if(total == 0) console.log("\nNOT POSSIBLE")
  Operation.total = total / value
  return Operation.total
}

console.log("CALCULATOR\n")

do{
  console.log(`------------\n|         ${Operation.total}|\n------------\n\n[+]-Sum\n[-]-Subtraction\n[*]-Multiplication\n[/]-Division\n[0]-Exit`)
  
  var op = prompt("Select the Operation: "); // Asking for the user to select an option
  switch(op){
    case "+":
      var value = prompt("Insert a value: ");
      Operation.value = Number(value)
      Sum(Operation.value, Operation.total)
      break
    case "-":
      var value = prompt("Insert a value: ");
      Operation.value = Number(value)
      Sub(Operation.value, Operation.total)
      break

    case "*":
      var value = prompt("Insert a value: ");
      Operation.value = Number(value)
      Mult(Operation.value, Operation.total)
      break

    case "/":
      var value = prompt("Insert a value: ");
      Operation.value = Number(value)
      Div(Operation.value, Operation.total)
      break      

    case "0":
      break
      
    default:
      console.log("\n\nInvalid option, try again!\n\n")
    }

}while (op != 0)

console.log("\nThanks for using the CALCULATOR\nby Victor Prado")