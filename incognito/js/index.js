// COMPANY INFO
const companyLogo = '/assets/company-logo.PNG';

const menuItems = [
    {
        name: 'Home',
        href: '',
        important: false
    },
    {
        name: 'Services',
        href: '',
        subLinks: [
            {
                service: 'Color Change Wraps',
                href: '',
                types: [
                    {
                        name: 'Gloss',
                        cars: [
                            {
                                name: 'Volkswagen GTI',
                                wrapType: 'Gloss Rising Sun',
                                description: `Whenever we take part in one of Avery's launch programs to release new vinyl, we are thrilled to be the first to debut their new colors to the world.  This vinyl is part of their ColorFlow series and it previously was only available in a satin finish.  The gloss on this shift film brings out all the colors in such a magnificent way that while we were installing this we couldn't wait to get it outside to see what the sun would reveal.  We were incredibly pleased with the result.`,
                                images: [
                                    '/assets/cars/volkswagen-gti/image1.PNG',
                                    '/assets/cars/volkswagen-gti/image2.PNG', 
                                    '/assets/cars/volkswagen-gti/image3.PNG', 
                                    '/assets/cars/volkswagen-gti/image4.PNG',
                                ]
                            },
                            {
                                name: 'Mercedes CL 550',
                                wrapType: 'Phantom Black',
                                description: `As the name indicates, this KPMF color was based on the Rolls Royce Phantom Black paint.  It has a fine amount of multi colored flake that isn’t over powering and is very classy, just what this CL needed.  Las Vegas is ostentatious, but not every car needs to be.`,
                                images: [
                                    '/assets/cars/mercedes-cl-550/image1.PNG',
                                    '/assets/cars/mercedes-cl-550/image2.PNG', 
                                    '/assets/cars/mercedes-cl-550/image3.PNG', 
                                ]
                            },
                            {
                                name: 'McLaren 720S',
                                wrapType: 'Plum Explosion',
                                description: `This was an undertaking.  We took this silver McLaren and wrapped it in 3M Plum Explosion, which was, by comparison, the easy part.  Then we set about wrapping all the gloss charcoal areas in carbon fiber.  This included the headlight surrounds, inner door vents, rear valance, and front splitter.  The end result was a happy customer and that’s the most important thing.`,
                                images: [
                                    '/assets/cars/mclaren-720s/image1.PNG',
                                    '/assets/cars/mclaren-720s/image2.PNG', 
                                    '/assets/cars/mclaren-720s/image3.PNG', 
                                    '/assets/cars/mclaren-720s/image4.PNG',
                                ]
                            }
                        ]
                    },
                    {
                        name: 'Satin',
                        cars: [
                            {
                                name: 'Ford Raptor',
                                wrapType: 'Satin Black',
                                description: null,
                                images: [
                                    '/assets/cars/ford-raptor/image1.PNG',
                                    '/assets/cars/ford-raptor/image2.PNG', 
                                    '/assets/cars/ford-raptor/image3.PNG', 
                                    '/assets/cars/ford-raptor/image4.PNG',
                                ]
                            },
                            {
                                name: 'Mercedes S550',
                                wrapType: 'Matte Charcoal Metallic',
                                description: `Looking back on our wraps over the years, it seems that Orafol’s Matte Charcoal and Graphite have stood far above the rest in regards to the most used color here at Incognito Wraps.  The depth of the metal flake and the smooth satin finish just look too good to pass up.  We also did a chrome delete and interior package on this one giving it the perfect finishing touches.`,
                                images: [
                                    '/assets/cars/mercedes-s550/image1.PNG',
                                    '/assets/cars/mercedes-s550/image2.PNG', 
                                    '/assets/cars/mercedes-s550/image3.PNG', 
                                ]
                            }
                        ]
                    },
                    {
                        name: 'Matte',
                        cars: [
                            {
                                name: 'Jeep Wrangler',
                                wrapType: 'Matte Black',
                                description: null,
                                images: [
                                    '/assets/cars/jeep-wrangler/image1.PNG',
                                    '/assets/cars/jeep-wrangler/image2.PNG', 
                                    '/assets/cars/jeep-wrangler/image3.PNG', 
                                    '/assets/cars/jeep-wrangler/image4.PNG',
                                ]
                            },
                            {
                                name: 'Tesla Model X',
                                wrapType: 'Matte Russet Red',
                                description:`We are so infatuated with KPMF’s series of matte aluminum series of films and our customers seeking vehicle wraps in Las Vegas agree.  This film gives an appearance of a matte chrome film for a fraction of the cost.  The amount of movement held within the color is something to behold and needs to be seen in person.`,
                                images: [
                                    '/assets/cars/tesla-model-x/image1.PNG',
                                    '/assets/cars/tesla-model-x/image2.PNG', 
                                    '/assets/cars/tesla-model-x/image3.PNG', 
                                    '/assets/cars/tesla-model-x/image4.PNG',
                                ]
                            }
                        ]
                    },
                    {
                        name: 'Chrome',
                        cars: [
                            {
                                name: 'Ferrari 488 Spyder',
                                wrapType: 'Red Chrome',
                                description: `There are days when we can barely contain our excitement and really, that’s what our Wrap of the Month feature is all about.  Cars and projects that we are just overjoyed about.  This one was a great car with a great material and adding the rims was a big cherry on top.  Chrome can be very difficult to install, but we love a challenge and when it yields these kind of results, the effort was worth it.`,
                                images: [
                                    '/assets/cars/ferrari-488-spyder/image1.PNG',
                                    '/assets/cars/ferrari-488-spyder/image2.PNG', 
                                    '/assets/cars/ferrari-488-spyder/image3.PNG', 
                                    '/assets/cars/ferrari-488-spyder/image4.PNG',
                                ]
                            },
                            {
                                name: 'Mercedes E63',
                                wrapType: 'Green Candy Chrome',
                                description: `We love custom chrome.  It is by far, our favorite medium to play with.  By adding custom layers of color, flake and finish, we can give our customers a completely unique wrap that no one can copy.  For this one, we built this custom candy chrome and also wrapped the wheels and gave it a chrome delete in matte white with a blue pearl.  Magnificent.`,
                                images: [
                                    '/assets/cars/mercedes-e63/image1.PNG',
                                    '/assets/cars/mercedes-e63/image2.PNG', 
                                    '/assets/cars/mercedes-e63/image3.PNG', 
                                    '/assets/cars/mercedes-e63/image4.PNG',
                                ]
                            }
                        ]
                    },
                    {
                        name: 'Design',
                        cars: [
                            {
                                name: 'McLaren 650S',
                                wrapType: 'Winter Camo with Orange Accents',
                                description: `There is just something about McLaren styling.  Yes, it’s a supercar and how could you go wrong, but it’s something more than that.  Wrapping this car just has endless possibilities.  The lines flow wonderfully and a variety of materials and finishes enhance those things.  There are plenty of cars in this price range that don’t look this good and now there are only a handful of 650s’ that look this good.`,
                                images: [
                                    '/assets/cars/mclaren-650s/image1.PNG',
                                    '/assets/cars/mclaren-650s/image2.PNG', 
                                    '/assets/cars/mclaren-650s/image3.PNG', 
                                    '/assets/cars/mclaren-650s/image4.PNG',
                                ]
                            },
                            {
                                name: 'Audi A6',
                                wrapType: 'Mister Tony',
                                description: `A fashion designer here in Las Vegas came to us with an interesting project.  He wanted his brand new Audi to match some of the fabric he designs his clothes with.  Most wrap shops told him this was impossible, but we like a challenge and created this rolling piece of art.`,
                                images: [
                                    '/assets/cars/audi-a6/image1.PNG',
                                    '/assets/cars/audi-a6/image2.PNG', 
                                    '/assets/cars/audi-a6/image3.PNG', 
                                    '/assets/cars/audi-a6/image4.PNG',
                                ]
                            }
                        ]
                    },
                    {
                        name: 'Textures',
                        cars: [
                            {
                                name: 'Ferrari 488 Spyder',
                                wrapType: 'Brushed Aluminum Top',
                                description: `With the clientele we have, we have some unique opportunities when it comes to accenting already beautiful cars to make them stand out from the crowd.  In this case, this 488 Spyder already stands out on it’s own, but that doesn’t mean it can’t be elevated even higher.  The Brushed Aluminum from Avery really sets off the Blue and gives it a stunning, yet elegant look.`,
                                images: [
                                    '/assets/cars/ferrari-488-spyder-2/image1.PNG',
                                    '/assets/cars/ferrari-488-spyder-2/image2.PNG', 
                                    '/assets/cars/ferrari-488-spyder-2/image3.PNG', 
                                    '/assets/cars/ferrari-488-spyder-2/image4.PNG',
                                ]
                            },
                            {
                                name: 'Chevrolet Corvette Z06',
                                wrapType: 'C7 Skull',
                                description: `Not everything has to be a full wrap.  We applied our take to this popular C7 Symbol with great results.  The Carbon Fiber/Matte Black/Yellow combo ended up being an excellent pairing.`,
                                images: [
                                    '/assets/cars/chevrolet-corvette-z06/image1.PNG',
                                    '/assets/cars/chevrolet-corvette-z06/image2.PNG', 
                                    '/assets/cars/chevrolet-corvette-z06/image3.PNG', 
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                service: 'Rim & Caliper Wraps',
                href: ''
            },
            {
                service: 'Chrome Delete',
                href: ''
            },
            {
                service: 'Interior Wraps',
                href: ''
            },
            {
                service: 'Commercial',
                href: ''
            },
            {
                service: 'Clear Film',
                href: ''
            },
            {
                service: 'Motorcycles',
                href: ''
            },
            {
                service: 'Window Tint',
                href: ''
            }
        ],
        important: false
    },
    {
        name: 'Showroom',
        href: '',
        subLinks: [
            {
                name: 'By finish',
                href: ''
            },
            {
                name: 'By make',
                href: ''
            }
        ],
        important: false
    },
    {
        name: 'Store',
        href: '',
        important: false
    },
    {
        name: 'Video',
        href: '',
        important: false
    },
    {
        name: 'Book a time',
        href: '',
        important: true
    },
    {
        name: 'Contact',
        href: '',
        important: true
    }
];

const wrapOfTheMonth = {
    name: 'McLaren 650S',
    img: '/assets/wrap-of-the-month.PNG',
    wrapType: 'Winter Camo'
};
