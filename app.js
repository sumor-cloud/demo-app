import createServer from "@sumor/ssl-server";

const app = createServer();

const versionInfo = {
    feature1: "ABC123",
    feature2: "ABC"
};

app.all("/", (req, res) => {
    res.json(versionInfo);
});

await app.listen();

console.log(`server running on https://localhost`);