
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
