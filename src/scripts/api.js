
function getMirasPlaces() {
    return fetch("http://localhost:8088/places?_embed=interests")
    .then( placeData=> placeData.json())
}

function addNewInterest(newInterest) {
    return fetch("http://localhost:8088/interests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newInterest)
    })
.then(results => results.json())
}


export { getMirasPlaces, addNewInterest, getMirasInterestsByPlace }