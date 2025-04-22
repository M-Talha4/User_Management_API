const url = require('url');
const { registerUser, loginUser } = require('../controllers/auth_controller');
const { fetchUsers, handleUser, fileUpload } = require('../controllers/user_controllers');
const { generateImage } = require('../controllers/ai_image_generator');
const { error } = require('console');

function handleRoutes(req, res) {
    const parsedUrl = url.parse(req.url);
    const path = parsedUrl.pathname;
    const query = parsedUrl.query;
    const method = req.method;
    const authHeader = req.headers.authorization;

    if (path === '/register') {
        return registerUser(req, res, method);
    }
    else if (path === '/login') {
        return loginUser(req, res, method);
    }
    else if (!authHeader) {
        res.writeHead(401);
        return res.end(JSON.stringify({ success: false, message: "Request Missing a Validation Token", error: "Missing Bearer Token in the header" }));
    }
    else if (path === '/users') {
        const token = authHeader.split(" ")[1];
        return fetchUsers(res, method, token);
    }
    else if (path === '/user') {
        const token = authHeader.split(" ")[1];

        return handleUser(req, res, method, query, token)
    }
    else if (path === '/file-upload') {
        const token = authHeader.split(" ")[1];

        return fileUpload(req, res, method, token);
    }
    else if (path === '/image-generator') {
        const token = authHeader.split(" ")[1];

        return generateImage(req, res, method, token)
    }
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ success: false, message: "Page not Found", error: `The route "${path}" does not exist.` }));
    }


}


module.exports = handleRoutes;