const overlayConfig = [
	{
		name: "first",
		active: false,
		from: "translate(0, -100%)",
		stop: "translate(0, -10vh)",
		to: "translate(0, 100%)",
		duration: 700,
		delay: 200,
		timingFunction: "ease-in",
	},
	{
		name: "second",
		active: false,
		from: "translate(100%, 0)",
		stop: "translate(-10vw, 0)",
		to: "translate(-100%, 0)",
		duration: 700,
		delay: 200,
		timingFunction: "ease-in",
	},
	{
		name: "third",
		active: false,
		from: "translate(-50%, -50%) scale(0)",
		stop: "translate(-50%, -50%) scale(1)",
		to: "translate(-50%, -50%) scale(0)",
		duration: 700,
		delay: 200,
		timingFunction: "ease-out",
	},
	{
		name: "fourth",
		active: false,
		bottom: {
			from: "translate(0, 100%) rotate(180deg)",
			stop: "translate(0, 0) rotate(180deg)",
			to: "translate(0, 100%) rotate(180deg)",
		},
		top: {
			from: "translate(0, -100%)",
			stop: "translate(0, 0)",
			to: "translate(0, -100%)",
		},
		duration: 700,
		delay: 500,
		timingFunction: "ease-in",
	},
];

export const showOverlay = (to, next, overlayClass) => {
	if (!to.path.includes("/transitions")) {
		next();
		return;
	}

	const matchingOverlay = overlayConfig.find(
		(overlay) => overlay.name === overlayClass
	);
	const matchingOverlayIndex = overlayConfig.findIndex(
		(overlay) => overlay.name === overlayClass
	);

	if (matchingOverlay) {
		const overlayDOM = document.querySelectorAll(
			`.overlay.${matchingOverlay.name}`
		);

		if (overlayDOM && overlayDOM.length > 1) {
			overlayDOM.forEach((overlay) => {
				overlayConfig[matchingOverlayIndex].active = true;
				overlay.style.transition = `transform ${matchingOverlay.duration}ms ${matchingOverlay.timingFunction}`;
				if (Array.from(overlay.classList).includes("bottom")) {
					overlay.style.transform = matchingOverlay.bottom.stop;
				} else {
					overlay.style.transform = matchingOverlay.top.stop;
				}
				setTimeout(next, matchingOverlay.duration + matchingOverlay.delay);
			});
		} else if (overlayDOM) {
			overlayConfig[matchingOverlayIndex].active = true;
			overlayDOM[0].style.transition = `transform ${matchingOverlay.duration}ms ${matchingOverlay.timingFunction}`;
			overlayDOM[0].style.transform = matchingOverlay.stop;
			setTimeout(next, matchingOverlay.duration + matchingOverlay.delay);
		} else {
			next();
		}
	}
};

export const hideOverlay = (to, from) => {
	if (
		!to.path.includes("/transitions") ||
		!from.path.includes("/transitions")
	) {
		return;
	}

	const activeOverlay = overlayConfig.find((overlay) => {
		return overlay.active;
	});
	const activeOverlayIndex = overlayConfig.findIndex((overlay) => {
		return overlay.active;
	});

	if (activeOverlay) {
		const overlayDOM = document.querySelectorAll(
			`.overlay.${activeOverlay.name}`
		);

		if (overlayDOM && overlayDOM.length > 1) {
			overlayConfig[activeOverlayIndex].active = false;
			overlayDOM.forEach((overlay) => {
				if (Array.from(overlay.classList).includes("bottom")) {
					overlay.style.transform = activeOverlay.bottom.to;
					setTimeout(() => {
						overlay.style.transition = "none";
						overlay.style.transform = activeOverlay.bottom.from;
					}, activeOverlay.duration + activeOverlay.delay);
				} else {
					overlay.style.transform = activeOverlay.top.to;
					setTimeout(() => {
						overlay.style.transition = "none";
						overlay.style.transform = activeOverlay.top.from;
					}, activeOverlay.duration + activeOverlay.delay);
				}
			});
		} else if (overlayDOM) {
			overlayConfig[activeOverlayIndex].active = false;
			overlayDOM[0].style.transform = activeOverlay.to;
			setTimeout(() => {
				overlayDOM[0].style.transition = "none";
				overlayDOM[0].style.transform = activeOverlay.from;
			}, activeOverlay.duration + activeOverlay.delay);
		}
	}
};
