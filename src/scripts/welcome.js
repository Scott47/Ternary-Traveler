import { getMirasPlaces, addNewInterest, changeMirasInterests } from "./api.js"

let welcomeTravelerContainer = document.getElementById("container")

function renderMirasInterests() {
    welcomeTravelerContainer.innerHTML = `<div class="miraTravels"><h1>Welcome Mira!</h1>
    <button id="mira-travels">New Point of Interest</button>
    <h2>Here are your points of interest</h2>`
    getMirasPlaces().then(placeObjArray => {
        placeObjArray.forEach(place => {
        welcomeTravelerContainer.innerHTML += `
        <h3>${place.name}</h3>`
        place.interests.forEach(interestObj => {
            welcomeTravelerContainer.innerHTML += `<ul id="no-bullets">
            <li><strong>Name:</strong> ${interestObj.name}</li>
            <li><strong>Description:</strong> ${interestObj.description}</li>
            <li><strong>Cost:</strong> ${interestObj.cost}</li>
            <li><strong>Review:</strong> ${interestObj.review}</li>
            </ul>
            <button id="edit-${interestObj.id}" class="editBtn">Edit</button><button class="deleteBtn">Delete</button>`
        })
        })
        welcomeTravelerContainer.innerHTML += "</div>"
        document.querySelector("#mira-travels").addEventListener("click", createNewInterestForm)
        editBtnListener()
    })
}
function editBtnListener() {
    let editBtnArray = document.querySelectorAll(".editBtn")
 editBtnArray.forEach(editBtn => {
     editBtn.addEventListener("click", () => {
     let editBtnId = event.target.id
     let editBtnIdArray = editBtnId.split("-");
     let editBtnIdNum = editBtnIdArray[1];
 getMirasPlaces(editBtnIdNum).then(oneInterestObj => {
     let editForm = `
     <fieldset>
     <label for="cost"><h4>Cost: </h4></label>
     <input id="cost" type="text" name="cost" value="${oneInterestObj.cost} required>
     <label for="review"><h4>Review: </h4></label>
     <input id="review" type="text" name="review" value="${oneInterestObj.review} required>
     <button id="save-${oneInterestObj.id}"></button>
     </fieldset>
     `;
let editFieldContainer = document.querySelector(`#save-${oneInterestObj.id}`)
     console.log(editFieldContainer)
 })
 })
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



