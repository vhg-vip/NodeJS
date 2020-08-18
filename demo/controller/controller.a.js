const service = require('../service/service.a');

module.exports = {
    themHS,
}

function themHS(req, res){
    // var name = req.params.name;
    // var age = req.params.age;

    var name = "Adsada";
    var age = 13;
    res.render('home', {
        name: name,
        age: age
    })

    // service.themHS(name, age);
    // res.send('name age');
}