import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fileUpload from "express-fileupload";
import { MongoClient, ObjectId } from "mongodb";

const app = express();
const hostname = "localhost";
const port = 8080;

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(cors());

app.use(
  fileUpload({
    limits: {
      fileSize: 10000000,
    },
    abortOnLimit: true,
  })
);

// CONNECT DATABASE
const client = new MongoClient(
  "mongodb+srv://soulshine:soulshine@clustersoulshine.e0dfhqi.mongodb.net/?retryWrites=true&w=majority"
);
client.connect();
const database = client.db("SoulshineData");

// GET IMAGES
app.get("/images/:id", (req, res) => {
  const id = req.params["id"];
  res.sendFile(__dirname + "/images/" + id);
});
// GET PRODUCT LIST
app.get("/product", async (req, res) => {
  try {
    const result = await database.collection("Soulshine_Products").find({}).toArray();
    const documentsWithIdAsString = result.map((doc) => ({
      img: doc.img,
      imgHover: doc.imgHover,
      productName: doc.productName,
      orgPrice: doc.orgPrice,
      salePrice: doc.salePrice,
      summary: doc.summary,
      _id: doc._id.toString(),
    }));
    res.send(documentsWithIdAsString);
  } catch (error) {
    res.sendStatus(403);
  }
});
// GET PRODUCT DETAIL
app.get("/product/:id", async (req, res) => {
  var o_id = new ObjectId(req.params["id"]);
  const result = await database.collection("Soulshine_Products").find({ _id: o_id }).toArray();
  const documentsWithIdAsString = result.map((doc) => ({
    ...doc,
    _id: doc._id.toString(),
  }));
  res.send(documentsWithIdAsString[0]);
});
// CREATE PRODUCT
app.post("/product", async (req, res) => {
  await database.collection("Soulshine_Products").insertOne(req.body);
  res.send({
    msg: "OK",
  });
});
// UPDATE PRODUCT
app.put("/product", async (req, res) => {
  await database.collection("Soulshine_Products").updateOne(
    { _id: new ObjectId(req.body._id) },
    {
      $set: {
        img: req.body.img,
        imgHover: req.body.imgHover,
        imgList: req.body.imgList,
        productName: req.body.productName,
        orgPrice: req.body.orgPrice,
        salePrice: req.body.salePrice,
        description: req.body.description,
        summary: req.body.summary,
        howToUse: req.body.howToUse,
        howToFeel: req.body.howToFeel,
        ingredients: req.body.ingredients,
      },
    }
  );
  var o_id = new ObjectId(req.body._id);
  const result = await database.collection("Soulshine_Products").find({ _id: o_id }).toArray();
  res.send({
    msg: "OK",
  });
});
// DELETE PRODUCT
app.delete("/product/:id", async (req, res) => {
  var o_id = new ObjectId(req.params["id"]);
  await database.collection("Soulshine_Products").deleteOne({ _id: o_id });
  res.sendStatus(200);
});
// SIGN UP
app.post("/sign-up", async (req, res) => {
  const email = req.body.email;
  const checkEmail = await database.collection("Soulshine_Users").find({ email: email }).toArray();
  if (checkEmail.length > 0) {
    return res.status(200).json({ result: false, msg: "The email already exists!" });
  } else {
    await database.collection("Soulshine_Users").insertOne(req.body);
    res.status(200).json({ result: true, msg: "Account registration successful!" });
  }
});
// LOGIN
app.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const checkEmail = await database.collection("Soulshine_Users").find({ email: email }).toArray();
  if (checkEmail.length === 0 || checkEmail[0].password !== password) {
    return res.status(200).json({ result: false, msg: "Invalid account or password!" });
  } else {
    const { password, ...userInfo } = checkEmail[0];
    res.status(200).json({ result: true, msg: "Login successful!", userInfo: userInfo });
  }
});
// CREATE ORDER
app.post("/order", async (req, res) => {
  let subTotal = 0;
  req.body.cart.forEach((item) => {
    const itemPrice = item.salePrice || item.orgPrice;
    subTotal += itemPrice * item.quantity;
  });
  const data = { ...req.body, status: "process", subTotal: subTotal };
  await database.collection("Soulshine_Orders").insertOne(data);
  res.sendStatus(200);
});
// GET ORDER LIST
app.get("/order", async (req, res) => {
  const result = await database.collection("Soulshine_Orders").find({}).toArray();
  const documentsWithIdAsString = result.map((item) => {
    return {
      _id: item._id.toString(),
      email: item.email,
      fullname: item.fullname,
      address: item.address,
      phone: item.phone,
      note: item.note,
      shippingMethod: item.shippingMethod,
      paymentMethod: item.paymentMethod,
      status: item.status,
      cart: item.cart,
    };
  });
  res.send(documentsWithIdAsString);
});
// GET ORDER DETAIL
app.get("/order/:id", async (req, res) => {
  var o_id = new ObjectId(req.params["id"]);
  const result = await database.collection("Soulshine_Orders").find({ _id: o_id }).toArray();
  const documentsWithIdAsString = result.map((doc) => ({
    ...doc,
    _id: doc._id.toString(),
  }));
  res.send(documentsWithIdAsString[0]);
});
// UPDATE ORDER STATUS
app.put("/order", async (req, res) => {
  await database.collection("Soulshine_Orders").updateOne(
    { _id: new ObjectId(req.body._id) },
    {
      $set: {
        status: req.body.status,
      },
    }
  );
  var o_id = new ObjectId(req.body._id);
  const result = await database.collection("Soulshine_Orders").find({ _id: o_id }).toArray();
  res.send({
    msg: "OK",
  });
});

app.listen(port, hostname, () => {
  console.log(`Hello SoulShine, i am running http://${hostname}:${port}`);
});
