var http = require('http');             // require de su dung module http
// Module fs (file system) là một module được tích hợp sẵn trong node.js có chức năng xử lý file, thư mục trong node.js
var fs = require('fs');

// Bên trong phương thức createServer chứa một phương thức ẩn danh có 2 tham số truyền vào.
// Tham số thứ nhất: là biến chứa các thông số liên quan đến request mà người dùng gửi lên.
// Tham số thứ hai là biến chứa các thông số liên quan đến response mà chúng ta muốn trả về client.
http.createServer(function(request, response){       // khoi tao 1 server chay port 8000
    // thiet lap kieu du lieu muon server tra ve
    response.writeHead(200, {'Content-Type': 'text/html'}); 
    // thiet lap noi dung ma server muon tra ve trinh duyet
    response.write("hello world!!!");
    fs.readFile('code.html', 'utf8', function(err, data){       // doc File
        if(err) throw err;
        response.write(data);
        response.end();
    });
    fs.writeFile('write.html', "hello everybody", 'utf8', function(err){
        if(err){
            throw err;
        }
        else console.log('ghi file thanh cong');
    })

    
}).listen(8000);    
