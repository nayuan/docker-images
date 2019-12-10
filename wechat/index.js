const { FileBox } = require('file-box');
const { Wechaty } = require('wechaty');
const http = require('http');

const bot = new Wechaty();

bot.on('scan',    (qrcode, status) => {
    console.log(['https://api.qrserver.com/v1/create-qr-code/?data=',encodeURIComponent(qrcode),'&size=220x220&margin=20',].join(''))
    let data = {
        status: status,
        qrcode: qrcode
    };
    let json = JSON.stringify(data);

    let request = http.request({
        host: 'system-service-locgateway.longmao-springcloud',
        path: '/v1/loc/unsafe/common/sdk/message/weixin/web/login',
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Content-Length':json.length
        }
    }, response => {
        console.log(`status: ${response.statusCode}`);
        response.on('data', (data) => console.log(`result: ${data}`));
        response.on('end', () => console.log('=============end=============='))
    });
    request.on('error', (e) => {
        console.error(e.message);
    });
    request.write(json);
    request.end();
});
bot.on('login',   user => {
    console.log(`User ${user} logined`)
});
bot.on('message', message => {
    console.log(`Message: ${message}`)
});
bot.start();

http.createServer(function(request, response) {

    if('POST' !== request.method) {
        response.statusCode = '200';
        response.end();
    }

    let url = request.url;
    console.log(url);

    let data = '';
    request.on('data', function (v) {
        data += v;
    });
    request.on('end', async function() {
        let code = 200;
        let message = '';
        let object = {};
        let list = [];
        if(bot.logonoff()) {
            try{
                switch (url) {
                    case '/v1/api/status': { //查询登录状态
                        object.status = bot.logonoff();
                        break
                    }
                    case '/v1/api/users': { //查询用户列表
                        let users = await bot.Contact.findAll();
                        for(let user of users) {
                            list.push(user.payload);
                        }
                        users = await bot.Room.findAll();
                        for(let user of users) {
                            list.push(user.payload);
                        }
                        break
                    }
                    case '/v1/api/send/text': { //发送文本消息
                        data = JSON.parse(data.replace(/\s+/, ''));

                        let user = await bot.Room.find({ topic: data.to});
                        if(!user) {
                            user = await bot.Contact.find({ name: data.to });
                        }

                        if(!user) {
                            code = '500';
                            message = '未找到微信用户或群';
                        }else{
                            await user.say(data.message);
                        }
                        break;
                    }
                    case '/v1/api/send/image': { //发送图片消息
                        data = JSON.parse(data.replace(/\s+/, ''));

                        let user = await bot.Room.find({ topic: data.to});
                        if(!user) {
                            user = await bot.Contact.find({ name: data.to });
                        }

                        if(!user) {
                            code = '500';
                            message = '未找到微信用户或群';
                        }else{
                            const fileBox = FileBox.fromUrl(data.image);
                            await user.say(fileBox);
                        }
                        break
                    }
                }
            }catch (e) {
                code = 500;
                message = e.message;
            }
        }else{
            code = 401;
        }

        let result = {
            code: code,
            message: message,
            object: object,
            list: list
        };
        response.writeHead(200, {'Content-Type':'application/json'});
        response.end(JSON.stringify(result));
    });

}).listen(8888);

console.log('Server[8090] is Running...');