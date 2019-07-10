
function getMirasInterest() {
    return fetch("http://localhost:8088/interests")
    .then( interestData => interestData.json())
}

function addNewInterest(newInterest) {
    return fetch("http://localhost:8088/interests", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(newInterest)
    })
.then(results => results.json())
}


export { getMirasInterest, addNewInterest }