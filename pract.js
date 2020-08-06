function get() {
  var projects = [];
  const newSection = document.querySelector(".project");
  fetch("https://api.github.com/users/diwakar-kumar-au3/repos")
    .then((response) => response.json())
    .then((res) => {
      res.forEach((resp) => {
        // console.log(resp);
        let card = document.createElement("div");

        let name = document.createTextNode("Name:" + resp.name + " , ");
        card.appendChild(name);

        let description = document.createTextNode(
          "language:" + resp.language + " , "
        );
        card.appendChild(description);

        let visit = document.createElement("a");
        visit.setAttribute("title", resp.name);
        visit.setAttribute("href", resp.html_url);
        visit.innerHTML = resp.name;
        card.appendChild(visit);

        let container = document.querySelector(".project");
        container.appendChild(card).classList.add("projectcard");
      });
    });
  return projects;
}
console.log(get());
