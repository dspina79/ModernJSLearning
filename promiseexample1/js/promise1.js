let prom = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done"), 2000);
});

let prom2 = new Promise(function(resolve, reject) {
    setTimeout(() => reject("failed"), 3000);
});

prom.then(
    function(result) {
        document.getElementById("output").innerHTML = "Resolved <em>complete</em>";
    },
    function(error) {
        document.getElementById("output").innerHTML = "<strong>Failed</strong>";
    }
)

prom2.then(
    result => document.getElementById("output2").innerHTML = "Successful result on 2",
    reject => document.getElementById("output2").innerText = reject
)