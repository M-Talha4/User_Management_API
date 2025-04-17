const users = require('../data/users');




function fetchUsers(res, medthod) {
    if (method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(
            {
                success: true,
                message: "Users Retrieved",
                error: "",
                data: {
                    users: users
                }
            }
        ));

    } else {
        res.writeHead(405, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ success: false, message: "Method Not Allowed", error: `${medthod} Method is Not Allowed on this API` }));
    }
}

function handleUser(req, res, medthod, query) {
    const { email, id } = query;
    const user = users.find(u => u.email === email || u.id === id);


    if (!user && !id) {
        res.writeHead(400, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ success: false, message: "Please provide email or id", error: "Either Email or Id is required!" }));
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
                    name: users.name,
                    email: users.email
                }
            }
        ));

    }
    else if (method === 'PUT') {

        const body = "";
        req.on("data", (chunk) => { body += chunk; });

        req.on("end", () => {
            try {
                const data = JSON.parse(body);
                const { name, email, password } = a;

            } catch (error) {
                res.writeHead(400, { "Content-Type": "application/json" });
                return res.end(JSON.stringify({ success: false, message: "Invalid Data", error: `Invalid format of request body: ${error}` }));
            }

        });


        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(
            {
                success: true,
                message: "User Updated",
                error: "",
                data: {
                    id: user.id,
                    name: users.name,
                    email: users.email
                }
            }
        ));
    } else if (method === 'DELETE') {
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
        return res.end(JSON.stringify({ success: false, message: "Method Not Allowed", error: `${medthod} Method is Not Allowed on this API` }));
    }
}

module.exports = { fetchUsers, handleUser };