const fs = require("fs");
const fetch = require("node-fetch"); // Make sure you have this installed

const token = process.env.HUGGING_FACE_KEY1 + process.env.HUGGING_FACE_KEY2 + process.env.HUGGING_FACE_KEY3; // your HF token

function generateImage(req, res, method) {
    if (method !== "POST") {
        res.writeHead(405, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({
            success: false,
            message: "Method Not Allowed",
            error: `${method} Method is Not Allowed on this API`
        }));
    }

    let body = "";
    req.on("data", chunk => body += chunk);
    req.on("end", async () => {
        try {
            const parsed = JSON.parse(body);
            const prompt = parsed.prompt;

            if (!prompt) {
                res.writeHead(400, { "Content-Type": "application/json" });
                return res.end(JSON.stringify({
                    success: false,
                    message: "Missing prompt field!",
                    error: "Field 'prompt' is required in the request body."
                }));
            }

            const blob = await query(prompt);

            await saveBlobAsPng(blob);

            res.writeHead(200, { "Content-Type": "application/json" });
            return res.end(JSON.stringify({
                success: true,
                message: "Image generated and saved as generated_image.png",
                error: "",
                data: {
                    file: "generated_image.png"
                }
            }));
        } catch (error) {
            res.writeHead(500, { "Content-Type": "application/json" });
            return res.end(JSON.stringify({
                success: false,
                message: "Image generation failed",
                error: error.message
            }));
        }
    });
}

// ✅ Query Hugging Face image generation endpoint
async function query(prompt) {
    const response = await fetch(
        "https://router.huggingface.co/nebius/v1/images/generations",
        {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                prompt: `\"${prompt}\"`,
                model: "black-forest-labs/flux-dev" // ✅ use this or another valid model
            })
        }
    );

    if (!response.ok) {
        const error = await response.json();
        throw new Error(JSON.stringify(error));
    }

    return await response.blob(); // return image blob
}

// ✅ Save blob to PNG file
async function saveBlobAsPng(blob) {
    console.log(blob);
    var imageName = 'map.png';
    const myFile = new File([blob], 'image.jpeg', {
        type: blob.type,
    });
    console.log(myFile);


    blob.arrayBuffer().then((arrayBuffer) => {
        // Convert ArrayBuffer to Buffer
        const buffer = Buffer.from(arrayBuffer);

        // Save the buffer as an image file (for example, 'image.jpeg')
        fs.writeFile('image.jpeg', buffer, (err) => {
            if (err) {
                console.error('Error saving image:', err);
            } else {
                console.log('Image saved as image.jpeg');
            }
        });
    }).catch((err) => {
        console.error('Error converting Blob to ArrayBuffer:', err);
    });

    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    fs.createWriteStream(imageName).write(buffer);
}

module.exports = { generateImage };
