var config = {
    port: 3000,
    secret: 'secret',
    redisPort: 6379,
    redisHost: 'localhost',
    routes: {
        login: '/account/login',
        logout: '/account/logout',
        register: '/account/register',
        chat: '/chat',
        facebookAuth: '/auth/facebook',
        facebookAuthCallback: '/auth/facebook/callback',
        googleAuth: '/auth/google',
        googleAuthCallback: '/auth/google/callback'
    },
    host: 'http://localhost:3000',
    facebook: {
        appID: '1158886797550070',
        appSecret: 'f8bf2ae8a73df1e604f19b02f6c8a0c8',
    },
    google: {
        clientID: 'YOUR_ID',
        clientSecret: 'YOUR_SECRET'
    },
    crypto: {
        workFactor: 5000,
        keylen: 32,
        randomSize: 256
    }
};

module.exports = config;
