import {fetchData} from "./modules/dataMiner.js";

(() => {
    //stub

    // function handleData(data){
    //     console.log("Handling!");
    // }

    function retrieveProjectInfo(event) {
        // console.log(event.target.id);
        // debugger;

        // check for an ID, if there isn't one, dont try fetch call (it would break)
        if (!event.target.id) { return };

        fetchData(`./includes/index.php?id=${event.target.id}`).then(data => console.log(data)).catch(err => console.log(err));
    }

    function renderThings(things) {
        let thingsSection = document.querySelector(".thingsSection"),
            // Cannot reference template itself, need to select the content inside specifically
            thingsTemplate = document.querySelector("#things-template").content;

        for (let thing in things) {

            // clone the template, do a DEEP CLONE - taking the user div and copying it. A deep clone uses (true) to go inside the referenced node and find all the children inside it.
            let currentThing = thingsTemplate.cloneNode(true),
                currentThingInfo = currentThing.querySelector('.things').children; 
                // grabs all the children to utilize in the next statement

            currentThingInfo[1].src = `images/${things[thing].avatar}`;
            currentThingInfo[2].textContent = `${things[thing].name}`;
            currentThingInfo[1].id = things[thing].name;
            
            // add user to the view
            thingsSection.appendChild(currentThing);
        }

        // adding a click event to the user Section wrapper
        thingsSection.addEventListener("click", retrieveProjectInfo);
    }


    fetchData('./dataset.json').then(data => renderThings(data)).catch(err => console.log(err));
})();