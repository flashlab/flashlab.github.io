var contents,row,str_length,sm=new Array("","","","WELCOME TO THE MACHINE","WHAT","ARE","YOUR","COMMANDS","?","I WILL PROTECT YOU NOW.","BELIEVE ME.","I CAN DO EVERYTHING.","","CONNECTING ...","","SYSTEM ONLINE"),speed=50,index=0;function typing(){for(contents="",row=Math.max(0,index-0);row<index;)contents+=tl[row++]+"\r\n";document.getElementById("typearea").value=contents+tl[index].substring(0,text_pos),text_pos++==str_length?(text_pos=0,++index!=tl.length&&(str_length=tl[index].length,setTimeout("typing()",1500))):setTimeout("typing()",speed)}function type_text(t=sm){tl=t,str_length=tl[0].length,typing()}text_pos=0,window.onload=function(){var t=document.getElementById("img");setInterval((function(){"off"==t.getAttribute("alt")?(t.setAttribute("alt","on"),t.setAttribute("class","img on")):"on"==t.getAttribute("alt")&&(t.setAttribute("alt","off"),t.setAttribute("class","img off"))}),800)};