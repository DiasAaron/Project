// Define constants for file types
const PDF_TYPE = "application/pdf";

// Get form elements
const form = document.getElementById("gen-sec-form");
const nameInput = document.getElementById("name");
const classInput = document.getElementById("class");
const divInput = document.getElementById("div");
const semesterInput = document.getElementById("semester");
const rollNoInput = document.getElementById("roll-no");
const dobInput = document.getElementById("dob");
const feesPaidSelect = document.getElementById("fees-paid");
const semIDocInput = document.getElementById("sem-i-doc");
const semIIDocInput = document.getElementById("sem-ii-doc");
const semIIIDocInput = document.getElementById("sem-iii-doc");
const semIVDocInput = document.getElementById("sem-iv-doc");
const birthCertInput = document.getElementById("birth-cert");
const feesReceiptInput = document.getElementById("fees-receipt");
const idCardInput = document.getElementById("id-card");

// Add event listener to form submit button
form.addEventListener("submit", function(event) {
  // Check that required fields are filled out
  if (!nameInput.value || !classInput.value || !divInput.value || !semesterInput.value || !rollNoInput.value || !dobInput.value || feesPaidSelect.value === "" || !semIDocInput.value || !semIIDocInput.value || !semIIIDocInput.value || !semIVDocInput.value || !birthCertInput.value || !feesReceiptInput.value || !idCardInput.value) {
    alert("Please fill out all required fields.");
    event.preventDefault();
    return;
  }

  // Check that uploaded files are PDFs
  if (semIDocInput.files[0].type !== PDF_TYPE || semIIDocInput.files[0].type !== PDF_TYPE || semIIIDocInput.files[0].type !== PDF_TYPE || semIVDocInput.files[0].type !== PDF_TYPE || birthCertInput.files[0].type !== PDF_TYPE || feesReceiptInput.files[0].type !== PDF_TYPE || idCardInput.files[0].type !== PDF_TYPE) {
    alert("Please upload PDF files only.");
    event.preventDefault();
    return;
  }
});
