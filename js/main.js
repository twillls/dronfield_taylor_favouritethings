import {fetchData} from "./modules/dataMiner.js";

(() => {
    //stub

    // function handleData(data){
    //     console.log("Handling!");
    // }

    let button = document.querySelector("#splashbutton");

    button.addEventListener("click", closeSplash)

    function closeSplash(event){
        console.log("Closing Splash");

        var splash = document.getElementById("splash");
        splash.classList.toggle("hidden");
    }

    function popOver(event) {
        //console.log(event.target.id);
        //debugger;

        // check for an ID, if there isn't one, dont try fetch call (it would break)
        if (!event.target.id) { return };

        function renderPopOver(things){
            let popOverInfo = document.querySelector(".popOverSection"),
            popOverTemplate = document.querySelector("#popOver-template").content;

            let currentPopOver = popOverTemplate.cloneNode(true),
                currentPopOverInfo = currentPopOver.querySelector('.popOver').children;
        

            currentPopOverInfo[0].innerHTML = `${things[thing].name}`;
            currentPopOverInfo[1].innerHTML = `${things[thing].info}`;
            currentPopOverInfo[2].innerHTML = `${things[thing].rating}`;
            
            // add user to the view
            popOverInfo.appendChild(currentPopOver);
        }

        fetchData(`./includes/index.php?id=${event.target.id}`).then(data => renderPopOver(data)).catch(err => console.log(err));
    }


    function renderThings(things) {
        let thingsSection = document.querySelector(".thingsSection"),
            
            // Cannot reference template itself, need to select the content inside specifically
            thingsTemplate = document.querySelector("#things-template").content;

        for (let thing in things) {

            // clone the template, do a DEEP CLONE - taking the user div and copying it. A deep clone uses (true) to go inside the referenced node and find all the children inside it.
            let currentThing = thingsTemplate.cloneNode(true),
                currentThingInfo = currentThing.querySelector('.things').children, 
                currentThingId = currentThing.querySelector('.things');
                // grabs all the children to utilize in the next statement

            //currentThingInfo[0].src = `images/${things[thing].avatar}`;
            currentThingInfo[0].src = `images/${things[thing].avatar}`;
            currentThingInfo[1].innerHTML = `${things[thing].name}`;
            currentThingInfo[2].innerHTML = `${things[thing].info}`;
            currentThingInfo[3].innerHTML = `${things[thing].rating}`;
            currentThingId.id = things[thing].name;
            
            // add user to the view
            thingsSection.appendChild(currentThing);
        }

        // adding a click event to the user Section wrapper
        
        thingsSection.addEventListener("click", popOver);
    }


    fetchData('./includes/index.php').then(data => renderThings(data)).catch(err => console.log(err));
})();