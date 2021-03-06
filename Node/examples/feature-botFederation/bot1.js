var builder = require('../../core/');

// For federation you don't need to provide a connector but you should
// ensure that each bot being federated over has a unique library name.
var bot = new builder.UniversalBot(null, null, 'bot1');

// Add a dialog with a trigger action like you normally would.
bot.dialog('/greeting', function (session) {
    session.endDialog("Hello %s... I'm Bot1", session.userData.name || 'there');
}).triggerAction({ matches: /(hello|hi) bot1/i });

// Export your bot
module.exports = bot;