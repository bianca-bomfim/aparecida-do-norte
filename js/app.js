const toggleButton = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

// Função para abrir/fechar sidebar
function toggleSidebar() {
  sidebar.classList.toggle('close'); 
  toggleButton.classList.toggle('rotate');
  closeAllSubMenus(); 
}

function toggleSubMenu(button) {
  const submenu = button.nextElementSibling;

  if (!submenu.classList.contains('show')) {
    closeAllSubMenus();
  }

  submenu.classList.toggle('show');
  button.classList.toggle('rotate');

  if (sidebar.classList.contains('close')) {
    sidebar.classList.remove('close');
    toggleButton.classList.remove('rotate');
  }
}

function closeAllSubMenus() {
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.remove('show');
    ul.previousElementSibling.classList.remove('rotate');
  });
}
