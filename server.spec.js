// Imports
const request = require("supertest");

const server = require("./server.js");


// Describe 
describe("the routes", () => {
    
    describe("get/games", () => {
    
        it("it exists", () => {
    
            request(server)
    
            .get("/games")
    
            .then(response => {
    
    
                expect(response).toBeTruthy();
    
            })
    
            .catch(err => {});
    
        });
    

         // Get Request
        it("responds with 200 status code", () => {
    
            request(server)
    
            .get("/games")
    
            .then(response => {
    
                expect(response.status).toBe(200);
    
            })
    
            .catch(err => {});
    
        });
    
    

        // Get Request then
        it("returns json", () => {
    
            request(server)
    
            .get("/games")
    
            .then(response => {
    
                expect(response.type).toMatch(/json/i);
    
            })
    
            .catch(err => {});
    
        });
    
    
    });
    

    // Describ part
    describe("post request", () => {
    
        const body = {
    
            title: "Mario",
    
            genre: "Rpg",
    
            releaseYear: 1970
    
        };
    
        it("it exists", () => {
    
            request(server)
    
            .post("/games/add-game")
    
            .send(body)
    
    
            .then(response => {
    
                expect(response).toBeTruthy();
    
            })
    
            .catch(err => {});
    
        });
    
        it("201 statsus", () => {
    
            request(server)
    
            .post("/games/add-game")
    
    
            .send(body)
    
            .then(response => {
    
                expect(response.status).toBe(201);
    
            })
    
            .catch(err => {});
    
        });
    
        it("error", () => {
    
            const diffplace = {};
    
            request(server)
    
            .post("/games/add-game")
    
    
            .send(diffplace)
    
            .then(response => {
    
                expect(response.status).not.toBe(201);
    
            })
    
            .catch(err => {});
    
        });
    
    });
});

