phansanpham();
phantaikhoan();
var sanpham =JSON.parse(localStorage.getItem('phansanpham'));
var sl,temp=[];
function theloai (matl , tentl) {
		this.matl = matl;
		this.tentl = tentl;}
function quanlysanpham(){
	document.getElementById('showoffmidAdmin1').style.display = 'block';
	document.getElementById('showoffmidAdmin2').style.display = 'none';
	document.getElementById('showoffmidAdmin3').style.display = 'none';
}
function quanlytaikhoan(){
	document.getElementById('showoffmidAdmin2').style.display = 'block';
	phansanpham();
	document.getElementById('searchad').value="";
	document.getElementById('showoffmidAdmin1').style.display = 'none';
	document.getElementById('showoffmidAdmin3').style.display = 'none';
}
function quanlydonhang(){
	document.getElementById('showoffmidAdmin3').style.display = 'block';
	document.getElementById('searchad').value="";
	document.getElementById('showoffmidAdmin2').style.display = 'none';
	document.getElementById('showoffmidAdmin1').style.display = 'none';
	document.getElementById('donhangcuahang').style.display = 'block';
	document.getElementById('chitietdonhang').style.display = 'none';
	document.getElementById('chitietkh').style.display = 'none';
}
function tat(){
	document.getElementById('chitietkh').style.display = 'none';
	document.getElementById('chitietdonhang').style.display = 'none';
	document.getElementById('showoffmidAdmin3').style.display='block';
	document.getElementById('donhangcuahang').style.display = 'block';
	xulydonhang();
}
function xoatt(){
	document.getElementById('fullnametkm').value = ""
	document.getElementById('usernametkm').value = ""
	document.getElementById('passwordtkm').value = ""
	document.getElementById('phonenumbertkm').value = ""
	document.getElementById('addresstkm').value = ""
}
/*SEARCH ADMIN*/
function searchad (argument) {
	input=document.getElementById('searchad').value;
	document.getElementById("phantrangAdmin").style.display = 'none';
	var sanpham = JSON.parse(localStorage.getItem('phansanpham'));
	var b = "";
	var mangtam = [];var oo=0;
	filter=input.toUpperCase();
    if ((filter)) {
        for(y=0; y<sanpham.length; y++){
            if(sanpham[y].name.toUpperCase().indexOf(filter)>-1){
              	mangtam[oo]=sanpham[y];
				oo++;
              	}}}
	var theloaiarr=[
		new theloai("ca","CASIO"),
		new theloai("ci","CITIZEN"),
		new theloai("mv","MVMT"),
		new theloai("ed","EDIFICE"),
		new theloai("gs","G-SHOCK"),
		new theloai("or","ORIENT"),
		new theloai("op","Olym Pianus"),
		new theloai("os","Olymphia Star")];
	for(i = 0 ; i<mangtam.length;i++){
		var gt;
		if (mangtam[i].gioitinh=='nam') {
			gt="NAM";		}	
		else if (mangtam[i].gioitinh=='nu') {
			gt="N???";}
		var a='<div style="float:left;height: 100%;width: 100%">'+
					'<div class="khungnhosp"><img style="width:100px;float:left;height:90px" src="../images/'+mangtam[i].img+'"></div>'+
					'<div class="khungnhosp">'+mangtam[i].name+'</div>';
					for(j=0;j<theloaiarr.length;j++)
						if(theloaiarr[j].matl==mangtam[i].thuonghieu){
							a+='<div class="khungnhosp">'+theloaiarr[j].tentl+'</div>';
							break;
						}
						a+='<div class="khungnhosp">'+vietnamdong(mangtam[i].giatien)+'</div>'+
						'<div class="khungnhosp">'+gt+'</div>'+
						'<div class="khungnhosp">'+mangtam[i].masanpham+'</div>'+
						'<div class="khungquanlysp">'+
							'<div class="nuttaikhoan"><buton  onclick="hienthongtin('+mangtam[i].masanpham+')">C???p nh???t</buton></div>'+
							'<div class="nuttaikhoan"><buton  onclick="xoa('+mangtam[i].masanpham+')" >X??a</buton></div>'+
						'</div>'+
						'</div>';
		b=b+a;}
	document.getElementById("hienthi").innerHTML = b;
	if(input == ""){
		phansanpham();
	}	
}
function searchtk(argument){
	input=document.getElementById('searchtk').value;
	var user = JSON.parse(localStorage.getItem('user'));
	var b = "";
	var mangtam = [];var oo=0;
	filter=input.toLowerCase();
	if ((filter)) {
    for(i=1;i<user.length;i++){
    	if(user[i].username.toLowerCase().indexOf(filter)>-1 ){
    		mangtam[oo]=user[i];
				oo++;
              	}}}
    for(i = 0; i<mangtam.length;i++){
		var a='<div style="float:left;height: 100%;width: 100%">'+
						'<div class="khungnho">'+mangtam[i].fullname+'</div>'+
						'<div class="khungnho">'+mangtam[i].username+'</div>'+
						'<div class="khungnho">'+mangtam[i].password+'</div>'+
						'<div class="khungnho">'+mangtam[i].address+'</div>'+
						'<div class="khungnho">'+mangtam[i].phone+'</div>'+
						'<div style="cursor: pointer;" class="khungquanly">'+
								'<div class="nuttaikhoan"><buton onclick="hienthongtintk('+mangtam[i].phone+')">S???a th??ng tin</buton></div>'+
								'<div class="nuttaikhoan"><buton onclick="xoatk('+mangtam[i].phone+')" >X??a</buton></div>'+
						'</div>'+
						'</div>';
		b=b+a;}
	document.getElementById("hienthitaikhoan").innerHTML = b;
	if(input == ""){
		phantaikhoan();
	}	
}
/*END SEARCH ADMIN*/
/*PRODUCT MANAGE*/
function phansanpham (sanpham) {
	var sanpham =JSON.parse(localStorage.getItem('phansanpham'));
	var b='';
	sl = Math.ceil(sanpham.length/12);
	var ss="";
	if(sl!=1)
		for(j =1;j<=sl;j++)
	    	ss+='<div onclick="phantrang('+j+',sanpham)" class="sophantrang"> <a href="#">'+j+'</a> </div>'    
	document.getElementById("phantrangAdmin").innerHTML=ss;
	sotrang=0;
	var gt;
	var dem =0, vitri=sotrang*12;
	for(i = vitri ; i<sanpham.length;i++){
		if (sanpham[i].gioitinh=='nam') {
			gt="NAM";		}	
		else if (sanpham[i].gioitinh=='nu') {
			gt="N???";}}
	for(i = vitri ; i<sanpham.length;i++){
		var a='<div style="float:left;height: 100%;width: 100%">'+
					'<div class="khungnhosp"><img style="width:100px;float:left;height:90px" src="../images/'+sanpham[i].img+'"></div>'+
					'<div class="khungnhosp">'+sanpham[i].name+'</div>'+
					'<div class="khungnhosp">'+sanpham[i].thuonghieu+'</div>'+
					'<div class="khungnhosp">'+vietnamdong(sanpham[i].giatien)+'</div>'+
					'<div class="khungnhosp">'+gt+'</div>'+
					'<div class="khungnhosp">'+sanpham[i].masanpham+'</div>'+
					'<div class="khungquanlysp">'+
							'<div class="nuttaikhoan"><buton onclick="hienthongtin('+sanpham[i].masanpham+')">C???p nh???t</buton></div>'+
							'<div class="nuttaikhoan"><buton onclick="xoa('+sanpham[i].masanpham+')" >X??a</buton></div>'+
					'</div>'+
					'</div>';
		b=b+a;
		dem++;
		if (dem==12) {
			sotrang++;
			break;}}
	document.getElementById("hienthi").innerHTML = b;
}
function phantrang (x) {	
	var menu =[
		new theloai("nam","?????NG H??? NAM"),
		new theloai("nu","?????NG H??? N???"),];
	var theloaiarr=[
		new theloai("ca","CASIO"),
		new theloai("ci","CITIZEN"),
		new theloai("mv","MVMT"),
		new theloai("ed","EDIFICE"),
		new theloai("gs","G-SHOCK"),
		new theloai("or","ORIENT"),
		new theloai("op","Olym Pianus"),
		new theloai("os","Olymphia Star")];
	x=x-1;
	var b='';
	var dem=0,vitri = x*12,gt;
	var sl1 = Math.ceil(sanpham.length/12);
	if(sl!=sl1){
		for(i = vitri ; i<temp.length;i++){
			if (temp[i].gioitinh=='nam') {
				gt="NAM";		}	
			else if (temp[i].gioitinh=='nu') {
				gt="N???";}
			var a='<div style="float:left;height: 100%;width: 100%">'+
					'<div class="khungnhosp"><img style="width:100px;float:left;height:90px" src="../images/'+sanpham[i].img+'"></div>'+
					'<div class="khungnhosp">'+sanpham[i].name+'</div>';
					for(j=0;j<theloaiarr.length;j++)
						if(theloaiarr[j].matl==sanpham[i].thuonghieu){
							a+='<div class="khungnhosp">'+theloaiarr[j].tentl+'</div>';
							break;
						}
						a+='<div class="khungnhosp">'+vietnamdong(sanpham[i].giatien)+'</div>'+
						'<div class="khungnhosp">'+gt+'</div>'+
						'<div class="khungnhosp">'+sanpham[i].masanpham+'</div>'+
						'<div class="khungquanlysp">'+
							'<div class="nuttaikhoan"><buton onclick="hienthongtin('+sanpham[i].masanpham+')">C???p nh???t</buton></div>'+
							'<div class="nuttaikhoan"><buton onclick="xoa('+sanpham[i].masanpham+')" >X??a</buton></div>'+
						'</div>'+
						'</div>';
			b=b+a;
			dem++;s
			if (dem==12) {
				sotrang++;
				break;}}}
	else {
		for(i = vitri ; i<sanpham.length;i++){
			if (sanpham[i].gioitinh=='nam') {
				gt="NAM";		}	
			else if (sanpham[i].gioitinh=='nu') {
				gt="N???";}
			var a='<div style="float:left;height: 100%;width: 100%">'+
					'<div class="khungnhosp"><img style="width:100px;float:left;height:90px" src="../images/'+sanpham[i].img+'"></div>'+
					'<div class="khungnhosp">'+sanpham[i].name+'</div>';
					for(j=0;j<theloaiarr.length;j++)
						if(theloaiarr[j].matl==sanpham[i].thuonghieu){
							a+='<div class="khungnhosp">'+theloaiarr[j].tentl+'</div>';
							break;
						}
						a+='<div class="khungnhosp">'+vietnamdong(sanpham[i].giatien)+'</div>'+
						'<div class="khungnhosp">'+gt+'</div>'+
						'<div class="khungnhosp">'+sanpham[i].masanpham+'</div>'+
						'<div class="khungquanlysp">'+
							'<div class="nuttaikhoan"><buton onclick="hienthongtin('+sanpham[i].masanpham+')">C???p nh???t</buton></div>'+
							'<div class="nuttaikhoan"><buton onclick="xoa('+sanpham[i].masanpham+')" >X??a</buton></div>'+
						'</div>'+
						'</div>';
			b=b+a;
			dem++;
			if (dem==12) {
				sotrang++;
				break;}}
	}
	document.getElementById("hienthi").innerHTML = b;
}
function vietnamdong(so) {

  return so.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VND';
}
function kiemtramasp(x){
	for(i=0;i<sanpham.length;i++){
		if(x == sanpham[i].masanpham){
			return true
		}
	}
}
function kiemtramasp1(x){
	var kt = x;
	var v = /[`~!@#$%^&*(_+)/*-.,qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM]/;
	for(i=0;i<kt.length;i++){
		if(v.test(kt[i])){
			return true
		}
	}
}
function checkspmoi(){
	var MSP = document.getElementById('masp').value;
	var TSP = document.getElementById('tensp').value;
	var TH = document.getElementById('thuonghieu').value;
	var GT = document.getElementById('gioitinh').value;
	var GSP = document.getElementById('gia').value;
	var ASP = document.getElementById('anh').value;
	var path = ASP.split("h");
 	var IMG = path[1];
	var KT = true;
	if(!MSP){
		document.getElementById('loimasp').style.display = 'block';
		KT = false;
	} else{
		 if(kiemtramasp(MSP)){
			document.getElementById('loimasp').style.display='block';
			document.getElementById('loimasp').innerHTML='M?? s???n ph???m ???? t???n t???i';
			KT=false}
		else if(kiemtramasp1(MSP)){
			console.log(kiemtramasp1(MSP));
			document.getElementById('loimasp').style.display='block';
			document.getElementById('loimasp').innerHTML='M?? s???n ph???m ph???i l?? s???';
			KT=false
		}else{
			document.getElementById('loimasp').innerHTML='B???n ch??a nh???p m?? s???n ph???m';
			document.getElementById('loimasp').style.display = 'none';
		}
	}
	if(!TSP){
			document.getElementById('loitensp').style.display = 'block';
			KT = false;
		}else{
			document.getElementById('loitensp').style.display = 'none';
		}
	if(!TH){
			document.getElementById('loithuonghieu').style.display = 'block';
			KT = false;
		}else{
			document.getElementById('loithuonghieu').style.display = 'none';
		}
	if(!GT){
			document.getElementById('loigioitinh').style.display = 'block';
			KT = false;
		}else{
			document.getElementById('loigioitinh').style.display = 'none';
		}
	if(!GSP){
			document.getElementById('loigia').style.display = 'block';
			KT = false;
		}else{
			document.getElementById('loigia').style.display = 'none';
		}
	if(KT==false){
		return false;
	}
}
function themspA(){
	var MSP = document.getElementById('masp').value;
	var TSP = document.getElementById('tensp').value;
	var TH = document.getElementById('thuonghieu').value;
	var GT = document.getElementById('gioitinh').value;
	var GSP = document.getElementById('gia').value;
	var ASP = document.getElementById('anh').value;
	var path = ASP.split("h");
 	var IMG = path[1];
	var KT = true;
	if(!MSP){
		document.getElementById('loimasp').style.display = 'block';
		KT = false;
	} else{
		 if(kiemtramasp(MSP)){
			document.getElementById('loimasp').style.display='block';
			document.getElementById('loimasp').innerHTML='M?? s???n ph???m ???? t???n t???i';
			KT=false}
		else if(kiemtramasp1(MSP)){
			console.log(kiemtramasp1(MSP));
			document.getElementById('loimasp').style.display='block';
			document.getElementById('loimasp').innerHTML='M?? s???n ph???m ph???i l?? s???';
			KT=false
		}else{
			document.getElementById('loimasp').innerHTML='B???n ch??a nh???p m?? s???n ph???m';
			document.getElementById('loimasp').style.display = 'none';
		}
	}
	if(!TSP){
			document.getElementById('loitensp').style.display = 'block';
			KT = false;
		}else{
			document.getElementById('loitensp').style.display = 'none';
		}
	if(!TH){
			document.getElementById('loithuonghieu').style.display = 'block';
			KT = false;
		}else{
			document.getElementById('loithuonghieu').style.display = 'none';
		}
	if(!GT){
			document.getElementById('loigioitinh').style.display = 'block';
			KT = false;
		}else{
			document.getElementById('loigioitinh').style.display = 'none';
		}
	if(!GSP){
			document.getElementById('loigia').style.display = 'block';
			KT = false;
		}else{
			document.getElementById('loigia').style.display = 'none';
		}
	if(KT==false){
		return false;
	}
	sanpham.push({masanpham: MSP ,thuonghieu: TH ,img: IMG, name: TSP ,giatien: GSP,gioitinh: GT});
	localStorage.setItem('phansanpham',JSON.stringify(sanpham));
	themspout();
	phansanpham();
}
function themsp() {
	document.getElementById('themsp').style.display = 'block';
}
function themspout() {
	document.getElementById('themsp').style.display = 'none';
}
function hienthongtin(b){
	var s=''
	var gt;
	var theloaiarr=[
		new theloai("ca","CASIO"),
		new theloai("ci","CITIZEN"),
		new theloai("mv","MVMT"),
		new theloai("ed","EDIFICE"),
		new theloai("gs","G-SHOCK"),
		new theloai("or","ORIENT"),
		new theloai("op","Olym Pianus"),
		new theloai("os","Olymphia Star")];
	document.getElementById('sua').style.display='block';
	for(i=0;i<sanpham.length;i++){
		if(sanpham[i].masanpham == b){
			if (sanpham[i].gioitinh=="nam") {
			gt="NAM";}	
			else if (sanpham[i].gioitinh=="nu") {
			gt="N???";}
			var c ="../images/"
			c = c + sanpham[i].img;
			document.getElementById('anhsp1').src= c;
			var c ="M?? S???N PH???M : "
			c = c + sanpham[i].masanpham;
			document.getElementById('masp1').innerHTML = c;
			var c ="T??N S???N PH???M : "
			c = c + sanpham[i].name;
			document.getElementById('tensp1').innerHTML = c;
			for(j=0;j<theloaiarr.length;j++)
				if(theloaiarr[j].matl==sanpham[i].thuonghieu){
					var c ="TH????NG HI???U S???N PH???M : "
					c = c + theloaiarr[j].tentl;
					break;
			}
			document.getElementById('thuonghieusp1').innerHTML = c;
			var c ="S???N PH???M D??NH CHO GI???I T??NH : "
			c = c + gt;
			document.getElementById('gioitinhsp1').innerHTML = c;
			var c ="GI?? : "
			c = c + vietnamdong(sanpham[i].giatien);
			document.getElementById('giasp1').innerHTML = c;
		s='<input type="button"  value="C???P NH???T" onclick="capnhatsp('+sanpham[i].masanpham+')"/>';
	}}
	document.getElementById("nutcapnhat").innerHTML = s; 	
}
function capnhatsp(b){
	var MSP = document.getElementById('masps').value;
	var TSP = document.getElementById('tensps').value;
	var TH = document.getElementById('thuonghieusA').value;
	var GT = document.getElementById('gioitinhs').value;
	var GSP = document.getElementById('gias').value;
	var ASP = document.getElementById('anhs').value;
	var path = ASP.split("h");
	if(!MSP && !TSP && !TH && !GT && !GSP && !ASP ){
		alert('Hi???n t???i kh??ng c?? c???p nh???t b???t k?? ??i???u g??');
	}
	for(var i=0;i<sanpham.length;i++){
		if(sanpham[i].masanpham == b){
			if(MSP){
				sanpham[i].masanpham=MSP;
			}
			if(TSP){
				sanpham[i].name=TSP;
			}
			if(TH){
				sanpham[i].thuonghieu=TH;
			}
			if(GT){
				sanpham[i].gioitinh=GT;
			}
			if(GSP){
				sanpham[i].giatien=GSP;
			}
			if(ASP){
				sanpham[i].img=path[1];
			}
	}
	}
    localStorage.setItem('phansanpham',JSON.stringify(sanpham));
    document.getElementById('sua').style.display='none';
    phansanpham();
}

function suaout() {
	document.getElementById('sua').style.display = 'none';
}
function xoa(b){
	for(i=0;i<sanpham.length;i++){
		if(sanpham[i].masanpham == b){
			if(confirm('b???n c?? mu???n x??a s???n ph???m n??y?')){
			sanpham.splice(i,1);
		}
		}
	}
	localStorage.setItem('phansanpham',JSON.stringify(sanpham));
	phansanpham();
}
/*END PRODUCT MANAGE*/
/*USER MANAGE*/
function phantaikhoan () {
	var taikhoan = JSON.parse(localStorage.getItem('user'));
	var kt = localStorage.getItem('login');
	var tk  = kt.split('"');
	var b='';
	if(taikhoan.length == 1){
		b='<h1>C???A H??NG CH??A C?? T??I KHO???N N??O ????NG K??</h1>'
	}
	else {
		if( tk[3] == 'admin'){
		for(i = 1 ; i<taikhoan.length;i++){
			var a='<div style="float:left;height: 100%;width: 100%">'+
						'<div class="khungnho">'+taikhoan[i].fullname+'</div>'+
						'<div class="khungnho">'+taikhoan[i].username+'</div>'+
						'<div class="khungnho">'+taikhoan[i].password+'</div>'+
						'<div class="khungnho">'+taikhoan[i].address+'</div>'+
						'<div class="khungnho">'+taikhoan[i].phone+'</div>'+
						'<div style="cursor: pointer;" class="khungquanly">'+
								'<div class="nuttaikhoan"><buton onclick="hienthongtintk('+taikhoan[i].phone+')">S???a th??ng tin</buton></div>'+
								'<div class="nuttaikhoan"><buton onclick="xoatk('+taikhoan[i].phone+')" >X??a</buton></div>'+
						'</div>'+
						'</div>';
				b=b+a;
		}}
	else { b='<h1>B???N KH??NG C?? QUY???N TRUY C???P M???C N??Y</h1>'}	
	}
	
	document.getElementById("hienthitaikhoan").innerHTML = b;
}
function xoatk(value){
	var taikhoan = JSON.parse(localStorage.getItem('user'));
	for(i=1;i<taikhoan.length;i++){
		if(taikhoan[i].phone == value){
			if(confirm('b???n c?? mu???n x??a ng?????i d??ng n??y?')){
			taikhoan.splice(i,1);
		}
		}
	}
	document.getElementById('searchtk').value="";
	localStorage.setItem('user',JSON.stringify(taikhoan));
	phantaikhoan();
}
function hienthongtintk(b){
	var taikhoan = JSON.parse(localStorage.getItem('user'));
	var s='<h2>Th??ng tin ng?????i d??ng c???n s???a:</h2>';
	document.getElementById('suatk').style.display='block';
	for(i=1;i<taikhoan.length;i++)
		if(taikhoan[i].phone == b){
			var a='<div style="float:left;height: 100px;width: 100%">'+
					'<div class="khungnho">'+taikhoan[i].fullname+'</div>'+
					'<div class="khungnho">'+taikhoan[i].username+'</div>'+
					'<div class="khungnho">'+taikhoan[i].password+'</div>'+
					'<div class="khungnho">'+taikhoan[i].address+'</div>'+
					'<div class="khungnho">'+taikhoan[i].phone+'</div>'+
					'<div style="height:40px;width: 16%;float:left;border: 1px solid black;text-align: center;background-color : #34495e ;color: white">QUY???N</div>'
					if (taikhoan[i].quyen == 1) {
						a+='<select id="quyen" class="luachon"><option value='+1+'>KH??CH H??NG</option><option value='+2+'>NH??N VI??N</option><option value='+0+'>KHO?? T??I KHO???N</option></select></div>'
						}
					else if(taikhoan[i].quyen == 2){
						a+='<select id="quyen" class="luachon" ><option value='+2+'>NH??N VI??N</option><option value='+1+'>KH??CH H??NG</option><option value='+0+'>KHO?? T??I KHO???N</option></select></div>'
					}
					else if(taikhoan[i].quyen == 0){
						a+='<select id="quyen" class="luachon" ><option value='+0+'>KHO?? T??I KHO???N</option><option value='+1+'>KH??CH H??NG</option><option value='+2+'>NH??N VI??N</option></select></div>'
					}
					;
			s=s+a;
			document.getElementById('thongtintk').innerHTML = s;
		b='<input type="button"  value="C???P NH???T" onclick="capnhattk('+i+')"/>';
	}
	document.getElementById("nutcapnhattk").innerHTML = b; 	
}
function kttkddk(x){
	var u = JSON.parse(localStorage.getItem('user'));
	for(i=0;i<u.length;i++){
		if(x == u[i].username){
			return true
		}
	}
}
function checkcntk(){
	var user = JSON.parse(localStorage.getItem('user'));
	var FN = document.getElementById('fullnametkm').value;
	var N = document.getElementById('usernametkm').value;
	var P = document.getElementById('passwordtkm').value;
	var PN = document.getElementById('phonenumbertkm').value;
	var A = document.getElementById('addresstkm').value;
	var NN =N.toLowerCase();
	var Q = document.getElementById('quyen').value;
	var KT=true;
	if(kttkddk(N)==true){
		document.getElementById('loiusernametkm').style.display = 'block';
		KT = false;
	}else{
		document.getElementById('loiusernametkm').style.display = 'none';
	}
	if(PN){
		if(Number(PN)<100000000 || Number(PN)>999999999){
			document.getElementById('loiphonenumbertkm').style.display = 'block';
			KT = false;
			}else{
				document.getElementById('loiphonenumbertkm').style.display = 'none';
			}
	}
	if(P){
		if(P.length<8){
			document.getElementById('loipasswordtkm').style.display = 'block';
			KT = false;
			}else {
				document.getElementById('loipasswordtkm').style.display = 'none';
			}
	}
}
function capnhattk(b){
	var user = JSON.parse(localStorage.getItem('user'));
	var FN = document.getElementById('fullnametkm').value;
	var N = document.getElementById('usernametkm').value;
	var P = document.getElementById('passwordtkm').value;
	var PN = document.getElementById('phonenumbertkm').value;
	var A = document.getElementById('addresstkm').value;
	var NN =N.toLowerCase();
	var Q = document.getElementById('quyen').value;
	var KT=true;
	if(kttkddk(N)==true){
		document.getElementById('loiusernametkm').style.display = 'block';
		KT = false;
	}else{
		document.getElementById('loiusernametkm').style.display = 'none';
	}
	if(PN){
		if(Number(PN)<100000000 || Number(PN)>999999999){
			document.getElementById('loiphonenumbertkm').style.display = 'block';
			KT = false;
			}else{
				document.getElementById('loiphonenumbertkm').style.display = 'none';
			}
	}
	if(P){
		if(P.length<8){
			document.getElementById('loipasswordtkm').style.display = 'block';
			KT = false;
			}else {
				document.getElementById('loipasswordtkm').style.display = 'none';
			}
	}
	if(KT==false){
		return false;
	}
	for(var i=0;i<user.length;i++){
		if(i == b){
			if(FN){
				user[i].fullname=FN;
			}
			if(NN){
				user[i].username=NN;
			}
			if(P){
				user[i].password=P;
			}
			if(A){
				user[i].address=A;
			}
			if(PN){
				user[i].phone=PN;
			}
			if(Q){
				user[i].quyen=Q;
			}
	}
	}
    localStorage.setItem('user',JSON.stringify(user));
  	alert("S???A TH??NG TIN TH??NH C??NG");
  	xoatt();
    suatkout();
    phantaikhoan();
}

function suatkout() {
	document.getElementById('suatk').style.display = 'none';
	xoatt();
}

/*END USER MANAGE*/
/*ORDER MANAGE*/
function xulydonhang() {
	var ss = ""
	var giohang = JSON.parse(localStorage.getItem('giohangadmin'))
	var taikhoan = JSON.parse(localStorage.getItem('user'))
	//document.getElementById('showoffmidAdmin3').style.display='block';
	var x = JSON.parse(localStorage.getItem('time'));
	var p = 1,j=0, ngay,gio,time ="",xetdh;
	var t=0 ,g="",v="",tong = 0 ,tk="",kkkk;
	if(giohang != null){
		 var o= giohang[0].donhangso
		var j = (giohang.length-1);
		for(i = 1 ; i <= o; i++){
			kk=0;
			kkkk = j;
			while (giohang[j].donhangso == i ) {
				t += parseInt(giohang[j].soluong);
			 	g += vietnamdong(giohang[j].soluong*giohang[j].giatien) +' VN??<br>';
			 	tong += giohang[j].soluong*giohang[j].giatien;
			 	v=giohang[j].tinhtrang;
			 	tk= giohang[j].taikhoan;
			 	xetdh = giohang[j].donhangso;
			 	j--;
			 	kk++;
			if(giohang[j] == null){break;}}
			for(ii=0;ii<x.length;ii++){
				time = x[ii].split('|');
			 	if(time[0]== xetdh){
						ngay = time[2];
						gio = time[1];}
			}
			 	if(kk != 0){
			 	var a ='<div class="ttdh" style="margin-top: 40px;widows: 100%;padding: 5px;height: 200px;">'+
			 		'<div class="ttdh" style="width:18%;height:100%;float : left;text-align: center;font-size: 130%;border: solid 1px black;line-height:45px">????N H??NG : '+p+'<br>DATE : '+ngay+'<br>TIME : '+gio+'<br><button onclick="chitietdonhang('+j+')">Chi ti???t ????n h??ng</button></div>'+
					'<div class="ttdh" style="width:20%;height:100%;float : left;text-align: center;font-size: 130%;line-height: 30px;border: solid 1px black;">T??I KHO???N MUA H??NG  <br>'+tk+'<br><button onclick="chitietkh('+j+')">Chi ti???t kh??ch h??ng</button></div><div style="width:20%;height:100%;float : left;text-align: center;font-size: 130%;line-height: 80px;border: solid 1px black;">S??? l?????ng : <br>'+t+'</div>'+
					'<div class="ttdh" style="width:20%;height:100%;float : left;text-align: center;font-size: 130%;line-height: 80px;border: solid 1px black;">T???NG ????N H??NG: <br>'+vietnamdong(tong)+'</div>'+
					'<div class="ttdh" style="width:20%;height:100%;float : left;text-align: center;font-size: 110%;line-height: 80px;border: solid 1px black;background-color: #d1d3b9;">T??NH TR???NG ????N H??NG: <br>'+v+'</div></div>';
				ss+=a;
				t=0,g="",v="",tong = 0,p++;}
			 	}
		}
		else {ss+='<div style="margin-left: 20%;margin-top:150px"><h2>C???A H??NG HI???N CH??A C?? ????N H??NG N??O</h2></div>'	
		ss+='<div style="width :100%;height:50px"></div>'}
	document.getElementById('chuadonhang').innerHTML = ss;
}
function chitietdonhang (bc) {
	bc++;
	var sss="";
	document.getElementById('donhangcuahang').style.display = 'none';
	document.getElementById('chitietdonhang').style.display = 'block';
	document.getElementById('chitietkh').style.display = 'none';
	var giohang = JSON.parse(localStorage.getItem('giohangadmin'));
	var taikhoan = JSON.parse(localStorage.getItem('user'));
	var x = JSON.parse(localStorage.getItem('time'));
	var tkk = giohang[bc].taikhoan,ngay,gio,time = "";
	for(i=0;i<taikhoan.length;i++){
		if(taikhoan[i].username == tkk){
			var a = '<div style="float: right;cursor: pointer;font-size: 30px;padding-right: 10px;margin-top: 1px;">'+
				'<a style="font-size:130%" id="tat" onclick="tat()">X</a></div>'+
				'<h1 style="margin-left:40px;margin-bottom: 30px;margin-top : 30px">TH??NG TIN KH??CH H??NG </h1>'+
			'<div style="margin-left:20%;width:80%;height :70px;margin-top:70px"><h4>H??? V?? T??N :   '+taikhoan[i].fullname+'</h4></div><div style="margin-left:20%;width:80%;height :70px"><h4>T??N T??I KHO???N :   '+taikhoan[i].username+'</h4></div><div style="margin-left:20%;width:80%;height :70px"><h4>S??? ??I???N THO???I :'+taikhoan[i].phone+'</h4></div><div style="margin-left:20%;width:80%;height :70px;"><h4>?????A CH??? :   '+taikhoan[i].address+'</h4></div><div style="margin-left:20%;width:80%;height :70px"><button style="width :200px;height:70px;background-color: #d1d3b9;margin-right: 20px;" onclick="quadh()">TR??? V??? ????N H??NG</button></div>'
			sss+=a; 
			break;
		}
	}
	document.getElementById('chitietkh').innerHTML = sss;
	var tongbill = 0;
	o = giohang[bc].donhangso		
	for( i = 0 ;i<x.length;i++){
		time = x[i].split('|')
			if(time[0]== o){
				ngay = time[2];
				gio = time[1];}}
	var ss='<div style="float: right;cursor: pointer;font-size: 30px;padding-right: 10px;margin-top: 1px;"><a style="font-size:130%" id="tat" onclick="tat()" >X</a></div><h1 style="margin-left:40px;margin-bottom: 30px;margin-top : 30px">C??C S???N PH???M TRONG ????N H??NG </h1><div style="margin-left:42%"><button onclick="quatk()" style="width :200px;height:70px;background-color: #d1d3b9;margin-right: 20px;">TH??NG TIN KH??CH H??NG</button></div>',t ="",g="",v ="",tong = 0;
	var hh = giohang[bc].tinhtrang
	var chottien,gt;
		while (giohang[bc].donhangso == o ) {
			chottien= giohang[bc].soluong * giohang[bc].giatien;
			tongbill+=chottien;
			if (giohang[bc].gioitinh=='nam') {
				gt="?????NG H??? NAM";		}	
			else if (giohang[bc].gioitinh=='nu') {
				gt="?????NG H??? N???";}
			var a='<div class="chitietsp1"><div style="width:5%;height : 100%;float : left"></div><div style="width:10%;height: 100%;float:left"><img style="width:100%;" src="../images/'+giohang[bc].img+'">'+
			'</div><div style="width:25%;height : 100%;float : left;text-align: center;font-size: 100%;	line-height: 70px;">T??N S???N PH???M :<br>'+giohang[bc].name+'</div><div style="width:10%;height : 100%;float : left;text-align: center;font-size: 100%;line-height: 70px;">KI???U ?????NG H???:<br>'+gt+'</div><div style ="width:10%;height:100%;float : left;	line-height: 70px;text-align: center">S??? L?????NG :<br>'+ giohang[bc].soluong+' C??I</div>'+
			'<div style="width:13%;height : 100%;float : left;text-align: center;font-size: 100%;line-height: 70px;">GI?? :<br>'+vietnamdong(giohang[bc].giatien)+'</div><div style="width:20%;height : 100%;float : left;text-align: center;font-size: 100%;	line-height: 70px;">TH??NH TI???N :<br>'+vietnamdong(chottien)+'</div></div>';
			ss+=a;
			bc++;
			if(giohang[bc] == null)
				{break;}
		}

		ss+='<div style="text-align: center;;width:60%;padding-top:100px;float:right;margin-bottom:50px"><h2>T??NH TR???NG ????N H??NG</h2><select id="xuly">'
		if(hh == "CH??A X??? L??")
		{
			ss+='<option value="cxl">CH??A X??? L??</option><option value="dxl">???? X??? L??</option>'}
		else {
			ss+='<option value="dxl">???? X??? L??</option><option value="cxl">CH??A X??? L??</option>'
		}
		ss+='</select></div><div style="width:40%;height:100%;padding-left: 15%;padding-top:100px;margin-bottom:80px"><h1 style="float:left">T???NG TI???N: '+vietnamdong(tongbill)+'</h1></div><div style="width:50%;height :70px;padding-left:45%;margin-bottom:70px;font-size:130%margin-bottom:50px">NG??Y ?????T H??NG : '+ngay+'<br>GI??? : '+gio+'<br><a href="admin.html"><button style="font-size:150%" onclick="xacnhan('+bc+')">X??C NH???N</button></a></div>'
		document.getElementById('chitietdonhang').innerHTML = ss;		
}
function xacnhan(bt) {
	bt--;
	var ch = bt;
	var bien = "";
	var giohang = JSON.parse(localStorage.getItem('giohangadmin'));
	oo = giohang[bt].donhangso;
	var xl = document.getElementById('xuly').value;
	if(xl == 'cxl'){
		bien = "CH??A X??? L??"}
	else if ( xl == 'dxl'){
		bien = "???? X??? L??"}
	while (giohang[bt].donhangso == o ) {
		giohang[bt].tinhtrang = bien;
		bt--;
		if(giohang[bt] == null)
				{break;}
	}
	console.log(giohang[ch].tinhtrang);
	localStorage.setItem('giohangadmin',JSON.stringify(giohang));
	chitietdonhang(bt);	

}
function chitietkh (bc) {
	bc++;
	var sss="";
	document.getElementById('donhangcuahang').style.display = 'none';
	document.getElementById('chitietdonhang').style.display = 'none';
	document.getElementById('chitietkh').style.display = 'block';
	var giohang = JSON.parse(localStorage.getItem('giohangadmin'));
	var taikhoan = JSON.parse(localStorage.getItem('user'));
	var x = JSON.parse(localStorage.getItem('time'));
	var tkk = giohang[bc].taikhoan,ngay,gio,time = "";
	for(i=0;i<taikhoan.length;i++){
		if(taikhoan[i].username == tkk){
			var a = '<div style="float: right;cursor: pointer;font-size: 30px;padding-right: 10px;margin-top: 1px;">'+
				'<a style="font-size:130%" id="tat" onclick="tat()">X</a></div>'+
				'<h1 style="margin-left:40px;margin-bottom: 30px;margin-top : 30px">TH??NG TIN KH??CH H??NG </h1>'+
			'<div style="margin-left:20%;width:80%;height :70px;margin-top:70px"><h4>H??? V?? T??N :   '+taikhoan[i].fullname+'</h4></div><div style="margin-left:20%;width:80%;height :70px"><h4>T??N T??I KHO???N :   '+taikhoan[i].username+'</h4></div><div style="margin-left:20%;width:80%;height :70px"><h4>S??? ??I???N THO???I :'+taikhoan[i].phone+'</h4></div><div style="margin-left:20%;width:80%;height :70px;"><h4>?????A CH??? :   '+taikhoan[i].address+'</h4></div><div style="margin-left:20%;width:80%;height :70px"><button style="width :200px;height:70px;background-color: #d1d3b9;margin-right: 20px;" onclick="quadh()">TR??? V??? ????N H??NG</button></div>'
			sss+=a; 
			break;
		}
	}
	document.getElementById('chitietkh').innerHTML = sss;
	var tongbill = 0;
	o = giohang[bc].donhangso		
	for( i = 0 ;i<x.length;i++){
		time = x[i].split('|')
			if(time[0]== o){
				ngay = time[2];
				gio = time[1];}}
	var ss='<div style="float: right;cursor: pointer;font-size: 30px;padding-right: 10px;margin-top: 1px;"><a style="font-size:130%" id="tat" onclick="tat()"  >X</a></div><h1 style="margin-left:40px;margin-bottom: 30px;margin-top : 30px">C??C S???N PH???M TRONG ????N H??NG </h1><div style="margin-left:42%"><button onclick="quatk()" style="width :180px;height:70px;background-color: #d1d3b9;margin-right: 20px;">TR??? V??? TH??NG TIN KH??CH H??NG</button></div>',t ="",g="",v ="",tong = 0;
	var hh = giohang[bc].tinhtrang
	var chottien,gt;
		while (giohang[bc].donhangso == o ) {
			chottien= giohang[bc].soluong * giohang[bc].giatien;
			tongbill+=chottien;
			if (giohang[bc].gioitinh=='nam') {
				gt="?????NG H??? NAM";		}	
			else if (giohang[bc].gioitinh=='nu') {
				gt="?????NG H??? N???";}
			var a='<div class="chitietsp1"><div style="width:5%;height : 100%;float : left"></div><div style="width:10%;height: 100%;float:left"><img style="width:100%;" src="../images/'+giohang[bc].img+'">'+
			'</div><div style="width:25%;height : 100%;float : left;text-align: center;font-size: 100%;	line-height: 70px;">T??N S???N PH???M :<br>'+giohang[bc].name+'</div><div style="width:10%;height : 100%;float : left;text-align: center;font-size: 100%;line-height: 70px;">KI???U ?????NG H???:<br>'+gt+'</div><div style ="width:10%;height:100%;float : left;	line-height: 70px;text-align: center">S??? L?????NG :<br>'+ giohang[bc].soluong+' C??I</div>'+
			'<div style="width:13%;height : 100%;float : left;text-align: center;font-size: 100%;line-height: 70px;">GI?? :<br>'+vietnamdong(giohang[bc].giatien)+'</div><div style="width:20%;height : 100%;float : left;text-align: center;font-size: 100%;	line-height: 70px;">TH??NH TI???N :<br>'+vietnamdong(chottien)+'</div></div>';
			ss+=a;
			bc++;
			if(giohang[bc] == null)
				{break;}
		}

		ss+='<div style="text-align: center;;width:60%;padding-top:100px;float:right;margin-bottom:50px"><h2>T??NH TR???NG ????N H??NG</h2><select id="xuly">'
		if(hh == "CH??A X??? L??")
		{
			ss+='<option value="cxl">CH??A X??? L??</option><option value="dxl">???? X??? L??</option>'}
		else {
			ss+='<option value="dxl">???? X??? L??</option><option value="cxl">CH??A X??? L??</option>'
		}
		ss+='</select></div><div style="width:40%;height:100%;padding-left: 15%;padding-top:100px;margin-bottom:80px"><h1 style="float:left">T???NG TI???N: '+vietnamdong(tongbill)+'</h1></div><div style="width:50%;height :70px;padding-left:45%;margin-bottom:70px;font-size:130%margin-bottom:50px">NG??Y ?????T H??NG : '+ngay+'<br>GI??? : '+gio+'<br><a href="admin.html"><button style="font-size:150%" onclick="xacnhan('+bc+')">X??C NH???N</button></a></div>'
		document.getElementById('chitietdonhang').innerHTML = ss;		
}
function quadh () {
	document.getElementById('chitietkh').style.display = 'none';
	document.getElementById('chitietdonhang').style.display = 'block';
}
function quatk () {
	document.getElementById('chitietdonhang').style.display = 'none';
	document.getElementById('chitietkh').style.display = 'block';
}
/*END ORDER MANAGE*/