const uuid = require('uuid');
const users = require('../data/users');
const { hashPassword, comparePassword } = require('../security/hashing');
const { generateJWT } = require('../security/jwt_token');

function registerUser(req, res, method) {
    if (method === "POST") {
        let body = "";

        req.on("data", (chunk) => { body += chunk; });
        req.on("end", async () => {

            try {
                const data = JSON.parse(body);
                const { name, email, password } = data;
                if (!name || !email || !password) {
                    res.writeHead(400, { "Content-Type": "application/json" });
                    return res.end(JSON.stringify({ success: false, message: "The fields name, email and password are required!", error: "Missing required fields." }));
                }
                if (password.length < 6) {
                    res.writeHead(422, { "Content-Type": "application/json" });
                    return res.end(JSON.stringify({ success: false, message: "The password should be at least 6 character long!", error: "Invalid password!" }));
                }

                const user = users.find(u => u.email === email);

                if (user) {
                    res.writeHead(409, { "Content-Type": "application/json" });
                    return res.end(JSON.stringify({ success: false, message: "A user with this email already exists", error: "Missing required fields." }));
                }
                const id = uuid.v4();

                const hashedPassword = await hashPassword(password);
                users.push({ id, name, email, password: hashedPassword });


                const token = generateJWT(email);

                res.writeHead(201, { "Content-Type": "application/json" });
                return res.end(JSON.stringify(
                    {
                        success: true,
                        message: "User Registered Successfully!",
                        error: "",
                        data: {
                            token: token,
                            tokenType: "Bearer",
                            id: id,
                            name: name,
                            email: email
                        }
                    }
                ));

            } catch (error) {
                res.writeHead(400, { "Content-Type": "application/json" });
                return res.end(JSON.stringify({ success: false, message: "Invalid Data", error: `Invalid format of request body: ${error}` }));
            }

        });


    } else {
        res.writeHead(405, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ success: false, message: "Method Not Allowed", error: `${method} Method is Not Allowed on this API` }));
    }
}

function loginUser(req, res, method) {
    if (method === "POST") {
        let body = "";

        req.on("data", (chunk) => { body += chunk; });
        req.on("end", async () => {

            try {
                const data = JSON.parse(body);
                const { email, password } = data;
                if (!email || !password) {
                    res.writeHead(400, { "Content-Type": "application/json" });
                    return res.end(JSON.stringify({ success: false, message: "The email and password are required!", error: "Missing required fields." }));
                }
                if (password.length < 6) {
                    res.writeHead(422, { "Content-Type": "application/json" });
                    return res.end(JSON.stringify({ success: false, message: "The password should be at least 6 character long!", error: "Invalid password!" }));
                }

                const user = users.find(u => u.email === email);

                if (!user) {
                    res.writeHead(404, { "Content-Type": "application/json" });
                    return res.end(JSON.stringify({ success: false, message: "User with this email does not exist!", error: "User does not exist!" }));
                }

                const isPasswordValid = await comparePassword(password, user.password);

                if (isPasswordValid) {

                    const token = generateJWT(email);

                    res.writeHead(200, { "Content-Type": "application/json" });
                    return res.end(JSON.stringify(
                        {
                            success: true,
                            message: "Logged in Successfully!",
                            error: "",
                            data: {
                                token: token,
                                tokenType: "Bearer",
                                id: user.id,
                                name: user.name,
                                email: user.email
                            }

                        }
                    ));
                }

            } catch (error) {
                res.writeHead(400, { "Content-Type": "application/json" });
                return res.end(JSON.stringify({ success: false, message: "Invalid Data", error: `Invalid format of request body: ${error}` }));
            }
        });


    } else {
        res.writeHead(405, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ success: false, message: "Method Not Allowed", error: `${method} Method is Not Allowed on this API` }));
    }
}

module.exports = { registerUser, loginUser };