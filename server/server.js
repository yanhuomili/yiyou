var http=require('http');
var express=require('express');
var fs=require('fs');
var Url=require('url');
var qs=require('querystring');

var app=express();



		
//
//app.get('/',function(req,res){
//	console.log('监听8080端口');
//	res.sendFile(__dirname+'/index.html');
//})
//app.post('/',function(req,res){
//	console.log('接受到post请求了');
//	req.on('data',function(chunk){
//		var str=chunk.toString()
//		var obj=qs.parse(str);
//		console.log(obj);
//	})
//	req.on('end',function(){
//		console.log('请求完毕');
//	})
////	res.json('dsfsfsdfsdfsdfs')
//})

app.use('/getUrl',(req,res)=>{
	console.log('访问接口getUrl');
	res.send(req.query);
})

app.use(express.static('./'));
//app.use(express.static(__dirname+'/img'));

var mysql  = require('mysql');  //调用MySQL模块
	//创建一个connection
var connection = mysql.createConnection({    
    host     : 'localhost',       //主机
    user     : 'root',            //MySQL认证用户名
    password:'123456',
    port:   '3306',
    database: 'test'

});

//创建一个connection
connection.connect(function(err){
    if(err){       
        console.log('query'+err);
        return;
    }
    console.log('[connection create] succeed!');
      app.listen(8080,function(){
			console.log('服务端已经监听了8080端口');
			
		});
}); 



//app.listen(8080,function(){
//	console.log('服务端已经监听了8080端口');
//	
//});


app.all('*', function (req, res, next) {
//响应头指定了该响应的资源是否被允许与给定的origin共享。*表示所有域都可以访问，同时可以将*改为指定的url，表示只有指定的url可以访问到资源 
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  //允许请求资源的方式
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});



app.use('/getData',(req,res)=>{
	console.log('访问getData接口')
	var arr=[];
	//执行SQL语句
	connection.query('SELECT * from t', function(err, rows, fields) {
	    if (err) {
	        console.log('[query] - :'+err);
	        return;
	    }
	    for(var i=0;i<rows.length;i++){
	    	console.log(rows[i].name);
	    }
	    arr=rows;
	    res.send({
			code:1,
			data:{
				user:'lili',
				age:22,
				pass:'123456',
				role:'管理员',
				arr:arr
			}
		});
	}); 
	
	
	//关闭connection
//	connection.end(function(err){
//	    if(err){       
//	        return;
//	    }
//	    console.log('[connection end] succeed!');
//	});
})




//
//
////http://image.baidu.com/search/index?tn=baiduimage&ct=201326592&lm=-1&cl=2&ie=gbk&word=ͼƬ&fr=ala&ala=1&alatpl=others&pos=0
//var nowUrl=Url.parse('http://www.nipic.com/zhuanti/1203862.html')
//console.log(nowUrl);
//var hostname=nowUrl.hostname;
//var pathname=nowUrl.path;
//
////createServer用于创建服务器
////request用于访问服务器
//var req=http.request({
//	hostname:hostname,//域名
//	path:pathname//路径
//},res=>{
//	var arr=[];
//	var str='';
//	res.on('data',function(data){
//		arr.push(data);
//		str+=data;
//	})
//	res.on('end',function(){
//		
//		//使用异步写文件的时候需要设置回调函数，否则node命令行里面会出现警告
//		fs.writeFile('down4.html',str,'utf-8',function(){
//			console.log('文件下载完成');
//		});
//		console.log(str);
////		fs.writeFile('down2.html',str,'utf-8',function(){
//////			console.log('文件down1创建完成');
////		});
//	})
//});
//req.end();//结束访问，否则浏览器会一直是等待结束状态，而不能操作数据
//
