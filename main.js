// --------Mobile Store-------


// -----selectors-----

const tableBody = document.querySelector("tbody")
const form = document.querySelector("form")
const nameInput = document.querySelector(".name-input")
const priceInput = document.querySelector(".price-input")
const formButton = document.querySelector("form button")


// vars
const phones= JSON.parse(localStorage.getItem("phones"));
let updateIndex = null

// create phone

form .addEventListener("submit" , (e) =>{
    e.preventDefault();
    console.log(formButton.textContent)
    
    const phone ={
        name :nameInput.value,
        price:priceInput .value,
    };
    
    if (formButton.textContent == "Create"){
        phones.push (phone);
    }else{
        phones.splice(index,1, phone)
        formButton.textContent="create"
    } ;

    localStorage.setItem("phones", JSON.stringify(phones))

    displayphones()

    clearInputs();
    

});


// clear inputs

function clearInputs (){
    nameInput.value = "" ;
    priceInput.value = "";
}


// show phones
function displayphones() {
    tableBody.innerHTML="";
    phones.forEach ((phone , i ) => {
         tableBody.innerHTML += `  <tr>
                        <td>${i+1}</td>
                        <td>${phone.name}</td>
                        <td>${phone.price}</td>

                        <td>
                            <!-- Edit -->
                            <svg 
                            onclick="updatePhone(${i})"
                            class="text-warning" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2">
                                    <path
                                        d="m16.475 5.408l2.117 2.117m-.756-3.982L12.109 9.27a2.1 2.1 0 0 0-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 1 0-2.621-2.621" />
                                    <path d="M19 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3" />
                                </g>
                            </svg>

                            <!-- Delete -->
                            <svg class="text-danger" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                viewBox="0 0 1024 1024"
                                onclick="deletePhones(${i})"
                                >
                                <path d="M0 0h1024v1024H0z" fill="none" />
                                <path fill="currentColor"
                                    d="M160 256H96a32 32 0 0 1 0-64h256V96a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v96h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32" />
                            </svg>

                        </td>
                    </tr>`


    })

}

displayphones ();


// delete phone

function deletePhones (index) {
    phones.splice(index,1)
    localStorage.setItem("phones", JSON.stringify(phones))
    displayphones()

}


// update

function updatePhone(updateIndex){
   nameInput.value = phones[updateIndex].name
   priceInput.value = phones[updateIndex].price

   formButton.innerHTML = "Update"

   index = updateIndex;


}