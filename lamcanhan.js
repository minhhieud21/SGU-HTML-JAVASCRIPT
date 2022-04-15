// JavaScript Document
createAdmin();
demdulieu();
dangnhaphoanthanh();
function theloai (matl , tentl) {
		this.matl = matl;
		this.tentl = tentl;}
var menu =[
	new theloai("nam","ĐỒNG HỒ NAM"),
	new theloai("nu","ĐỒNG HỒ NỮ"),];
var theloaiarr=[
		new theloai("ca","CASIO"),
		new theloai("ci","CITIZEN"),
		new theloai("mv","MVMT"),
		new theloai("ed","EDIFICE"),
		new theloai("gs","G-SHOCK"),
		new theloai("or","ORIENT"),
		new theloai("op","Olym Pianus"),
		new theloai("os","Olymphia Star")];
/*PRODUCT*/
function demdulieu () {
	if (localStorage.getItem('phansanpham')===null) {
		var sp = [{masanpham : 1,thuonghieu : 'ca',img:'AE-1200WHD-1AVDF-3-1.jpg', name:'CASIO AE-1200WHD',giatien : 7800000,gioitinh : 'nam',namsanxuat:2019,xuatsu:'USA'},
				   {masanpham : 2,thuonghieu : 'ca',img:'B650WC-5ADF-2.jpg', name:'CASIO B650WC',giatien : 7299999,gioitinh : 'nam',namsanxuat:2008,xuatsu:'French'},
				   {masanpham : 3,thuonghieu : 'ca',img:'casio-mtp-1374d-1avdf.jpg', name:'CASIO MTP 1374D',giatien : 9600000,gioitinh : 'nam',namsanxuat:2020,xuatsu:'French'},
				   {masanpham : 4,thuonghieu : 'ca',img:'dong-ho-casio-b640wc-5adf-pin-nam-inox-1-1.jpg', name:'CASIO B640WC',giatien : 4800000,gioitinh : 'nam',namsanxuat:2017,xuatsu:'English'},
				   {masanpham : 5,thuonghieu : 'ca',img:'dong-ho-casio-mtp-1374l-1avdf-nam-pin-day-da-a.jpg', name:'CASIO MTP 1374L',giatien : 4100000,gioitinh : 'nam',namsanxuat:2015,xuatsu:'Japan'},
				   {masanpham : 6,thuonghieu : 'ca',img:'dw-5600bb-1dr_master.jpg', name:'CASIO DW-5600BB',giatien : 5800000,gioitinh : 'nam',namsanxuat:2014,xuatsu:'Germany'},
					//========================================================================================================================
				   {masanpham : 7,thuonghieu : 'ca',img:'casio-a168wegb-1bdf.jpg', name:'CASIO A168WEBG',giatien : 4700000,gioitinh : 'nu',namsanxuat:2012,xuatsu:'China'},
				   {masanpham : 8,thuonghieu : 'ca',img:'casio-LTP-V006L-1B2UDF.jpg', name:'CASIO LTP-V006L-1B2UDF',giatien : 4500000,gioitinh : 'nu',namsanxuat:2011,xuatsu:'Germany'},
				   {masanpham : 9,thuonghieu : 'ca',img:'casio-LTP-V006L-4BUDF.jpg', name:'CASIO LTP-V006L-4BUDF',giatien : 8900000,gioitinh : 'nu',namsanxuat:2011,xuatsu:'Japan'},
				   {masanpham : 10,thuonghieu : 'ca',img:'casio-LTP-V006L-7B2UDF.jpg', name:'CASIO LTP-V006L-7B2UDF',giatien : 3600000,gioitinh : 'nu',namsanxuat:2019,xuatsu:'English'},
				   {masanpham : 11,thuonghieu : 'ca',img:'casio-LTP-V007D-1BUDF.jpg', name:'CASIO LTP-V007D-1BUDF',giatien : 4250000,gioitinh : 'nu',namsanxuat:2019,xuatsu:'English'},
				   //======================================================================================================================
				   {masanpham : 12,thuonghieu : 'ci',img:'citizen-AW0079-13X.jpg', name:'CITIZEN AW0079-13X',giatien : 8100000,gioitinh : 'nam',namsanxuat:2020,xuatsu:'English'},
				   {masanpham : 13,thuonghieu : 'ci',img:'citizen-BH5000-08A.jpg', name:'CITIZEN BH5000-08A',giatien : 8900000,gioitinh : 'nam',namsanxuat:2019,xuatsu:'China'},
				   {masanpham : 14,thuonghieu : 'ci',img:'citizen-BH5000-59A.jpg', name:'CITIZEN BH5000-59A',giatien : 4100000,gioitinh : 'nam',namsanxuat:2012,xuatsu:'Japan'},
				   {masanpham : 15,thuonghieu : 'ci',img:'citizen-BI5090-09A.jpg', name:'CITIZEN BI5090-09A',giatien : 5200000,gioitinh : 'nam',namsanxuat:2012,xuatsu:'USA'},
				   {masanpham : 16,thuonghieu : 'ci',img:'citizen-BI5090-50A.jpg', name:'CITIZEN BI5090-50A',giatien : 6999999,gioitinh : 'nam',namsanxuat:2013,xuatsu:'Japan'},
				   {masanpham : 17,thuonghieu : 'ci',img:'citizen-BI5093-01L.jpg', name:'CITIZEN BI5093-01L',giatien : 6150000,gioitinh : 'nam',namsanxuat:2015,xuatsu:'English'},
				   //==================================================================================================================
				   {masanpham : 18,thuonghieu : 'ci',img:'citizen-EM0763-07A.jpg', name:'CITIZEN EM0763-07A',giatien : 4600000,gioitinh : 'nu',namsanxuat:2014,xuatsu:'Germany'},
				   {masanpham : 19,thuonghieu : 'ci',img:'citizen-EM0766-50A.jpg', name:'CITIZEN EM0766-50A',giatien : 4100000,gioitinh : 'nu',namsanxuat:2015,xuatsu:'Japan'},
				   {masanpham : 20,thuonghieu : 'ci',img:'citizen-EM0770-52Y.jpg', name:'CITIZEN EM0770-52Y',giatien : 3600000,gioitinh : 'nu',namsanxuat:2018,xuatsu:'China'},
				   {masanpham : 21,thuonghieu : 'ci',img:'citizen-EM0773-54D.jpg', name:'CITIZEN EM0773-54D',giatien : 2600000,gioitinh : 'nu',namsanxuat:2017,xuatsu:'China'},
				   {masanpham : 22,thuonghieu : 'ci',img:'citizen-EM0774-51D.jpg', name:'CITIZEN EM0774-51D',giatien : 7100000,gioitinh : 'nu',namsanxuat:2017,xuatsu:'English'},
				   {masanpham : 23,thuonghieu : 'ci',img:'citizen-EQ0601-54F.jpg', name:'CITIZEN EQ0601-54F',giatien : 7499999,gioitinh : 'nu',namsanxuat:2016,xuatsu:'Japan'},
				   {masanpham : 24,thuonghieu : 'ci',img:'citizen-EQ0605-53A.jpg', name:'CITIZEN EQ0605-53A',giatien : 7599999,gioitinh : 'nu',namsanxuat:2019,xuatsu:'English'},
				   //=================================================================================================================
				   {masanpham : 25,thuonghieu : 'ed',img:'casio-edifice-EF-503D-7AVUDF.jpg', name:'EDIFICE EF-503D-7AVUDF',giatien :3100000,gioitinh : 'nam',namsanxuat:2013,xuatsu:'French'},
				   {masanpham : 26,thuonghieu : 'ed',img:'casio-edifice-ef-540d-1a2vudf.jpg', name:'EDIFICE EF-540D-1A2VUDF',giatien : 2800000,gioitinh : 'nam',namsanxuat:2020,xuatsu:'USA'}, 
				   {masanpham : 122,thuonghieu : 'ed',img:'casio-edifice-EF-540D-1A4VUD.jpg', name:'',giatien : 3125000,gioitinh : 'nam'},
				   {masanpham : 27,thuonghieu : 'ed',img:'casio-edifice-EF-540D-1A5VUDF.jpg', name:'EDIFICE EF-540D-1A5VUD',giatien : 7800000,gioitinh : 'nam',namsanxuat:2017,xuatsu:'French'},
				   {masanpham : 28,thuonghieu : 'ed',img:'casio-edifice-ef-560d-1avdf.jpg', name:'EDIFICE ED-560D-1AVDF',giatien : 9100000,gioitinh : 'nam',namsanxuat:2019,xuatsu:'Japan'},
				   {masanpham : 29,thuonghieu : 'ed',img:'casio-edifice-EFR-532L-1AVUDF.jpg', name:'EDIFICE EFR-532L-1AVUDF',giatien : 9700000,gioitinh : 'nam',namsanxuat:2020,xuatsu:'French'},
				   {masanpham : 30,thuonghieu : 'ed',img:'casio-edifice-efr-564d-2avudf.jpg', name:'EDIFICE EFR-564D-2AVUDF',giatien : 8700000,gioitinh : 'nam',namsanxuat:2020,xuatsu:'French'},
				   {masanpham : 31,thuonghieu : 'ed',img:'casio-edifice-efr-s565l-1avudf.jpg', name:'EDIFICE EFR-S565L-1AVUDF',giatien : 3800000,gioitinh : 'nam',namsanxuat:2019,xuatsu:'China'},
				   {masanpham : 32,thuonghieu : 'ed',img:'casio-edifice-EFV-530BL-1AVUDF.jpg', name:'EDIFICE EFV-530BL-1AVUDF',giatien : 2600000,gioitinh : 'nam',namsanxuat:2011,xuatsu:'USA'},
				   {masanpham : 33,thuonghieu : 'ed',img:'casio-edifice-efv-580l-1avudf.jpg', name:'EDIFICE EFV-580L-1AVUDF',giatien : 3100000,gioitinh : 'nam',namsanxuat:2013,xuatsu:'Japan'},
				   {masanpham : 34,thuonghieu : 'ed',img:'casio-edifice-efv-580l-7avudf.jpg', name:'EDIFICE EFV-580L-7AVUDF',giatien : 3900000,gioitinh : 'nam',namsanxuat:2012,xuatsu:'English'},
				   {masanpham : 35,thuonghieu : 'ed',img:'casio-ef-539d-1a9vudf.jpg', name:'EDIFICE EF-539D-1A9VAUDF',giatien : 3125000,gioitinh : 'nam',namsanxuat:2019,xuatsu:'Germany'},
				   //========================================================================================================================
				   {masanpham : 36,thuonghieu : 'gs',img:'casio-dw-6900-1vsdr.jpg', name:'G-SHOCK DW-6900-1VSDR',giatien : 1900000,gioitinh : 'nam',namsanxuat:20119,xuatsu:'Germany'},
				   {masanpham : 37,thuonghieu : 'gs',img:'casio-ga-120-1adr.jpg', name:'G-SHOCK GA-120-1ADR',giatien : 2599999,gioitinh : 'nam',namsanxuat:2006,xuatsu:'Germany'},
				   {masanpham : 38,thuonghieu : 'gs',img:'casio-g-shock-DW-5600E-1VDF.jpg', name:'G-SHOCK DW-5600E-1VDF',giatien : 7500000,gioitinh : 'nam',namsanxuat:2003,xuatsu:'China'},
				   {masanpham : 39,thuonghieu : 'gs',img:'casio-g-shock-dw-9052-1vdr.jpg', name:'G-SHOCK DW-9052-1VDR',giatien : 3125000,gioitinh : 'nam',namsanxuat:2001,xuatsu:'USA'},
				   {masanpham : 40,thuonghieu : 'gs',img:'casio-g-shock-G-2900F-1VDR.jpg', name:'G-SHOCK G-2900F-1VDR',giatien : 2000000,gioitinh : 'nam',namsanxuat:2009,xuatsu:'English'},
				   {masanpham : 41,thuonghieu : 'gs',img:'casio-g-shock-ga-100-1a1dr.jpg', name:'G-SHOCK GA-100-1A1DR',giatien : 7100000,gioitinh : 'nam',namsanxuat:2009,xuatsu:'China'},
				   {masanpham : 42,thuonghieu : 'gs',img:'casio-g-shock-GA-100-1A2DR.jpg', name:'G-SHOCK GA-100-1A2DR',giatien : 3199999,gioitinh : 'nam',namsanxuat:2019,xuatsu:'Japan'},
				   //==========================================================================================================================
				   {masanpham : 43,thuonghieu : 'mv',img:'dong-ho-mvmt-chrono-40-D-MC02-GU.jpg', name:'MVMT CHRONO 40-D-MC02-GU',giatien : 3450000,gioitinh : 'nam',namsanxuat:2008,xuatsu:'Japan'},
				   {masanpham : 44,thuonghieu : 'mv',img:'dong-ho-mvmt-mod-D-FB01-RGS.jpg', name:'MVMT D-FB01-RGS',giatien : 7500000,gioitinh : 'nam',namsanxuat:2007,xuatsu:'Japan'},
				   {masanpham : 45,thuonghieu : 'mv',img:'dong-ho-mvmt-revolver-D-MR01-BBL.jpg', name:'MVMT REVOLVER-D-MR01-BBL',giatien : 9600000,gioitinh : 'nam',namsanxuat:2006,xuatsu:'China'},
				   {masanpham : 46,thuonghieu : 'mv',img:'dong-ho-mvmt-revolver-D-MR01-BSL.jpg', name:'MVMT REVOLVER-D-MR01-BSL',giatien : 3120000,gioitinh : 'nam',namsanxuat:2009,xuatsu:'Taiwan'},
				   {masanpham : 47,thuonghieu : 'mv',img:'dong-ho-mvmt-revolver-D-MR01-RGGR.jpg', name:'MVMT REVOLVER-D-MR01-RGR',giatien : 3100000,gioitinh : 'nam',namsanxuat:2009,xuatsu:'Taiwan'},
				   {masanpham : 48,thuonghieu : 'mv',img:'dong-ho-mvmt-voyager-D-MV01-BL2.jpg', name:'MVMT VOYAGER-D-MV01-BL2',giatien : 7400000,gioitinh : 'nam',namsanxuat:2020,xuatsu:'Taiwan'},
				   {masanpham : 49,thuonghieu : 'mv',img:'dong-ho-mvmt-voyager-D-MV01-S2.jpg', name:'MVMT VOYAGER-D-MV01-S2',giatien :7899999,gioitinh : 'nam',namsanxuat:2018,xuatsu:'China'},
				  //=========================================================================================================================
				  {masanpham : 50,thuonghieu : 'mv',img:'dong-ho-mvmt-boulevard-D-MB01-GUM.jpg', name:'MVMT BOULEVARD-D-MB01-GUM',giatien : 7400000,gioitinh : 'nu',namsanxuat:2017,xuatsu:'English'},
				  {masanpham : 51,thuonghieu : 'mv',img:'dong-ho-mvmt-boulevard-D-MB01-RGWM.jpg', name:'MVMT BOULEVARD-D-MB01-RGWM',giatien : 4500000,gioitinh : 'nu',namsanxuat:2015,xuatsu:'Japan'},
				  {masanpham : 52,thuonghieu : 'mv',img:'dong-ho-mvmt-mod-D-FB01-RGS.jpg', name:'MVMT MOD-D-FB01-RGS',giatien : 8999999,gioitinh : 'nu',namsanxuat:2014,xuatsu:'English'},
				  {masanpham : 53,thuonghieu : 'mv',img:'dong-ho-mvmt-mod-D-FB01-S.jpg', name:'MVMT MOD-D-FB01-S',giatien : 7999999,gioitinh : 'nu',namsanxuat:2013,xuatsu:'China'},
				  {masanpham : 53,thuonghieu : 'mv',img:'dong-ho-mvmt-nova-D-FC01-G.jpg', name:'MVMT NOVA-D-FC01-G',giatien : 2999999,gioitinh : 'nu',namsanxuat:2014,xuatsu:'French'},
				  {masanpham : 54,thuonghieu : 'mv',img:'dong-ho-mvmt-nova-D-FC01-RGBL.jpg', name:'MVMT NOVA-D-FC01-RGBL',giatien : 1999999,gioitinh : 'nu',namsanxuat:2012,xuatsu:'Japan'},
				  {masanpham : 55,thuonghieu : 'mv',img:'dong-ho-mvmt-nova-D-FC01-RGNU.jpg', name:'MVMT NOVA-D-FC01-RGNU',giatien : 4750000,gioitinh : 'nu',namsanxuat:2011,xuatsu:'USA'},
				  //=============================================================================================================================
				  {masanpham : 56,thuonghieu : 'op',img:'Olym-pianus-OP130-13MK-GL-T.jpg', name:'Olym Pianus OP130-13MK-GL-T',giatien : 3199999,gioitinh : 'nam',namsanxuat:2014,xuatsu:'Germany'},
				  {masanpham : 57,thuonghieu : 'op',img:'olym-pianus-OP99411-84AGK-T.jpg', name:'Olym Pianus OP99411-84AGK-T',giatien : 7250000,gioitinh : 'nam',namsanxuat:2013,xuatsu:'Japan'},
				  {masanpham : 58,thuonghieu : 'op',img:'olym-pianus-OP99411-84AGR-GL-T.jpg', name:'Olym Pianus OP99411-84AGR-GL-T',giatien : 2100000,gioitinh : 'nam',namsanxuat:2015,xuatsu:'China'},
				  {masanpham : 59,thuonghieu : 'op',img:'olym-pianus-OP99411-84AGS-D.jpg', name:'Olym Pianus OP99411-84AGS-D',giatien : 2300000,gioitinh : 'nam',namsanxuat:2014,xuatsu:'French'},
				  {masanpham : 60,thuonghieu : 'op',img:'olym-pianus-OP99411-84AGS-GL-D.jpg', name:'Olym Pianus OP99411-84AGS-GL-D',giatien : 1999999,gioitinh : 'nam',namsanxuat:202,xuatsu:'Japan'},
				  {masanpham : 61,thuonghieu : 'op',img:'olym-pianus-OP99411-84AGS-GL-T.jpg', name:'Olym Pianus OP99411-84AGS-GL-T',giatien : 10000000,gioitinh : 'nam',namsanxuat:2011,xuatsu:'English'},
				  {masanpham : 62,thuonghieu : 'op',img:'olym-pianus-OP99411-84AGS-GL-X.jpg', name:'Olym Pianus OP99411-84AGS-GL-X',giatien : 9999999,gioitinh : 'nam',namsanxuat:2011,xuatsu:'Japan'},
				  {masanpham : 63,thuonghieu : 'op',img:'olym-pianus-OP99411-84AGSK-T.jpg', name:'Olym Pianus OP99411-84AGSK-T',giatien : 8999999,gioitinh : 'nam',namsanxuat:2011,xuatsu:'English'},
				  {masanpham : 64,thuonghieu : 'op',img:'olym-pianus-OP99411-84AGSR-T.jpg', name:'Olym Pianus OP99411-84AGSR-T',giatien : 7599999,gioitinh : 'nam',namsanxuat:2011,xuatsu:'USA'},
				  {masanpham : 65,thuonghieu : 'op',img:'olym-pianus-OP99411-84AGS-T.jpg', name:'Olym Pianus OP99411-84AGS-T',giatien : 7999999,gioitinh : 'nam',namsanxuat:2010,xuatsu:'French'},
				  {masanpham : 67,thuonghieu : 'op',img:'olym-pianus-OP99411-84AGS-X.jpg', name:'Olym Pianus OP99411-84AGS-X',giatien : 4999999,gioitinh : 'nam',namsanxuat:2010,xuatsu:'Japan'},
				  {masanpham : 68,thuonghieu : 'op',img:'op5698mk-t.jpg', name:'Olym Pianus OP5698MK-T',giatien : 5100000,gioitinh : 'nam'},
				  //=========================================================================================================================
				  {masanpham : 69,thuonghieu : 'op',img:'Dong-ho-Olym-Pianus-OP2498DLR-T.jpg', name:'Olym Pianus OP2498DLR-T',giatien : 4499999,gioitinh : 'nu',namsanxuat:2010,xuatsu:'French'},
				  {masanpham : 70,thuonghieu : 'op',img:'olym-pianus-OP130-06LS-GL-X.jpg', name:'Olym Pianus OP130-06LS-GL-X',giatien : 4150000,gioitinh : 'nu',namsanxuat:2019,xuatsu:'Japan'},
				  {masanpham : 71,thuonghieu : 'op',img:'olym-pianus-OP130-07LS-GL-X.jpg', name:'Olym Pianus OP130-07LS-GL-X',giatien : 3999999,gioitinh : 'nu',namsanxuat:2018,xuatsu:'Taiwan'},
				  {masanpham : 72,thuonghieu : 'op',img:'olym-pianus-OP130-10LK-GL-T.jpg', name:'Olym Pianus OP130-10LK-GL-T',giatien : 4299999,gioitinh : 'nu',namsanxuat:2017,xuatsu:'China'},
				  {masanpham : 73,thuonghieu : 'op',img:'olym-pianus-OP130-10LS-GL-D.jpg', name:'Olym Pianus OP130-10LS-GL-D',giatien : 5599999,gioitinh : 'nu',namsanxuat:2017,xuatsu:'USA'},
				  {masanpham : 74,thuonghieu : 'op',img:'Olym-pianus-OP2500LSK-T.jpg', name:'Olym Pianus OP2500LSK-T',giatien : 7499999,gioitinh : 'nu',namsanxuat:2017,xuatsu:'Germany'},
				  {masanpham : 75,thuonghieu : 'op',img:'olym-pianus-OP5657LSK-T.jpg', name:'Olym Pianus OP5657LSK-T',giatien : 8000000,gioitinh : 'nu',namsanxuat:2019,xuatsu:'French'},
				  {masanpham : 76,thuonghieu : 'op',img:'olym-pianus-OP5710LS-T.jpg', name:'Olym Pianus OP5710LS-T',giatien : 7899999,gioitinh : 'nu',namsanxuat:2016,xuatsu:'English'},
				  {masanpham : 77,thuonghieu : 'op',img:'olympia-star-OPA58012-07LS-T.jpg', name:'Olym Pianus OPA58012-07LS-T',giatien : 8699999,gioitinh : 'nu',namsanxuat:2013,xuatsu:'Germany'},
				  //============================================================================================================================
				  {masanpham : 78,thuonghieu : 'os',img:'dong-ho-Olympia-Star-OPA98022-00MK-GL-T.jpg', name:'Olympia Star OPA98022-00MK-GL-T',giatien : 7599999,gioitinh : 'nam',namsanxuat:2020,xuatsu:'USA'},
				  {masanpham : 79,thuonghieu : 'os',img:'dong-ho-Olympia-Star-OPA98022-00MR-GL-T.jpg', name:'Olympia-Star OPA98022-00MR-GL-T',giatien : 3499999,gioitinh : 'nam',namsanxuat:2012,xuatsu:'China'},
				  {masanpham : 80,thuonghieu : 'os',img:'dong-ho-Olympia-Star-OPA98022-00MS-GL-T.jpg', name:'Olympia-Star OPA98022-00MS-GL-T',giatien : 3999999,gioitinh : 'nam',namsanxuat:2009,xuatsu:'French'},
				  {masanpham : 81,thuonghieu : 'os',img:'dong-ho-Olympia-Star-OPA98022-80MS-GL-D.jpg', name:'Olympia-Star OPA98022-80MS-GL-D',giatien : 7250000,gioitinh : 'nam',namsanxuat:2009,xuatsu:'China'},
				  {masanpham : 82,thuonghieu : 'os',img:'olympia-star-OPA58076MS-T.jpg', name:'Olympia-Star OPA58076MS-T',giatien : 3650000,gioitinh : 'nam',namsanxuat:2014,xuatsu:'Taiwan'},
				  {masanpham : 83,thuonghieu : 'os',img:'olympia-star-OPA58082-04MK-T.jpg', name:'Olympia-Star OPA58082-04MK-T',giatien : 4350000,gioitinh : 'nam',namsanxuat:2014,xuatsu:'Japan'},
				  {masanpham : 84,thuonghieu : 'os',img:'olympia-star-OPA58082-04MSK-T.jpg', name:'Olympia-Star OPA58082-04MSK-T',giatien : 4150000,gioitinh : 'nam',namsanxuat:2015,xuatsu:'Itali'},
				  {masanpham : 85,thuonghieu : 'os',img:'olympia-star-OPA58088-06MS-X.jpg', name:'Olympia-Star OPA58088-06MS-X',giatien : 7250000,gioitinh : 'nam',namsanxuat:2013,xuatsu:'USA'},
				  {masanpham : 86,thuonghieu : 'os',img:'olympia-star-OPA58093MR-GL-T.jpg', name:'Olympia-Star OPA58093MR-GL-T',giatien : 3900000,gioitinh : 'nam',namsanxuat:2012,xuatsu:'French'},
				  {masanpham : 87,thuonghieu : 'os',img:'olympia-star-OPA58093MS-GL-T.jpg', name:'Olympia-Star OPA58093MS-GL-T',giatien : 3950000,gioitinh : 'nam',namsanxuat:2011,xuatsu:'Japan'},
				  //====================================================================================================================================
				  {masanpham : 88,thuonghieu : 'os',img:'dong-ho-olympia-star-opa58082dlk_gl-trang-nu-pin-day-da.jpg', name:'Olympia-Star OPA58082DLK-GL',giatien : 4750000,gioitinh : 'nu',namsanxuat:2011,xuatsu:'Taiwan'},
				  {masanpham : 89,thuonghieu : 'os',img:'dong-ho-olympia-star-opa58082dlk-trang-nu-pin-day-inox.jpg', name:'Olympia-Star OPA58082DLK',giatien : 4250000,gioitinh : 'nu',namsanxuat:2013,xuatsu:'USA'},
				  {masanpham : 90,thuonghieu : 'os',img:'dong-ho-olympia-star-opa58082dls_gl-den-nu-pin-day-da.jpg', name:'Olympia-Star OPA58082DLS-GL',giatien : 4300000,gioitinh : 'nu',namsanxuat:2014,xuatsu:'Singapo'},
				  {masanpham : 91,thuonghieu : 'os',img:'dong-ho-olympia-star-opa58082dlsk-trang-nu-pin-day-inox.jpg', name:'Olympia-Star OPA58082DLSK',giatien : 7550000,gioitinh : 'nu',namsanxuat:2015,xuatsu:'Japan'},
				  {masanpham : 92,thuonghieu : 'os',img:'dong-ho-olympia-star-opa58082dls-trang-nu-pin-day-inox.jpg', name:'Olympia-Star OPA58082DLS',giatien : 7450000,gioitinh : 'nu',namsanxuat:2017,xuatsu:'Itali'},
				  {masanpham : 93,thuonghieu : 'os',img:'dong-ho-olympia-star-opa58082ls_gl-den-nu-pin-day-da.jpg', name:'Olympia-Star OPA58082LS-GL',giatien : 3300000,gioitinh : 'nu',namsanxuat:2019,xuatsu:'English'},
				  {masanpham : 94,thuonghieu : 'os',img:'olympia-star-OPA58012-05LSK-T.jpg', name:'Olympia-Star OPA58012-05LSK-T',giatien : 3550000,gioitinh : 'nu',namsanxuat:2014,xuatsu:'Japan'},
				  {masanpham : 95,thuonghieu : 'os',img:'olympia-star-OPA58012-07LS-GL-D.jpg', name:'Olympia-Star OPA58012-07LS-GL-D',giatien : 7450000,gioitinh : 'nu',namsanxuat:2013,xuatsu:'Japan'},
				  {masanpham : 96,thuonghieu : 'os',img:'olympia-star-OPA58012-07LS-GL-T.jpg', name:'Olympia-Star OPA58012-07LS-GL-T',giatien : 25000000,gioitinh : 'nu',namsanxuat:2014,xuatsu:'Japan'},
				  {masanpham : 97,thuonghieu : 'os',img:'olympia-star-OPA58012-07LS-T.jpg', name:'Olympia-Star OPA58012-07LS-T',giatien : 3650000,gioitinh : 'nu',namsanxuat:2015,xuatsu:'Taiwan'},
				  {masanpham : 98,thuonghieu : 'os',img:'olympia-star-OPA58061LSK-T.jpg', name:'Olympia-Star OPA58061LSK-T-T',giatien : 41000000,gioitinh : 'nu',namsanxuat:2019,xuatsu:'China'},
				  //=============================================================================================================================
				  {masanpham : 99,thuonghieu : 'or',img:'orient-FAA02007B9.jpg', name:'ORIENT FAA02007B9',giatien : 2100000,gioitinh : 'nam',namsanxuat:2017,xuatsu:'Japan'},
				  {masanpham : 100,thuonghieu : 'or',img:'orient-FGW05001T0.jpg', name:'ORIENT FGW05001T0',giatien : 9800000,gioitinh : 'nam',namsanxuat:2015,xuatsu:'Germany'},
				  {masanpham : 101,thuonghieu : 'or',img:'orient-FUG1R006W6.jpg', name:'ORIENT FUG1R006W6',giatien : 8750000,gioitinh : 'nam',namsanxuat:2017,xuatsu:'Japan'},
				  {masanpham : 102,thuonghieu : 'or',img:'orient-FUNG2001F0.jpg', name:'ORIENT FUNG2001F0',giatien : 7400000,gioitinh : 'nam',namsanxuat:2020,xuatsu:'Itali'},
				  {masanpham : 103,thuonghieu : 'or',img:'orient-FUNG2002W0.jpg', name:'ORIENT FUNG2002W0',giatien : 3900000,gioitinh : 'nam',namsanxuat:2019,xuatsu:'Japan'},
				  {masanpham : 104,thuonghieu : 'or',img:'orient-RA-AA0C02L19B.jpg', name:'ORIENT RA-AA0C02L19B',giatien : 4800000,gioitinh : 'nam',namsanxuat:2011,xuatsu:'USA'},
				  {masanpham : 105,thuonghieu : 'or',img:'orient-RA-AA0C05L19B.jpg', name:'ORIENT RA-AA0C05L19B',giatien : 4000000,gioitinh : 'nam',namsanxuat:2013,xuatsu:'Japan'},
				  {masanpham : 106,thuonghieu : 'or',img:'orient-RA-AA0C06E19B.jpg', name:'ORIENT RA-AA0C06E19B',giatien : 3125000,gioitinh : 'nam',namsanxuat:2017,xuatsu:'French'},
				  {masanpham : 107,thuonghieu : 'or',img:'orient-RA-AR0103B10B.jpg', name:'ORIENT AR0103B10B',giatien : 8400000,gioitinh : 'nam',namsanxuat:2015,xuatsu:'Singapo'},
				  {masanpham : 108,thuonghieu : 'or',img:'orient-RA-KV0303B10B.jpg', name:'ORIENT RA-KV0303B10B',giatien : 5600000,gioitinh : 'nam',namsanxuat:2012,xuatsu:'Germany'},
				  {masanpham : 109,thuonghieu : 'or',img:'orient-RA-SP0003B10B.jpg', name:'ORIENT RA-SP0003B10B',giatien : 7200000,gioitinh : 'nam',namsanxuat:2016,xuatsu:'Japan'},
				  {masanpham : 110,thuonghieu : 'or',img:'orient-SUND6004W0.jpg', name:'ORIENT SUND6004W0',giatien : 8100000,gioitinh : 'nam',namsanxuat:2019,xuatsu:'USA'},
				  //========================================================================================================================
				  {masanpham : 111,thuonghieu : 'or',img:'orient-RA-AK0005Y10B.jpg', name:'ORIENT RA-AK0005Y10B',giatien : 3500000,gioitinh : 'nu',namsanxuat:2012,xuatsu:'USA'},
				  {masanpham : 112,thuonghieu : 'or',img:'orient-RA-AK0006L10B.jpg', name:'ORIENT RA-AK0006L10B',giatien : 2600000,gioitinh : 'nu',namsanxuat:2020,xuatsu:'Japan'},
				  {masanpham : 113,thuonghieu : 'or',img:'orient-RA-KA0004L00B.jpg', name:'ORIENT RA-KA0004L00B',giatien : 8400000,gioitinh : 'nu',namsanxuat:2020,xuatsu:'Germany'},
				  {masanpham : 114,thuonghieu : 'or',img:'orient-RA-KA0006S00B.jpg', name:'ORIENT RA-KA0006S00B',giatien : 7800000,gioitinh : 'nu',namsanxuat:2020,xuatsu:'Germany'},
				  {masanpham : 115,thuonghieu : 'or',img:'Orient-RA-QC1702S10B.jpg', name:'ORIENT RA-QC1702S10B',giatien : 4000000,gioitinh : 'nu',namsanxuat:2009,xuatsu:'Singapo'},
				  {masanpham : 116,thuonghieu : 'or',img:'Orient-RA-QC1703B10B.jpg', name:'ORIENT RA-QC1703B10B',giatien : 3000000,gioitinh : 'nu',namsanxuat:2019,xuatsu:'English'},
				  {masanpham : 117,thuonghieu : 'or',img:'Orient-RA-QC1704S10B.jpg', name:'ORIENT RA-QC1704S10B',giatien : 2500000,gioitinh : 'nu',namsanxuat:2019,xuatsu:'French'},
				  {masanpham : 118,thuonghieu : 'or',img:'Orient-RA-QC1705S10B.jpg', name:'ORIENT RA-QC1705S10B',giatien : 5600000,gioitinh : 'nu',namsanxuat:2019,xuatsu:'Itali'},
				  {masanpham : 119,thuonghieu : 'or',img:'Orient-RF-QA0002B10B.jpg', name:'ORIENT RF-QA0002B10B',giatien : 4250000,gioitinh : 'nu',namsanxuat:2019,xuatsu:'Germany'},
				  {masanpham : 120,thuonghieu : 'or',img:'Orient-RF-QA0003G10B.jpg', name:'ORIENT RF-QA0003G10B',giatien : 3600000,gioitinh : 'nu',namsanxuat:2019,xuatsu:'USA'},
				  {masanpham : 121,thuonghieu : 'or',img:'Orient-RF-QA0008S10B.jpg', name:'ORIENT RF-QA0008S10B',giatien : 7500000,gioitinh : 'nu',namsanxuat:2019,xuatsu:'Japan'}];
		localStorage.setItem('phansanpham',JSON.stringify(sp));
	}
}
var sanpham = JSON.parse(localStorage.getItem('phansanpham'));
var temp =[] ,sl;
function phansanpham (sanpham) {
	suatkout();
	var dangnhap = document.getElementById('khungdangnhap').style.display = 'none';
	var dangki = document.getElementById('khungdangki').style.display = 'none';
	var a = document.getElementById('maunen1').style.display = 'none';
	document.getElementById('nd').style.display="none";
	document.getElementById('bh').style.display="none";
	var b='<div style="width: 100%;z-index: 20;"><h2>CÁC SẢN PHẨM CỦA CỬA HÀNG </h2></div>'
	sl = Math.ceil(sanpham.length/12);
	var ss="";
	if(sl!=1)
		for(j =1;j<=sl;j++)
	    	ss+='<div onclick="phantrang('+j+',sanpham)" class="sophantrang"> <a href="#">'+j+'</a> </div>'    
	document.getElementById("phantrang").innerHTML=ss;
	sotrang=0;
	var gt;
	var dem =0, vitri=sotrang*12;
	for(i = vitri ; i<sanpham.length;i++){
		if (sanpham[i].gioitinh=='nam') {
			gt="NAM";		}	
		else if (sanpham[i].gioitinh=='nu') {
			gt="NỮ";}
		var a='<div onclick="bansp('+sanpham[i].masanpham+')"  class = "tungsanpham1" id="sanphamtrong"><img style="width:100%;" src="./images/'+sanpham[i].img+'"><b>'+  sanpham[i].name+'<br><b style="margin-top : 10%;margin-bottom : 5%" > GIÁ : '+vietnamdong(sanpham[i].giatien)+
		'</b><br><b style="margin-top : 10%;margin-bottom : 5%" > ĐỒNG HỒ : '+gt+'</b><div style="margin-left : 15px"><buton class="nutdatmua"> CHI TIẾT</buton></div></div>';
		b=b+a;
		dem++;
		if (dem==12) {
			sotrang++;
			break;}}
	document.getElementById("noidungsp").innerHTML = b;
}
function phantrang (x) {		
	x=x-1;
	var b='<div style="width: 100%;z-index: 20;"><h2>CÁC SẢN PHẨM CỦA CỬA HÀNG </h2></div>'
	var dem=0,vitri = x*12,gt;
	var sl1 = Math.ceil(sanpham.length/12);
	if(sl!=sl1){
		for(i = vitri ; i<temp.length;i++){
			if (temp[i].gioitinh=='nam') {
				gt="NAM";		}	
			else if (temp[i].gioitinh=='nu') {
				gt="NỮ";}
			var a='<div onclick="bansp('+temp[i].masanpham+')"  class = "tungsanpham1" id="sanphamtrong"><img style="width:100%;" src="./images/'+temp[i].img+'"><b>'+  temp[i].name+'<br><b style="margin-top : 10%;margin-bottom : 5%" > GIÁ : '+vietnamdong(temp[i].giatien)+
			'</b><br><b style="margin-top : 10%;margin-bottom : 5%" > ĐỒNG HỒ : '+gt+'</b><div style="margin-left : 15px"><buton class="nutdatmua"> CHI TIẾT</buton></div></div>';
			b=b+a;
			dem++;
			if (dem==12) {
				sotrang++;
				break;}}}
	else {
		for(i = vitri ; i<sanpham.length;i++){
			if (sanpham[i].gioitinh=='nam') {
				gt="NAM";		}	
			else if (sanpham[i].gioitinh=='nu') {
				gt="NỮ";}
			var a='<div onclick="bansp('+sanpham[i].masanpham+')"  class = "tungsanpham1" id="sanphamtrong"><img style="width:100%;" src="./images/'+sanpham[i].img+'"><b>'+  sanpham[i].name+'<br><b style="margin-top : 10%;margin-bottom : 5%" > GIÁ : '+vietnamdong(sanpham[i].giatien)+
			'</b><br><b style="margin-top : 10%;margin-bottom : 5%" > ĐỒNG HỒ : '+gt+'</b><div style="margin-left : 15px"><buton class="nutdatmua"> CHI TIẾT</buton></div></div>';
			b=b+a;
			dem++;
			if (dem==12) {
				sotrang++;
				break;}}
	}
	document.getElementById("noidungsp").innerHTML = b;
}
function clicknd(t){ 
	temp =  [{masanpham : 'none',thuonghieu : 'none',img:'none', name:'none',giatien : 'none',gioitinh : 'none'}];
	var j=0;
	for(i=0;i<sanpham.length;i++)
		if(sanpham[i].thuonghieu == t.id){
			temp[j]=sanpham[i];
			j++;}
	for(i=0;i<sanpham.length;i++)
		if(sanpham[i].gioitinh == t.id){
			temp[j]=sanpham[i];
			j++;}
	phansanpham(temp);
	document.getElementById('khungdangnhap').style.display = 'none';
	document.getElementById('khungdangki').style.display = 'none';
	document.getElementById('maunen1').style.display = 'none';
	document.getElementById('noidung1').style.display = 'none';
}		
/*END PRODUCT*/
/*CART*/
function bansp(b) {
	tatth();
	document.getElementById('bansp').style.display = 'block';
	var p = JSON.parse(localStorage.getItem('login'));
	if(p!=null){
	if(p.quyen == 1){
				for(i=0;i<sanpham.length;i++)
			if(sanpham[i].masanpham == b){
				spban = sanpham[i];
				var c ="./images/"
				c = c + sanpham[i].img;
				document.getElementById('anhanh').src= c;
				var c ="TÊN SẢN PHẨM : "
				c = c + sanpham[i].name;
				document.getElementById('banspname').innerHTML = c;
				var c ="GIÁ : "
				c = c + vietnamdong(sanpham[i].giatien);
				document.getElementById('banspgia').innerHTML = c;
				var c ="NĂM: "
				c = c + sanpham[i].namsanxuat;
				document.getElementById('banspnam').innerHTML = c;
				var c ="XUẤT SỨ: "
				c = c + sanpham[i].xuatsu;
				document.getElementById('banspxuatsu').innerHTML = c;
				}
	var s = '<button onclick="themvaogiohang('+b+')" id="muahang">THÊM VÀO GIỎ HÀNG</button>';
}	
	else  {
			for(i=0;i<sanpham.length;i++)
			if(sanpham[i].masanpham == b){
				spban = sanpham[i];
				var c ="./images/"
				c = c + sanpham[i].img;
				document.getElementById('anhanh').src= c;
				var c ="TÊN SẢN PHẨM : "
				c = c + sanpham[i].name;
				document.getElementById('banspname').innerHTML = c;
				var c ="GIÁ : "
				c = c + vietnamdong(sanpham[i].giatien);
				document.getElementById('banspgia').innerHTML = c;
				var c ="NĂM: "
				c = c + sanpham[i].namsanxuat;
				document.getElementById('banspnam').innerHTML = c;
				var c ="XUẤT SỨ: "
				c = c + sanpham[i].xuatsu;
				document.getElementById('banspxuatsu').innerHTML = c;}
	document.getElementById('muasp').style.display = 'none';
	}
}
	else {
			for(i=0;i<sanpham.length;i++)
			if(sanpham[i].masanpham == b){
				spban = sanpham[i];
				var c ="./images/"
				c = c + sanpham[i].img;
				document.getElementById('anhanh').src= c;
				var c ="TÊN SẢN PHẨM : "
				c = c + sanpham[i].name;
				document.getElementById('banspname').innerHTML = c;
				var c ="GIÁ : "
				c = c + vietnamdong(sanpham[i].giatien);
				document.getElementById('banspgia').innerHTML = c;
				var c ="NĂM: "
				c = c + sanpham[i].namsanxuat;
				document.getElementById('banspnam').innerHTML = c;
				var c ="XUẤT SỨ: "
				c = c + sanpham[i].xuatsu;
				document.getElementById('banspxuatsu').innerHTML = c;}
	var s = '<button onclick="themvaogiohang('+b+')" id="muahang">THÊM VÀO GIỎ HÀNG</button>';
	}
	document.getElementById('bum').innerHTML = s;	
}
var x ;
function themvaogiohang (idsp) {
	var giohang = JSON.parse(localStorage.getItem('phansanpham'));
	var e,bienkt=0;
	for(var i=0; i<giohang.length;i++){
		if(giohang[i].masanpham==idsp){
			x = giohang[i];
		}
	}
	if(document.getElementById('bansp').style.display == 'block'){
		e = document.getElementById('soluong1').value;
		dongbansp();
		document.getElementById('soluong1').value = 1;  }
	else if (document.getElementById('banspsearch').style.display == 'block') 
		{e = document.getElementById('soluong11').value;
		dongbanspsearch();
		document.getElementById('soluong11').value = 1; }
	var sanpham = JSON.parse(localStorage.getItem('phansanpham'));
	if(localStorage.getItem('giohangtam')===null){
		var cartArray = [];
		x.soluong = e;
		cartArray.unshift(x);
		localStorage.setItem('giohangtam',JSON.stringify(cartArray));
	}else{
		var cartArray = JSON.parse(localStorage.getItem('giohangtam'));
		for(i=0;i<cartArray.length;i++){
			if (x.masanpham == cartArray[i].masanpham) {
				cartArray[i].soluong= parseInt(cartArray[i].soluong) + parseInt(e) ;
				bienkt++;
				break;}}
		if(bienkt == 0){x.soluong = e;cartArray.unshift(x);}
		localStorage.setItem('giohangtam',JSON.stringify(cartArray));}	
}
function admingiohang () {
	var giohang = JSON.parse(localStorage.getItem('giohangtam'));
	var x ,e;
	var tk = localStorage.getItem('login');
	if (tk == null) {
		alert("Vui lòng đăng nhập");
		donggiohang();
		dangnhap();}
	else {
		if (localStorage.getItem('giohangadmin')===null) {e=1}
		else {
			var oo = JSON.parse(localStorage.getItem('giohangadmin'));
			e = (oo.length+1);}
		for(j = 0 ;j< giohang.length;j++){
			if(giohang[j].soluong == 0 ){
				giohang.splice(j, 1);
				giohang.splice(giohang.length,1)
			}
		}
		for( i=0; i<giohang.length;i++){
			var aa  = tk.split('"');
			x = giohang[i];
			x.donhangso =  e;
			x.taikhoan = aa[3];
			x.tinhtrang ="CHƯA XỬ LÝ";
			var today = new Date();
			var date = today.getDate() + '/' + (today.getMonth()+1) + '/' + (today.getFullYear());
			var time = today.getHours() + ':' + (today.getMinutes()) + ':' + today.getSeconds();
			var dateTime =e + '|' + time + '|' + date ; 
			if(localStorage.getItem('giohangadmin')===null){	
			var cartArray = [];
				cartArray.unshift(x);
				localStorage.setItem('giohangadmin',JSON.stringify(cartArray));
				
			}else{
				var cartArray = JSON.parse(localStorage.getItem('giohangadmin'));
				cartArray.unshift(x);
				localStorage.setItem('giohangadmin',JSON.stringify(cartArray));}}
		if(localStorage.getItem('time')===null){
			var timeArray = [];	
			timeArray.unshift(dateTime);
			localStorage.setItem('time',JSON.stringify(timeArray));}
		else{
			var timeArray = JSON.parse(localStorage.getItem('time'));
			console.log(timeArray)
			timeArray.unshift(dateTime);
			localStorage.setItem('time',JSON.stringify(timeArray));}	
		localStorage.removeItem('giohangtam');
		alert("ĐẶT HÀNG THÀNH CÔNG")}
	donggiohang();}
