const cursor = {
	state: {
		cursor: "custom",
		customCursor: {
			type: "square",
			follower: {
				coords: { x: -100, y: -100 },
				delay: 0.1,
			},
		},
	},
	mutations: {
		SET_CURSOR: (state, newCursor) => (state.cursor = newCursor),
		SET_CUSTOM_CURSOR_TYPE: (state, cursorType) =>
			(state.customCursor.type = cursorType),
		SET_CUSTOM_CURSOR_FOLLOW_COORDS: (state, { x, y }) => {
			state.customCursor.follower.coords.x = x;
			state.customCursor.follower.coords.y = y;
		},
		SET_CUSTOM_CURSOR_FOLLOW_DELAY: (state, followDelay) =>
			(state.customCursor.follower.delay = followDelay),
	},
	actions: {
		updateCursor({ commit }, newCursor) {
			commit("SET_CURSOR", newCursor);
		},
		updateCustomCursorType({ commit }, newCursorType) {
			commit("SET_CUSTOM_CURSOR_TYPE", newCursorType);
		},
		updateCustomCursorFollowCoords({ commit }, newCursorCoords) {
			commit("SET_CUSTOM_CURSOR_FOLLOW_COORDS", newCursorCoords);
		},
		updateCustomCursorFollowDelay({ commit }, followDelay) {
			commit("SET_CUSTOM_CURSOR_FOLLOW_DELAY", followDelay);
		},
	},
	getters: {
		cursor: (state) => state.cursor,
		customCursor: (state) => state.customCursor,
	},
};

export default cursor;
