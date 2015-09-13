// パス追加
//require.paths.push('/Users/hoge/lib/node');
var exec = require('child_process').exec;
// express
var express = require('express');
//var server = express.createServer();
var server = express();

// テンプレートエンジンejsの設定
var ejs = require('ejs');
server.set('view engine', 'ejs');
server.set('view options', { layout: false });
server.set('views', __dirname + '/views/page');
server.use(express.static(__dirname + '/public'));
server.use('/bower_components',  express.static(__dirname + '/bower_components'));

// ポート指定
var port = 8124;

// http://127.0.0.1:8124/にアクセス時の処理
server.get('/', function(req, res){
    // 描画
    res.render('tv.ejs', {});
});

server.get('/tvapi', function(req, res){
    console.log(req.query.button)
    exec('irsend SEND_ONCE panasonic_tv.conf ' + req.query.button, function(err, stdout, stderr){
	/* some process */
    });
});

// サーバ起動
server.listen(port);
