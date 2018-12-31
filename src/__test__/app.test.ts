jest.mock("discord.js");

import Discord from "discord.js";


describe("Demonstrate issue", () => {
    it('runs successfully', () => {
        const client = new Discord.Client();
        expect(client).not.toBeUndefined();
        console.log("success!");
    })
});
