
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyBw-LBdjMgvxWFQScTqSEEMcHXNmdQh91g",
      authDomain: "hospital-system-b6a60.firebaseapp.com",
      projectId: "hospital-system-b6a60",
      storageBucket: "hospital-system-b6a60.appspot.com",
      messagingSenderId: "626119506670",
      appId: "1:626119506670:web:22d462a6686f1de6e491ff",
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
  
    import {
      getDatabase,
      ref,
      get,
      set,
      child,
      update,
      remove,
    } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";
  
    const db = getDatabase();
  
    //REFERENCE
    var firstName = document.getElementById("fname");
    var middleName = document.getElementById("mname");
    var surName = document.getElementById("sname");
    var dateBox = document.getElementById("dBox");
    var Gender = document.getElementById("gender");
    var County = document.getElementById("county");
    var Email = document.getElementById("email");
    var Telephone = document.getElementById("telephone");
    var Status = document.getElementById("status");
    var regNo = document.getElementById("RegNo");
    var Kg = document.getElementById("kg");
    var Height = document.getElementById("height");
    var Temp = document.getElementById("temp");
    var Pressure = document.getElementById("pressure");
    var Pulse = document.getElementById("pulse");
    var BMI = document.getElementById("bmi");
    var Ailment = document.getElementById("ailment");
    var Prescription = document.getElementById("prescription");
    var Test = document.getElementById("test");
    var Results = document.getElementById("results");
  
    var Save = document.getElementById("save");
    var Delete = document.getElementById("del");
    var Update = document.getElementById("update");
    var Fetch = document.getElementById("fetch");


    function clearInputs() {
      firstName.value = "";
      middleName.value = "";
      surName.value = "";
      dateBox.value = "";
      Gender.selectedIndex = 0; // Reset to first option
      County.selectedIndex = 0; // Reset to first option
      Email.value = "";
      Telephone.value = "";
      Status.selectedIndex = 0; // Reset to first option
      regNo.value = "";
      Kg.value = "";
      Height.value = "";
      Temp.value = "";
      Pressure.value = "";
      Pulse.value = "";
      BMI.value = "";
      Ailment.value = "";
      Prescription.value = "";
      Test.value = "";
      Results.value = "";
    }

  
    //INSERT DATA FUNCTION
    function InsertData() {
      set(ref(db, "ThePatients/" + regNo.value), {
        NameOfPat: firstName.value,
        middleNamePat: middleName.value,
        surNamePat: surName.value,
        DOB: dateBox.value,
        Gender: Gender.value,
        County: County.value,
        Email: Email.value,
        Telephone: Telephone.value,
        Status: Status.value,
        Rno: regNo.value,
        Kg: Kg.value,
        Height: Height.value,
        Temp: Temp.value,
        Pressure: Pressure.value,
        Pulse: Pulse.value,
        BMI: BMI.value,
        Ailment: Ailment.value,
        Prescription: Prescription.value,
        Test: Test.value,
        Results: Results.value,
      })
        .then(() => {
          alert("data saved successfully");
        })
        .catch((error) => {
          alert("unsuccessful, error" + error);
        });
    }
  
    //SELECT DATA FUNCTION
    function SelectData() {
      const dbref = ref(db);
  
      get(child(dbref, "ThePatients/" + regNo.value))
        .then((snapshot) => {
          if (snapshot.exists()) {
            firstName.value = snapshot.val().NameOfPat;
            middleName.value = snapshot.val().middleNamePat;
            surName.value = snapshot.val().surNamePat;
            dateBox.value = snapshot.val().DOB;
            Gender.value = snapshot.val().Gender;
            County.value = snapshot.val().County;
            Email.value = snapshot.val().Email;
            Telephone.value = snapshot.val().Telephone;
            Status.value = snapshot.val().Status;
            regNo.value = snapshot.val().Rno;
            Kg.value = snapshot.val().Kg;
            Height.value = snapshot.val().Height;
            Temp.value = snapshot.val().Temp;
            Pressure.value = snapshot.val().Pressure;
            Pulse.value = snapshot.val().Pulse;
            BMI.value = snapshot.val().BMI;
            Ailment.value = snapshot.val().Ailment;
            Prescription.value = snapshot.val().Prescription;
            Test.value = snapshot.val().Test;
            Results.value = snapshot.val().Results;
          } else {
            alert("No data found");
          }
        })
        .catch((error) => {
          alert("unsuccessful, error" + error);
        });
    }
  
    //UPDATE DATA FUNCTION
    function UpdateData() {
      update(ref(db, "ThePatients/" + regNo.value), {
        NameOfPat: firstName.value,
        middleNamePat: middleName.value,
        surNamePat: surName.value,
        DOB: dateBox.value,
        Gender: Gender.value,
        County: County.value,
        Email: Email.value,
        Telephone: Telephone.value,
        Status: Status.value,
        Rno: regNo.value,
        Kg: Kg.value,
        Height: Height.value,
        Temp: Temp.value,
        Pressure: Pressure.value,
        Pulse: Pulse.value,
        BMI: BMI.value,
        Ailment: Ailment.value,
        Prescription: Prescription.value,
        Test: Test.value,
        Results: Results.value,
      })
      .then(() => {
          alert("data saved successfully");
          clearInputs(); // Clear inputs after successful submission
        })
        .catch((error) => {
          alert("unsuccessful, error" + error);
        });
    }
  
    //DELETE DATA FUNCTION
    function DeleteData() {
      remove(ref(db, "ThePatients/" + regNo.value))
        .then(() => {
          alert("data deleted successfully");
        })
        .catch((error) => {
          alert("unsuccessful, error" + error);
        });
    }
  
    // Assign Events to Buttons
    Save.addEventListener("click", InsertData);
    Update.addEventListener("click", UpdateData);
    Fetch.addEventListener("click", SelectData);
    Delete.addEventListener("click", DeleteData);

    function loadPatientData() {
        const dbRef = ref(db);
        get(child(dbRef, 'ThePatients')).then((snapshot) => {
            if (snapshot.exists()) {
                const patients = snapshot.val();
                const tableBody = document.getElementById("patientTable").getElementsByTagName('tbody')[0];
    
                // Clear existing rows
                tableBody.innerHTML = "";
    
                // Loop through each patient and create a table row
                for (const regNo in patients) {
                    const patient = patients[regNo];
                    const newRow = tableBody.insertRow();
    
                    newRow.insertCell(9).innerText = patient.Rno;
                    newRow.insertCell(0).innerText = patient.NameOfPat;
                    newRow.insertCell(1).innerText = patient.middleNamePat;
                    newRow.insertCell(2).innerText = patient.surNamePat;
                    newRow.insertCell(3).innerText = patient.DOB;
                    newRow.insertCell(4).innerText = patient.Gender;
                    newRow.insertCell(5).innerText = patient.County;
                    newRow.insertCell(6).innerText = patient.Email;
                    newRow.insertCell(7).innerText = patient.Telephone;
                    newRow.insertCell(8).innerText = patient.Status;
                }
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error("Error fetching data: ", error);
        });
    }
    
    // Load patient data when the page is loaded
    window.onload = loadPatientData;