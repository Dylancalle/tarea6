import generarFizzBuzz from "./fizzbuzz";
describe("FizzBuzz", () => {
    it("deberia generar el mismo numero para uno que no tiene regla como 1", () => {
      expect(generarFizzBuzz(1)).toEqual("1");
    });
    it("deberia generar el mismo numero para uno que no tiene regla como 2", () => {
        expect(generarFizzBuzz(2)).toEqual("2");
      })
    it("deberia generar fizz para el caso base 3", () => {
    expect(generarFizzBuzz(3)).toEqual("Fizz");
    });;
    it("deberia generar fizz para multiplos de 3", () => {
        expect(generarFizzBuzz(6)).toEqual("Fizz");
        });;
  });
  