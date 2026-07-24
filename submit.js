

const scriptURL = " https://script.google.com/macros/s/AKfycbxQ-vDiMs3aGER92xiWVXFmXX2u5BmU509MVPnWRw7jdtFvzgtLHT80Qd4nGgLITY8v/exec";

const form = document.getElementById("registrationForm");

form.addEventListener("submit", e => {

    e.preventDefault();

    fetch(scriptURL, {
        method: "POST",
        body: new FormData(form)
    })

    .then(response => response.text())

    .then(data => {

        window.location.href = "submit.html";

        form.reset();

    })

    .catch(error => {

        alert("Something went wrong!");

        console.error(error);

    });

});

