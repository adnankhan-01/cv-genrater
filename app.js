// Function to save CV data to local storage
function saveData() {
    const cvData = {
        fname: document.getElementById('name').value,
        faname: document.getElementById('fname').value,
        dob: document.getElementById('dob').value,
        cnic: document.getElementById('cnic').value,
        religion: document.getElementById('religion').value,
        nat: document.getElementById('nat').value,
        marage: document.getElementById('marage').value,
        lang: document.getElementById('lang').value,
        lerning: document.getElementById('lerning').value,
        address: document.getElementById('cvaddress').value,
        cell: document.getElementById('cvcell').value,
        sex: document.getElementById('sex').value,
        experience: document.getElementById('experience') ? document.getElementById('experience').value : "N/A", // Optional
        reference: document.getElementById('reference') ? document.getElementById('reference').value : "N/A" // Optional
    };

    localStorage.setItem("cvData", JSON.stringify(cvData));
    window.location.href = 'cv.html'; // Redirect to CV page
}

// Function to display CV data
function displayCV() {
    const cvData = JSON.parse(localStorage.getItem("cvData"));
    if (cvData) {
        document.getElementById("cvname").innerText = cvData.fname || "N/A";
        document.getElementById("cvfname").innerText = cvData.faname || "N/A";
        document.getElementById("cvdob").innerText = cvData.dob || "N/A";
        document.getElementById("cvcnic").innerText = cvData.cnic || "N/A";
        document.getElementById("cvreligion").innerText = cvData.religion || "N/A";
        document.getElementById("cvnat").innerText = cvData.nat || "N/A";
        document.getElementById("cvmarage").innerText = cvData.marage || "N/A";
        document.getElementById("cvsex").innerText = cvData.sex || "N/A";
        document.getElementById("cvlang").innerText = cvData.lang || "N/A";
        document.getElementById("cvlerning").innerText = cvData.lerning || "N/A";
        document.getElementById("address").innerText = cvData.address || "N/A"; 
        document.getElementById("cell").innerText = cvData.cell || "N/A"; 
        document.getElementById("exp").innerText = cvData.experience || "N/A"; 
        document.getElementById("ref").innerText = cvData.reference || "N/A"; 
    } else {
        alert("No CV data found!");
    }
}

// Check which page is being loaded and call the appropriate function
if (window.location.pathname.includes('cv.html')) {
    displayCV();
}
