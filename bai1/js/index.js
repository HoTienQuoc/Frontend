//toggle Background active
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

const bannerClose = () => {
    let items = document.querySelectorAll('.item');
    let descriptions = document.querySelectorAll('.description');
    items.forEach(item=>{
        item.classList.remove('active');
    })
    descriptions.forEach(descriptions=>{
        descriptions.classList.remove('active');
    })
};

// switch Background
window.addEventListener('load', ()=>{
    const buttons = document.querySelectorAll('.name');
    const close = document.querySelector('.close');
    buttons.forEach(btn => {
        btn.addEventListener('click', function (e){
            e.preventDefault();
            buttons.forEach(el => {
                el.classList.remove('active');
            });
            this.classList.add('active');
            close.classList.add('active');
            bannerNavigator(this.getAttribute('data-target'));
        });
    });
    close.addEventListener('click', function (e){
        e.preventDefault();
        close.classList.remove('active');
        buttons.forEach(el => {
            el.classList.remove('active');
        });
        bannerNavigator(this.getAttribute('data-target'));
    });
})