import app from '../src/app.js';
import request from "supertest";

describe("GET /somar ", () => {
    test("Deve verificar se soma correta", async () => {
        const response = await request(app).get("/somar?a=2&b=5");
        expect(response.status).toBe(200);
        expect(response.text).toBe("{\"operacao\":\"Soma\",\"resultado\":7}")
    });
});

describe("GET /somar ", () => {
    test("Deve verificar que 1o parametro não é número", async () => {
        const response = await request(app).get("/somar?a=c&b=5");
        expect(response.status).toBe(400);
        expect(response.text).toBe("{\"mensagem\":\"c não é um número!\"}")
    });
});

describe("GET /subtrair ", () => {
    test("Deve verificar se subtracao correta", async () => {
        const response = await request(app).get("/subtrair?a=5&b=2");
        expect(response.status).toBe(200);
        expect(response.text).toBe("{\"operacao\":\"Subtracao\",\"resultado\":3}")
    });
});

describe("GET /multiplicar ", () => {
    test("Deve verificar se multiplicacao correta", async () => {
        const response = await request(app).get("/multiplicar?a=2&b=5");
        expect(response.status).toBe(200);
        expect(response.text).toBe("{\"operacao\":\"Multiplicacao\",\"resultado\":10}")
    });
});

describe("GET /dividir ", () => {
    test("Deve verificar se divisao correta", async () => {
        const response = await request(app).get("/dividir?a=10&b=5");
        expect(response.status).toBe(200);
        expect(response.text).toBe("{\"operacao\":\"Divisao\",\"resultado\":2}")
    });
});