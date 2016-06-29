/**
 * Created by Administrator on 2016/5/28.
 */

var a='index.html?id=154&hf=14521&yd=9865';
console.log(add(a,'&'));
function add(a,b){
    var b = a.split('?')[1].split(b);
    var obj = {};
    for(var i in b ){
        obj[ b[i].split('=')[0] ] = b[i].split('=')[1];
    }
    console.log(parseInt(obj.id/20) + 1);
    return obj;154
}
