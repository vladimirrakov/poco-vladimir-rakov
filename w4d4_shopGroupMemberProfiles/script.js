// Generate a container for profile boxes
const membersContainer = document.getElementById("members-container");

function createMemberElement(member) {
  // Generate a "memberElement" container

  const memberElement = document.createElement("div");
  memberElement.classList.add("member-element");

  // Generate a container for member picture

  const imageElement = document.createElement("img");
  imageElement.src = member.picture;
  imageElement.alt = member.name;
  imageElement.classList.add("member-picture");
  memberElement.appendChild(imageElement);

  // Generate a container with memberElementDetails:

  const memberElementDetails = document.createElement("div");
  memberElementDetails.classList.add("member-details");

  const profileName = document.createElement("h2");
  profileName.textContent = member.name;
  profileName.classList.add("member-name");
  memberElementDetails.appendChild(profileName);

  const countryLabel = document.createElement("span");
  countryLabel.textContent = "Country: ";
  countryLabel.classList.add("text-field-label");
  memberElementDetails.appendChild(countryLabel);

  const countryValue = document.createElement("span");
  countryValue.textContent = member.country;
  countryValue.classList.add("country-name");
  memberElementDetails.appendChild(countryValue);

  const hobbyLabel = document.createElement("span");
  hobbyLabel.textContent = "Hobby: ";
  hobbyLabel.classList.add("text-field-label");
  memberElementDetails.appendChild(hobbyLabel);

  const hobbyValue = document.createElement("span");
  hobbyValue.textContent = member.hobby;
  memberElementDetails.appendChild(hobbyValue);

  const locationLabel = document.createElement("span");
  locationLabel.textContent = "Location: ";
  locationLabel.classList.add("text-field-label");
  memberElementDetails.appendChild(locationLabel);

  const locationValue = document.createElement("span");
  locationValue.textContent = member.location;
  memberElementDetails.appendChild(locationValue);

  memberElement.appendChild(memberElementDetails);

  membersContainer.appendChild(memberElement);

  return memberElement;
}

// Filtering member elements by location

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