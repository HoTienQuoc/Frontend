// toggle Background active
const bannerNavigator = name => {
    let items = document.querySelectorAll('.item');
    let descriptions = document.querySelectorAll('.description');

    items.forEach(item => {
        item.classList.remove('active');
        if (item.classList.contains(name)) {
            item.classList.add('active');
        }
    });

    descriptions.forEach(description => {
        description.classList.remove('active');
        if (description.classList.contains(name)) {
            description.classList.add('active');
        }
    });
};

// Đóng banner, reset về trạng thái ban đầu
const bannerClose = () => {
    let items = document.querySelectorAll('.item');
    let descriptions = document.querySelectorAll('.description');

    items.forEach(item => {
        item.classList.remove('active');
    });

    descriptions.forEach(description => {
        description.classList.remove('active');
    });

    // Ẩn nút close
    document.querySelector('.close').classList.remove('active');
};

// switch Background
window.addEventListener('load', () => {
    const buttons = document.querySelectorAll('.name');
    const close = document.querySelector('.close');

    buttons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();

            buttons.forEach(el => el.classList.remove('active'));
            this.classList.add('active');

            close.classList.add('active'); // Hiển thị nút close
            bannerNavigator(this.getAttribute('data-target'));
        });
    });

    close.addEventListener('click', function (e) {
        e.preventDefault();
        bannerClose();
    });
});


