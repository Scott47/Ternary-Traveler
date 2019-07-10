import { getMirasInterest, addNewInterest, getMirasInterestsByPlace } from "./api.js"


// getMirasInterestsByPlace().then(interests => {
//     interests.forEach(italy => {

//     })

// getMirasInterestsByPlace().then(interests => {
//     interests.forEach(switzerland => {

//     })

// getMirasInterestsByPlace().then(interests => {
//         interests.forEach(france => {

//     })




let welcomeTravelerContainer = document.getElementById("container")

function welcomeMiraPage () {
    welcomeTravelerContainer.innerHTML =`
    <div id="welcome-traveler">
    <h1>Welcome Mira!</h1>
    <h2>Here are your points of interest</h2>
    <h5>Italy</h5>
    <hr>
    <h5>Switzerland</h5>
    <hr>
    <h5>France</h5>
    <button id="new-interest">Add New Point of Interest</button>
    </div>
    `;
    document.getElementById("new-interest").addEventListener("click", createNewInterestForm)
}

function createNewInterestForm() {
    welcomeTravelerContainer.innerHTML = `
        <fieldset class="form-group">
            <label for="interest-name"><h4>Name: </h4></label>
            <input id="interest-name" type="text" name="interest-name" required>
            <label for="description"><h4>Description: </h4></label>
            <input id="description" type="text" name="description" required>
            <label for="cost"><h4>Cost: </h4></label>
            <input id="cost" type="type" name="cost" required>
            <label for="place"><h4>Location: </h4></label>
            <select id="location-drop" name="location-drop">
                <option value=1>Italy</option>
                <option value=2>Switzerland</option>
                <option value=3>France</option>
            </select>
            </label>
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
           addNewInterest(mirasNewInterest).then(() => welcomeMiraPage())
})
}
function interestComponent (oneInterest) {
        return `
          <article id="interestElment-${oneInterest.id}">
                <ul>
                <li>Name: ${oneInterest.name}</li>
                <li>Description: ${oneInterest.description}</li>
                <li>Location: ${oneInterest.location}</li>
                </ul>
                <button id="edit-${oneInterest.review}" class="editEventBtn btn-primary">Edit</button>
                </article>
            `;
      };

// function renderMirasInterests


export { welcomeMiraPage }