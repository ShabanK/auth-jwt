const router = require("express").Router();
const bcryptjs = require("bcryptjs");

const users = [];

router.get("/", (req, res) => {
  res.json(users);
});

router.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    const { firstName, lastName, password, email } = req.body;
    //check if user already exists

    //if not

    const hashedPassword = await bcryptjs.hash(password, 10);

    console.log(hashedPassword);

    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPassword,
    };

    users.push(user);
    res.status(201).send();
  } catch (err) {
    res.status(500).send();
    console.error(err);
  }
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
