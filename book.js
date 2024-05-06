

function formvalidation() {
    var seting = document.getElementById('seatType').value;
    var seatCount = document.getElementById('seatCount').value;
    var paymentOption = document.getElementById('paymentOption').value;
    var amount = document.getElementById('amount').value;
    var acNo = document.getElementById('acNo').value;

    document.getElementById('error-mes').innerHTML = '';
    document.getElementById('error-mess').innerHTML = '';
    document.getElementById('error-messs').innerHTML = '';
    document.getElementById('error-messss').innerHTML = '';
    document.getElementById('error-messsss').innerHTML = '';

    if (seting === '') {
        document.getElementById('error-mes').innerHTML = "Select Your seat";
        return false;
    }

    if (seatCount === '') {
        document.getElementById('error-mess').innerHTML = "Select Your seat count";
        return false;
    }

    if (paymentOption === '') {
        document.getElementById('error-messs').innerHTML = "Select Your Payment option";
        return false;
    }

    if (amount === '') {
        document.getElementById('error-messss').innerHTML = "Enter Your amount";
        return false;
    }

    if (acNo === '') {
        document.getElementById('error-messsss').innerHTML = "Enter Your AC No";
        return false;
    }
     // Return true if all validations pass
     return true;
}
document.getElementById('Payid').addEventListener("click", function() {
  if (formvalidation()) {
      alert("Payment successful!");
  }
});
