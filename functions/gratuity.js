const myBill = +process.argv[2];
const percent = +process.argv[3];

const gratuity = (billAmount) => {
  return billAmount * percent;
}

const totalWithGrat = (amount) => {
  return "Your total, including gratuity, is: $" 
  + Math.round(gratuity(amount) + amount * 100) / 100
}

console.log(totalWithGrat(myBill));
