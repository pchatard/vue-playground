const cursor = {
	state: {
		cursorType: "square",
		cursorFollowerCoords: { x: -100, y: -100 },
		followDelay: 0.1,
	},
	mutations: {
		SET_CURSOR_TYPE: (state, cursorType) => (state.cursorType = cursorType),
		SET_CURSOR_COORDS: (state, { x, y }) => {
			state.cursorFollowerCoords.x = x;
			state.cursorFollowerCoords.y = y;
		},
		SET_FOLLOW_DELAY: (state, followDelay) => (state.followDelay = followDelay),
	},
	actions: {
		updateCursorType({ commit }, newCursorType) {
			commit("SET_CURSOR_TYPE", newCursorType);
		},
		updateCursorCoords({ commit }, newCursorCoords) {
			commit("SET_CURSOR_COORDS", newCursorCoords);
		},
		updateCursorFollowDelay({ commit }, followDelay) {
			commit("SET_FOLLOW_DELAY", followDelay);
		},
	},
	getters: {
		cursorType: (state) => state.cursorType,
		cursorCoords: (state) => state.cursorFollowerCoords,
		followDelay: (state) => state.followDelay,
	},
};

export default cursor;
