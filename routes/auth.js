const router = require("express").Router();
const bcryptjs = require("bcryptjs");
const User = require("../models/users");

const users = []; //local for now //remove later

router.get("/", (req, res) => {
  //remove later
  console.log(
    User.find({}).then((result) => {
      console.log(result);
    })
  );
  res.json(users); //local
});

router.post("/signup", (req, res) => {
  console.log(req.body); //remove later
  const { firstName, lastName, password, email } = req.body;
  User.findOne({ email: email }).then(async (result) => {
    //check if user already exists
    if (result) {
      res.status(409).send("user already exists with this email");
    } else {
      //if not
      try {
        const hashedPassword = await bcryptjs.hash(password, 10);
        console.log(hashedPassword); //remove later
        const user = new User({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: hashedPassword,
        });

        console.log(user); //remove later
        await user.save().then(() => {
          res.status(201).send();
        });
        users.push(user); // local
      } catch (err) {
        res.status(500).send();
        console.error(err); //remove later
      }
    }
  });
});

router.post("/login", async (req, res) => {
  const user = users.find((user) => (user.email = req.body.email));
  if (!user) {
    res.status(400).send("Can't find users");
  }
  try {
    if (await bcryptjs.compare(req.body.password, user.password)) {
      res.status(201).send("success");
    } else {
      res.send("not allowed");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;
