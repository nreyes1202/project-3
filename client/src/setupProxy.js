const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/HabitTracker**', { target: 'http://localhost:3030' }));
    app.use(proxy('/api/updateScore/**', { target: 'http://localhost:3030' }));
    app.use(proxy('/api/sortedHabits/**', { target: 'http://localhost:3030' }));
};