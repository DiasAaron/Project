function validateForm() {
    const name = document.getElementById("name").value.trim();
    const classInput = document.getElementById("class").value.trim();
    const div = document.getElementById("div").value.trim();
    const semester = document.getElementById("semester").value.trim();
    const rollno = document.getElementById("rollno").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const feesPaid = document.getElementById("fees-paid").value.trim();
  
    // Validate name
    if (!name) {
      alert("Please enter your name");
      return false;
    }
  
    // Validate class
    if (!classInput) {
      alert("Please enter your class");
      return false;
    }
  
    // Validate division
    if (!div) {
      alert("Please enter your division");
      return false;
    }
  
    // Validate semester
    if (!semester) {
      alert("Please enter your semester");
      return false;
    }
  
    // Validate roll no
    if (!rollno) {
      alert("Please enter your roll no");
      return false;
    }
  
    // Validate date of birth
    if (!dob) {
      alert("Please enter your date of birth");
      return false;
    }
  
    // Validate fees paid
    if (!feesPaid) {
      alert("Please select whether you have paid the fees or not");
      return false;
    }
  
    // Validate semester documents
    const semester1doc = document.getElementById("semester1doc").value.trim();
    const semester2doc = document.getElementById("semester2doc").value.trim();
    const semester3doc = document.getElementById("semester3doc").value.trim();
    const semester4doc = document.getElementById("semester4doc").value.trim();
  
    if (!semester1doc && !semester2doc && !semester3doc && !semester4doc) {
      alert("Please upload at least one semester document");
      return false;
    }
  
    // Validate birth certificate
    const birthcert = document.getElementById("birthcert").value.trim();
    if (!birthcert) {
      alert("Please upload your birth certificate");
      return false;
    }
  
    // Validate fees receipt
    const feesreceipt = document.getElementById("feesreceipt").value.trim();
    if (!feesreceipt) {
      alert("Please upload your fees receipt");
      return false;
    }
  
    // Validate identity card
    const idcard = document.getElementById("idcard").value.trim();
    if (!idcard) {
      alert("Please upload your identity card");
      return false;
    }
  
    return true;
  }
  