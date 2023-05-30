let count = 0;

function increment() {
    count += 1;
    document.getElementById("count-el").innerText = count;
}

function save() {
    if(document.getElementById("saving").innerText == "No Previous Counts") {
        document.getElementById("saving").innerText = "Previous Counts: " + count;
    } else{
        document.getElementById("saving").innerText += " - " + count;
    }

    count = 0;
    document.getElementById("count-el").innerText = 0;
}



function deleteCounts() {
    document.getElementById("saving").innerText = "No Previous Counts";
    count = 0;
    document.getElementById("count-el").innerText = 0;
}
