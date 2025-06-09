document.addEventListener("DOMContentLoaded", () => {
    const personas = [
      {
        name: "Tom, 38 – Small Business Owner",
        goal: "Get his POS laptop fixed urgently.",
        skill: "Basic (avoids DIY fixes).",
        need: "Fast and trustworthy computer repair.",
        img: "resources/persona1.png",
        alt: "Tom the Small Business Owner"
      },
      {
        name: "Emma, 20 – University Student",
        goal: "Fix laptop before her final project is due.",
        skill: "Intermediate (design apps, web tools).",
        need: "Reliable, student-friendly repair service.",
        img: "resources/persona2.png",
        alt: "Emma the College Student"
      }
    ];
  
    const container = document.getElementById("persona-container");
  
    personas.forEach(persona => {
      const row = document.createElement("div");
      row.className = "persona-row";
  
      row.innerHTML = `
        <div class="persona-text">
          <h4>${persona.name}</h4>
          <p><strong>Goal:</strong> ${persona.goal}</p>
          <p><strong>Tech Skill:</strong> ${persona.skill}</p>
          <p><strong>Need:</strong> ${persona.need}</p>
        </div>
        <div class="persona-image">
          <img src="${persona.img}" alt="${persona.alt}">
        </div>
      `;
  
      container.appendChild(row);
    });
  });
  