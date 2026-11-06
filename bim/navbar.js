// Same menu markup as ../navbar.js, with the links of the BIM & Software side.
function generateBimNavbar() {
  const prefix = window.location.pathname.includes('/apps/') ? '../' : './';

  return `
    <div class="nvbar bim-nav-fix">
      <div class="main234">
        <input type="checkbox" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
        <div class="menu234">
          <li><a href="${prefix}addins.html">Add-ins</a></li>
          <li><a href="${prefix}pipelines.html">Pipelines</a></li>
          <li><a href="${prefix}contact.html">Contact</a></li>
        </div>
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.nvbar');
  if (navbar) {
    navbar.innerHTML = generateBimNavbar();
  }
});
