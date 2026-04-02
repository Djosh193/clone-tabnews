const calculadora = require("../models/calculadora.js");

test("teste da calculadora", () => {
  expect(calculadora.soma(2, 2)).toBe(4);
  console.log("Deu bom?");
});

test("teste da calculadora", () => {
  expect(calculadora.soma(10, 4000)).toBe(4010);
});

test("teste da calculadora", () => {
  expect(calculadora.soma(-4, 1)).toBe(-3);
});
