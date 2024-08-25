window.onload = () => {
	li_4.classList.toggle("li_4_animate");
	li_5.classList.toggle("li_5_animate");
	li_6.classList.toggle("li_6_animate");
	ul_slide.classList.toggle("ul_animate");
};
// log(btn_left.disabled);
// log(btn_right.disabled);

function slideToLeft() {
	btn_left.disabled ? (btn_left.disabled = false) : (btn_left.disabled = true);
	btn_right.disabled
		? (btn_right.disabled = false)
		: (btn_right.disabled = true);
	span_slide_numbers.textContent = "3/6";
	li_4.style.gridArea = "left_4";
	li_5.style.gridArea = "left_5";
	li_6.style.gridArea = "left_6";

	li_4.classList.toggle("li_4_animate");
	li_5.classList.toggle("li_5_animate");
	li_6.classList.toggle("li_6_animate");
	ul_slide.classList.toggle("ul_animate");
}
function slideToRight() {
	btn_right.disabled
		? (btn_right.disabled = false)
		: (btn_right.disabled = true);
	btn_left.disabled ? (btn_left.disabled = false) : (btn_left.disabled = true);
	span_slide_numbers.textContent = "6/6";
	li_4.style.gridArea = "left_1";
	li_5.style.gridArea = "left_2";
	li_6.style.gridArea = "left_3";

	li_4.classList.toggle("li_4_animate");
	li_5.classList.toggle("li_5_animate");
	li_6.classList.toggle("li_6_animate");
	ul_slide.classList.toggle("ul_animate");
}
