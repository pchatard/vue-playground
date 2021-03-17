const overlayConfig = [
	{
		name: "first",
		active: false,
		from: "translate(0, -100%)",
		stop: "translate(0, 0)",
		to: "translate(0, 100%)",
		timing: 700,
		delay: 0,
	},
	{
		name: "second",
		active: false,
		from: "translate(-100%, 0)",
		stop: "translate(0, 0)",
		to: "translate(100%, 0)",
		timing: 700,
		delay: 0,
	},
	{
		name: "third",
		active: false,
		from: "translate(0, 100%)",
		stop: "translate(0, 0)",
		to: "translate(0, -100%)",
		timing: 700,
		delay: 0,
	},
	{
		name: "fourth",
		active: false,
		from: "translate(100%, 0)",
		stop: "translate(0, 0)",
		to: "translate(-100%, 0)",
		timing: 700,
		delay: 0,
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
		const overlayDOM = document.querySelector(
			`.overlay.${matchingOverlay.name}`
		);
		if (overlayDOM) {
			overlayConfig[matchingOverlayIndex].active = true;
			overlayDOM.style.transition = `transform ${matchingOverlay.timing}ms linear`;
			overlayDOM.style.transform = matchingOverlay.stop;
			setTimeout(next, matchingOverlay.timing + matchingOverlay.delay);
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
		const DOMoverlay = document.querySelector(`.overlay.${activeOverlay.name}`);
		if (DOMoverlay) {
			overlayConfig[activeOverlayIndex].active = false;
			DOMoverlay.style.transform = activeOverlay.to;
			setTimeout(() => {
				DOMoverlay.style.transition = "none";
				DOMoverlay.style.transform = activeOverlay.from;
			}, activeOverlay.timing + activeOverlay.delay);
		}
	}
};
