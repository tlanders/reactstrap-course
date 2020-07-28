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
                ]
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
                ]
            },
            {
                "model": "Honda Pilot",
                "msrp": 37490,
                "detailKey": "pilot2017",
                "tagline": "For the chubby man.",
                "modelYear": "2017",
                "thumbnail": "/images/vehicles/pilot-thumbnail.jpg",
                "carouselImage": "/images/vehicles/pilot.jpg",
                "colors": [
                    ["Silverback", "TBD", "silver"],
                    ["Cherry Red", "TBD2", "red"]
                ]
            },
            {
                "model": "John Deere Compact",
                "msrp": 37490,
                "detailKey": "johnDeere2019",
                "tagline": "For the rural stud.",
                "modelYear": "2019",
                "thumbnail": "/images/vehicles/johndeere-thumbnail.jpg",
                "carouselImage": "/images/vehicles/johndeere.jpg",
                "colors": [
                    ["Country Green", "TBD", "green"],
                    ["Ugly Yellow", "TBD3", "yellow"],
                    ["Blood Red", "TBD2", "red"]
                ]
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