import alfajor from '../dist/images/alfajor-inn.jpg';

function createFlavor(title, iceCreamImg){
    const flavor = document.createElement('div');
    flavor.classList.add('flavor');
    const flavorTitle = document.createElement('h1');
    flavorTitle.textContent = title;
    const image = document.createElement('img');
    image.src = iceCreamImg;

    flavor.appendChild(flavorTitle);
    flavor.appendChild(image);

    return {
        flavorContainer,
    }
}

export function loadMenuPage() {
    const content = document.createElement('div');
    const title = document.createElement('h1');
    const subtitle = document.createElement('h2');
    const flavorsContainer = document.createElement('div');

    content.classList.add('content', 'home-page'); 
    title.textContent = 'Menu';
    subtitle.textContent = 'flavors';
    flavorsContainer.classList.add('flavors-container');

    content.appendChild(title);
    content.appendChild(subtitle);
    content.appendChild(createFlavor('alfajor innamorato', alfajor));   
    // content.appendChild(createFlavor());
    // content.appendChild(createFlavor());
    // content.appendChild(createFlavor());
    // content.appendChild(createFlavor());

    content.appendChild(mainContent);

    return {
        content,
    }
}