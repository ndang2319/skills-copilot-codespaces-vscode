// Create web server
// 1. Load http module
var http = require('http');
// 2. Create web server
var server = http.createServer(function(request, response) {
    // 3.1. Send HTTP header with HTTP status and Content type
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // 3.2. Send body
    response.end('Hello World\n');
});
// 3. Make server listen on port 3000
server.listen(3000);
// 4. Print URL for accessing server
console.log('Server running at http://localhost:3000/');

// 5. Load express module
var express = require('express');
// 6. Create app
var app = express();
// 7. Create router
var router = express.Router();
// 8. Create route for /comments
router.route('/comments')
// 8.1. Create HTTP GET route
    .get(function(request, response) {
        response.send('Get comments');
    })
// 8.2. Create HTTP POST route
    .post(function(request, response) {
        response.send('Post a new comment');
    });
// 8.3. Create HTTP PUT route
router.route('/comments/:comment_id')
    .put(function(request, response) {
        response.send('Update comment with id ' + request.params.comment_id);
    })
// 8.4. Create HTTP DELETE route
    .delete(function(request, response) {
        response.send('Delete comment with id ' + request.params.comment_id);
    });
// 9. Register router with /api
app.use('/api', router);
// 10. Start server
app.listen(3000, function() {
    console.log('Server running at http://localhost:3000/');
});

// 11. Load mongoose module
var mongoose = require('mongoose');
// 12. Connect to MongoDB
mongoose.connect('mongodb://localhost/comments');
// 13. Create schema for comments
var CommentSchema = new mongoose.Schema({
