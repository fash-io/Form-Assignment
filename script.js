let getBtn = document.getElementById("get");
let submitBtn = document.getElementById("sub");
let hideBtn = document.getElementById("hide");
let show = document.getElementById("show");
let name = document.getElementById("name");
let num = document.getElementById("num");
let event = document.getElementById("event");
let details = document.getElementById("details");
hideBtn.style.display = "none";
show.style.display = "none";

function submitData() {
  name_ = name.value;
  num_ = num.value;
  event_ = event.value;
  details_ = details.value;

  if (name_ && num_ && event_ && details_) {
    localStorage.setItem("name", name_);
    localStorage.setItem("num", num_);
    localStorage.setItem("event", event_);
    localStorage.setItem("details", details_);
    document.getElementById("form").reset();
    alert("Data submitted successfully");
    getData();
  } else {
    alert("Please fill all the fields");
  }
}

function getData() {
  let name = localStorage.getItem("name");
  let num = localStorage.getItem("num");
  let event = localStorage.getItem("event");
  let details = localStorage.getItem("details");
  show.innerHTML = `
      <p class="p-4 border rounded"><b>Name:</b> <span class="float-end"> ${name}</span></p>
      <p class="p-4 border rounded"><b>Phone Number:</b> <span class="float-end"> ${num}</span></p>
      <p class="p-4 border rounded"><b>Event:</b> <span class="float-end"> ${event}</span></p>
      <p class="mb-5 p-4 border rounded float-end w-100"><b class="float-start">Details:</b> <span class="float-end"> ${details}</span></p>
  `;
}

submitBtn.addEventListener("click", submitData);
getBtn.addEventListener("click", () => {
  getData();
  show.style.display = "block";
  hideBtn.style.display = "block";
});
hideBtn.addEventListener("click", () => {
  show.style.display = "none";
  hideBtn.style.display = "none";
});