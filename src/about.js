import happyFamily from "./images/happy-family.jpg";

const about = () => {
    const content = document.querySelector('#content');

    const usImage = document.createElement('img');
    usImage.src = happyFamily;

    const textGroup = document.createElement('div');
    textGroup.classList.add('text-group')

    const header = document.createElement('h1');
    header.textContent = 'About us';

    const text = document.createElement('p');
    text.textContent = 'This is a very generic restaurant and we are a very generic family.';

    content.append(usImage);
    content.append(textGroup);
    textGroup.append(header);
    textGroup.append(text);
};

export { about };