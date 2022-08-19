function testUA() {
    let result = ''
    let interval = ''
    if (typeof window != 'undefined') {
        window.onresize = function () {
            // if (interval) clearInterval(interval)
            // interval = setTimeout(function () { test() }, 100)
            if(window.location.href.indexOf('debugger=true')){
                window.location.reload()
            }
        }
        function test() {
            let ua = navigator.userAgent;
            ua = {
                //移动终端浏览器版本信息
                trident: ua.indexOf("Trident") > -1, //IE内核
                presto: ua.indexOf("Presto") > -1, //opera内核
                webKit: ua.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
                gecko: ua.indexOf("Gecko") > -1 && ua.indexOf("KHTML") == -1, //火狐内核
                mobile:
                    !!ua.match(/AppleWebKit.*Mobile/i) ||
                    !!ua.match(
                        /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/
                    ), //是否为移动终端
                ios: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: ua.indexOf("Android") > -1 || ua.indexOf("Linux") > -1, //android终端或者uc浏览器
                iPhone: ua.indexOf("iPhone") > -1 || ua.indexOf("Mac") > -1, //是否为iPhone或者QQHD浏览器
                iPad: ua.indexOf("iPad") > -1, //是否iPad
                webApp: ua.indexOf("Safari") == -1, //是否web应该程序，没有头部与底部
                isWx: ua.indexOf("MicroMessenger") > 0
            };
            result = ua.mobile ? 'mobile' : ua.isWx ? 'wechart' : 'pc'
            ua.ios&&!ua.iPad ? result = 'iOS' : ua.android ? result = 'android' : ua.iPad ? result = 'iPad' : result = result
            return result;
        }
        test()
        return result;
    }else{
        console.error('非浏览器环境')
        return false
    }
}

module.exports = testUA()