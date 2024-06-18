document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Tooltips for table cells
    document.querySelectorAll('[data-tooltip]').forEach(item => {
        item.addEventListener('mouseenter', event => {
            let tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.innerHTML = item.getAttribute('data-tooltip');
            document.body.appendChild(tooltip);
            let rect = item.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width - tooltip.clientWidth) / 2 + 'px';
            tooltip.style.top = rect.top - tooltip.clientHeight - 10 + 'px';
        });

        item.addEventListener('mouseleave', event => {
            document.querySelectorAll('.tooltip').forEach(tooltip => {
                tooltip.remove();
            });
        });
    });

    // Modal window for the subscribe button
    let subscribeButton = document.getElementById('subscribeButton');
    let modal = document.getElementById('subscribeModal');
    let closeButton = document.querySelector('.close-button');

    subscribeButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', event => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Dynamic image gallery with lightbox effect
    document.querySelectorAll('.image-hover').forEach(image => {
        image.addEventListener('click', () => {
            let lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            document.body.appendChild(lightbox);
            let img = document.createElement('img');
            img.src = image.src;
            img.className = 'lightbox-image';
            lightbox.appendChild(img);
            lightbox.addEventListener('click', () => {
                lightbox.remove();
            });
        });
    });
});