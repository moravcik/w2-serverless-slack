module.exports = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    // Create response object and send result back to Slack
    res.end(JSON.stringify({ text: 'Hello from Zeit' }));
}
