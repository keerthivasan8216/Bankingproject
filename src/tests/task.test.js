const request = require("supertest");

const app = require("../index");

describe("Task API", () => {

    let token;

    test("Server should respond", async () => {

        const response = await request(app)
            .get("/tasks");

        expect(response.statusCode).toBe(401);

    });

});