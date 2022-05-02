

const dairyChoices = Array.from(document.getElementsByName("dairy"));
const caloriesChoices = Array.from(document.getElementsByName("calories"));
const flavorChoices = Array.from(document.getElementsByName("flavor"));

const startBtn = document.querySelector("#btn-start");
startBtn.addEventListener("click", getUserInput);
/*
function getRecipes() {
    for(let i = 0; i < dairyChoices.length; i++) {
        for(let k = 0; k < caloriesChoices.length; k++){
            for(let m = 0; m < flavorChoices.length; m++){
                if(dairyChoices[i].checked && caloriesChoices[i].checked && flavorChoices[i].checked) {
                    location.href = "result.html";
                } else {
                    break;
                }
            }
        }
    }
}
*/
function getUserInput() {
    let choices = {
        dairy: null,
        calories: null,
        flavor: null
    };
    console.log(dairyChoices);
    dairyChoices.forEach(item => {
        if ( item.checked) {
            choices.dairy = item.value;
        }
    });
    caloriesChoices.forEach(item => {
        if ( item.checked) {
            choices.calories = item.value;
        }
    });
    flavorChoices.forEach(item => {
        if ( item.checked) {
            choices.flavor = item.value;
        }
    });
    console.log(choices);
}