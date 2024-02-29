import generarFizzBuzz from "./fizzbuzz";
describe("FizzBuzz", () => {
    it("deberia generar el mismo numero para uno que no tiene regla como 1", () => {
      expect(generarFizzBuzz(1)).toEqual("1");
    });
  });
  