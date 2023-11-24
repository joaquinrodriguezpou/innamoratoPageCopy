import homeImgSrc from 'images/alfajor-inn.jpg';

export function loadHomePage() {
    const content = document.createElement('div');
    content.classList.add('content', 'home-page'); 

    const title = document.createElement('h1');
    title.textContent = 'Innamorato is the best ice cream place!';
    content.appendChild(title);

    const mainContent = document.createElement('div');
    const sectionImg = document.createElement('img');
    const subtitle = document.createElement('h2');
    const description = document.createElement('p');

    sectionImg.classList.add('background-img')
    sectionImg.src = homeImgSrc;
    subtitle.textContent = 'Discover Our Restaurant';
    description.textContent = 'Experience the finest ice creams with a blend of flavors that will leave you craving for more.';

    mainContent.appendChild(sectionImg);
    mainContent.appendChild(subtitle);
    mainContent.appendChild(description);
    content.appendChild(mainContent);

    return {
        content,
    }
}