import { getMirasInterest, addNewInterest } from "./api.js"

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
    console.log("help")
}


function createNewInterestForm() {
    welcomeTravelerContainer.innerHTML = `
        <fieldset class="form-group">
            <label for="interest-name"><h4>Name: </h4></label>
            <input id="interest-name" type="text" name="interest-name" required>
            <label for="cost"><h4>Cost: </h4></label>
            <input id="cost" type="type" name="cost" required>
            <label for="place"><h4>Location: </h4></label>
            <select id="location-drop" name="location-drop">
                <option value="Italy">Italy</option>
                <option value="Switzerland">Switzerland</option>
                <option value="France">France</option>
            </select>
            </label>
            <button id="save-interest">Save interest</button>
        </fieldset>
        `;
        let newInterest = document.querySelector("#save-interest").addEventListener("click", () => {
            console.log(newInterest)
            let mirasNewInterest = {
              name: document.querySelector("#interest-name").value,
              cost: document.querySelector("#cost").value,
              location: document.querySelector("#location-drop").value,
            };
            console.log(mirasNewInterest)
            let newInterestBtn = document.querySelector("save-interest").addEventListener("click", () => {
                console.log(newInterestBtn)
            // createNewInterestForm();
            })
            addNewInterest(mirasNewInterest)
            console.log(mirasNewInterest)
})
}

// createNewInterestForm()


export { welcomeMiraPage }