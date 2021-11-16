// SET NAV INFORMATION
const navRight = document.querySelector('.nav-right');
const navLinks = document.querySelector('.nav-links');
const logoImg = document.querySelector('.company-logo');
const hamburgerMenu = document.querySelector('.hamburger-menu');
logoImg.setAttribute('src', companyLogo);

const createMenuLinks = (items, appendTo) => {
    for (let item of items) {
        const newLink = document.createElement('a');
        newLink.classList.add('menu-link');
        if (item.subLinks) {
            newLink.innerHTML = `<span>${item.name}</span> <i class="fas fa-chevron-down"></i>`
        }   else {
            newLink.innerText = item.name;
        }
        if (item.important === true) {
            newLink.classList.add('main-link');
        };
        appendTo.append(newLink);
    };
};
createMenuLinks(menuItems, navLinks);

// MENU ICON CLICK

const toggleMenu = () => {
    navLinks.classList.toggle('open-menu');
    hamburgerMenu.classList.toggle('open-menu');
}

hamburgerMenu.addEventListener('click', toggleMenu);

// HEADER

const header = document.querySelector('header');
const headerTitle = document.querySelector('.header-content h1');
const headerDescription = document.querySelector('.header-content p')

const setHeaderInfo = (headerInfo, background, heading, description) => {
    background.style.backgroundImage = `url(${headerInfo.img})`;
    heading.innerText = headerInfo.name;
    description.innerText = headerInfo.wrapType;

};
setHeaderInfo(wrapOfTheMonth, header, headerTitle, headerDescription);

// SERVICES

const servicesSection = document.querySelector('.services');

class Services {
    constructor(services, appendTo) {
        this.services = services;
        this.appendTo = appendTo;
        
        this.applyService();
    }
    applyService = () => {
        const {subLinks} = this.services;
        for (let service of subLinks) {
            const newService = document.createElement('div');
            newService.classList.add('service-container');
            const serviceTitle = document.createElement('h3');
            serviceTitle.innerHTML = `<span>${service.service}</span> <i class="fas fa-chevron-down"></i>`;
            newService.append(serviceTitle);
            this.addServiceSubCat(service, newService);
            this.appendTo.append(newService);
        }
    }
    addServiceSubCat = (service, appendTo) => {
        if (service.types) {
            for (let type of service.types) {
                const typeContainer = document.createElement('div');
                typeContainer.classList.add('type-container');
                typeContainer.classList.add(type.name.toLowerCase());
                const newType = document.createElement('h4');
                newType.innerHTML = `<span>${type.name}</span> <i class="fas fa-chevron-down"></i>`;
                typeContainer.append(newType);
                this.addServiceDetails(type, typeContainer)
                appendTo.append(typeContainer);
            }
        }
    }
    addServiceDetails = (type, appendTo) => {
        const {cars} = type;
        for (let car of cars) {
            const newCar = document.createElement('div');
            newCar.classList.add('car');
            const carName = document.createElement('h5');
            carName.innerText = car.name;
            const carWrap = document.createElement('h6');
            carWrap.innerText = car.wrapType;
            const carDescription = document.createElement('p');
            carDescription.innerText = 'car.description';
            newCar.append(carName, carWrap, carDescription);
            for (let image of car.images) {
                const carImage = document.createElement('img');
                carImage.setAttribute('src', image);
                newCar.append(carImage);
            };
            appendTo.append(newCar);
        }
    }
};

const currentServices = menuItems.find(item => {
    return item.name === 'Services';
});

const createServices = new Services(currentServices, servicesSection);

// SERVICES EVENT LISTENERS

const serviceLinks = document.querySelectorAll('.service-container h3');
const colorChangeLinks = document.querySelectorAll('.type-container');
const colorChangeTypes = document.querySelectorAll('.type-container h4');
const allCars = document.querySelectorAll('.car');

for (let link of serviceLinks) {
    link.addEventListener('click', () => {
        console.log(link);
        for (let lnk of colorChangeLinks) {
            lnk.classList.toggle('show-links');
        }
    })
};

for (let type of colorChangeTypes) {
    type.addEventListener('click', () => {
        const currentType = type.innerText.toLowerCase();
        for (let car of allCars) {
            if (car.parentElement.classList.contains(currentType)) {
                car.classList.toggle('show-cars');
            }
        }
    });
};