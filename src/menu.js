import menuImage from './images/menu.jpg';

const menu = () => {
    const content = document.querySelector('#content');

    const menuImg = document.createElement('img');
    menuImg.src = menuImage;

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-container')

    const header = document.createElement('h1');
    header.textContent = 'Menu';

    const list = document.createElement('ul');

    const foodItem = document.createElement('li');
    foodItem.innerText = 'Generic Food - $5.99';

    const drinkItem = document.createElement('li');
    drinkItem.innerText = 'Generic Drink - $2.99';

    const gratuityItem = document.createElement('li');
    gratuityItem.innerText = 'Generic required gratuity - 6000%';

    content.append(menuImg);
    content.append(menuDiv);
    menuDiv.append(header);
    menuDiv.append(list);
    list.append(foodItem);
    list.append(drinkItem);
    list.append(gratuityItem);
};

export { menu };