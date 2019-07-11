import { getMirasPlaces, addNewInterest, getMirasInterestsByPlace } from "./api.js"

let welcomeTravelerContainer = document.getElementById("container")

function renderMirasInterests() {
    welcomeTravelerContainer.innerHTML = `<div class="miraTravels"><h1>Welcome Mira!</h1>
    <button id="mira-travels">New Point of Interest</button>
    <h2>Here are your points of interest</h2>`
    getMirasPlaces().then(placeObjArray => {
        placeObjArray.forEach(place => {
        welcomeTravelerContainer.innerHTML += `
        <h5>${place.name}</h5>`
        place.interests.forEach(interestObj => {
            welcomeTravelerContainer.innerHTML += `<ul id="no-bullets">
            <li><strong>Name:</strong> ${interestObj.name}</li>
            <li><strong>Description:</strong> ${interestObj.description}</li>
            <li><strong>Cost:</strong> ${interestObj.cost}</li>
            <li><strong>Review:</strong> ${interestObj.review}</li>
            </ul>`
        })
        })
        welcomeTravelerContainer.innerHTML += "</div>"
        document.querySelector("#mira-travels").addEventListener("click", createNewInterestForm)
    })
}


function createNewInterestForm() {
    welcomeTravelerContainer.innerHTML = `
        <fieldset class="form-group">
            <label for="interest-name"><h4>Name: </h4></label>
            <input id="interest-name" type="text" name="interest-name" required>
            <label for="description"><h4>Description: </h4></label>
            <input id="description" type="text" name="description" required>
            <label for="cost"><h4>Cost: </h4></label>
            <input id="cost" type="text" name="cost" required>
            <label for="review"><h4>Review: </h4></label>
            <input id="review" type="text" name="review" required>
            <label for="place"><h4>Location: </h4></label>
            <select id="location-drop" name="location-drop">
                <option value=1>Italy</option>
                <option value=2>Switzerland</option>
                <option value=3>France</option>
            </select>
            <button id="save-interest">Save interest</button>
        </fieldset>
        `;
        document.querySelector("#save-interest").addEventListener("click", () => {
            let mirasNewInterest = {
              name: document.querySelector("#interest-name").value,
              description: document.querySelector("#description").value,
              cost: document.querySelector("#cost").value,
              placeId: +document.querySelector("#location-drop").value,
            };
            console.log(mirasNewInterest)
           addNewInterest(mirasNewInterest).then(() => renderMirasInterests())
})
}



export { renderMirasInterests }





// getMirasInterestsByPlace().then(interests => {
//     interests.forEach(italy => {

//     })

// getMirasInterestsByPlace().then(interests => {
//     interests.forEach(switzerland => {

//     })

// getMirasInterestsByPlace().then(interests => {
//         interests.forEach(france => {

//     })


// function interestComponent (oneInterest) {
//         return `
//           <article id="interestElment-${oneInterest.id}">
//                 <ul>
//                 <li>Name: ${oneInterest.name}</li>
//                 <li>Description: ${oneInterest.description}</li>
//                 <li>Location: ${oneInterest.location}</li>
//                 </ul>
//                 <button id="edit-${oneInterest.review}" class="editEventBtn btn-primary">Edit</button>
//                 </article>
//             `;
//       };

// function renderMirasInterests


