const comparisonBlock = document.getElementById("comparisonBlock");

fetch("csvjson.json")
  .then((response) => response.json())
  .then((json) => {
    const ulTag = document.querySelector("ul");
    const companies = json;
    companies.forEach((company, index) => {
      const liTag = document.createElement("li");
      const imgTag = document.createElement("img");
      const pNameTag = document.createElement("p");
      const pNumberTag = document.createElement("p");
      imgTag.src = company.Image;
      liTag.id = `company${index}`;
      liTag.classList.add("information");
      pNameTag.classList.add("name");
      pNumberTag.classList.add("number");
      pNameTag.innerHTML = company.CompanyName;
      pNumberTag.innerHTML = company.Numinternship;
      ulTag.appendChild(liTag);
      liTag.appendChild(imgTag);
      liTag.appendChild(pNameTag);
      liTag.appendChild(pNumberTag);
      liTag.addEventListener("click", function () {
        if (!this.classList.contains("active")) {
          if (document.querySelectorAll("#comparisonBlock ul").length >= 2) {
            let companyID = document
              .querySelector("#comparisonBlock ul:first-child")
              .getAttribute("data-index");
            document.querySelector("#comparisonBlock ul:first-child").remove();

            document.getElementById(companyID).classList.remove("active");
          }

          const wrapperTag = document.createElement("ul");
          wrapperTag.setAttribute("data-index", `company${index}`);
          const descriptionTag = document.createElement("li");
          const nameTag = document.createElement("li");
          const careerDayTag = document.createElement("li");

          nameTag.classList.add("name");
          careerDayTag.classList.add("day");
          descriptionTag.classList.add("description");
          nameTag.innerHTML = company.CompanyName;
          descriptionTag.innerHTML = company.Description;
          careerDayTag.innerHTML = company.CareerDay;

          comparisonBlock.appendChild(wrapperTag);
          wrapperTag.appendChild(nameTag);
          wrapperTag.appendChild(descriptionTag);

          // careerDayTag.appendChild()

          // console.log(this);
          this.classList.add("active");
        } else {
          // document.querySelector('#comparisonBlock ul:first-child').remove();
        }

        // const imgTag = document.createElement("img");
        // const pNameTag = document.createElement("p");
        // const pNumberTag = document.createElement("p");
      });
    });
  })
  .catch((error) => {
    console.error(error);
  });
