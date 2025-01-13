
const form = document.getElementById("surveyForm");

form.addEventListener('submit', function(event){
    event.preventDefault(); 

    const formData = new FormData(form);

    const name = formData.get('name');
    const email = formData.get('email');
    const age = formData.get('age');
    const description = formData.get('description').value;
    const recommend = formData.get('recommend');
    const comment = form.querySelector('#comment').value; 

    const languages = [];
    document.querySelectorAll("input[name='languages']:checked").forEach(function(checkbox){
        languages.push(checkbox.value);
    });

    console.log("Nombre", name);
    console.log("Email", email);
    console.log("Edad", age);
    console.log("Which option best describes you?", description);
    console.log("Would you recommend this site?", recommend);
    console.log("Languages and Frameworks:", languages);
    console.log("Any comments or suggestions: ", comment);
    alert("Formulario Enviado con Exito");
});