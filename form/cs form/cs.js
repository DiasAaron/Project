function validateForm() {
    const name = document.getElementById("name").value.trim();
    const classInput = document.getElementById("class").value.trim();
    const div = document.getElementById("div").value.trim();
    const semester = document.getElementById("semester").value.trim();
    const rollno = document.getElementById("rollno").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const feesPaid = document.querySelector('input[name="feesPaid"]:checked');
    const sem1 = document.getElementById("sem1").value.trim();
    const sem2 = document.getElementById("sem2").value.trim();
    const sem3 = document.getElementById("sem3").value.trim();
    const sem4 = document.getElementById("sem4").value.trim();
    const birthcert = document.getElementById("birthcert").value.trim();
    const feesreceipt = document.getElementById("feesreceipt").value.trim();
    const idcard = document.getElementById("idcard").value.trim();
    let valid = true;
  
    // Validate name
    if (name === "") {
      valid = false;
      alert("Please enter your name.");
    }
  
    // Validate class
    if (classInput === "") {
      valid = false;
      alert("Please enter your class.");
    }
  
    // Validate division
    if (div === "") {
      valid = false;
      alert("Please enter your division.");
    }
  
    // Validate semester
    if (semester === "") {
      valid = false;
      alert("Please enter your semester.");
    }
  
    // Validate roll number
    if (rollno === "") {
      valid = false;
      alert("Please enter your roll number.");
    }
  
    // Validate date of birth
    if (dob === "") {
      valid = false;
      alert("Please enter your date of birth.");
    }
  
    // Validate fees paid
    if (!feesPaid) {
      valid = false;
      alert("Please select whether you have paid fees or not.");
    }
  
    // Validate semester 1 file upload
    if (sem1 === "") {
      valid = false;
      alert("Please upload your Semester I file.");
    }
  
    // Validate semester 2 file upload
    if (sem2 === "") {
      valid = false;
      alert("Please upload your Semester II file.");
    }
  
    // Validate semester 3 file upload
    if (sem3 === "") {
      valid = false;
      alert("Please upload your Semester III file.");
    }
  
    // Validate semester 4 file upload
    if (sem4 === "") {
      valid = false;
      alert("Please upload your Semester IV file.");
    }
  
    // Validate birth certificate file upload
    if (birthcert === "") {
      valid = false;
      alert("Please upload your birth certificate.");
    }
  
    // Validate fees receipt file upload
    if (feesreceipt === "") {
      valid = false;
      alert("Please upload your fees receipt.");
    }
  
    // Validate ID card file upload
    if (idcard === "") {
      valid = false;
      alert("Please upload your ID card.");
    }
  
    return valid;
  }
