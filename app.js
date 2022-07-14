//local reviews data
const reviews = [
    {
        id: 1,
        name: "Peter Walker",
        job: "Attorney",
        img:
         "https://media.istockphoto.com/photos/studio-shot-of-a-handsome-and-happy-young-man-posing-against-a-grey-picture-id1355110818?b=1&k=20&m=1355110818&s=170667a&w=0&h=O58XhltYuAw0ssiUWXAFlIitq_4kj-WdJFWcTLEoUi0=",
        text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie nunc non blandit massa enim nec dui nunc. Fermentum et sollicitudin ac orci.",
    },
    {
        id: 2,
        name: "Samson Collindar",
        job: "Chef",
        img:
         "https://media.istockphoto.com/photos/headshot-portrait-of-smiling-biracial-man-posing-picture-id1292475584?b=1&k=20&m=1292475584&s=170667a&w=0&h=jZ6etD3dfOV_NIgwR9hIQ5B9TBC5kpYxShIsaqjWbzc=",
        text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie nunc non blandit massa enim nec dui nunc. Fermentum et sollicitudin ac orci.",
    },
    {
        id: 3,
        name: "Amanda P. Soper",
        job: "Web Designer",
        img:
         "https://media.istockphoto.com/photos/smiling-young-woman-beauty-close-up-portrait-picture-id1280113805?k=20&m=1280113805&s=612x612&w=0&h=4axzFdjwxVoxSCYGDZGgx0ipyhmOd7N4_OEyokFcZiU=",
        text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie nunc non blandit massa enim nec dui nunc. Fermentum et sollicitudin ac orci.",

    },
    {
        id: 4,
        name: "Sadie Hassleback",
        job: "Rancher",
        img:
         "https://cdn.photographycourse.net/wp-content/uploads/2022/04/how-to-take-professional-headshots.jpg",
        text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie nunc non blandit massa enim nec dui nunc. Fermentum et sollicitudin ac orci.",

    }

];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev.btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random.btn');

//set starting item
let currentItem = 0;

//load initital item
window.addEventListener('DOMContentLoaded', function(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});