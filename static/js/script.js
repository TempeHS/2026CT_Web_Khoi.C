function checkFormContact() {
  const name = document.getElementById("contactName1");
  const email = document.getElementById("contactEmail1");
  const phone = document.getElementById("contactPhone1");
  if (!name.value) {
    showAlert("Please enter a name.", "danger");
    return;
  }
  if (!email.value) {
    showAlert("Please enter an email.", "danger");
    return;
  }
  if (!phone.value) {
    showAlert("Please enter a phone number.", "danger");
    return;
  }
  showAlert("You sent a message!", "primary");
}

function showAlert(message, type) {
  const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);

  setTimeout(() => {
    wrapper.remove();
  }, 3000);
}

function checkFormLogin() {
  const email = document.getElementById("loginEmail1");
  const password = document.getElementById("loginPassword1");
  if (!email.value) {
    showAlert("Please enter an email.", "danger");
    return;
  }
  if (!password.value) {
    showAlert("Please enter an password.", "danger");
    return;
  }
  window.location.href = "/index.html";
}

function togglePassword(passwordId) {
  const password = document.getElementById(passwordId);
  if (password.type == "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}

function toggleDoublePassword(passwordId1, passwordId2) {
  const p1 = document.getElementById(passwordId1);
  const p2 = document.getElementById(passwordId2);
  if (p1.type == "password") {
    p1.type = "text";
    p2.type = "text";
  } else {
    p1.type = "password";
    p2.type = "password";
  }
}
