const projectContainer = document.querySelector(".main1");

// Fetch the JSON file
fetch("/myWork/projects.json")
  .then((response) => response.json())
  .then((projects) => {
    projects.forEach((project) => {
      const eachProject = `
        <a class="p_container" href="${project.reference_link}">
        <div class="p_img">
          <img
            src="${project.img_url}"
          />
        </div>
        <div class="p_title pc">
          <h2>${project.title}</h2>
        </div>
        <div class="p_description pc">
          <p>
            ${project.description}
          </p>
        </div>
        </a>`;

        projectContainer.innerHTML += eachProject;


    });
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
