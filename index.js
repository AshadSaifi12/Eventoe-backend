const express = require('express');
const cors = require('cors')
require('./db/config');
const User = require('./db/users');
const company = require('./db/company');
const app = express();
app.use(express.json());
app.use(cors());


app.post('/register', async (req, res) => {
    if (req.body.name && req.body.email && req.body.contactNumber && req.body.workType && req.body.workStatus && req.body.workType && req.body.password) {
        let data = await User.findOne(req.body);

        if (data) {
            res.send({ result1: "userExist" })
        }
        else {
            let user = new User(req.body);
            let result = await user.save();
            result = result.toObject();
            delete result.password
            res.send({ result1: "UserValid", result });
        }
    }
    else {
        res.send({ result1: "fieldError" })
    }

})

app.post('/company', async (req, resp) => {
    function isValid_CIN_Number(str) {

        let regex = new RegExp(/^([LUu]{1})([0-9]{5})([A-Za-z]{2})([0-9]{4})([A-Za-z]{3})([0-9]{6})$/);

        if (str == null) {
            return "false";
        }


        if (regex.test(str) == true) {
            return "true";
        }
        else {
            return "false";

        }
    }
    if (req.body.cinNo && req.body.companyName && req.body.contactNumber  && req.body.password && req.body.companyType) {
        if (isValid_CIN_Number(req.body.cinNo)==='true') {
            let data1 = await company.findOne(req.body)
            if (data1) {
                resp.send({ result1: "userExist" });
            }
            else {
                let Company = new company(req.body);
                let result = await Company.save();
                result = result.toObject();
                delete result.password;
                resp.send({ result1: "UserValid", result });
            }
        }
        else {
            resp.send({ result1: "cinError" })
        }
    }

    else {
        resp.send({ result1: "fieldError" })
    }
})
app.post('/login/Employ', async (req, res) => {
    if (req.body.password && req.body.email) {
        let data = await User.findOne(req.body).select("-password");
        if (data) {
            res.send({ result: "userExist", data })
        }
        else {
            res.send({ result: "NoUser" })
        }

    }
    else {
        res.send({ result: "NoUser" })
    }
})
app.post('/login/Company', async (req, res) => {
    if (req.body.cinNo && req.body.password && req.body.email) {
        let data = await company.findOne(req.body).select("-password");
        if (data) {
            res.send({ result: "userExist", data })
        }
        else {
            res.send({ result: "NoCompany" })
        }

    }
    else {
        res.send({ result: "NoCompany" })
    }
})

app.listen(5000);
