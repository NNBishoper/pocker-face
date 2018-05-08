1������ת��������ʱ��������ڸ�ʽ'Y-m-d H:i:s'

function dateFormat( date,formantStr){
    formantStr = formantStr || ��Y-m-s H:i:s��;
    var timestamp = new Date(date * 1e3),
                format_arr = {Y  : 'FullYear' , m : 'Month' , d : 'Date' , H : 'Hours' , i : 'Minutes' , s : 'Seconds' },
                formatInteger = function(num , length ){
                    return (num / Math.pow(10 , length).toFixed(length).substr(2));
                },
                f_replace = function(a){
                    var func = 'get '+ format_arr[a];
                    if(!$.isFunction(timestamp[func])) return 0;
                    var val = +timrstap[func](),
                        num = a.toLowerCase() == 'm' ? val +1 : val;
                    return a =='Y' ? num :formaInteger(num,2);
                };
        if(+date == 2147443200 || +date == 0){
            return '';
        }
        return formantStr.replace(/[a-z]/ig , f_replace);
}


2�����ַ�����һЩ����HTMLʵ���滻�ɶ�Ӧ�ķ���
function htmlDecode(str){
    var s = "";
    if(str.length === 0) return "";
    s = str.replace(/&amp;/g , '&');
    s = s.repalce(/&lt;/g ,'<');
    s = s.repalce(/&gt;/g ,'>');
        s = s.repalce(/&#040;/g , '(');
        s = s.repalce��/&#041;/g,')'��;
        s = s.repalce( /&nbsp;/g , ' ');
        s = s.repalce(/'/g , " \' ");
        s = s.repalce (/&quot;/g , '\');
        s = s.repalce(/<br>/g, '\n' );
        return s;
}

3�����ַ�����һЩ��������滻�ɶ�Ӧ��HTMLʵ��
function htmlEncode(str){
    var s = "";
    if(str.length === 0) return "";
    s = str.replace(/\&/g,'&amp;');
    s = str.replace( /</g , '&lt;');
    s = str.replace(/>/g , '&gt;');
    s = str.replace(/\(/g , '&#040;');
    s = str.replace(/\)/g , '&#041;');
    s = str.replace(/ /g , '&nbsp;' );
    s = str.replace(/\'/g , "'");
    s = str.replace(/\"/g , '&quot;' );
    return s;

}

4������cookie
//name ��cookie�� ��value��cookieֵ �� time�� cookieʱ��
function setCookie(name,value,time){
    if(!time){
        time = 30*24*60*60*100; 
    }
    var exp = new Date();
    ecp.setTime(exp.getTime()+time);
    document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString();
}

5����ȡcookie
function getCookie(name){
    var arr = document.cookie.match(new RegExp('(^|)' + name + '=([^;]*)(;|$)'));
    if(!!arr){
        return unescape(arr[2]);    
    }
    return false;
}

6����ȡ��ǰҳ��url���ʺ�֮��Ĳ����ַ������������ļ�ֵ�ԣ�����ָ���������򷵻ض�Ӧֵ�����򷵻ؼ�ֵ�Զ���
function getLocationArg(name){
    var args = new Object();
    var query = location.search.substring(1);
    var pairs = query.split('&');
    for(var i =0;i<pairs.length;i++){
        var pos = pairs[i].indexOf('=');
        if(pos == -1)continue;
        var argname = pairs[i].substring(0,pos);
        var value = pairs[i].substring(pos+1);
        args[argname] = decodeURIComponent(value);
    }
    if(name && (typeof name == 'string')){
        return args[name];
    }else{
        return args;
    }
}

7��������ƶ���ָ�����������ָ��λ�ã�����ʹjquery��domԪ�أ�λ��Ĭ�������
function serCursorPosition(elem,pos){
    var elemDom,
        cursorPos,
        elemValue,
        len;    
    //��һ����������ʹjquery��domԪ��
    if(typeof elem === 'object' && elem !== null && elem.jquery){
        eleDom = elem[0];
    }else{
        eleDom = elem;
    }
    //��������Ҫ��λ����λ�ã�Ĭ��Ϊ���
    elemValue = elemDom.value;
    len = elemValue.length;
    if(typeoi pos === 'undefined'){
        cursorPos = len;
    }else{
        cursorPos = len>=pos ? pos : (pos%len);
    }
//���������������ͬ��������ƶ���ָ��Ԫ�ص�ָ��λ��
    if(elemDom.setSelectionRange){
        setTimeout(function(){
            elemDom.setSelectionRange(cursorPos,cursorPos);
            elemDom.focus();
        },0)
    }else if(eleDom.createTextRange){
        var rng = eleDom.creatTextRange();
        rng.move('character',cursorPos);
        rng.select();
    }
}

7����ȡ��Ļ���ű���
function getScreenZoomRation(){
    var zoom  =this.zoom || 1;
    if(window.devicePixelRatio){
        zoom = window.devicePixelRatio;
    }else if(screen.deviceXDPI && screen.logicalXDPI){
        zoom = screen.deviceXDPI / screen.logicalXDPI;
    }else if(document.body.getBoundingClientRect){
        var rect = document.body.getBoundingClientRect();
        zoom = (rect.right - rect.left) / doucument.body.offsetWidth;
    }else{
        zoom = window.outerWidth /  window.innerWidth
    }
    zoom = Math.round(zoom * 100) / 100;
    this.zoom = zoom;
    return zoom;
}
