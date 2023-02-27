// Get form elements
const form = document.getElementById('debuting-associate-form');
const name = document.getElementById('name');
const classField = document.getElementById('class');
const division = document.getElementById('division');
const semester = document.getElementById('semester');
const rollno = document.getElementById('rollno');
const dob = document.getElementById('dob');
const feesPaid = document.getElementById('fees-paid');
const semester1 = document.getElementById('semester1');
const semester2 = document.getElementById('semester2');
const semester3 = document.getElementById('semester3');
const semester4 = document.getElementById('semester4');
const birthCertificate = document.getElementById('birth-certificate');
const feesReceipt = document.getElementById('fees-receipt');
const idCard = document.getElementById('id-card');

// Add event listener for form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default form submission

  // Validate form fields
  if (name.value.trim() === '') {
    alert('Please enter your name');
    name.focus();
    return;
  }
  if (classField.value.trim() === '') {
    alert('Please enter your class');
    classField.focus();
    return;
  }
  if (division.value.trim() === '') {
    alert('Please enter your division');
    division.focus();
    return;
  }
  if (semester.value.trim() === '') {
    alert('Please enter your semester');
    semester.focus();
    return;
  }
  if (rollno.value.trim() === '') {
    alert('Please enter your roll number');
    rollno.focus();
    return;
  }
  if (dob.value.trim() === '') {
    alert('Please enter your date of birth');
    dob.focus();
    return;
  }
  if (feesPaid.value.trim() === '') {
    alert('Please select whether you have paid the fees');
    feesPaid.focus();
    return;
  }
  if (semester1.value.trim() === '') {
    alert('Please upload your Semester I document');
    semester1.focus();
    return;
  }
  if (semester2.value.trim() === '') {
    alert('Please upload your Semester II document');
    semester2.focus();
    return;
  }
  if (semester3.value.trim() === '') {
    alert('Please upload your Semester III document');
    semester3.focus();
    return;
  }
  if (semester4.value.trim() === '') {
    alert('Please upload your Semester IV document');
    semester4.focus();
    return;
  }
  if (birthCertificate.value.trim() === '') {
    alert('Please upload your birth certificate');
    birthCertificate.focus();
    return;
  }
  if (feesReceipt.value.trim() === '') {
    alert('Please upload your fees receipt');
    feesReceipt.focus();
    return;
  }
  if (idCard.value.trim() === '') {
    alert('Please upload your identity card');
    idCard.focus();
    return;
  }

  // Submit form
  form.submit();
});
