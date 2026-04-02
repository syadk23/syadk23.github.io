// ===================================
//  Syad Khwajazada | 8-Bit Portfolio
//  main.js
// ===================================

/**
 * Switches the visible tab panel and updates the active button state.
 * @param {string} id - The ID of the tab panel to show.
 * @param {Event} event - The click event from the nav button.
 */
function switchTab(id, event) {
  // Hide all panels
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.remove('active');
  });

  // Deactivate all buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  // Show the selected panel
  const target = document.getElementById(id);
  if (target) target.classList.add('active');

  // Activate the clicked button
  const btn = event.currentTarget || event.target;
  if (btn) btn.classList.add('active');
}
