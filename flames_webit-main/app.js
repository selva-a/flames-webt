function getNames() {
	let boyname = document.getElementById("boy-name").value;
	let girlname = document.getElementById("girl-name").value;
	if (boyname.trim().length === 0 || girlname.trim().length === 0) {
		alert("Please enter two names");
		return;
	}
	for (let i = 0; i < boyname.length; i++) {
		for (let j = 0; j < girlname.length; j++) {
			if (boyname[i] === girlname[j] && boyname[j] != "*") {
				boyname = boyname.replace(boyname[i], "*");
				girlname = girlname.replace(girlname[j], "*");
			}
		}
	}
	boyname = boyname.replaceAll("*", "").trim();
	girlname = girlname.replaceAll("*", "").trim();
	boyname = boyname.replaceAll(" ", "").trim();
	girlname = girlname.replaceAll(" ", "").trim();
	console.log(boyname, girlname);

	let len = boyname.length + girlname.length;
	console.log(len);
	let flames = ["F", "L", "A", "M", "E", "S"];
	for (let i = 0; i < flames.length; i++) {
		let curEle = document.getElementById(flames[i]);
		curEle.classList.remove("highlight");
	}
	let pos = 0;
	while (flames.length > 1) {
		pos = ((len + pos) % flames.length) - 1;
		flames.splice(pos, 1);
		console.log(flames);
	}
	let res = document.getElementById(flames[0]);
	res.classList.add("highlight");
}
