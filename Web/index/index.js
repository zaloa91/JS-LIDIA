document.addEventListener('DOMContentLoaded', function() {
    const trabajosLink = document.getElementById('trabajos-link');
    const trabajosMenu = document.getElementById('trabajos-menu');

    trabajosLink.addEventListener('click', function(event) {
        event.preventDefault();
        trabajosMenu.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
        if (!trabajosLink.contains(event.target) && !trabajosMenu.contains(event.target)) {
            trabajosMenu.classList.remove('show');
        }
    });
});
