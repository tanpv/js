document.getElementById('loan-form').addEventListener('submit', calculateResults);

function calculateResults(e){
  console.log('calculating...');

  const amount = document.getElementById('amount');
  const interest = document.getElementsById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  e.preventDefault();
}