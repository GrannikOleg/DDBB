function form()
{
document.title="Alphabet";
document.getElementById("Txt").style.display="block";
document.getElementById("Txt").style.position = "absolute";
document.getElementById("Txt").style.top ="1%";
document.getElementById("Txt").style.right = "1%";
document.getElementById("Txt").style.width ="62%";
document.getElementById("Txt").style.height = "91%";
document.getElementById("Txt").style.overflow = "scroll";
document.getElementById("Txt").style.border = "2px solid #777777";
document.getElementById('Txt').style.fontSize='100%';
document.getElementById('Txt').style.textIndent="30px"; //* Отступ первой строки *//
document.getElementById('Txt').style.paddingLeft="3%";
document.getElementById('Txt').style.paddingTop="3%";
document.getElementById('Txt').style.paddingRight="3%";
document.getElementById('Txt').style.backgroundColor="Honeydew";
document.getElementById("Txt").innerHTML ='\
<Br>&#60;!DOCTYPE HTML PUBLIC\"-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd\"&#62;\
<Br>&#60meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\
<Br>&#60!-- Комментарий -->\
<Br>&#60html>\
<Br>&#60head>\
<Br>&#60title>&#60/title>\
<Br>&#60/head>\
<Br>&#60body>\
<Br>\
<Br>&#60/body>\
<Br>&#60/html>\
<Br>\
<Br>~~~~~~~~~~~~~~~~~~~~~~~~~~~~ CSS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\
<Br>\
<Br>&#60link rel="Stylesheet" href="Style.css" type="text/css">\
<Br>\
<Br>&#60style rel="stylesheet" type="text/css">\
<Br>\
<Br>&#60/style>\
<Br>\
<Br>~~~~~~~~~~~~~~~~~~~~~~~~~~~ JavaScript ~~~~~~~~~~~~~~~~~~~~~~~~~~~~\
<Br>\
<Br>&#60Script type="text/JavaScript" src="Script.js"></Script>\
<Br>\
<Br>&#60Script type="text/JavaScript">\
<Br>\
<Br>&#60/Script>\
<Br>\
<Br>&#60body onload="">\
<Br>\
<Br>~~~~~~~~~~~~~~~~~~~~~~~~~~~ Table ~~~~~~~~~~~~~~~~~~~~~~~~~~~~\
<Br>\
<Br>&#60Table>\
<Br>&#60Tr>\
<Br>&#60Th>&#60/Th>\
<Br>&#60/Tr>\
<Br>&#60Tr>\
<Br>&#60Td>&#60/Td>&#60Td>&#60/Td>\
<Br>&#60/Tr>\
<Br>&#60Tr>\
<Br>&#60Td>&#60/Td>&#60Td>&#60/Td>\
<Br>&#60/Tr>\
<Br>&#60/Table>\
<Br>\
'
}
