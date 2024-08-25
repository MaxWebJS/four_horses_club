log("svg");

function svgCorrect() {
	// log(svg_x_id.value);
	const dAttr = chevron_left_path.getAttribute("d");
	// log(dAttr);
	const mIndex = dAttr.indexOf("M");
	const lIndex = dAttr.indexOf("L");

	let mNumber = parseInt(
		dAttr.substring(mIndex + 1, dAttr.indexOf(" ", mIndex))
	);
	let lNumber = parseInt(
		dAttr.substring(lIndex + 1, dAttr.indexOf(" ", lIndex))
	);

	mNumber += svg_x_id.value * 1;
	lNumber -= svg_x_id.value;
	chevron_left_path.setAttribute("d", `M${mNumber} 4L${lNumber} 12L16 20`);
}
