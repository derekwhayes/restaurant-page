import restImage from "./images/restaurant-exterior.jpg";

const home = () => {
    const content = document.querySelector('#content');

    const restaurantImg = document.createElement('img');
    restaurantImg.src = restImage;

    const textGroupDiv = document.createElement('div');
    textGroupDiv.classList.add('text-group');

    const header = document.createElement('h1');
    header.textContent = 'Generic Restaurant';

    const text = document.createElement('p');
    text.textContent = 'This is a webpage for a generic restaurant!';

    content.append(restaurantImg);
    content.append(textGroupDiv);
    textGroupDiv.append(header);
    textGroupDiv.append(text);
};

export { home };