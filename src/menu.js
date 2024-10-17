const menu = () => {
    const content = document.querySelector('#content');

    const header = document.createElement('h1');
    header.textContent = 'Menu';

    const menuItem = document.createElement('p');
    menuItem.innerText = 'Generic Food - $5.99';

    content.append(header);
    content.append(menuItem);
};

export { menu };