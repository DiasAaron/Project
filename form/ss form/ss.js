function validateForm() {
    // Get the values of all the form fields
    const name = document.getElementById('name').value.trim();
    const classVal = document.getElementById('class').value.trim();
    const div = document.getElementById('div').value.trim();
    const semester = document.getElementById('semester').value.trim();
    const rollno = document.getElementById('rollno').value.trim();
    const dob = document.getElementById('dob').value.trim();
    const fees = document.getElementById('fees').value;
    const sem1 = document.getElementById('sem1').value.trim();
    const sem2 = document.getElementById('sem2').value.trim();
    const sem3 = document.getElementById('sem3').value.trim();
    const sem4 = document.getElementById('sem4').value.trim();
    const birthCert = document.getElementById('birth-cert').value.trim();
    const feesReceipt = document.getElementById('fees-receipt').value.trim();
    const idCard = document.getElementById('id-card').value.trim();
  
    // Regular expressions to validate input fields
    const nameRegex = /^[A-Za-z\s]+$/;
    const classRegex = /^[A-Za-z0-9\s]+$/;
    const divRegex = /^[A-Za-z\s]+$/;
    const semesterRegex = /^[0-9]+$/;
    const rollnoRegex = /^[0-9]+$/;
  
    // Check if name field is empty or invalid
    if (name === '' || !name.match(nameRegex)) {
      alert('Please enter a valid name.');
      return false;
    }
  
    // Check if class field is empty or invalid
    if (classVal === '' || !classVal.match(classRegex)) {
      alert('Please enter a valid class.');
      return false;
    }
  
    // Check if division field is empty or invalid
    if (div === '' || !div.match(divRegex)) {
      alert('Please enter a valid division.');
      return false;
    }
  
    // Check if semester field is empty or invalid
    if (semester === '' || !semester.match(semesterRegex)) {
      alert('Please enter a valid semester.');
      return false;
    }
  
    // Check if roll no field is empty or invalid
    if (rollno === '' || !rollno.match(rollnoRegex)) {
      alert('Please enter a valid roll no.');
      return false;
    }
  
    // Check if date of birth field is empty
    if (dob === '') {
      alert('Please enter your date of birth.');
      return false;
    }
  
    // Check if fees paid field is empty
    if (fees === '') {
      alert('Please indicate whether you have paid the fees or not.');
      return false;
    }
  
    // Check if all semester files have been uploaded
    if (sem1 === '' || sem2 === '' || sem3 === '' || sem4 === '') {
      alert('Please upload all semester files.');
      return false;
    }
  
    // Check if birth certificate file has been uploaded
    if (birthCert === '') {
      alert('Please upload your birth certificate.');
      return false;
    }
  
    // Check if fees receipt file has been uploaded
    if (feesReceipt === '') {
      alert('Please upload your fees receipt.');
      return false;
    }
  
    // Check if identity card file has been uploaded
    if (idCard === '') {
      alert('Please upload your identity card.');
      return false;
    }
  
    // If all fields are valid, submit the form
    return true;
  }
  