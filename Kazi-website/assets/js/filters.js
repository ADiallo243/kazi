const filterButtons = document.querySelectorAll('.filter-btn');

const professionalCards = document.querySelectorAll('.professional-card');

const searchInput = document.getElementById('searchInput');

const emptyState = document.getElementById('emptyState');

const profileCount = document.getElementById('profileCount');

let activeFilter = 'all';

/* FILTER FUNCTION */

function filterCards() {
  const searchValue = searchInput?.value.toLowerCase().trim() || '';

  let visibleCount = 0;

  professionalCards.forEach((card) => {
    const category = card.dataset.category?.toLowerCase() || '';

    const text = card.textContent.toLowerCase();

    const matchesFilter =
      activeFilter === 'all' || category.includes(activeFilter);

    const matchesSearch =
      text.includes(searchValue) || category.includes(searchValue);

    if (matchesFilter && matchesSearch) {
      card.style.display = 'flex';

      if (!card.classList.contains('coming-soon-card')) {
        visibleCount++;
      }
    } else {
      card.style.display = 'none';
    }
  });

  if (emptyState) {
    emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
  }

  if (profileCount) {
    profileCount.textContent = visibleCount;
  }
}

/* FILTER BUTTONS */

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;

    filterButtons.forEach((btn) => {
      btn.classList.remove('active');
    });

    button.classList.add('active');

    filterCards();
  });
});

/* SEARCH */

if (searchInput) {
  searchInput.addEventListener('input', filterCards);
}

/* URL FILTER */

const urlParams = new URLSearchParams(window.location.search);

const categoryFromURL = urlParams.get('category');

if (categoryFromURL) {
  activeFilter = categoryFromURL;

  filterButtons.forEach((button) => {
    if (button.dataset.filter === categoryFromURL) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

filterCards();
