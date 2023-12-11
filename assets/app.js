/*----------VARIABLES----------*/
let input = document.getElementById("input");
let errorText = document.getElementById("error-text1");
let form = document.getElementById("form")
let successMessage = document.getElementById("success");
let mainContainer = document.getElementById("main");
let dismissBtn = document.getElementById("dismiss-btn");
var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/*----------FUNCTIONS----------*/
function checkEmail() {
    if (!filter.test(input.value)) {
        input.classList.add("error"); errorText.classList.remove("remove-text"); errorText.classList.add("error-text"); input.focus;
        return false;
    }else{
        input.classList.remove("error"); errorText.classList.add("remove-text"); errorText.classList.remove("error-text");
    }
}
function length(){
    if(input.value === "" || !filter.test(input.value)){
        input.classList.add("error"); errorText.classList.remove("remove-text"); errorText.classList.add("error-text")
    }else{
        successMessage.style.display = "flex"; mainContainer.style.display = "none";
    }
}
function dismiss(){
    window.location.reload()
    return false;
}


/*----------CALLED FUNCTIONS----------*/
form.addEventListener("submit", function(event){
    event.preventDefault()
    length()
})
form.addEventListener("input", function(event){
    event.preventDefault()
    checkEmail()
})
dismissBtn.addEventListener("click", function(event){
    event.preventDefault()
    dismiss()
})






