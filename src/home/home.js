import './home-style.css'; 
import alfajor from '../../dist/images/alfajor-inn.jpg'

export function loadHomePage() {
    const content = document.createElement('div');
    content.classList.add('content', 'home-content');
    const title = document.createElement('h1');
    const subtitle = document.createElement('h2');
    const description = document.createElement('p');
    const img = document.createElement('img');

    title.textContent = 'Innamorato is the best ice cream place!';
    subtitle.textContent = 'Discover Our Restaurant';
    description.textContent = 'Experience the finest ice creams with a blend of flavors that will leave you craving for more.';
    img.src = alfajor;

    content.appendChild(title);
    content.appendChild(subtitle);
    content.appendChild(description);
    content.appendChild(img);

    return { content,
    } 
}

