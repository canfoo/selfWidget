var http = require('http');
var fs = require('fs');
var mime = require('mime');

http.createServer(function (request, response) {
    var indexUrl = request.url;
    
    var path =  indexUrl.slice(1)==="" ? "./index.html" : indexUrl.slice(1);
    var reg = /.*\?.*/;
    if(reg.test(indexUrl)) {
        var data = {"meta": {"limit": 20, "offset": 0, "total": 10}, "objects": [{"user_id": 3945899, "name": "nin8", "answer_number": 8, "create_time_ts": 1469619488, "listen_number": 28, "create_time": "2016-07-27 19:38", "position": "435", "id": 39}, {"user_id": 4131568, "name": "\u90ed\u854a2", "answer_number": 0, "create_time_ts": 1470380330, "listen_number": 0, "create_time": "2016-08-05 14:58", "position": "\u4eba\u529b\u8d44\u6e90\u90e8", "id": 43}, {"user_id": 4131573, "name": "\u9ec4\u5927\u741b", "answer_number": 1, "create_time_ts": 1470303401, "listen_number": 1, "create_time": "2016-08-04 17:36", "position": "\u7b97\u8ba1\u58eb", "id": 42}, {"user_id": 3947054, "name": "\u767d\u77091", "answer_number": 4, "create_time_ts": 1470217742, "listen_number": 3, "create_time": "2016-08-03 17:49", "position": "bug\u5c0f\u80fd\u624b", "id": 41}, {"user_id": 1, "name": "wangpobear", "answer_number": 1, "create_time_ts": 1470033819, "listen_number": 0, "create_time": "2016-08-01 14:43", "position": "\u6d4b\u8bd5\u4e13\u5bb6", "id": 40}]}
        response.end(JSON.stringify(data));
        return;
    }

    fs.exists(path, function(exists){
        if(exists){
            response.setHeader('Content-Type',mime.lookup(request.url));
            fs.readFile(path, 'utf8', function(err, data){
                response.write(data);
                response.end();
            });
        }
        else{
            response.end('404');
        }
    });
}).listen(9000, function(){
    console.log("server is success in 9000 port")
});