import { getMirasPlaces, addNewInterest, changeMirasInterests, getMirasInterestById, deleteInterest } from "./api.js"

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
            welcomeTravelerContainer.innerHTML += `
            <div id="interest-${interestObj.id}">
            <ul id="no-bullets">
            <li><strong>Name:</strong> ${interestObj.name}</li>
            <li><strong>Description:</strong> ${interestObj.description}</li>
            <li><strong>Cost:</strong> ${interestObj.cost}</li>
            <li><strong>Review:</strong> ${interestObj.review}</li>
            </ul>
            <button id="edit-${interestObj.id}" class="editBtn">Edit</button>
            <button id="delete-${interestObj.id}" class="deleteBtn">Delete</button>
            </div>`
        })
        })
        welcomeTravelerContainer.innerHTML += "</div>"
        document.querySelector("#mira-travels").addEventListener("click", createNewInterestForm)
        editBtnListener()
        deleteBtnListener ()
    })
}
function editBtnListener() {
    let editBtnArray = document.querySelectorAll(".editBtn")
 editBtnArray.forEach(editBtn => {
     editBtn.addEventListener("click", () => {
     let editBtnId = event.target.id
     let editBtnIdArray = editBtnId.split("-");
     let editBtnIdNum = editBtnIdArray[1];
    getMirasInterestById(editBtnIdNum).then(interest=> {
    console.log(interest)
     let editForm = `
     <fieldset>
     <label for="cost"><h4>Cost: </h4></label>
     <input id="cost" type="text" name="cost" value="${interest.cost}" required>
     <label for="review"><h4>Review: </h4></label>
     <input id="review" type="text" name="review" value="${interest.review}" required>
     <button id="save-${interest.id}">save changes</button>
     <fieldset/>
     `;

let editFieldContainer = document.querySelector(`#interest-${interest.id}`)
     editFieldContainer.innerHTML = editForm
     document.querySelector(`#save-${interest.id}`).addEventListener("click", event => {
         let saveBtn = event.target.id
         let editedSave = saveBtn.split("-")
         let editedBtnId = editedSave[1]
         let editedInterestObj = {
            cost: document.querySelector("#cost").value,
            review: document.querySelector("#review").value
         }
    changeMirasInterests(editedBtnId, editedInterestObj).then( () =>{
        renderMirasInterests()
    })
    })
 })
 })
})
}

function deleteBtnListener () {
    let deleteBtnArray = document.querySelectorAll(".deleteBtn")
    console.log(deleteBtnArray)
    deleteBtnArray.forEach(btn => {
        btn.addEventListener("click", () => {
        let deleteBtn = event.target.id
        let deleted = deleteBtn.split("-")
        let deleteBtnId = deleted[1]
        let del=confirm("Are you sure you want to delete this record?");
        if (del===true) {
           alert ("interest deleted")
           deleteInterest(deleteBtnId)
        } else{
            alert("interest Not Deleted")
        }
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



