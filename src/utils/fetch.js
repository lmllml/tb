function FetchError (status, message) {
    this.message = message || '发生未知错误';
    this.status = status;
};

FetchError.prototype = new Error();

let _fetch  = function (url, options) {
    return fetch(url, Object.assign({
        credentials: 'same-origin'
    }, options)).catch(function (error) {
        console.log(error);
        throw new FetchError(0, '网络连接错误，请稍后再试');
    }).then(function (response) {
        if (response.status >= 200 && response.status < 300) {
            return response.json();
        } else {
            throw new FetchError(response.status, '服务器发生了点错误.['+ response.status + ']');
        }
    }).then(function (resBody) {
        if (resBody.status) {
            throw new FetchError(200, resBody.msg);
        } else {
            return resBody.data;
        }
    });
};


export default _fetch;