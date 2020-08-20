var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(request, response){
    var parse = url.parse(request.url, true);
    var path = parse.path;

    if(path === '/'){
        fs.readFile('files/home.html', function(error, data){
            response.writeHead('200', {'Content-Type': 'text/html'});
            response.write(data);
        })
    }
    else{
        var load = "files" + path + '.html';
        fs.readFile(load, function(err,data){
            if(err){
                response.writeHead('404', {'Content-Type': 'text/html'});
                response.end();
            }
            else{
                response.writeHead('200', {'Content-Type': 'text/html'});
                response.write(data);
            }
        })
    }
}).listen(2000);