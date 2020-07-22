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
                "tagline": "Your grandma loves them!",
                "modelYear": "2018",
                "thumbnail": "TBD",
                "colors": [
                    ["White Snow", "TBD", "white"],
                    ["Black Hole", "TBD2", "black"]
                ]
            },
            {
                "model": "Honda Pilot",
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