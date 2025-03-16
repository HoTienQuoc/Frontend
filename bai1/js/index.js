const bannerNavigator = name => {
    let items = document.querySelectorAll('.item');
    let descriptions = document.querySelectorAll('.description');
    items.forEach(item => {
        item.classList.remove('active');
        if(item.classList.contains(name)){
            item.classList.add('active');
        }
    });
    descriptions.forEach(descriptions => {
        descriptions.classList.remove('active');
        if(descriptions.classList.contains(name)){
            descriptions.classList.add('active');
        }
    });
}