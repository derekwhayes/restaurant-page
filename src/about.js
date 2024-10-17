const about = () => {
    const content = document.querySelector('#content');

    const header = document.createElement('h1');
    header.textContent = 'About us';

    const text = document.createElement('p');
    text.textContent = 'This is a very generic restaurant.';

    content.append(header);
    content.append(text);
};

export { about };