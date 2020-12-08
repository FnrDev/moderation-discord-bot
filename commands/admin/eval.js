// You can put more than 2 ids 
const ownerID = ['ownerid1', 'OwnerID2']

module.exports = {
    name: "eval",
    run: async(client, message, args) => {
        if (!ownerID.includes(message.author.id)) return
        let incode = args.join(" ")
        let code = eval(incode)
        try {
            if (typeof incode !== 'string')
            code = require('util').inspect(code, { depth: 0})
           message.channel.send(`\`\`\`js\n${code}\n\`\`\``)
        } catch (e) {
            message.channel.send(`\`\`\`js\n${e}\n\`\`\``)
        }
    }
}