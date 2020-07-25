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
                "detailKey": "altima2018",
                "tagline": "Your grandma loves them!",
                "modelYear": "2018",
                "thumbnail": "TBD",
                "colors": [
                    ["White Snow", "TBD", "white"],
                    ["Black Hole", "TBD2", "black"]
                ]
            },
            {
                "model": "Nissan Sentra",
                "detailKey": "sentra2019",
                "tagline": "Best for your teens",
                "modelYear": "2019",
                "thumbnail": "TBD",
                "colors": [
                    ["Red Fury", "TBD", "red"],
                    ["White Fluff", "TBD2", "white"],
                    ["Baby Blue", "TBD3", "blue"]
                ]
            },
            {
                "model": "Honda Pilot",
                "detailKey": "pilot2017",
                "tagline": "For the chubby man.",
                "modelYear": "2017",
                "thumbnail": "TBD",
                "colors": [
                    ["Silverback", "TBD", "silver"],
                    ["Cherry Red", "TBD2", "red"]
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