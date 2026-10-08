function filterPubs(tag) {
  const papers = document.getElementsByClassName("paper");
  for (let i = 0; i < papers.length; i++) {
    const paper = papers[i];
    paper.style.display =
      tag === "all" || paper.classList.contains(tag) ? "block" : "none";
  }

  const dividers = document.querySelectorAll("#publications .year-divider");
  for (const divider of dividers) {
    let hasVisiblePaper = false;
    let item = divider.nextElementSibling;
    while (item && !item.classList.contains("year-divider")) {
      if (item.classList.contains("paper") && item.style.display !== "none") {
        hasVisiblePaper = true;
        break;
      }
      item = item.nextElementSibling;
    }
    divider.style.display = hasVisiblePaper ? "flex" : "none";
  }
}

function showSection(id) {
  const sections = document.getElementsByClassName("page-section");
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }
  document.getElementById(id).style.display = "block";
  window.scrollTo(0, 0);
}
