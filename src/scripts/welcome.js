
let welcomeTravelerContainer = document.getElementById("container")

function welcomeTravelerPage (){
    welcomeTravelerContainer.innerHTML =`
    <div id="welcome-traveler">
    <h1>Welcome Mira!</h1>
    <h2>Here are your points of interest</h2>
    <button id="new-interest">Add New Point of Interest</button>
    </div>
    `
}

function createNewInterestForm() {
    welcomeTravelerContainer.innerHTML = `
        <fieldset class="form-group">
            <label for="interest-name"><h4>Name: </h4></label>
            <input id="interest-name" type="text" name="interest-name" required>
            <label for="cost"><h4>Cost: </h4></label>
            <input id="cost" type="type" name="cost" required>
            <label for="event-time"><h4>Time: </h4></label>
            <input id="event-time" type="time" name="event-time" required>
            <label for="event-location"><h4>Location: </h4></label>
            <input id="event-location" type="text" name="event-location" required>
            <button id="save-event">Save Event</button>
        </fieldset>
        `;
//         1. Name of the point of interest
// 1. Description of the point of interest
// 1. Cost of visiting the point of interest
// 1. Dropdown to pick which place the point of interest is located in
export { welcomeTravelerPage }