import './contact-style.css'; 
import dalvian from '../../dist/images/dalvian-inn.png';
import phoneSrc from  '../../dist/images/phone.svg';
import addressSrc from  '../../dist/images/address.svg';

export function loadContactPage() {
    const content = document.createElement('div');
    content.classList.add('content', 'contact-content');
    const numContainer = document.createElement('div');
    const num = document.createElement('p');
    const addressContainer = document.createElement('div');
    const address = document.createElement('p');
    const dalvianImg = document.createElement('img');
    const phoneImg = document.createElement('img');
    const addressImg = document.createElement('img');

    phoneImg.src = phoneSrc;
    addressImg.src = addressSrc;
    numContainer.appendChild(phoneImg);
    addressContainer.appendChild(addressImg);
    num.textContent = '261 466 7350';
    numContainer.classList.add('phone-num');
    address.textContent = 'Mendoza, Argentina';
    addressContainer.classList.add('address')
    dalvianImg.src = dalvian;

    numContainer.appendChild(num);
    addressContainer.appendChild(address);
    content.appendChild(numContainer);
    content.appendChild(addressContainer);
    content.appendChild(dalvianImg);

    return { content,
    } 
}
