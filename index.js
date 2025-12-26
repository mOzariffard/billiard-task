// Search Icon of home page 
// Function to perform search
function performSearch() {
    const searchInput = document.getElementById('query');
    const query = searchInput.value.trim();
    
    if (query !== '') {
        // Redirect to search.html with query parameter
        window.location.href = `search.html?q=${encodeURIComponent(query)}`;
    } else {
        alert('لطفاً یک کلمه جستجو وارد کنید');
    }
}

// Handle Enter key press
function handleEnterKey(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
        event.preventDefault();
        performSearch();
    }
}





// For search part of the matches
function searchDropdown() {
    return {
        open: false,
        selectedValue: '',
        items: [
            'مسابقات فوتبال دستی طهران کاپ1403',
            'مسابقات اسنوکر طهران کاپ1401',
            'مسابقات اسنوکر  آقایان طهران کاپ1403',
            'مسابقات اسنوکر  بانوان طهران کاپ1403',
        ],
        
        get filteredItems() {
            return this.items;
        },
        
        selectItem(item) {
            this.selectedValue = item;
            this.open = false;
        }
    }
}
   
function selectGender(){
    return {
        open: false, 
        selectedValue: '',
        items: [
            'آقایان',
            'بانوان'   
        ],
        
        get filteredItems() {
            return this.items;
        },
        
        selectItem(item) {
            this.selectedValue = item;
            this.open = false;
        }
    }
}

function selectYear(){
    return {
        open: false, 
        selectedValue: '',
        items: [
            '۱۴۰۳',
            '۱۴۰۲',
            '۱۴۰۱',
            '۱۴۰۰',
            '۱۳۹۹',
            '۱۳۹۸',
            '۱۳۹۷',
            '۱۳۹۶',
            '۱۳۹۵',
            '۱۳۹۴',
            '۱۳۹۳',
            '۱۳۹۲',
            '۱۳۹۱',
            '۱۳۹۰',
            '۱۳۸۹',
            '۱۳۸۸',
            '۱۳۸۷',
            '۱۳۸۶',
            '۱۳۸۵',
            '۱۳۸۴',
            '۱۳۸۳',
            '۱۳۸۲',
            '۱۳۸۱',
            '۱۳۸۰'
        ],
        
        get filteredItems() {
            return this.items;
        },
        
        selectItem(item) {
            this.selectedValue = item;
            this.open = false;
        }
    }
}



document.addEventListener("DOMContentLoaded", () => {
           const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

/* Close menu when clicking outside */
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
    menu.classList.add("hidden");
    menuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  }
});

        });



    function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
