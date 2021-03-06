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
            serviceTitle.classList.add(service.service.replaceAll(' ', ''));
            serviceTitle.innerHTML = `<span>${service.service}</span> <i class="fas fa-chevron-down"></i>`;
            newService.append(serviceTitle);
            if (service.types) {
                this.addServiceSubCat(service, newService);
            }   else if (service.cars) {
                this.addCars(service, newService);
            }   else {
                this.addContent(service, newService);
            }
            this.appendTo.append(newService);
        }
    }
    addServiceSubCat = (service, appendTo) => {
        for (let type of service.types) {
            const typeContainer = document.createElement('div');
            typeContainer.classList.add('type-container');
            typeContainer.classList.add(type.name.toLowerCase());
            const newType = document.createElement('h4');
            newType.innerHTML = `<span>${type.name}</span> <i class="fas fa-chevron-down"></i>`;
            typeContainer.append(newType);
            this.addCars(type, typeContainer);
            appendTo.append(typeContainer);
        }
    }
    addCars = (items, appendTo) => {
        let cars = [];
        for (let car of items.cars) {
            const newCar = document.createElement('div');
            newCar.classList.add('car');
            const carName = document.createElement('h5');
            carName.innerText = car.name;
            const carWrap = document.createElement('h6');
            carWrap.innerText = car.wrapType;
            const carDescription = document.createElement('p');
            carDescription.innerText = 'car.description';
            newCar.append(carName, carWrap, carDescription);
            appendTo.append(newCar);
            cars.push(newCar);
        }
        this.addCarImages(items, appendTo, cars);
    }
    addCarImages = (items, listenTo, appendTo) => {
        listenTo.addEventListener('click', () => {
            if (appendTo[0].childNodes.length <= 3) {
                for (let i = 0; i < appendTo.length; i++) {
                    for (let image of items.cars[i].images) {
                        const carImage = document.createElement('img');
                        carImage.setAttribute('src', image);
                        appendTo[i].append(carImage);
                    }
                };
            };
        });
    };
    addContent = (item, appendTo) => {
        const serviceContent = document.createElement('div');
        serviceContent.classList.add('service-content');
        const headerImg = document.createElement('img');
        headerImg.classList.add('service-header-img');
        headerImg.setAttribute('src', item.mainImg);
        const serviceDescription = document.createElement('h4');
        serviceDescription.classList.add('service-description');
        serviceDescription.innerText = item.description;
        serviceContent.append(headerImg, serviceDescription);
        if (item.images) {
            for (let image of item.images) {
                const newImage = document.createElement('img');
                newImage.classList.add('service-image');
                newImage.setAttribute('src', image);
                serviceContent.append(newImage);
            }
        }   else {
            const newImage = document.createElement('img');
            newImage.classList.add('sercive-image');
            newImage.setAttribute('src', item.footerImg);
            serviceContent.append(newImage);
        }
        appendTo.append(serviceContent);
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
        if (link.classList.contains('ColorChangeWraps')) {
            for (let lnk of colorChangeLinks) {
                lnk.classList.toggle('show-links');
            }
        }   else {
            link.parentElement.classList.toggle('show-content');
        }
    })
};

for (let type of colorChangeTypes) {
    type.addEventListener('click', () => {
        const currentType = type.innerText.toLowerCase();
        for (let car of allCars) {
            if (car.parentElement.classList.contains(currentType)) {
                car.classList.toggle('show-content');
            }
        }
    });
};