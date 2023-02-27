const p = new Promise((resolve, reject) => {
  resolve("resuelto");
});
p.then(
  (value) => console.log(value),
  (error) => console.log(error)
);
