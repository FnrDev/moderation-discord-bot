module.exports = client => {   
    let botStatus = [
      'instagram: @bcoq',
      'Discord: Fnr#0017',
      'Github: FnrDev'
    ]
    setInterval(function() {
      let status = botStatus[Math.floor(Math.random() * botStatus.length)]
      client.user.setActivity(status, {type: 'WATCHING'})
    }, 20000)  
      console.log(`Logged in as ${client.user.username}`);  
};