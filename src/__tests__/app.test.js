const Discord = require('discord.js');

describe("Demonstrate issue", () => {
    it('runs successfully', () => {
        const client = new Discord.Client();
        expect(client).not.toBeUndefined();
        console.log("success!");
    })
});
