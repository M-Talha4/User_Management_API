const fs = require("fs");
const querystring = require('querystring');
const formidable = require('formidable');
const path = require("path");


const users = require('../data/users');
const { hashPassword } = require('../security/hashing');
const { decodeToken } = require('../security/jwt_token');





function fetchUsers(res, method, token) {
    const decoded = decodeToken(token);
    if (!decoded) {
        res.writeHead(401);
        res.end(JSON.stringify({ message: "Invalid or expired token" }));
    }

    if (method === "GET") {
        const usersWithoutPasswords = users.map(user => {
            const { password, ...userData } = user;  // Exclude the password field
            return userData;  // Return the user object without the password
        });


        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(
            {
                success: true,
                message: "Users Retrieved",
                error: "",
                data: {
                    count: users.length,
                    users: usersWithoutPasswords
                }
            }
        ));

    } else {
        res.writeHead(405, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ success: false, message: "Method Not Allowed", error: `${method} Method is Not Allowed on this API` }));
    }
}

function handleUser(req, res, method, query, token) {
    const data = querystring.parse(query);
    const email = data.email;
    const id = data.id;
    console.log(email);

    if (!email && !id) {
        res.writeHead(400, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ success: false, message: "Please provide email or id", error: "Either Email or Id is required!" }));
    }

    const user = users.find(u => u.email === email || u.id === id);

    if (!user) {
        res.writeHead(404, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ success: false, message: "User does not exist.", error: "User not found!" }));
    }

    const decoded = decodeToken(token);
    if (!decoded) {
        res.writeHead(401);
        res.end(JSON.stringify({ message: "Invalid or expired token" }));
    }

    if (method === "GET") {

        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(
            {
                success: true,
                message: "User Retrieved",
                error: "",
                data: {
                    id: user.id,
                    name: user.name,
                    email: user.email
                }
            }
        ));

    }
    else if (method === 'PUT') {

        if (decoded.email !== user.email) {
            res.writeHead(403);
            return res.end(JSON.stringify({ message: "Forbidden: Unauthorized" }));
        }

        let body = "";
        req.on("data", (chunk) => { body += chunk; });

        req.on("end", async () => {
            try {
                const data = JSON.parse(body);
                const { name, email, password } = data;

                if (!name && !email && !password) {
                    res.writeHead(400, { "Content-Type": "application/json" });
                    return res.end(JSON.stringify({ success: false, message: "Require at least one of name, email or password", error: "Require at least one of name, email or password" }));
                }

                if (name) {
                    user.name = name;
                }

                if (password) {
                    user.password = await hashPassword(password);
                }
                res.writeHead(200, { "Content-Type": "application/json" });
                return res.end(JSON.stringify(
                    {
                        success: true,
                        message: "User Updated",
                        error: "",
                        data: {
                            id: user.id,
                            name: user.name,
                            email: user.email
                        }
                    }
                ));

            } catch (error) {
                res.writeHead(400, { "Content-Type": "application/json" });
                return res.end(JSON.stringify({ success: false, message: "Invalid Data", error: `Invalid format of request body: ${error}` }));
            }

        });

    } else if (method === 'DELETE') {
        if (decoded.email !== user.email) {
            res.writeHead(403);
            return res.end(JSON.stringify({ message: "Forbidden: Unauthorized" }));
        }

        const index = users.findIndex(u => u.email === email || u.id === id);
        users.splice(index, 1);
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(
            {
                success: true,
                message: "User Deleted Succesfully",
                error: ""
            }
        ));
    } else {
        res.writeHead(405, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ success: false, message: "Method Not Allowed", error: `${method} Method is Not Allowed on this API` }));
    }
}



function fileUpload(req, res, method, token) {
    if (method === "POST") {

        const decoded = decodeToken(token);
        if (!decoded) {
            res.writeHead(401);
            return res.end(JSON.stringify({ message: "Invalid or expired token" }));
        }

        const uploadDir = '/Users/macbook/Documents/Node-JS/User_Management_API/uploads';

        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }

        formidable.defaultOptions.uploadDir = './uploads';
        formidable.defaultOptions.keepExtensions = true;
        formidable.defaultOptions.maxFileSize = 20 * 1024 * 1024;

        const form = new formidable.IncomingForm();

        form.parse(req, (err, fields, files) => {
            if (err) {
                res.writeHead(500);
                return res.end(JSON.stringify({ message: "File upload error", error: err }));
            }
            let images = [];

            for (let index = 0; index < files.media.length; index++) {
                images.push(files.media[index].filepath);
                console.log(images);
            }
            res.writeHead(200, { "Content-Type": "application/json" });
            return res.end(JSON.stringify({ success: true, message: "File uploaded successfully", error: "", data: { media: images } }));

        });




    } else {
        res.writeHead(405, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ success: false, message: "Method Not Allowed", error: `${method} Method is Not Allowed on this API` }));
    }
}



module.exports = { fetchUsers, handleUser, fileUpload };