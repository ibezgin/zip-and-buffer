import express from "express";

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  // res.send("Hello world");
  const data =
    "UEsDBBQAAAAIACB7UlJc82SOVgAAAJQAAAAIAAAAZGF0YS5jc3Z6v3t/QGJRSV5qUWhxapFnik5IfklijlNqSbFzfmleiU54Zh6CA5cLLs0NSaxIRVINEYEph8uj8HUCivLTMkugFESBb2JRemYelAIL8XIBAAAA//8DAFBLAQIUABQAAAAIACB7UlJc82SOVgAAAJQAAAAIAAAAAAAAAAAAAAAAAAAAAABkYXRhLmNzdlBLBQYAAAAAAQABADYAAAB8AAAAAAA=";
  const result = new Buffer(data, "base64");

  res.setHeader("content-disposition", `attachment; filename=BetsHistory.zip`);
  res.setHeader("content-type", "text/csv");
  res.send(result);
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
