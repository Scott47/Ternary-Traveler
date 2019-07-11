
function getMirasPlaces() {
    return fetch("http://localhost:8088/places?_embed=interests")
    .then( placeData => placeData.json())
}

function getMirasInterestById(id) {
    return fetch(`http://localhost:8088/interests/${id}`)
    .then( oneInterest => oneInterest.json())
}

function changeMirasInterests(interestId, InterestObj) {
    return fetch(`http://localhost:8088/places?_embed=interests/${interestId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(InterestObj)
})
    .then(partOfInterest => partOfInterest.json())
}

function addNewInterest(newInterest) {
    return fetch("http://localhost:8088/interests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newInterest)
    })
.then(results => results.json())
}


export { getMirasPlaces, addNewInterest, changeMirasInterests, getMirasInterestById }