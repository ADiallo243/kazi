// ===============================
// KAZI EXPLORER FILTERS + SEARCH
// ===============================

document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.professional-card');
  const searchInput = document.getElementById('searchInput');
  const emptyState = document.getElementById('emptyState');
  const profileCount = document.getElementById('profileCount');

  if (!cards.length) return;

  let currentFilter = 'all';

  const normalizeText = (text) =>
    text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

  const updateUrlCategory = (category) => {
    const url = new URL(window.location.href);

    if (category === 'all') {
      url.searchParams.delete('category');
    } else {
      url.searchParams.set('category', category);
    }

    window.history.replaceState({}, '', url);
  };

  const setActiveButton = (category) => {
    filterButtons.forEach((button) => {
      const buttonFilter = button.dataset.filter;

      if (buttonFilter === category) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  };

  const applyFilters = () => {
    const searchValue = normalizeText(searchInput?.value.trim() || '');
    let visibleCards = 0;
    let activeVisibleProfiles = 0;

    cards.forEach((card) => {
      const cardCategory = card.dataset.category || '';
      const cardText = normalizeText(card.textContent || '');

      const matchesCategory =
        currentFilter === 'all' || cardCategory === currentFilter;

      const matchesSearch = !searchValue || cardText.includes(searchValue);

      const shouldShow = matchesCategory && matchesSearch;

      card.classList.toggle('is-hidden', !shouldShow);

      if (shouldShow) {
        visibleCards += 1;

        if (!card.classList.contains('coming-soon-card')) {
          activeVisibleProfiles += 1;
        }
      }
    });

    if (emptyState) {
      emptyState.style.display = visibleCards === 0 ? 'block' : 'none';
    }

    if (profileCount) {
      profileCount.textContent = activeVisibleProfiles;
    }
  };

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      currentFilter = button.dataset.filter || 'all';

      setActiveButton(currentFilter);
      updateUrlCategory(currentFilter);
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }

  const urlParams = new URLSearchParams(window.location.search);
  const categoryFromUrl = urlParams.get('category');

  if (categoryFromUrl) {
    const matchingButton = document.querySelector(
      `.filter-btn[data-filter="${categoryFromUrl}"]`,
    );

    if (matchingButton) {
      currentFilter = categoryFromUrl;
      setActiveButton(currentFilter);
    }
  }

  applyFilters();
});
