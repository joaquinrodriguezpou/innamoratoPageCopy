import alfajor from '../dist/images/alfajor-inn.png';
import americanPop from '../dist/images/american-pop.png';
import bananaSplit from '../dist/images/banana-split.png';
import chocolateNuts from '../dist/images/chocolate-nuts.png';

function createFlavor(title, iceCreamImg){
    const flavor = document.createElement('div');
    flavor.classList.add('flavor');
    const flavorTitle = document.createElement('h1');
    flavorTitle.textContent = title;
    const image = document.createElement('img');
    image.src = iceCreamImg;

    flavor.appendChild(flavorTitle);
    flavor.appendChild(image);

    return flavor;
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

    flavorsContainer.appendChild(createFlavor('alfajor innamorato', alfajor)); 
    flavorsContainer.appendChild(createFlavor('american pop', americanPop));
    flavorsContainer.appendChild(createFlavor('banana split', bananaSplit));
    flavorsContainer.appendChild(createFlavor('chocolate whit nuts', chocolateNuts));
    flavorsContainer.appendChild(createFlavor('alfajor innamorato', alfajor)); 
    flavorsContainer.appendChild(createFlavor('american pop', americanPop));
    flavorsContainer.appendChild(createFlavor('banana split', bananaSplit));
    flavorsContainer.appendChild(createFlavor('chocolate whit nuts', chocolateNuts));
    flavorsContainer.appendChild(createFlavor('alfajor innamorato', alfajor)); 
    flavorsContainer.appendChild(createFlavor('american pop', americanPop));
    flavorsContainer.appendChild(createFlavor('banana split', bananaSplit));
    flavorsContainer.appendChild(createFlavor('chocolate whit nuts', chocolateNuts));
    flavorsContainer.appendChild(createFlavor('alfajor innamorato', alfajor)); 
    flavorsContainer.appendChild(createFlavor('american pop', americanPop));
    flavorsContainer.appendChild(createFlavor('banana split', bananaSplit));
    // content.appendChild(createFlavor());
    
    content.appendChild(title);
    content.appendChild(subtitle);
    content.appendChild(flavorsContainer); 

    return {
        content,
    }
}