function filterPubs(tag) {
  const papers = document.getElementsByClassName("paper");
  for (let i = 0; i < papers.length; i++) {
    const paper = papers[i];
    paper.style.display =
      tag === "all" || paper.classList.contains(tag) ? "block" : "none";
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
