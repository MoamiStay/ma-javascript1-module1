const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//Q 1
const cat = [
    {
        complain: function() {
            console.log("Meow!");
        }

    }
];

//Q 2
const heading = document.querySelector("h3");
heading.innerHTML = "Updated Heading";
//Q 3
heading.style.fontSize = "2em";
//Q 4
heading.classList.add("subheading");

/*
//Q 5
const paragraphs = document.querySelectorAll("p");
for (let i in paragraphs) {
    paragraphs[i].style.color = "red";
};
*/

//Q 6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `<p>New Paragraph</p>`;
resultsContainer.style.backgroundColor = "yellow";

//Q 7
function myCats(list) {
    for(let i = 0; i < list.length; i++)
    console.log(list[i].name);
}
myCats(cats);

//Q 8

function createCats(any) {
    let html = "";
    for (let i = 0; i < any.length; i++) {
        let ageOfCat = "Age Unknown";
        if(any[i].age) {
            ageOfCat = any[i].age;
        }
        html += `<div><h5>${any[i].name}</h5></div>
        <div><p>${ageOfCat}</p></div>`
    }
    return html
}

const newHTML = createCats(cats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHTML;