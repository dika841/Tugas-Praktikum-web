import express from "express";
const app = express();
app.use(express.json());
const port = 9000;

app.get("/", (req, res) => {
  res.send({
    nama: "Randika",
  });
});
app.get("/makanan", (req, res) => {
  res.send([
    {
      id: 1,
      nama: "Lotek",
      tipe: "Sayuran",
    },
    {
      id: 2,
      nama: "Tahu Pedas",
      tipe: "Gorengan",
    },
    {
      id: 3,
      nama: "Indomie",
      tipe: "Makanan Instan",
    },
    {
      id: 4,
      nama: "Indomie",
      rasa: "Ayam Bawang",
    },
  ]);
});
app.get("/minuman", (req, res) => {
  res.send([
    {
      id: 1,
      nama: "Nutrisari",
      rasa: "Jeruk",
    },
    {
      id: 2,
      nama: "Teh Sisri",
      rasa: "Melati",
    },
    {
      id: 3,
      nama: "Greensand",
      rasa: "Grape",
    },
    {
      id: 4,
      nama: "Chimori",
      rasa: "Blueberry",
    },
  ]);
});

app.post("/create", (req, res) => {
  res.send({
    nama: req.body,
  });
});

app.listen(port, () => {
  console.log(`Aplikasi Berjalan di port ${port}`);
});