function giohangkhach() {
	var ss ='<div style="width:100%;float:left;margin-top:10px"><div style="float: right;cursor: pointer;font-size: 30px;padding-right: 10px;margin-top: 1px;"><input type="button" value="+" class="dongform" onclick="donggiohang()"/></div><h1 style="margin-left:20px;">CÁC SẢN PHẨM TRONG GIỎ</h1><div>';
	document.getElementById('giohang').style.display = 'block';
	tatth();
	suatkout();
	document.getElementById('all').style.display = 'none';
	document.getElementById('maunen1').style.display = 'none';
	document.getElementById('nd').style.display="none";
	document.getElementById('bh').style.display="none";
	document.getElementById('khungdangnhap').style.display="none";
	document.getElementById('khungdangki').style.display="none";
	dongbansp();
	var tongbill = 0;
	var giohang = JSON.parse(localStorage.getItem('giohangtam'));
	if (giohang != null) {
		if (giohang.length == 0) {
			ss+='<div style="margin-left: 20%;margin-top:20%"><h2>BẠN CHƯA CHỌN SẢN PHẨM NÀO</h2></div>'
		}
		for(o=0;o<giohang.length;o++){
			var chottien = giohang[o].soluong * giohang[o].giatien
			tongbill+=chottien;
			var a='<div class="chitietsp">'+
			'<div style="width:8%;height: 100%;float:left"><img style="width:100%;" src="./images/'+giohang[o].img+'"></div>'+
			'<div style="width:25%;height : 100%;float : left;text-align: center;font-size: 100%;	line-height: 80px;">TÊN SẢN PHẨM :<br>'+giohang[o].name+'</div>'+
			'<div style="width:20%;height : 80%;float : left;font-size: 100%;"><div style ="width:100%;height:50%;	line-height: 100px;">SỐ LƯỢNG :<input id="soluong111" type="text" value="'+ giohang[o].soluong+'"></div>'+
			'<div style ="width:60%;height:50%;margin-left: 30px;line-height:90px"><button onclick="giamsl111('+o+');" id="giamsl111">-</button><button onclick="tangsl111('+o+');" id="tangsl111">+</button></div></div>'+
			'<div style="width:10%;height : 100%;float : left;text-align: center;font-size: 100%;	line-height: 70px;">GIÁ :<br>'+vietnamdong(giohang[o].giatien)+'</div><div style="width:20%;height : 100%;float : left;text-align: center;font-size: 100%;	line-height: 70px;">THÀNH TIỀN :<br>'+vietnamdong(chottien)+'</div>'+
			'<div class="xoasptam">XOÁ SẢN PHẨM<br><button onclick="xoasptam('+o+')">XÓA</button></div>'+
			'</div>';
			ss+=a;
		}}
	ss+='<div style="width:80%;height:100%;padding-left: 15%;padding-top:100px;"><h1>TỔNG TIỀN: '+vietnamdong(tongbill)+'</h1></div><div style="margin-left: 20%;margin-bottom:100px"><button onclick="xoatatcasp()" style="width :200px;height:70px;background-color: #d1d3b9;margin-right: 20px;">XOÁ TẤT CẢ SẢN PHẨM</button><button onclick="admingiohang();" style="margin-top: 150px;width :200px;height:70px;background-color: #d1d3b9">THANH TOÁN</button><div>'
	document.getElementById('giohang').innerHTML = ss;
}
function donggiohang() {
	document.getElementById('giohang').style.display = 'none';
	var giohang = JSON.parse(localStorage.getItem('giohangtam'));
	if(giohang != null){
		for(j = 0 ;j< giohang.length;j++){
			if(giohang[j].soluong == 0){
				giohang.splice(j, 1);
				giohang.splice(giohang.length,1)
			}
		}
	localStorage.setItem('giohangtam',JSON.stringify(giohang))
	}
	document.getElementById('all').style.display = 'block';
}
function xoasptam (b) {
	var giohang = JSON.parse(localStorage.getItem('giohangtam'));
	for (var i = 0; i < giohang.length; i++) {
		if(i==b){
			giohang.splice(i, 1);
			giohang.splice(giohang.length,1)
		}
	} 
	localStorage.setItem('giohangtam',JSON.stringify(giohang));	
	giohangkhach();
}
function xoatatcasp() {
	localStorage.removeItem('giohangtam');
	giohangkhach();
}
function dongbansp () {
	var a = document.getElementById('bansp').style.display = 'none';
	document.getElementById('soluong1').value=1;
}
function vietnamdong(so) {

  return so.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VND';
}
/*END CART*/


