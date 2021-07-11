const file = files => require(`./src/${files}`);

module.exports = {
    Economy: file('Economy'),
    version: require('./package.json').version
};