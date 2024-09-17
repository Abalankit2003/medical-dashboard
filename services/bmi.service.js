import http from "http";

export const bmi = () => {

const options = {
  method: "POST",
  hostname: "bmi.p.rapidapi.com",
  port: null,
  path: "/v1/bmi",
  headers: {
    "x-rapidapi-key": "fd51995fc6mshd1f7b0816bce0b4p1822eejsn3262b655a97f",
    "x-rapidapi-host": "bmi.p.rapidapi.com",
    "Content-Type": "application/json",
  },
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(
  JSON.stringify({
    weight: {
      value: "85.00",
      unit: "kg",
    },
    height: {
      value: "170.00",
      unit: "cm",
    },
    sex: "m",
    age: "24",
    waist: "34.00",
    hip: "40.00",
  })
);
req.end();
}
