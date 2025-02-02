function calculation() {
    let g = 6.674 * Math.pow(10, -11); 


    let planetMass = parseFloat(document.getElementById("planetMass").value);
    let radius = parseFloat(document.getElementById("radius").value);


    if (isNaN(planetMass) || isNaN(radius) || radius <= 0) {
        document.getElementById("answer").innerText = "Please enter valid numbers!";
        return;
    }

  
    let v = Math.sqrt((g * planetMass) / radius);


    document.getElementById("answer").innerText = "Required Velocity for stable orbit: " + v.toFixed(2) + " m/s";
}

function main() {
    const confirmButton = document.getElementById("confirm");

    confirmButton.addEventListener("click", function () {
        calculation(); 
    });
}

main(); ``
