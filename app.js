function saveData() {
  const data = {
    name: name.value,
    age: age.value,
    blood: blood.value,
    contact: contact.value,
    disease: disease.value
  };

  localStorage.setItem("medicalData", JSON.stringify(data));

  alert("Saved Successfully!");

  document.getElementById("qrcode").innerHTML = "";

  new QRCode(document.getElementById("qrcode"), {
    text: "view.html",
    width: 150,
    height: 150
  });
}