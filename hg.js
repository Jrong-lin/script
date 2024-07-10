[rewrite_local]
^https://mobilewts\.haige\.com:82/gateway/wtspro-attendance/attData/mobileAddAttData url script-request-body hg.js

[mitm]
hostname = *.haige.*

// 获取请求体
const body = $request.body;

// 使用正则表达式进行替换
const regex = /"detail":.+,"extInfo"/;
const replacement = '"detail":"{\\"address\\":\\"广州海格通信-主场所\\",\\"scope\\":\\"广州海格通信-主场所\\",\\"latitude\\":23.14388,\\"longitude\\":113.447584}","devCode":"GZZHGTX01","longitude":113.447584,"latitude":23.14388,"extInfo"';
const newBody = body.replace(regex, replacement);

// 返回修改后的请求体
$done({ body: newBody });
