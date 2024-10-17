import restImage from "./images/restaurant-exterior.jpg";

const home = () => {
    const content = document.querySelector('#content');

    const restaurantImg = document.createElement('img');
    restaurantImg.src = restImage;

    const header = document.createElement('h1');
    header.textContent = 'Generic Restaurant';

    const text = document.createElement('p');
    text.textContent = 'This is a webpage for a generic restaurant!';

    content.append(restaurantImg);
    content.append(header);
    content.append(text);
};

export { home };