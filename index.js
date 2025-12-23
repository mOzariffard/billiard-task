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



document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
  });

  // Close when clicking a link
  document.querySelectorAll(".ul-container a").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      nav.classList.remove("active");
    });
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
      hamburger.classList.remove("active");
      nav.classList.remove("active");
    }
  });

  
  // Tournoument Bracket
  

  
});


