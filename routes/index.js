
exports.index = function index(req, res) {
    res.cookie('IndexCookie', 'This was set from Index');
    res.render('index', {title: 'Index!!',
        cookie: JSON.stringify(req.cookies),
        session: JSON.stringify(req.session),
        signedCookie: JSON.stringify(req.signedCookies)
    });
}

exports.login = function login(req, res) {
    res.render('login', {title: 'Login!!'});
};

exports.chat = function chat(req, res) {
    res.render('chat', {title: 'chat!!', sessionCount: req.session.pageCount});
};

function login(req, res) {
    res.send('Login');
}

function loginProcess(req, res) {
    res.redirect('/');
}

function chat(req, res) {
    res.send('Chat');
}


