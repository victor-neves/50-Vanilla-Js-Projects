
const button1 = document.querySelector('.button1');
const output = document.querySelector('.output');



function showOutput() {
    const date = new Date();
    let cur = date.getHours();


    if (cur > 17) {
        message = "Its evening !";
    } else if (cur > 12) {
        message = "Its afternoon !";
    } else if (cur > 0) {
        message = "Its morning !";
    } else {
        message = "Something is wrong !";
    }

    //output.innerHTML = "<h1>"+ message +"</h1>";
    output.innerHTML = message;

}

button1.addEventListener('click',showOutput);