function dongtatca() {
	var dangnhap = document.getElementById('khungdangnhap').style.display = 'none';
	var dangki = document.getElementById('khungdangki').style.display = 'none';
	var a = document.getElementById('maunen1').style.display = 'none';
	document.getElementById('nd').style.display="none";
	document.getElementById('bh').style.display="none";
	document.getElementById('noidung1').style.display="none";
	var TK = document.getElementById('taikhoan').value="";
	var MK = document.getElementById('matkhau').value="";
	xoadk();
}
function giamsl(){
	if(document.getElementById('soluong1').value > 1){
		document.getElementById('soluong1').value--;
	}
}
function tangsl(){

	document.getElementById('soluong1').value++;
}
function giamsl1(){
	if(document.getElementById('soluong11').value > 1){
		document.getElementById('soluong11').value--;
	}
}
function tangsl1(){

	document.getElementById('soluong11').value++;
}
function giamsl111(o){
	var giohang = JSON.parse(localStorage.getItem('giohangtam'));
	if (giohang[o].soluong > 1) {
		 giohang[o].soluong--; }
	localStorage.setItem('giohangtam',JSON.stringify(giohang));	
	giohangkhach();
}
function tangsl111(o){
	var giohang = JSON.parse(localStorage.getItem('giohangtam'));
	giohang[o].soluong++;
	localStorage.setItem('giohangtam',JSON.stringify(giohang));	
	giohangkhach();
}


