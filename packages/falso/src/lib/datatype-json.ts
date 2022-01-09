import { rand } from './core';

export function datatypeJson() {
  return rand([
    '{"foo":"FIx\\\\8gQB>p","bar":27543,"bike":3530,"a":"96hWe-tv^^","b":54289,"name":37138,"prop":60259}',
    '{"foo":"q|j\'#)-5L,","bar":70940,"bike":".R</*<khvh","a":48087,"b":"P-5pQ>|v6$","name":98624,"prop":15872}',
    '{"foo":"`F{X[(;YF0","bar":12446,"bike":"TX38cbI*Ka","a":"6iwiMj|TF0","b":45486,"name":39742,"prop":"rR9=Tpl.\\\\r"}',
    '{"foo":"<kfO9YGjiE","bar":"KbQyMI?Ins","bike":"!gy3H:Q<ua","a":53522,"b":77816,"name":"H9b6fTg,ZD","prop":52549}',
    '{"foo":"zeUjhnc-c\'","bar":"KjT.uo#7V0","bike":29751,"a":93568,"b":"N;=:SwB{k@","name":71906,"prop":"pj-RsJZ6hM"}',
    '{"foo":"/&X1xmae1d","bar":"$4pxR#3EY6","bike":"m1xuvc7Vm]","a":69793,"b":76647,"name":"xucHTcE6%H","prop":"Q3$LOe@$,9"}',
    '{"foo":82274,"bar":"K>|%msVcFP","bike":48063,"a":74296,"b":"$\'0h/CJU79","name":19365,"prop":"&QTGjLq(in"}',
    '{"foo":"zumc`Z)SrU","bar":28152,"bike":54383,"a":62825,"b":66687,"name":"lqRT9%7.Pg","prop":"7*$KASql6@"}',
    '{"foo":"Kb!26n3F%h","bar":"+VcAg,^bv6","bike":81238,"a":35280,"b":21376,"name":7042,"prop":13333}',
    '{"foo":91099,"bar":37799,"bike":15922,"a":"%aBOdBXmee","b":44554,"name":85035,"prop":82463}',
    '{"foo":"^t5cvc}:Hi","bar":"YSBLvN0|_w","bike":"%/uiDH-l$Y","a":"3BkL+eH/l;","b":"#dL#mqPy5O","name":76935,"prop":8921}',
    '{"foo":"\'*>14yatUe","bar":84565,"bike":83443,"a":61819,"b":"zM::1M.Et[","name":73290,"prop":24073}',
    '{"foo":31792,"bar":"-m/3xRb/DO","bike":"eI[3Jw^oU2","a":55375,"b":31396,"name":11296,"prop":"^<H9uD\'`\\\\<"}',
    '{"foo":"4|c>vS/b\\"+","bar":51758,"bike":"RG/|tjSr#$","a":78917,"b":86637,"name":"]<d-Nj=:&\\"","prop":"#rN(,z.2Ks"}',
    '{"foo":95946,"bar":"`UZt9R)m53","bike":98635,"a":"?pA!V3U8k5","b":78246,"name":"iK,QWlyo4m","prop":12074}',
    '{"foo":1752,"bar":"skj?qz8JB/","bike":"]iREVPmCZa","a":17552,"b":"fJki8\'Fo=L","name":91627,"prop":"|SGK*;D5{v"}',
    '{"foo":91663,"bar":68691,"bike":52081,"a":83239,"b":"[1z;kfU9d7","name":65618,"prop":"B9zEf5KHHi"}',
    '{"foo":51683,"bar":"&5h}\'(Zjl4","bike":58708,"a":",qniAI\'49.","b":"s*BBw7&%$U","name":"jAeAl@Hl+>","prop":"D\\"(%!|+ho3"}',
    '{"foo":"H;;CvmBe9Z","bar":17217,"bike":"A<f&*\\\\3?eV","a":27547,"b":73182,"name":"D(Z.UM%n/(","prop":"aY)H#en+Sy"}',
    '{"foo":"QLZ(N*iCoE","bar":13697,"bike":67172,"a":48106,"b":"OF?-xX)6ok","name":72079,"prop":"=k\\"]#3(>_\'"}',
    '{"foo":79224,"bar":92191,"bike":29115,"a":54485,"b":42427,"name":"s&7UEjsRfn","prop":45452}',
    '{"foo":"GkA>dW[Q(Q","bar":39235,"bike":27419,"a":"CD5q$qzkX:","b":15353,"name":"63\\\\osc8kEo","prop":1046}',
    '{"foo":")@@#fXX}M{","bar":"8u9=p>t2\\";","bike":297,"a":14420,"b":57005,"name":58061,"prop":"G@|*gDq3Fo"}',
    '{"foo":18806,"bar":33542,"bike":"<:vwL>!?hP","a":"+])G6_<dCj","b":"Y_Sx95`$rD","name":54377,"prop":60995}',
    '{"foo":44607,"bar":2271,"bike":"Zziwo>pg@p","a":9472,"b":"R?Ze-mzBIq","name":"$)s7}CPnKX","prop":"5uz&L`0;o/"}',
    '{"foo":"wVf6z]I\\"-!","bar":"A`Y,AY|OiZ","bike":"A<Cwj=6WvD","a":98556,"b":";whTdf&[MW","name":84240,"prop":"+FKjXX+0A]"}',
    '{"foo":69866,"bar":61679,"bike":49792,"a":3255,"b":49334,"name":69728,"prop":"fX@L&;!\'@m"}',
    '{"foo":"z(<gZAn?&n","bar":6843,"bike":"zCQs\\"[wxAU","a":"PM{UB09Z<<","b":"dL]wD8(BoZ","name":"\\"vJ\';1aObQ","prop":"}pDAD*/u]O"}',
    '{"foo":95170,"bar":"@)Vhr9K7dU","bike":"Q8HRcVnN19","a":"PXAJLnGiF:","b":"6tIMd|zay<","name":"#A[gj6Q#3U","prop":55948}',
    '{"foo":60845,"bar":"o\\"#\\\\.SD!u&","bike":"[(skNZAs]1","a":13946,"b":"cbLGn;hUnZ","name":59243,"prop":68015}',
    '{"foo":69804,"bar":"6r7[Y-3>N=","bike":"H=0ZqON_Zl","a":"#W\\\\x+dZ^R}","b":15677,"name":"3cC[Z>qTY-","prop":"\\\\(17k{amiD"}',
    '{"foo":81636,"bar":"61xf.,vr|3","bike":"H+d4fnNdi}","a":15400,"b":"WZASB:tiVB","name":"1zNn35Y<2[","prop":"z-Tn+yNGMA"}',
    '{"foo":45797,"bar":"S>&<bywKor","bike":"WU@MIY7LNd","a":4860,"b":":$(!B&G%#a","name":88619,"prop":4085}',
    '{"foo":"y]WF`oYwm`","bar":"%jf7OrA\'9r","bike":"oa\\\\h`%x\\\\Dg","a":41651,"b":99743,"name":"c);)%QIzq8","prop":"oV9W-.s8FG"}',
    '{"foo":"9]gSy@#sp}","bar":46188,"bike":"JYp74z[R8;","a":"<qhY;H^aRh","b":":VMhC}gxZS","name":"`Z`x)!IZ|\\\\","prop":956}',
    '{"foo":10967,"bar":"aXS<uY!JfC","bike":"c{\'ZI)/6W<","a":76948,"b":"<UE5}AoEj+","name":"F`8Pc$$HKm","prop":90160}',
    '{"foo":49698,"bar":"yw6T)#&(:.","bike":"G`Txw#^esd","a":32620,"b":4569,"name":"=i=wc!)*Ti","prop":59745}',
    '{"foo":99449,"bar":10034,"bike":16816,"a":"NM&2q1Kgl^","b":"edb4&>8W@!","name":"dEza%pK:nH","prop":45248}',
    '{"foo":89418,"bar":28245,"bike":26390,"a":"{?\\\\8wh$9]4","b":"dP]<ip$^Nw","name":70105,"prop":42574}',
    '{"foo":30739,"bar":98310,"bike":87177,"a":"+Lg\\"X9}eJb","b":74790,"name":58343,"prop":"Oyw+3<a\\\\t1"}',
    '{"foo":"_bd\'fz*oi{","bar":"x^2b&Bm|94","bike":"LvIDig/F*D","a":"}\\";Zv;md*k","b":16492,"name":22062,"prop":"}3Di3}ug2L"}',
    '{"foo":"mwhv#Y,mng","bar":12856,"bike":58222,"a":4113,"b":83914,"name":")3PK`1{:Dv","prop":98008}',
    '{"foo":"vAnA/;}Kku","bar":"hH\\\\Xv^d!^k","bike":79965,"a":866,"b":"*R%Ou|8V\\\\D","name":74056,"prop":65257}',
    '{"foo":14995,"bar":20545,"bike":"{sU(w\\\\15kg","a":12197,"b":"/cAMGdeU1T","name":"\'g;|rB$kyM","prop":"jc2zmQ\'?s<"}',
    '{"foo":"4!2VGM|p)V","bar":82835,"bike":44165,"a":59011,"b":"[%4N<2@V\\"J","name":85356,"prop":"E3\',o{w_jW"}',
    '{"foo":63929,"bar":"a3yz6N]/?R","bike":90454,"a":15887,"b":"OUI=HcGqHy","name":42922,"prop":47832}',
    '{"foo":"66GXDS`ID^","bar":45952,"bike":"8WeQ},o.A6","a":12150,"b":"[K@F^.`)+b","name":8318,"prop":36899}',
    '{"foo":99900,"bar":"7M3Il8d|i1","bike":88567,"a":28316,"b":57933,"name":27601,"prop":"Y:\\"&(DmH?q"}',
    '{"foo":81624,"bar":47361,"bike":";ZOvlTcx\\\\^","a":"*G|h{RUj\\"m","b":18319,"name":73619,"prop":"e^,sW[C3E="}',
    '{"foo":22090,"bar":39187,"bike":"po$1:M.d?P","a":71504,"b":71275,"name":"3$!}8!Mv@1","prop":"]1?j;\\"M9eh"}',
    '{"foo":"(S_jOO#hU;","bar":91492,"bike":64265,"a":"\\\\En6Z}lA\\"C","b":"K|-<m8Q{\\"o","name":"msjARdJ8yz","prop":"K#(Cx$*(>8"}',
    '{"foo":"#ew>|=CB0W","bar":"_qsYcV\'s8A","bike":77012,"a":"3PUWqJ0910","b":55109,"name":974,"prop":"8/X\\\\r7a>Gd"}',
    '{"foo":11565,"bar":"39-[-h>8Gu","bike":",rBbzAIKKC","a":11485,"b":"F{J5Vo;XX5","name":97452,"prop":18439}',
    '{"foo":23378,"bar":"%&;s}V0p:y","bike":"bDd6h1QUqI","a":47888,"b":22956,"name":"KQ2:f7RE/.","prop":"THt5Ph#SM6"}',
    '{"foo":"JkN@A#D`+,","bar":"N|V;bF#k%7","bike":"2A=0}d$=L_","a":"-|?=Y0YPB>","b":69855,"name":"fAarA>cc!C","prop":37797}',
    '{"foo":5190,"bar":31358,"bike":45467,"a":4471,"b":"=BQ9\']fQEQ","name":52876,"prop":12811}',
    '{"foo":"4&\'%V#5}zM","bar":95661,"bike":45626,"a":57805,"b":76247,"name":44663,"prop":"#6uzFkwIEX"}',
    '{"foo":77611,"bar":14357,"bike":68193,"a":52939,"b":"(`ZHw:pLQ(","name":42772,"prop":"UOLDdqwY=O"}',
    '{"foo":961,"bar":15395,"bike":84052,"a":"q{nV`XZSL:","b":"Jf+!S%L7|a","name":44555,"prop":"1kZqZtUCi;"}',
    '{"foo":"P]\'wNv(\\\\,O","bar":"O.8#1]{E=9","bike":92024,"a":30744,"b":82047,"name":":/{u]#Kxm%","prop":"|[}e\\\\\\"-Rdh"}',
    '{"foo":88134,"bar":89208,"bike":"BW3-U/\'_T\'","a":"pvy@l<Y0HI","b":52016,"name":">v|\\\\RZV>bN","prop":38676}',
    '{"foo":78038,"bar":"G.\\\\)fkYf\'2","bike":"evkdn.G)$1","a":"FeAv=#`\\\\V/","b":"evsTX|4jIL","name":"Uth.``|h^-","prop":"zNv4FTK:Er"}',
    '{"foo":93732,"bar":"[DMc.e%s9\'","bike":5584,"a":91882,"b":":?v@-V1ncU","name":12236,"prop":"j3d){Ua@2]"}',
    '{"foo":16621,"bar":"UR8wzuS2t0","bike":15683,"a":"1%6_rnNiX7","b":"be3H1yQ5e]","name":47356,"prop":"7|p[qh),G\\""}',
    '{"foo":"{=S?LM$HQ4","bar":"=AXy6Gbby#","bike":"lM3TZYgcPp","a":"v[!c24$qgu","b":71664,"name":65316,"prop":81839}',
    '{"foo":3047,"bar":":D=_QhjyY*","bike":"2_21\\",m1o@","a":280,"b":56296,"name":"T0wE+kZayx","prop":36513}',
    '{"foo":6702,"bar":"Xe&1Qr6y`G","bike":21057,"a":"X0F.AavJ.$","b":"_z3)w[L$<T","name":49150,"prop":38889}',
    '{"foo":"Tf#Iz{]Q6<","bar":47731,"bike":"8:nT6R}o!\'","a":72054,"b":"B,#wI=`Z*3","name":52666,"prop":"%&r8C\\\\5Y`p"}',
    '{"foo":"16:\\"2ZEw_s","bar":"/j[\'MtiIuW","bike":32045,"a":47295,"b":86020,"name":"aJsZE.]86O","prop":"8i{r<xcIeb"}',
    '{"foo":"n@j?sZ`app","bar":";):-5<]}7s","bike":74428,"a":19684,"b":"OLVD.B`8+Y","name":"PdLG`?\\\\vIx","prop":"[8\\"Vv=1=\\"}"}',
    '{"foo":42919,"bar":"\\\\X3IIG\\\\xhP","bike":"-!&e473!2h","a":67304,"b":40127,"name":")6v^}E!^9p","prop":74305}',
    '{"foo":"\\"b_;rUkA>y","bar":"N,AEnci@mY","bike":20892,"a":"lc7uP/;jyR","b":76394,"name":27826,"prop":423}',
    '{"foo":"PwK$.<`sX!","bar":88018,"bike":"{Rqgh:9$vS","a":69114,"b":56398,"name":"n9d@%}p[vT","prop":87456}',
    '{"foo":"|8tesf#/B5","bar":31198,"bike":"P1(!/+%a87","a":"zP5<!Ec8\\\\8","b":98992,"name":")m5E$=q]B?","prop":53766}',
    '{"foo":"53y@>K%J#^","bar":83668,"bike":"ex\\"P)fw}#6","a":62609,"b":"mgL[]Q-Ihe","name":"rDD:IT,45$","prop":"_505yUpgU*"}',
    '{"foo":10106,"bar":85829,"bike":"es&Mmf}R3)","a":"T9j}@0H&(/","b":12171,"name":59853,"prop":19184}',
    '{"foo":86019,"bar":32288,"bike":"O}tgVl7j&!","a":"0Uv_28`LVf","b":")];xr-QnLl","name":".$Wb+vu1XO","prop":67232}',
    '{"foo":77520,"bar":"3p:}TeNe|6","bike":74245,"a":84898,"b":"I=eJt50?pQ","name":93080,"prop":69292}',
    '{"foo":"|+%C|srx_F","bar":89799,"bike":"-]zZ}vm%*#","a":"16.||J3;_o","b":61771,"name":89127,"prop":"0yqIJli&Sv"}',
    '{"foo":75365,"bar":84610,"bike":":y-_-}d6_9","a":56549,"b":79917,"name":17233,"prop":18745}',
    '{"foo":"Pk!8j;|3t,","bar":"f>.@^.{o;3","bike":26696,"a":14511,"b":2083,"name":"YEll$7Py/{","prop":70122}',
    '{"foo":"(9w,UWzZF6","bar":"aTWm^ow()[","bike":"<Ta$$:&\'#%","a":44977,"b":"k5/g=#:kO]","name":4061,"prop":"a4W4UA\\"\'fY"}',
    '{"foo":"jI>`n)79\']","bar":"fyG*+PngQ.","bike":71619,"a":"Y$f4:nfc?W","b":"+WM(})+=j@","name":45936,"prop":48618}',
    '{"foo":42745,"bar":36494,"bike":43497,"a":79917,"b":74461,"name":"gxM<VL+-=X","prop":43821}',
    '{"foo":"o+49e6:/\\">","bar":81806,"bike":51759,"a":"Ga5d-Op;.h","b":96127,"name":"L\\\\q^^YO4G=","prop":"qEJtS;Hj(%"}',
    '{"foo":"7,K4V{,#s<","bar":"Di1%z}p*v+","bike":83070,"a":82332,"b":87299,"name":91955,"prop":"!Yy4\'[Oc}`"}',
    '{"foo":"d7,4]I[-l}","bar":"wN?%?.$g1S","bike":"Q]&gOtfrW=","a":"%b&=f8m)XS","b":38137,"name":42498,"prop":"?a_5$U7)+A"}',
    '{"foo":"^P`ah?+ido","bar":"Bi2\\\\^|T0XL","bike":"P4#UB34ne`","a":"uBu+;>a!15","b":63950,"name":79679,"prop":81028}',
    '{"foo":"C\'e6ZqPKgX","bar":"<Eq/*A8B-&","bike":"sZ$C>qG@Dr","a":38432,"b":69265,"name":"Z]8:s:}\\"!K","prop":",M$IT|J1=r"}',
    '{"foo":60722,"bar":"]-NkuTA-f)","bike":"M1C\\"[Oi$l.","a":91947,"b":81852,"name":59139,"prop":"Do(ER8i0/$"}',
    '{"foo":"JH0z/rNgT(","bar":73868,"bike":90238,"a":85088,"b":17529,"name":48570,"prop":"i2U+gV]r)k"}',
    '{"foo":45877,"bar":71756,"bike":70557,"a":80509,"b":"Ef&elKIMK*","name":13450,"prop":38028}',
    '{"foo":"4qh!6=B/$P","bar":"VtkF\'&Y&JW","bike":"eCoLs$cQ?=","a":"rct0w\'mOsE","b":44090,"name":"?)^.Ow<Cnl","prop":"Oa4HavMX#g"}',
    '{"foo":"NUnMY-r#UR","bar":18045,"bike":89044,"a":9024,"b":"Q48xP!Q;8i","name":"pri5,D,>V(","prop":"1^6?}?J%Qs"}',
    '{"foo":98479,"bar":"/V=*\\\\NisB{","bike":"00UKNf[X]j","a":27450,"b":"14{.WrV&!j","name":35961,"prop":">Y_|hxQ[}I"}',
    '{"foo":4326,"bar":78617,"bike":22740,"a":66415,"b":74013,"name":9626,"prop":51276}',
    '{"foo":"!Y_Qa_^?kS","bar":":h<I]E%iMR","bike":"n%G@YKcId&","a":34295,"b":31521,"name":95642,"prop":"&(l.N;\\\\ot("}',
    '{"foo":94662,"bar":84128,"bike":6198,"a":40044,"b":"qd7k_Nl&j>","name":34682,"prop":42475}',
    '{"foo":41382,"bar":"Fipl*\'a@_\\\\","bike":"N%[>[_GAGR","a":"w4{d#-L2Jh","b":88243,"name":"?Pa\\\\Gp-P,w","prop":"=rl23K?sOi"}',
    '{"foo":57807,"bar":"6Yt\\\\iH:luN","bike":3802,"a":77743,"b":95474,"name":"&uH:SYelpr","prop":"Ek-tlc*yfU"}',
  ]);
}
