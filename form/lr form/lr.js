// validation.js

function validateForm() {
    var name = document.forms["repForm"]["name"].value;
    var classVal = document.forms["repForm"]["class"].value;
    var divVal = document.forms["repForm"]["div"].value;
    var semester = document.forms["repForm"]["semester"].value;
    var rollno = document.forms["repForm"]["rollno"].value;
    var dob = document.forms["repForm"]["dob"].value;
    var feespaid = document.forms["repForm"]["feespaid"].value;
    var doc1 = document.forms["repForm"]["doc1"].value;
    var doc2 = document.forms["repForm"]["doc2"].value;
    var doc3 = document.forms["repForm"]["doc3"].value;
    var doc4 = document.forms["repForm"]["doc4"].value;
    var birthcert = document.forms["repForm"]["birthcert"].value;
    var feesreceipt = document.forms["repForm"]["feesreceipt"].value;
    var idcard = document.forms["repForm"]["idcard"].value;
  
    // Check if required fields are empty
    if (name == "" || classVal == "" || divVal == "" || semester == "" || rollno == "" || dob == "" || feespaid == "" || doc1 == "" || doc2 == "" || doc3 == "" || doc4 == "" || birthcert == "" || feesreceipt == "" || idcard == "") {
      alert("Please fill in all required fields.");
      return false;
    }
  
    // Check if feespaid is "Yes" or "No"
    if (feespaid != "yes" && feespaid != "no") {
      alert("Please select a valid option for Fees Paid.");
      return false;
    }
  
    // Check if file extensions are allowed
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.pdf)$/i;
    if (!allowedExtensions.exec(doc1) || !allowedExtensions.exec(doc2) || !allowedExtensions.exec(doc3) || !allowedExtensions.exec(doc4) || !allowedExtensions.exec(birthcert) || !allowedExtensions.exec(feesreceipt) || !allowedExtensions.exec(idcard)) {
      alert("Please upload a valid file type (JPG, JPEG, PNG, or PDF).");
      return false;
    }
  
    return true;
  }
  