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
                cars: [
                    {
                        name: 'Tesla Model S',
                        wrapType: 'Blue Raspberry Calipers',
                        description: `We are always striving to do something different and out of the ordinary.  Since we have done countless Teslas, this is a model that we generally push a little harder with.  We wrapped the Calipers, Front and Rear T Emblems and center caps in Gloss Blue Raspberry and did a full Chrome Delete in Satin Black with some hints of the Raw Carbon Fiber.`,
                        images: [
                            '/assets/cars/tesla-model-s/image1.PNG',
                            '/assets/cars/tesla-model-s/image2.PNG', 
                            '/assets/cars/tesla-model-s/image3.PNG', 
                        ]
                    },
                    {
                        name: 'Tesla Model X',
                        wrapType: 'Carbon Fiber Rims',
                        description: `We are in the business of making cars stand out in a crowd.  Most Tesla owners are quite found of the Chrome Delete, but there are now so many blacked out Teslas, that something else must be done.  On this Model X, we used Vvivid's Carbon Fiber which has a very deep and almost lenticular effect which makes the weave looks like the deepest portion is moving slower than the upper most.  It's something that can't really be captured in still shots.  Another popular way to stand out amongst the sea of Teslas, is add a pop color.  In this case, the Orange was added to the Rim Ring, Calipers, T emblems and center caps.`,
                        images: [
                            '/assets/cars/tesla-model-x-r&c/image1.PNG',
                            '/assets/cars/tesla-model-x-r&c/image2.PNG', 
                            '/assets/cars/tesla-model-x-r&c/image3.PNG', 
                        ]
                    },
                    {
                        name: 'FRS',
                        wrapType: 'Vengeance Red',
                        description: `It’s always important to look at the whole package.  Take in the subtle lines on the vehicle and add the accents where they will seem to be natural.  Read the mood of each vehicle and suggest which colors will play on the aggressiveness that comes off the blank canvas in front of you.  We used KPMF Vengeance Red and Avery’s Satin Basalt to give this FRS just the right amount of contrast.`,
                        images: [
                            '/assets/cars/frs/image1.PNG',
                            '/assets/cars/frs/image2.PNG', 
                            '/assets/cars/frs/image3.PNG', 
                        ]
                    }
                ]
            },
            {
                service: 'Chrome Delete',
                cars: [
                    {
                        name: 'Tesla Model X',
                        wrapType: 'Carbon Chrome Delete with Yellow Accents',
                        description: `This Model X got the works without getting a color change wrap.  We offer so many services that we can still completely change the whole look of a vehicle while still keeping the factory paint visible.  We wrapped all the lower textured plastics in a carbon fiber and did the chrome delete in a combination of yellow, satin black and carbon.  We also tinted the lights and wrapped the rims and calipers.`,
                        images: [
                            '/assets/cars/tesla-model-x-chrome/image1.PNG',
                            '/assets/cars/tesla-model-x-chrome/image2.PNG', 
                            '/assets/cars/tesla-model-x-chrome/image3.PNG', 
                            '/assets/cars/tesla-model-x-chrome/image4.PNG', 
                        ]
                    },
                    {
                        name: 'Tesla Model S',
                        wrapType: 'Black Brushed with Bronze Chrome Delete',
                        description: `We love stepping outside the norms and crafting a customer’s unique vision.  We have done countless chrome deletes and even more wraps on Tesla’s line of cars, but the chrome deletes usually stick to a variation of black.  Flipping this and doing the car in Black Brushed with the accents in a Gloss Bronze Metallic is so striking.  We also added the same treatment to the rims to complete the package.`,
                        images: [
                            '/assets/cars/tesla-model-s-chrome/image1.PNG',
                            '/assets/cars/tesla-model-s-chrome/image2.PNG', 
                            '/assets/cars/tesla-model-s-chrome/image3.PNG', 
                            '/assets/cars/tesla-model-s-chrome/image4.PNG', 
                        ]
                    },
                    {
                        name: 'Jeep Grand Cherokee SRT',
                        wrapType: 'Gloss Black Chrome Delete',
                        description: `The chrome delete is always an aggressive accent.  Chrome trim tends to make some vehicles look more luxury than they should.  This SRT Jeep needed to have it blacked out.  The transformation it underwent with just small amounts of vinyl is very impressive.`,
                        images: [
                            '/assets/cars/jeep-grand-cherokee-srt/image1.PNG',
                            '/assets/cars/jeep-grand-cherokee-srt/image2.PNG', 
                            '/assets/cars/jeep-grand-cherokee-srt/image3.PNG', 
                            '/assets/cars/jeep-grand-cherokee-srt/image4.PNG', 
                        ]
                    }
                ]
            },
            {
                service: 'Interior Wraps',
                cars: [
                    {
                        name: 'Ford Mustang Convertible',
                        wrapType: 'Gold Rush Purple',
                        description: `This car was all about the details.  We created a custom color for this customer and then added accents of KPMF Matte Iced Amethyst to give this Mustang a well rounded look.  We wrapped the rims, exterior and interior on this one. `,
                        images: [
                            '/assets/cars/ford-mustang-convertible/image1.PNG',
                            '/assets/cars/ford-mustang-convertible/image2.PNG', 
                            '/assets/cars/ford-mustang-convertible/image3.PNG', 
                            '/assets/cars/ford-mustang-convertible/image4.PNG', 
                        ]
                    },
                    {
                        name: 'Tesla Model S',
                        wrapType: 'Custom Mint',
                        description: `We sat down with this customer and created a custom variation on Orafol’s Matte Mint by adding a gloss gold flake to the top.  We didn’t stop there however, we then wrapped the rims, calipers, interior, full exterior and chrome delete.  We even tinted the windows with our Dub IR film and coated the front end with Xpel Paint Protection Film for added protection on their long drives.`,
                        images: [
                            '/assets/cars/tesla-model-s-interior/image1.PNG',
                            '/assets/cars/tesla-model-s-interior/image2.PNG', 
                            '/assets/cars/tesla-model-s-interior/image3.PNG', 
                            '/assets/cars/tesla-model-s-interior/image4.PNG', 
                            '/assets/cars/tesla-model-s-interior/image5.PNG', 
                        ]
                    },
                    {
                        name: 'Mercedes SL 500',
                        wrapType: 'Custome Wood Grain',
                        description: `When doing a custom interior wrap, the options are pretty endless.  Granted, there are popular choices.  This wood grain was slightly warmer in tone than the actual wood grain that Mercedes offers, but in our opinion, it accentuates the leather and surrounding interior so much better.`,
                        images: [
                            '/assets/cars/mercedes-sl-500/image1.PNG',
                            '/assets/cars/mercedes-sl-500/image2.PNG', 
                            '/assets/cars/mercedes-sl-500/image3.PNG', 
                            '/assets/cars/mercedes-sl-500/image4.PNG', 
                        ]
                    }
                ]
            },
            {
                service: 'Commercial',
                cars: [
                    {
                        name: 'Freightliner FL60',
                        wrapType: 'Satin Black with Jambs for Merrick Horses',
                        description: `When the truck runs amazingly and the interior is holding up beautifully, it’s time to make the outside just as gorgeous.  Satin Black is a very popular color here in Las Vegas for Vehicle Wraps.  We took this white late Nineties Freightliner and wrapped all the exterior in this amazingly smooth vinyl, wrapped the door jambs and added rock chip protection to the nose and front bumper to keep it looking great for a good long time.`,
                        images: [
                            '/assets/cars/freightliner-fl60/image1.PNG',
                            '/assets/cars/freightliner-fl60/image2.PNG', 
                            '/assets/cars/freightliner-fl60/image3.PNG', 
                        ]
                    },
                    {
                        name: 'F1 Car',
                        wrapType: 'Dream Racing',
                        description: null,
                        images: [
                            '/assets/cars/f1-car/image1.PNG',
                            '/assets/cars/f1-car/image2.PNG', 
                            '/assets/cars/f1-car/image3.PNG', 
                            '/assets/cars/f1-car/image4.PNG', 
                        ]
                    },
                    {
                        name: 'Toyota 4 Runner',
                        wrapType: 'Banks St Guns',
                        description: `The design of this wrap was done by another artist, but Incognito Wraps stepped up to complete the vision.  The end result is a very mean looking truck.  The attention to detail is what makes this wrap different than the rest of the commercial vehicles you will see around town.  We removed all the parts, including the fender flares, handles, mirrors, front bumper, badges, roof rack and spoiler.  We did this to wrap them independently and give the cleanest finish possible.`,
                        images: [
                            '/assets/cars/toyota-4-runner/image1.PNG',
                            '/assets/cars/toyota-4-runner/image2.PNG', 
                            '/assets/cars/toyota-4-runner/image3.PNG', 
                            '/assets/cars/toyota-4-runner/image4.PNG', 
                        ]
                    }
                ]
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
