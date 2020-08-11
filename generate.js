module.exports = function() {
    var faker = require("faker");
    var _ = require("lodash");

    return {
        mailingList: _.times(10, function(n) {
            return {
                "customerName": faker.name.findName(),
                "email": faker.internet.email(),
                "budget": faker.random.number(),
                "phone": faker.phone.phoneNumber(),
                "id": n
            }
        }),
        vehicles: [
            {
                "model": "Nissan Altima",
                "msrp": 29950,
                "detailKey": "altima2018",
                "tagline": "Your grandma loves them!",
                "modelYear": "2018",
                "thumbnail": "/images/vehicles/altima-thumbnail.jpg",
                "carouselImage": "/images/vehicles/altima.jpg",
                "colors": [
                    ["White Snow", "TBD", "white"],
                    ["Black Hole", "TBD2", "black"]
                ],
                "options": {
                    "engines":[
                        {
                            "nmpg":27.2,
                            "name":"Little One"
                        },
                        {
                            "nmpg":12.3,
                            "name":"Big One"
                        }
                    ]
                },
                "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis. Pellentesque habitant morbi tristique senectus et netus. In mollis nunc sed id. Mi proin sed libero enim sed faucibus turpis. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Elit pellentesque habitant morbi tristique. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Scelerisque fermentum dui faucibus in ornare quam viverra orci. Commodo viverra maecenas accumsan lacus."
            },
            {
                "model": "Nissan Sentra",
                "msrp": 17990,
                "detailKey": "sentra2019",
                "tagline": "Best for your teens",
                "modelYear": "2019",
                "thumbnail": "/images/vehicles/sentra-thumbnail.jpg",
                "carouselImage": "/images/vehicles/sentra.jpg",
                "colors": [
                    ["Red Fury", "TBD", "red"],
                    ["White Fluff", "TBD2", "white"],
                    ["Baby Blue", "TBD3", "blue"]
                ],
                "options": {
                    "engines":[
                        {
                            "nmpg":25.6,
                            "name":"Inline 4"
                        },
                        {
                            "nmpg":16.9,
                            "name":"Big v6"
                        }
                    ]
                },
                "description" : "Eu lobortis elementum nibh tellus molestie nunc non blandit. Tempus imperdiet nulla malesuada pellentesque elit eget gravida. Orci phasellus egestas tellus rutrum. Viverra vitae congue eu consequat ac felis donec et odio. Imperdiet proin fermentum leo vel. Tempor nec feugiat nisl pretium fusce id velit. Dignissim sodales ut eu sem integer vitae justo. Aenean pharetra magna ac placerat vestibulum lectus. Et netus et malesuada fames ac. Bibendum ut tristique et egestas quis ipsum suspendisse. Facilisis leo vel fringilla est ullamcorper eget. Magna etiam tempor orci eu lobortis elementum. Vitae justo eget magna fermentum iaculis eu. Et molestie ac feugiat sed lectus vestibulum mattis. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in. Pellentesque elit ullamcorper dignissim cras tincidunt. Posuere ac ut consequat semper viverra."
            },
            {
                "model": "Honda Pilot",
                "msrp": 39490,
                "detailKey": "pilot2017",
                "tagline": "For the chubby man.",
                "modelYear": "2017",
                "thumbnail": "/images/vehicles/pilot-thumbnail.jpg",
                "carouselImage": "/images/vehicles/pilot.jpg",
                "colors": [
                    ["Silverback", "TBD", "silver"],
                    ["Cherry Red", "TBD2", "red"]
                ],
                "options": {
                    "engines":[
                        {
                            "nmpg":19.3,
                            "name":"Wimpy 200"
                        },
                        {
                            "nmpg":14.6,
                            "name":"Powerful 350"
                        }
                    ]
                },
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis magna etiam tempor orci. Ultricies tristique nulla aliquet enim tortor at auctor urna. Vel turpis nunc eget lorem dolor. Porttitor eget dolor morbi non arcu risus. Nisi quis eleifend quam adipiscing vitae proin sagittis. Sagittis id consectetur purus ut faucibus. Dignissim cras tincidunt lobortis feugiat vivamus at. Non nisi est sit amet facilisis magna etiam tempor. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit."
            },
            {
                "model": "John Deere Compact",
                "msrp": 41250,
                "detailKey": "johnDeere2019",
                "tagline": "For the rural stud.",
                "modelYear": "2019",
                "thumbnail": "/images/vehicles/johndeere-thumbnail.jpg",
                "carouselImage": "/images/vehicles/johndeere.jpg",
                "colors": [
                    ["Country Green", "TBD", "green"],
                    ["Ugly Yellow", "TBD3", "yellow"],
                    ["Blood Red", "TBD2", "red"]
                ],
                "options": {
                    "engines":[
                        {
                            "nmpg":13.3,
                            "name":"Baby Block"
                        },
                        {
                            "nmpg":9.6,
                            "name":"Big Block"
                        }
                    ]
                },
                "description": "Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Vestibulum rhoncus est pellentesque elit ullamcorper. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Ultrices tincidunt arcu non sodales neque. Ut etiam sit amet nisl purus in mollis nunc sed. Velit sed ullamcorper morbi tincidunt ornare. Sit amet consectetur adipiscing elit pellentesque habitant. Faucibus ornare suspendisse sed nisi lacus sed. Rhoncus mattis rhoncus urna neque."
            }
        ],
        dealerships: _.times(100, function(n) {
            return {
                id: n,
                dealershipName: faker.name.findName() + "'s Flying Cars",
                address: faker.address.streetAddress("####"),
                city: faker.address.city(),
                state: faker.address.state(),
                zip: faker.address.zipCode(),
                phone: faker.phone.phoneNumber()
            }
        })
    }

}