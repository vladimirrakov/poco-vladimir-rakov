// JavaScript code

function createMemberElement(member) {
  const memberElement = document.createElement("div");
  memberElement.classList.add("member");
  memberElement.dataset.location = member.location;

  const nameElement = document.createElement("h2");
  nameElement.textContent = member.name;
  memberElement.appendChild(nameElement);

  const imageElement = document.createElement("img");
  imageElement.src = member.photo;
  imageElement.alt = member.name;
  memberElement.appendChild(imageElement);

  const countryElement = document.createElement("p");
  countryElement.textContent = "Country: " + member.country;
  memberElement.appendChild(countryElement);

  const hobbyElement = document.createElement("p");
  hobbyElement.textContent = "Hobby: " + member.hobby;
  memberElement.appendChild(hobbyElement);

  const locationElement = document.createElement("p");
  locationElement.textContent = "Location: " + member.location;
  memberElement.appendChild(locationElement);

  return memberElement;
}

function filterMembers(location) {
  const membersContainer = document.getElementById("members-container");
  membersContainer.innerHTML = "";

  const filteredMembers =
    location === "All"
      ? classMembers
      : classMembers.filter((member) => member.location === location);

  filteredMembers.forEach((member) => {
    const memberElement = createMemberElement(member);
    membersContainer.appendChild(memberElement);
  });
}

// Initial load

filterMembers("All");