/*USER*/
function icontaikhoan() {
	document.getElementById('iconacc').style.display='block';
}
function dangnhap() {
	// body... 
	var dangnhap = document.getElementById('khungdangnhap');
	dangnhap.style.display = 'block';
	var dangki = document.getElementById('khungdangki');
	dangki.style.display = 'none';
	document.getElementById('loiname').style.display = 'none';
	document.getElementById('loiusername').style.display = 'none';
	document.getElementById('loipassword').style.display = 'none';
	document.getElementById('loipassword1').style.display = 'none';
	document.getElementById('loiphonenumber').style.display = 'none';
	document.getElementById('loiaddress').style.display = 'none';
	document.getElementById('maunen1').style.display = 'block';
	document.getElementById('nd').style.display="none";
	document.getElementById('bh').style.display="none";
	xoadk();
}
function dangki() {
	// body... 
	var dangnhap = document.getElementById('khungdangnhap');
	dangnhap.style.display = 'none';
	var dangki = document.getElementById('khungdangki');
	dangki.style.display = 'block';
	document.getElementById('loitaikhoan').style.display = 'none';
	document.getElementById('loimatkhau').style.display = 'none';
	document.getElementById('maunen1').style.display = 'block';
	document.getElementById('nd').style.display="none";
	document.getElementById('bh').style.display="none";
	var TK = document.getElementById('taikhoan').value="";
	var MK = document.getElementById('matkhau').value="";
}
function dangnhapout() {
	document.getElementById('khungdangnhap').style.display = 'none';
	document.getElementById('maunen1').style.display = 'none';
	var TK = document.getElementById('taikhoan').value="";
	var MK = document.getElementById('matkhau').value="";
}
function dangkiout() {
	dangki = document.getElementById('khungdangki').style.display = 'none';
	document.getElementById('maunen1').style.display = 'none';
	xoadk();
}
function xoadk () {
	document.getElementById('name').value=""
	document.getElementById('username').value=""
	document.getElementById('password').value=""
	document.getElementById('passwordagain').value=""
	document.getElementById('phonenumber').value=""
	document.getElementById('address').value=""
}
function kiemtradangnhap(){
	createAdmin();
	var TK = document.getElementById('taikhoan').value;
	var MK = document.getElementById('matkhau').value;
	var TK1 =TK.toLowerCase();
	var CL = JSON.parse(localStorage.getItem('user'));
	var KT = true;
	if(!TK ){
			document.getElementById('loitaikhoan').style.display = 'block';
			KT = false;
		}else{
			document.getElementById('loitaikhoan').style.display = 'none';
		}
	if(!MK){
			document.getElementById('loimatkhau').style.display = 'block';
			KT = false;
		}else{
			document.getElementById('loimatkhau').style.display = 'none';
		}
	for(var i=0;i<CL.length;i++){
	if(TK1 == CL[i].username){
		if(MK == CL[i].password){
			localStorage.setItem('login',JSON.stringify(CL[i]));
			dangnhaphoanthanh();
			window.location.reload(true);
			if(CL[i].quyen == 0){
				alert("TÀI KHOẢN ĐÃ BỊ KHOÁ!! KHÔNG THỂ MUA HÀNG HOẶC TÌM KIẾM SẢN PHẨM CỦA CỬA HÀNG")
			}
			return true;
		}
	}
	} 
	alert('Sai Tài Khoản hoặc Mật Khẩu');
	return false;
}
function logout(){
	localStorage.removeItem('login');
	location.reload();
}
function dangnhaphoanthanh(){
	if(localStorage.getItem('login')){
		var p = JSON.parse(localStorage.getItem('login'));
		var s='';
			if(p.quyen == 2 && p.username == "admin"){
				s='<div class="dntrong"><a href="admin/admin.html"><i  style="font-size: 160%;line-height: 50px;color: #000000d4 ; margin-left: 12px;color :#ffffffa3" class="fas fa-dollar-sign"></i></a></div>'+
		          '<div class="dntrong"><a onclick="logout()"><i style="font-size: 160%;line-height: 50px;color: #000000d4 ; margin-left: 12px;color:#ffffffa3 " class="fas fa-sign-out-alt"></i></a></div>';
			}else if(p.quyen == 2 && p.username != "admin" ){
				s='<div class="dntrong"><a onclick="hienthongtintk('+p.phone+')"><i style="font-size: 160%;line-height: 50px;color: #000000d4;color:#ffffffa3" class="fas fa-info-circle"></i></a></div>'+
				  '<div class="dntrong"><a href="admin/admin.html"><i  style="font-size: 160%;line-height: 50px;color: #000000d4 ; margin-left: 12px;color :#ffffffa3" class="fas fa-dollar-sign"></i></a></div>'+
		          '<div class="dntrong"><a onclick="logout()"><i style="font-size: 160%;line-height: 50px;color: #000000d4 ; margin-left: 12px;color:#ffffffa3 " class="fas fa-sign-out-alt"></i></a></div>';
			}
			else if(p.quyen == 1){
				s='<div class="dntrong"><a onclick="hienthongtintk('+p.phone+')"><i style="font-size: 160%;line-height: 50px;color: #000000d4;color:#ffffffa3" class="fas fa-info-circle"></i></a></div>'+
				'<div class="dntrong"><a onclick="mosearch();"><i style="font-size: 160%;line-height: 50px;color: #000000d4;margin-left: 12px;color:#ffffffa3" class="fas fa-search"></i></a> </div>'+
		 		  '<div class="dntrong"><a onclick="modonhang();"><i style="font-size: 160%;line-height: 50px;color: #000000d4 ; margin-left: 12px;color:#ffffffa3;" class="fas fa-file-invoice-dollar"></i></a></div>'+
		         '<div class="dntrong"><a onclick="giohangkhach()"><i style="font-size: 160%;line-height: 50px;color: #000000d4 ; margin-left: 12px;color:#ffffffa3 " class="fas fa-shopping-bag"></i></a></div>'+
		          '<div class="dntrong"><a onclick="logout()"><i style="font-size: 160%;line-height: 50px;color: #000000d4 ; margin-left: 12px;color:#ffffffa3 " class="fas fa-sign-out-alt"></i></a></div>';
			}else  {
				s='<div class="dntrong"><a onclick="hienthongtintk('+p.phone+')"><i style="font-size: 160%;line-height: 50px;color: #000000d4;color:#ffffffa3" class="fas fa-info-circle"></i></a></div>'+
		          '<div class="dntrong"><a onclick="logout()"><i style="font-size: 160%;line-height: 50px;color: #000000d4 ; margin-left: 12px;color:#ffffffa3 " class="fas fa-sign-out-alt"></i></a></div>';
			}	

		
	}else{
		s='<div class="dntrong"><a onclick="mosearch();"><i style="font-size: 160%;line-height: 50px;color: #000000d4;color:#ffffffa3" class="fas fa-search"></i></a></div>'+
		  '<div class="dntrong"><a onclick="dangnhap()"><i style="font-size: 160%;line-height: 50px;color: #000000d4 ; margin-left: 12px;color:#ffffffa3" class="fas fa-user"></i></a></div>'+
		'<div class="dntrong"><a onclick="giohangkhach()"><i style="font-size: 160%;line-height: 50px;color: #000000d4 ; margin-left: 12px;color:#ffffffa3 " class="fas fa-shopping-bag"></i></a></div>';
	}
	document.querySelector('#icon').innerHTML=s;
	var dangnhap = document.getElementById('khungdangnhap').style.display = 'none';
	document.getElementById('maunen1').style.display = 'none';
}
function KTKT(value){
	return value.indexOf(' ') >= 0;
}
function createAdmin(){
	if(localStorage.getItem('user')===null){
		var userArray = [];
		var user = {username: 'admin', password: 'admin', fullname: 'Thang Hùng Đức', address: '43/5c Minh Phụng, P5, Quận 6, TPHCM', phone: '0326356017', quyen : '2' };
		userArray.push(user);
		localStorage.setItem('user',JSON.stringify(userArray));
	}
}
function ktktdb(x){
	var v = x;
	var kt = /[`~!@#$%^&*(_+)/*-.,]/;
	for(i=0;i<v.length;i++){
		if(kt.test(v[i])){
			return true
		}
	}
}
function kttkddk(x){
	var u = JSON.parse(localStorage.getItem('user'));
	for(i=0;i<u.length;i++){
		if(x == u[i].username){
			return true
		}
	}
}
function ktpddk(x){
	var u = JSON.parse(localStorage.getItem('user'));
	for(i=0;i<u.length;i++){
		if(x == u[i].phone){
			return true
		}
	}
}
function ktso(x){
	var v=x;
	var kt = /[0123456789`~!@#$%^&*(_+)/*-.,]/;
	for(i=0;i<v.length;i++){
		if(kt.test(v[i])){
			return true
		}
	}
}
function ktdiachi(x){
	var v=x;
	var kt = /[~!@#$%^&*(_+)*-.,]/;
	for(i=0;i<v.length;i++){
		if(kt.test(v[i])){
			return true
		}
	}
}
function ktdiachi1(x){
	var v=x;
	var kt = /[qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM]/;
	for(i=0;i<v.length;i++){
		if(kt.test(v[i])){
			return true
		}
	}
	return false
}
function ktdiachi2(x){
	var v=x;
	var kt = /[1234567890]/;
	for(i=0;i<v.length;i++){
		if(kt.test(v[i])){
			return true
		}
	}
	return false
}
function ktdk(){
		var FN = document.getElementById('name').value;
		var N = document.getElementById('username').value;
		var P = document.getElementById('password').value;
		var PA = document.getElementById('passwordagain');
		var PN = document.getElementById('phonenumber').value;
		var A = document.getElementById('address').value;
		var NN =N.toLowerCase();
		var KT = true;
		if(!FN){
			document.getElementById('loiname').style.display = 'block';
			KT = false;
		}else{
			if(ktso(FN)){
				document.getElementById('loiname').style.display = 'block';
				document.getElementById('loiname').innerHTML='Họ tên không được chứa số hoặc ký tự đặc biệt';
				KT = false;
			}else{
				document.getElementById('loiname').style.display = 'none';
			}
		}
		if(!N){
			document.getElementById('loiusername').style.display = 'block';
			KT = false;
		}else{
			if(KTKT(N)==true){
				document.getElementById('loiusername').style.display = 'block';
				document.getElementById('loiusername').innerHTML='Tài khoản không được chứa khoảng cách';
				KT = false;
			}else if(ktktdb(N) == true){
				document.getElementById('loiusername').style.display = 'block';
				document.getElementById('loiusername').innerHTML='Tài khoản không được chứa kí tự đặc biệt';
				KT = false
			}else if(kttkddk(N)==true){
				document.getElementById('loiusername').style.display = 'block';
				document.getElementById('loiusername').innerHTML='Tài khoản đã được đăng ký.';
				KT = false
			}
			else{
				document.getElementById('loiusername').style.display = 'none';
			}
		}
		if(!PN){
			document.getElementById('loiphonenumber').style.display = 'block';
			KT = false;
		}else{
			if(isNaN(Number(PN))){
			document.getElementById('loiphonenumber').style.display = 'block';
			document.getElementById('loiphonenumber').innerHTML = 'Số điện thoại không hợp lệ';
			KT = false;
			}else{
			if(Number(PN)<100000000 || Number(PN)>999999999){
				document.getElementById('loiphonenumber').style.display = 'block';
				document.getElementById('loiphonenumber').innerHTML = 'Số điện thoại không đúng';
				KT = false;
			}else if(ktpddk(PN)){
				document.getElementById('loiphonenumber').style.display = 'block';
				document.getElementById('loiphonenumber').innerHTML = 'Số điện thoại đã đăng kí';
				KT = false;
			}else{
				document.getElementById('loiphonenumber').style.display = 'none';
				}
			}
		}
		if(!P){
			document.getElementById('loipassword').style.display = 'block';
			KT = false;
		}else{
			 if (KTKT(P)==true){
				document.getElementById('loipassword').style.display = 'block';
				document.getElementById('loipassword').innerHTML='Mật khẩu không được chứa khoảng cách';
				KT = false;
			}else if(ktktdb(P) == true){
				document.getElementById('loipassword').style.display = 'block';
				document.getElementById('loipassword').innerHTML='Mật khẩu không được chứa kí tự đặc biệt';
				KT = false 
			}else if(P.length<8){
				document.getElementById('loipassword').style.display = 'block';
				document.getElementById('loipassword').innerHTML = 'Mật khẩu phải trên 8 ký tự';
				KT = false;
			}else{
			document.getElementById('loipassword').style.display = 'none';
			}
		}
		
	if(PA.value != P){
		document.getElementById('loipassword1').style.display = 'block';
		KT = false;
	}else{
		document.getElementById('loipassword1').style.display = 'none';
	}
	if(!A){
		document.getElementById('loiaddress').style.display='block';
		KT=false;
	}else{
		if(ktdiachi(A)==true){
			document.getElementById('loiaddress').style.display='block';
			KT=false;
		}else if(ktdiachi1(A)==true && ktdiachi2(A)==true){
			document.getElementById('loiaddress').style.display='none';
		}else{
			document.getElementById('loiaddress').style.display='block';
			KT=false;
		}
	}
	if(KT==false){
		return false;
	}
}
function gettext(){
		var userArray = [];
		var FN = document.getElementById('name').value;
		var N = document.getElementById('username').value;
		var P = document.getElementById('password').value;
		var PA = document.getElementById('passwordagain');
		var PN = document.getElementById('phonenumber').value;
		var A = document.getElementById('address').value;
		var NN =N.toLowerCase();
		var KT = true;
		if(!FN){
			document.getElementById('loiname').style.display = 'block';
			KT = false;
		}else{
			if(ktso(FN)){
				document.getElementById('loiname').style.display = 'block';
				document.getElementById('loiname').innerHTML='Họ tên không được chứa số hoặc ký tự đặc biệt';
				KT = false;
			}else{
				document.getElementById('loiname').style.display = 'none';
			}
		}
		var user = JSON.parse(localStorage.getItem('user'));
		if(!N){
			document.getElementById('loiusername').style.display = 'block';
			KT = false;
		}else{
			if(KTKT(N)==true){
				document.getElementById('loiusername').style.display = 'block';
				document.getElementById('loiusername').innerHTML='Tài khoản không được chứa khoảng cách';
				KT = false;
			}else if(ktktdb(N) == true){
				document.getElementById('loiusername').style.display = 'block';
				document.getElementById('loiusername').innerHTML='Tài khoản không được chứa kí tự đặc biệt';
				KT = false
			}else if(kttkddk(N)==true){
				document.getElementById('loiusername').style.display = 'block';
				document.getElementById('loiusername').innerHTML='Tài khoản đã được đăng ký.';
				KT = false
			}
			else{
				document.getElementById('loiusername').style.display = 'none';
			}
		}
		if(!PN){
			document.getElementById('loiphonenumber').style.display = 'block';
			KT = false;
		}else{
			if(isNaN(Number(PN))){
			document.getElementById('loiphonenumber').style.display = 'block';
			document.getElementById('loiphonenumber').innerHTML = 'Số điện thoại không hợp lệ';
			KT = false;
			}else{
			if(Number(PN)<100000000 || Number(PN)>999999999){
				document.getElementById('loiphonenumber').style.display = 'block';
				document.getElementById('loiphonenumber').innerHTML = 'Số điện thoại không đúng';
				KT = false;
			}else if(ktpddk(PN)){
				document.getElementById('loiphonenumber').style.display = 'block';
				document.getElementById('loiphonenumber').innerHTML = 'Số điện thoại đã đăng kí';
				KT = false;
			}else{
				document.getElementById('loiphonenumber').style.display = 'none';
				}
			}
		}
		if(!P){
			document.getElementById('loipassword').style.display = 'block';
			KT = false;
		}else{
			 if (KTKT(P)==true){
				document.getElementById('loipassword').style.display = 'block';
				document.getElementById('loipassword').innerHTML='Mật khẩu không được chứa khoảng cách';
				KT = false;
			}else if(ktktdb(P) == true){
				document.getElementById('loipassword').style.display = 'block';
				document.getElementById('loipassword').innerHTML='Mật khẩu không được chứa kí tự đặc biệt';
				KT = false 
			}else if(P.length<8){
				document.getElementById('loipassword').style.display = 'block';
				document.getElementById('loipassword').innerHTML = 'Mật khẩu phải trên 8 ký tự';
				KT = false;
			}else{
			document.getElementById('loipassword').style.display = 'none';
			}
		}
		
	if(PA.value != P){
		document.getElementById('loipassword1').style.display = 'block';
		KT = false;
	}else{
		document.getElementById('loipassword1').style.display = 'none';
	}
	if(!A){
		document.getElementById('loiaddress').style.display='block';
		KT=false;
	}else{
		if(ktdiachi(A)==true){
			document.getElementById('loiaddress').style.display='block';
			KT=false;
		}else if(ktdiachi1(A)==true && ktdiachi2(A)==true){
			document.getElementById('loiaddress').style.display='none';
		}else{
			document.getElementById('loiaddress').style.display='block';
			KT=false;
		}
	}
	if(KT==false){
		return false;
	}
		if (localStorage['user'] == null)
			localStorage.setItem('user', JSON.stringify(userArray))
			var userArray = JSON.parse(localStorage.getItem('user'));
			userArray.push({username: NN, password: P, fullname: FN , address: A, phone: PN,quyen : '1'});
			localStorage.setItem('user',JSON.stringify(userArray));
			var khungdangki = document.getElementById('khungdangki');
			khungdangki.style.display = 'none';
			document.getElementById('maunen1').style.display = 'none';
			alert("ĐĂNG KÍ THÀNH CÔNG");
		
	}
 /*END USER*/
/*SEARCH*/
function mosearch () {
	document.getElementById('seach').style.display = 'block';
	document.getElementById('all').style.display = 'none';
	document.getElementById('maunen1').style.display = 'none';
	document.getElementById('nd').style.display="none";
	document.getElementById('khungdangnhap').style.display="none";
	document.getElementById('khungdangki').style.display="none";
	document.getElementById('bh').style.display="none";
	dongbansp();
	tatth();
	suatkout();
}
function dongsearch () {
	document.getElementById('seach').style.display = 'none';
	document.getElementById('all').style.display = 'block';
	document.getElementById('search').value= "";
	document.getElementById('ketthuc').value= "";
	document.getElementById('batdau').value= "";
	document.getElementById("xuatspsearch").innerHTML = "";
	document.getElementById('khungdangnhap').style.display="none";
	document.getElementById('khungdangki').style.display="none";

}

function timkiem1(){
	document.getElementById('seach').style.position = 'static';
	var sanpham = JSON.parse(localStorage.getItem('phansanpham'));
	var input, filter, a, ul, li;
	var b ="";
	var bd = document.getElementById('batdau').value;
	var kt = document.getElementById('ketthuc').value;
	var gtinh = document.getElementById('thuonghieus').value;
    input=document.getElementById('search').value;
    filter=input.toUpperCase();
    if ((filter)&& (bd == "") && (gtinh=="")&&(kt == "") ) {
        for(y=0; y<sanpham.length; y++){
            if(sanpham[y].name.toUpperCase().indexOf(filter)>-1){
                if (sanpham[y].gioitinh=='nam') {
           			 gt="NAM";       }   
       			else if (sanpham[y].gioitinh=='nu') {
           			 gt="NỮ";}
     		    var a='<div onclick="banspsearch('+sanpham[y].masanpham+')"  class = "tungsanpham1" id="sanphamtrong"><img style="width:100%;" src="./images/'+sanpham[y].img+'"><b>'+  sanpham[y].name+'<br><b style="margin-top : 10%;margin-bottom : 5%" > GIÁ : '+vietnamdong(sanpham[y].giatien)+
        '</b><br><b style="margin-top : 10%;margin-bottom : 5%" > ĐỒNG HỒ : '+gt+'</b><div style="margin-left : 15px"><buton class="nutdatmua"> CHI TIẾT</buton></div></div>';
		  		 b=b+a;}}}
	else if((filter)&&(gtinh == "")){
	    for(y=0; y<sanpham.length; y++){
            if (kt == "") {
            	if(sanpham[y].name.toUpperCase().indexOf(filter)>-1 && (sanpham[y].giatien >= bd)){
	                if (sanpham[y].gioitinh=='nam') {
	           			 gt="NAM";       }   
	       			else if (sanpham[y].gioitinh=='nu') {
	           			 gt="NỮ";}
	     		    var a='<div onclick="banspsearch('+sanpham[y].masanpham+')"  class = "tungsanpham1" id="sanphamtrong"><img style="width:100%;" src="./images/'+sanpham[y].img+'"><b>'+  sanpham[y].name+'<br><b style="margin-top : 10%;margin-bottom : 5%" > GIÁ : '+vietnamdong(sanpham[y].giatien)+
	        '</b><br><b style="margin-top : 10%;margin-bottom : 5%" > ĐỒNG HỒ : '+gt+'</b><div style="margin-left : 15px"><buton class="nutdatmua"> CHI TIẾT</buton></div></div>';
			  		 b=b+a;}} 
			else if (bd == "") {
            	if(sanpham[y].name.toUpperCase().indexOf(filter)>-1 && (sanpham[y].giatien <= kt)){
	                if (sanpham[y].gioitinh=='nam') {
	           			 gt="NAM";       }   
	       			else if (sanpham[y].gioitinh=='nu') {
	           			 gt="NỮ";}
	     		    var a='<div onclick="banspsearch('+sanpham[y].masanpham+')"  class = "tungsanpham1" id="sanphamtrong"><img style="width:100%;" src="./images/'+sanpham[y].img+'"><b>'+  sanpham[y].name+'<br><b style="margin-top : 10%;margin-bottom : 5%" > GIÁ : '+vietnamdong(sanpham[y].giatien)+
	        '</b><br><b style="margin-top : 10%;margin-bottom : 5%" > ĐỒNG HỒ : '+gt+'</b><div style="margin-left : 15px"><buton class="nutdatmua"> CHI TIẾT</buton></div></div>';
			  		 b=b+a;}}
			else {
				if(sanpham[y].name.toUpperCase().indexOf(filter)>-1 && (sanpham[y].giatien <= kt) && (sanpham[y].giatien >= bd)){
	                if (sanpham[y].gioitinh=='nam') {
	           			 gt="NAM";       }   
	       			else if (sanpham[y].gioitinh=='nu') {
	           			 gt="NỮ";}
	     		    var a='<div onclick="banspsearch('+sanpham[y].masanpham+')"  class = "tungsanpham1" id="sanphamtrong"><img style="width:100%;" src="./images/'+sanpham[y].img+'"><b>'+  sanpham[y].name+'<br><b style="margin-top : 10%;margin-bottom : 5%" > GIÁ : '+vietnamdong(sanpham[y].giatien)+
	        '</b><br><b style="margin-top : 10%;margin-bottom : 5%" > ĐỒNG HỒ : '+gt+'</b><div style="margin-left : 15px"><buton class="nutdatmua"> CHI TIẾT</buton></div></div>';
			  		 b=b+a;}}
}}
	else if((filter) && (bd=="") && (kt =="")){
	    for(y=0; y<sanpham.length; y++){
            if((sanpham[y].name.toUpperCase().indexOf(filter)>-1)&&(sanpham[y].thuonghieu == gtinh)){
                if (sanpham[y].gioitinh=='nam') {
           			 gt="NAM";       }   
       			else if (sanpham[y].gioitinh=='nu') {
           			 gt="NỮ";}
     		    var a='<div onclick="banspsearch('+sanpham[y].masanpham+')"  class = "tungsanpham1" id="sanphamtrong"><img style="width:100%;" src="./images/'+sanpham[y].img+'"><b>'+  sanpham[y].name+'<br><b style="margin-top : 10%;margin-bottom : 5%" > GIÁ : '+vietnamdong(sanpham[y].giatien)+
        '</b><br><b style="margin-top : 10%;margin-bottom : 5%" > ĐỒNG HỒ : '+gt+'</b><div style="margin-left : 15px"><buton class="nutdatmua"> CHI TIẾT</buton></div></div>';
		  		 b=b+a;}} 	
	      }   
	else if((filter)){
		 for(y=0; y<sanpham.length; y++){
            if((sanpham[y].name.toUpperCase().indexOf(filter)>-1)&&(sanpham[y].thuonghieu == gtinh)){
                 if (kt == "") {
            	if(sanpham[y].name.toUpperCase().indexOf(filter)>-1 && (sanpham[y].giatien >= bd)){
	                if (sanpham[y].gioitinh=='nam') {
	           			 gt="NAM";       }   
	       			else if (sanpham[y].gioitinh=='nu') {
	           			 gt="NỮ";}
	     		    var a='<div onclick="banspsearch('+sanpham[y].masanpham+')"  class = "tungsanpham1" id="sanphamtrong"><img style="width:100%;" src="./images/'+sanpham[y].img+'"><b>'+  sanpham[y].name+'<br><b style="margin-top : 10%;margin-bottom : 5%" > GIÁ : '+vietnamdong(sanpham[y].giatien)+
	        '</b><br><b style="margin-top : 10%;margin-bottom : 5%" > ĐỒNG HỒ : '+gt+'</b><div style="margin-left : 15px"><buton class="nutdatmua"> CHI TIẾT</buton></div></div>';
			  		 b=b+a;}} 
			else if (bd == "") {
            	if(sanpham[y].name.toUpperCase().indexOf(filter)>-1 && (sanpham[y].giatien <= kt)){
	                if (sanpham[y].gioitinh=='nam') {
	           			 gt="NAM";       }   
	       			else if (sanpham[y].gioitinh=='nu') {
	           			 gt="NỮ";}
	     		    var a='<div onclick="banspsearch('+sanpham[y].masanpham+')"  class = "tungsanpham1" id="sanphamtrong"><img style="width:100%;" src="./images/'+sanpham[y].img+'"><b>'+  sanpham[y].name+'<br><b style="margin-top : 10%;margin-bottom : 5%" > GIÁ : '+vietnamdong(sanpham[y].giatien)+
	        '</b><br><b style="margin-top : 10%;margin-bottom : 5%" > ĐỒNG HỒ : '+gt+'</b><div style="margin-left : 15px"><buton class="nutdatmua"> CHI TIẾT</buton></div></div>';
			  		 b=b+a;}}

			 else {
				if(sanpham[y].name.toUpperCase().indexOf(filter)>-1 && (sanpham[y].giatien <= kt) && (sanpham[y].giatien >= bd)){
	                if (sanpham[y].gioitinh=='nam') {
	           			 gt="NAM";       }   
	       			else if (sanpham[y].gioitinh=='nu') {
	           			 gt="NỮ";}
	     		    var a='<div onclick="banspsearch('+sanpham[y].masanpham+')"  class = "tungsanpham1" id="sanphamtrong"><img style="width:100%;" src="./images/'+sanpham[y].img+'"><b>'+  sanpham[y].name+'<br><b style="margin-top : 10%;margin-bottom : 5%" > GIÁ : '+vietnamdong(sanpham[y].giatien)+
	        '</b><br><b style="margin-top : 10%;margin-bottom : 5%" > ĐỒNG HỒ : '+gt+'</b><div style="margin-left : 15px"><buton class="nutdatmua"> CHI TIẾT</buton></div></div>';
			  		 b=b+a;}}}}}     
     else {
     	document.getElementById('seach').style.position = 'fixed';	
     }
    document.getElementById("xuatspsearch").innerHTML = b;
}

function banspsearch (b) {
	document.getElementById("banspsearch").style.display = "block";
	var sanpham = JSON.parse(localStorage.getItem('phansanpham'));
	for(i=0;i<sanpham.length;i++){
		if(sanpham[i].masanpham == b){
			spban = sanpham[i];
			var c ="./images/"
			c = c + sanpham[i].img;
			document.getElementById('anh1').src= c;
			var c ="TÊN SẢN PHẨM : "
			c = c + sanpham[i].name;
			document.getElementById('banspname1').innerHTML = c;
			var c ="GIÁ : "
			c = c + vietnamdong(sanpham[i].giatien);
			document.getElementById('banspgia1').innerHTML = c;
			var c ="GIÁ : "
			c = c + sanpham[i].namsanxuat;
			document.getElementById('banspnam1').innerHTML = c;
			var c ="GIÁ : "
			c = c + sanpham[i].xuatsu;
			document.getElementById('banspxuatsu1').innerHTML = c;

		}
	}
	var s = '<button onclick="themvaogiohang('+b+')" id="muahang">THÊM VÀO GIỎ HÀNG</button>';
	document.getElementById('bun').innerHTML = s;

}
function dongbanspsearch () {
	document.getElementById("banspsearch").style.display = "none";
}
function modonhang() {
	var x = localStorage.getItem('login');
	tatth();
	suatkout();
	var tk  = x.split('"');
	var ss ='<div style="width:100%;float:left;margin-top:10px;margin-bottom:40px"><div style="float: right;cursor: pointer;font-size: 30px;padding-right: 10px;margin-top: 1px;"><a onclick="dongdonhang()">X</a></div><h1 style="margin-left:20px;">CÁC ĐƠN HÀNG CỦA BẠN </h1></div>';
	document.getElementById('donhang').style.display = 'block';
	document.getElementById('all').style.display = 'none';
	var giohang = JSON.parse(localStorage.getItem('giohangadmin'))
	var p = 1,check = 0;
	if(giohang != null){
		var t ="",g="",v ="",tong = 0,o = 1;
		var mangtam = [],oo = 0;
		for(i=0;i < giohang.length ; i++){
			if (tk[3] == giohang[i].taikhoan) {
				mangtam[oo] = giohang[i];
				mangtam[oo].donhangso
				oo++;check++;}}
		if(check == 0 ){
			ss+='<div style="margin-left: 20%;margin-top:150px"><h2>BẠN KHÔNG CÓ ĐƠN HÀNG NÀO</h2></div>'}
		else {
			o= mangtam[0].donhangso
			var j = (mangtam.length-1);
			for(i = 1 ; i <= o; i++){
				kk=0;
				while (mangtam[j].donhangso == i ) {
					t += mangtam[j].soluong+' chiếc - '+ mangtam[j].name+'<br>' ;
			 		g += vietnamdong(mangtam[j].soluong*mangtam[j].giatien) +' VNĐ<br>';
			 		tong += mangtam[j].soluong*mangtam[j].giatien;
			 		v=mangtam[j].tinhtrang;
			 		j--;
			 		kk++;
			 		if(mangtam[j] == null){break;}
			 	}
			 	if(kk != 0){
			 	if(v != 'CHƯA XỬ LÝ' ){
			 		v = 'ĐƠN HÀNG ĐÃ ĐƯỢC XÁC NHẬN'
			 	}
			 	var a ='<div class="chitietdh">'+
			 		'<div style="width:15%;height: 100px;float : left;text-align: center;font-size: 130%;line-height: 100px;">ĐƠN HÀNG : '+p+'</div>'+
					'<div style="width:20%;height:100%;float : left;text-align: center;font-size: 100%;margin-top:15px;">Số lượng : <br>'+t+'</div><div style="width:22%;height:100%;float : left;text-align: center;font-size: 100%;margin-top:15px;">GIÁ : <br>'+g+'</div>'+
					'<div style="width:20%;height:100%;float : left;text-align: center;font-size: 150%;line-height: 30px;margin-top:30px;">TỔNG ĐƠN HÀNG: <br>'+vietnamdong(tong)+'</div>'+
					'<div style="width:15%;height:100%;float : left;text-align: center;font-size: 145%;line-height: 30px;margin-top:30px;">TÌNH TRẠNG : <br>'+v+'</div></div>';

				ss=ss+a
				t="",g="",v="",tong = 0,p++;}
			 	}
	}
}
		else {ss+='<div style="margin-left: 20%;margin-top:150px"><h2>BẠN KHÔNG CÓ ĐƠN HÀNG NÀO</h2></div>'	}	
	document.getElementById('donhang').innerHTML = ss;
	dongbansp();
}
function dongdonhang() {
	document.getElementById('donhang').style.display = 'none';
	document.getElementById('all').style.display = 'block';
}
/*END SEARCH*/
/*BANNER BEGIN*/
var diem=1;
function taomenu() {
	var s='';
	for(i=0;i<theloaiarr.length;i++){
		var a='<a href="#" id="'+theloaiarr[i].matl+'" onclick="clicknd('+theloaiarr[i].matl+');"><div>';
		 s=s+a+theloaiarr[i].tentl+'</div></a>'	}
	 document.querySelector('#noidung1').innerHTML = s;
}
function dhnam () {
	var a ='<ul id="menu"><li><a  id="'+menu[0].matl+'"  onclick=" clicknd('+menu[0].matl+');" href="#">ĐỒNG HỒ NAM </a></li></ul>'
	document.getElementById("dhnam").innerHTML = a;}
function dhnu () {
	var a ='<ul id="menu"><li><a  id="'+menu[1].matl+'"  onclick=" clicknd('+menu[1].matl+');" href="#">ĐỒNG HỒ NỮ </a></li></ul>'
	document.getElementById("dhnu").innerHTML = a;}
function tatth(){
	document.getElementById('noidung1').style.display='none';
	diem=1;
}
function hien(){
	 diem++;
	 if(diem % 2 == 0){
	 	document.getElementById('noidung1').style.display='block';
	 }else {
	 	document.getElementById('noidung1').style.display='none';
	 	diem =1;
	 }
}
window.onload = function () {
	var images=[{MaAnh:1 ,images:'./images/anh1.jpg'},
			{MaAnh:2 ,images:'./images/anh2.jpg'},
			{MaAnh:3,images:'./images/anh3.jpg'},
			{MaAnh:4 ,images:'./images/anh4.jpg'},
			{MaAnh:5 ,images:'./images/anh5.jpg'}];
	localStorage.setItem('slideshow',JSON.stringify(images));
	var anh = JSON.parse(localStorage.getItem('slideshow'));
	taomenu(); 
	document.sliders.src=anh[0].images;
	changeImg();
	dhnam();
	dhnu();
	phansanpham(sanpham);}

var i=0;
var time=6000;
    // thời giản chuyển ảnh
function changeImg(){
	var anh = JSON.parse(localStorage.getItem('slideshow'));
    if(i<anh.length-1){
        i++;
    } else {
       i=0;
    }
	   setTimeout("changeImg()",time);
	   document.sliders.src=anh[i].images;
}
function shownd(){
	var a = document.getElementById('maunen1');
	a.style.display = 'block';
	document.getElementById('nd').style.display="none";
	document.getElementById('nd').style.display="block";
	}
function dongnd(){
	document.getElementById('nd').style.display="none";
	var a = document.getElementById('maunen1');
	a.style.display = 'none';
}	
function showbh(){
	var a = document.getElementById('maunen1');
	a.style.display = 'block';
	document.getElementById('bh').style.display="none";
	document.getElementById('bh').style.display="block";
	}
function dongbh(){
	document.getElementById('bh').style.display="none";
	var a = document.getElementById('maunen1');
	a.style.display = 'none';
}
/*BANNER END*/
function suatkout() {
	document.getElementById('suatk1').style.display = 'none';
}
function hienthongtintk(b){
	var taikhoan = JSON.parse(localStorage.getItem('user'));
	var s='<h2>Thông tin người dùng:</h2>';
	document.getElementById('suatk1').style.display='block';
	for(i=1;i<taikhoan.length;i++)
		if(taikhoan[i].phone == b){
			var a='<div style="float:left;height: 100px;width: 100%">'+
					'<div class="khungnho1">'+taikhoan[i].fullname+'</div>'+
					'<div class="khungnho1">'+taikhoan[i].username+'</div>'+
					'<div class="khungnho1">'+taikhoan[i].password+'</div>'+
					'<div class="khungnho1">'+taikhoan[i].address+'</div>'+
					'<div class="khungnho1">'+taikhoan[i].phone+'</div>';
					;
			s=s+a;
			document.getElementById('thongtintk').innerHTML = s;
		b='<input type="button"  value="CẬP NHẬT" onclick="capnhattk('+i+')"/>';
	}
	document.getElementById("nutcapnhattk").innerHTML = b; 	
	dongnd();
	dongbh();
	tatth();
	dongbansp();
}
function checkcntk(){
	var user = JSON.parse(localStorage.getItem('user'));
	var FN = document.getElementById('fullnametkm').value;
	var N = document.getElementById('usernametkm').value;
	var P = document.getElementById('passwordtkm').value;
	var PN = document.getElementById('phonenumbertkm').value;
	var A = document.getElementById('addresstkm').value;
	var NN =N.toLowerCase();
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
	}
	}
    localStorage.setItem('user',JSON.stringify(user));
  	alert("SỬA THÔNG TIN THÀNH CÔNG");
  	xoatt();
    suatkout();
}
function xoatt(){
	document.getElementById('fullnametkm').value = ""
	document.getElementById('usernametkm').value = ""
	document.getElementById('passwordtkm').value = ""
	document.getElementById('phonenumbertkm').value = ""
	document.getElementById('addresstkm').value = ""
}