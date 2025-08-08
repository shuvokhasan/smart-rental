    const avatarButton = document.getElementById('avatarButton');
    const dropdownCard = document.getElementById('dropdownCard');

    avatarButton.addEventListener('click', () => {
      dropdownCard.classList.toggle('hidden');
    });

    // Optional: hide dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!avatarButton.contains(e.target) && !dropdownCard.contains(e.target)) {
        dropdownCard.classList.add('hidden');
      }
    });