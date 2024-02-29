import { mostrar , generarFizzBuzz} from "./fizzbuzz";

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
    it("deberia generar fizz para el caso base 5", () => {
        expect(generarFizzBuzz(5)).toEqual("Buzz");
    });;
    it("deberia generar fizz para multiplos de 5", () => {
        expect(generarFizzBuzz(10)).toEqual("Buzz");
    });;
    it("para cuando sea 15, debe mostrar FizzBuzz", () => {
        expect(generarFizzBuzz(15)).toEqual("FizzBuzz");
    });;
    it("para cuando sea multiplos de 5 y 3, debe mostrar FizzBuzz", () => {
        expect(generarFizzBuzz(30)).toEqual("FizzBuzz");
    });;
    it("para cualquier numero, se mostrara una lista de cadenas hasta ese numero", () => {
       expect(mostrar(5)).toEqual("Buzz4Fizz21");
    });;
  });
  