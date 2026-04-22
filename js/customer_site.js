const CUSTOMER_SITES = {
    lsbzy: {
        api: 'https://apilsbzy1.com/api.php/provide/vod',
        name: '老色逼资源',
    },
    fhzy: {
        api: 'http://fhapi9.com/api.php/provide/vod',
        name: '番号资源',
    },
    nxxzy: {
        api: 'https://naixxzy.com/api.php/provide/vod',
        name: '奶香香资源',
    },
    ddzy: {
        api: 'https://api.ddapi.cc/api.php/provide/vod',
        name: '滴滴资源',
    },
    ytzy: {
        api: 'https://apiyutu.com/api.php/provide/vod',
        name: '玉兔资源',
    },
    aizy: {
        api: 'http://lbapiby.com/api.php/provide/vod/at/json',
        name: 'AI资源',
    },
    115zy: {
        api: 'https://155api.com/api.php/provide/vod',
        name: '155直连',
    },
    lbzy: {
        api: 'https://lbapi9.com/api.php/provide/vod',
        name: '乐播直连',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
