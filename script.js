document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('nav ul li a');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = tab.getAttribute('href').substring(1);

            contents.forEach(content => {
                content.style.display = 'none';
            });

            document.getElementById(targetId).style.display = 'block';
        });
    });

    // Show the first tab by default
    if (contents.length > 0) {
        contents[0].style.display = 'block';
    }
});
