const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    if (scrolled > 50) {
        nav.style.background = "rgba(0, 0, 255, 0.7)";
    }
    else {
        nav.style.backgroundColor = "transparent";
    }
});
const menu = document.querySelector(".modal-menu");
document.querySelector("#icon").addEventListener('click', (event) => {
    event.preventDefault();
    menu.style.display = "block";
    document.querySelector(".modal-bg").style.display = "block";
});
document.querySelector(".close").addEventListener('click', () => {
    menu.style.display = "none";
    document.querySelector(".modal-bg").style.display = "none";
});
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && event.target !== document.querySelector("#click")) {
        menu.style.display = "none";
        document.querySelector(".modal-bg").style.display = "none";
    }
});
      //-----Fetch-----//

fetch('http://localhost:3000/robots')
    .then(res => res.json())
    .then(data => {  
        console.log(data);
        data.forEach(robot => {
            document.querySelector('.tion22').innerHTML += `
            <div class="card">
                    <div class="img"><img src="${robot.image}" alt=""></div>
                    <div class="text">
                        <h5>${robot.name}</h5>
                        <p>${robot.description}</p>
                        <a href="../details.html?id=${robot.id}"><button onclick="deleteData(${robot.id})"> VIEW DETAILS</button></a>
                        <button onclick="deleteRobot(${robot.id})"> Delete</button>
                        </div>
                </div>`
        });
    });

    function deleteRobot(id){
        axios.delete(`http://localhost:3000/robots/${id}`);
        Window.location.reload();
    }