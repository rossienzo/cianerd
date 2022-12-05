const { Router } = require("express");
const { insert } = require("../config/db");
const router = Router();
const Client = require("../model/Client"); 

router.get('/', (req, res) => {
    res.render("../views/index", { title: "Home" });
});

router.get('/contato', (req, res) => {

    res.render("../views/contato", { title: "Contato" });
});

router.get('/contato/:alertType', (req, res) => {

    res.render("../views/contato", { title: "Contato" , alertType: req.params.alertType});
});

router.post('/contato', (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    const client = new Client(1, name, email, phone, subject, message);
    
    const alertType = insert(client) ? "success" : "error"; 

    res.status(200).redirect("/contato/" + alertType);
});

module.exports = router;