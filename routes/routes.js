const url = require('url');
const { registerUser, loginUser } = require('../controllers/auth_controller');
const { fetchUsers, handleUser } = require('../controllers/user_controllers');

function handleRoutes(req, res) {
    const parsedUrl = url.parse(req.url);
    const path = parsedUrl.pathname;
    const query = parsedUrl.query;
    const method = req.method;


    if (path === '/register') {
        return registerUser(req, res, method);
    }
    else if (path === '/login') {
        return loginUser(req, res, method);
    }
    else if (path === '/users') {
        return fetchUsers(res, method);
    }
    else if (path === '/user') {
        return handleUser(req, res, method, query)
    }
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ success: false, message: "Page not Found", error: `The route "${path}" does not exist.` }));
    }


}


module.exports = handleRoutes;