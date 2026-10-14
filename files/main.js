function filterPubs(tag) {
  const papers = document.querySelectorAll("#publications .paper");
  let visibleCount = 0;
  for (let i = 0; i < papers.length; i++) {
    const paper = papers[i];
    const isVisible = tag === "all" || paper.classList.contains(tag);
    paper.style.display = isVisible ? "block" : "none";
    if (isVisible) visibleCount++;
  }

  let filterLabel = tag;
  const buttons = document.querySelectorAll("#publications .filter-btn");
  for (const button of buttons) {
    const isSelected = button.dataset.filter === tag;
    button.setAttribute("aria-pressed", String(isSelected));
    if (isSelected) filterLabel = button.textContent.trim();
  }

  document.getElementById("filter-status").textContent =
    tag === "all"
      ? `Showing all ${papers.length} papers`
      : `${filterLabel}: showing ${visibleCount} of ${papers.length} papers`;

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

filterPubs("all");
