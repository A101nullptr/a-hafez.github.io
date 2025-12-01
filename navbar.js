function generateNavbar() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const rootPages = [
        'index.html',
        'dex.html',
        'academic.html',
        'competition.html',
        'contact.html'
    ];
    const pathPrefix = rootPages.includes(currentPage) ? './' : '../';

    return `
    <div class="nvbar">
      <div class="main234">
        <input type="checkbox">
        <span></span>
        <span></span>
        <span></span>
        <div class="menu234">
          <li><a href="${pathPrefix}academic.html">Academic</a></li>
          <li><a href="${pathPrefix}competition.html">Competition</a></li>
          <li><a href="${pathPrefix}contact.html">Contact</a></li>
        </div>
      </div>
    </div>
  `;
}

function initializeNavbar() {
    const navbarContainer = document.querySelector('.nvbar');

    if (navbarContainer) {
        navbarContainer.innerHTML = generateNavbar();
        highlightCurrentPage();
    }
}

function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const menuLinks = document.querySelectorAll('.menu234 a');

    menuLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', initializeNavbar);
