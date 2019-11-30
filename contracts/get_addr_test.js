// @ts-nocheck
var addrElm = document.getElementsByClassName('AccountAddress');
var pkKey = document.getElementsByClassName('ShowKeys');
var data = [];
for (var i = 0; i < addrElm.length; i++) {
	pkKey[i].click()
	var pk = document.getElementsByTagName('dd')[1].innerText.split('\n')[0];
	data.push({
		addr: addrElm[i].children[1].innerText,
		pk: pk
	});
}
var strAddr = '';
var strPk = '';
data.forEach((item, index) => {
	strAddr += `(${index + 0}) ` + item.addr + '\n';
	strPk += `(${index + 0}) ` + item.pk + '\n';
});
console.log(strAddr);
console.log(strPk);