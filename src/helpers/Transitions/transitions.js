export const showOverlay = (to, from, next) => {
	const isHorizontalOverlay =
		to.name === "Cursor Road" ||
		(to.name === "Home" && from.name === "Cursor Road");
	const isVerticalOverlay =
		to.name === "Hamburger Park" ||
		(to.name === "Home" && from.name === "Hamburger Park");
	if (isHorizontalOverlay) {
		const overlay = document.querySelector(".overlay-h");
		if (overlay) {
			overlay.style.transform = "translateX(0)";
			setTimeout(next, 500);
		} else {
			next();
		}
	} else if (isVerticalOverlay) {
		const overlay = document.querySelector(".overlay-v");
		if (overlay) {
			overlay.style.transform = "translateY(0)";
			setTimeout(next, 500);
		} else {
			next();
		}
	} else {
		next();
	}
};

export const hideOverlay = (to, from) => {
	const isHorizontalOverlay =
		to.name === "Cursor Road" ||
		(to.name === "Home" && from.name === "Cursor Road");
	const isVerticalOverlay =
		to.name === "Hamburger Park" ||
		(to.name === "Home" && from.name === "Hamburger Park");
	if (isHorizontalOverlay) {
		const overlay = document.querySelector(".overlay-h");
		let direction = "-100%";
		if (overlay) {
			if (to.name === "Cursor Road") {
				direction = "100%";
			}
			overlay.style.transform = `translateX(${direction})`;
		}
	} else if (isVerticalOverlay) {
		const overlay = document.querySelector(".overlay-v");
		let direction = "-100%";
		if (overlay) {
			if (to.name === "Hamburger Park") {
				direction = "100%";
			}
			overlay.style.transform = `translateY(${direction})`;
		}
	}
};
