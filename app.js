// server.js
// where your node app starts

// init project
const express = require('express');
const app =  express();
const PORT = process.env.PORT || 1337;
app.get('/', function(req, res){
 res.redirect('/whoami')
});
app.get('/whoami', function(req, res){
let obj = {ip: null, lan: null, os: null};
  if(req.headers['x-forwarded-for'])(
    obj.ip = req.headers['x-forwarded-for'].split(',')[0]
    )
 else{
obj.ip = req.ip;
}
  obj.lan = prefLang(req);
  obj.os = os(req);
  res.json(obj);

});
app.listen(PORT, function(req, res){
console.log("listening on port" + PORT);
});

function prefLang(req){
return req.get('Accept-Language').split(',')[0]
};
function os(req){
let software = req.get('User-Agent');
return software.split(')')[0].split('(')[1];
}





