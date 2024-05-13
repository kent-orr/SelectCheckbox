
function initializeSelectCheckbox() {
  document.querySelectorAll('select[multiple]').forEach((select) => {
    new SelectCheckbox(select);
  });
}

class SelectCheckbox {
  constructor(selectElement) {
    this.select = selectElement;
    if (!this.select) {
      throw new Error('Select element not found');
    }
    this.dropdownContainer = document.createElement('div');
    this.dropdownContainer.className = 'select-checkbox';
    this.lastClickedIndex = -1; // Add this line to track the last clicked checkbox
    this.initDropdown();
  }

  initDropdown() {
    // Find label for select element
    const label = document.querySelector(`label[for="${this.select.name}"]`);
    const buttonText = label ? label.innerText : 'Select Options';  // Use label text or default text

    const button = document.createElement('button');
    button.className = 'btn btn-outline-secondary dropdown-toggle';
    button.setAttribute('data-bs-toggle', 'dropdown');
    button.setAttribute('aria-expanded', 'false');
    button.style.width = '100%';
    button.style.textAlign = 'left';

    const textSpan = document.createElement('span');
    textSpan.textContent = buttonText;
    textSpan.style.flexGrow = '1';  // Makes the span fill the button width

    button.appendChild(textSpan);
    button.style.display='flex';
    button.style.justifyContent='space-between';
    button.style.alignItems='center';

    const menu = document.createElement('div');
    menu.className = 'dropdown-menu';
    menu.style.userSelect = 'none';
    menu.style.maxHeight = '300px'; // Example max-height, adjust as needed
    menu.style.overflowY = 'auto';

    // ================================ SEARCH =================================
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.className = 'form-control';
    searchInput.placeholder = 'Search...';
    searchInput.style.margin = '10px';
    searchInput.style.width = 'calc(100% - 20px)'; 
    searchInput.style.boxSizing = 'border-box';
    searchInput.onkeyup = () => {
      const searchText = searchInput.value.toLowerCase();
      const items = menu.querySelectorAll('.form-check');
      items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.indexOf(searchText) > -1) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    };

    menu.appendChild(searchInput);

    // ============================ CREATE OPTIONS =============================

    Array.from(this.select.options).forEach((option, index) => {
      const item = this.createCheckboxItem(option, index);
      menu.appendChild(item);
    });

    // 

    this.dropdownContainer.appendChild(button);
    this.dropdownContainer.appendChild(menu);
    this.select.parentNode.replaceChild(this.dropdownContainer, this.select);
    label.remove();
  }

  createCheckboxItem(option, index) {
    const item = document.createElement('div');
    item.className = 'form-check';
    item.style.cursor = 'pointer';
    item.style.marginLeft = '0.5em';

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.className = 'form-check-input';
    input.value = option.value;
    input.name = this.select.name;
    input.dataset.index = index;

    const label = document.createElement('label');
    label.className = 'form-check-label w-100';
    label.setAttribute('for', 'dropdownCheck' + option.value);
    label.textContent = option.text;

    label.onclick = (event) => {
      event.stopPropagation();
      const currentIndex = parseInt(input.dataset.index);
      if (event.shiftKey && this.lastClickedIndex !== -1) {
        console.log(this.lastClickedIndex); console.log(currentIndex);
        this.selectBetween(this.lastClickedIndex, currentIndex, !input.checked);
      } else {
        input.checked = !input.checked; // Toggle the checkbox state
        this.lastClickedIndex = currentIndex; // Update the last clicked index
      }
    };

    item.appendChild(input);
    item.appendChild(label);
    item.onclick = (event) => event.stopPropagation(); // Prevent dropdown from closing

    return item;
  }

  selectBetween(startIndex, endIndex, state) {
    const start = Math.min(startIndex, endIndex);
    const end = Math.max(startIndex, endIndex);
    const checkboxes = this.dropdownContainer.querySelectorAll('.form-check-input');
    for (let i = start; i <= end; i++) {
      checkboxes[i].checked = state;
    }
  }

}
