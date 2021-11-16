import { createSlice } from '@reduxjs/toolkit';

export const bodyPreviewSlice = createSlice({
	name: 'bodyPreview',
	initialState: {
		body: [], //DUMMY_DATA[key].body.substring(0, 50).concat('... '),
		button: 'MORE',
	},
	reducers: {
		updateBody: (state, action) => {
			state.body = action.payload;
		},
		previewOff: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.body = action.payload; //DUMMY_DATA[key].body;
			state.button = 'LESS';
		},
		previewOn: (state, action) => {
			// action.payload should pass an index
			// access the specific question from state.body using that index
			// expand that object's body
			console.log('payload', action.payload);
			state.body = action.payload; //DUMMY_DATA[key].body.substring(0, 50).concat('... ');
			state.button = 'MORE';
		},
		buttonLess: (state) => {
			state.button = 'LESS';
		},
		buttonMore: (state) => {
			state.button = 'MORE';
		},
	},
});

// Action creators are generated for each case reducer function
export const { updateBody, previewOff, previewOn, buttonLess, buttonMore } = bodyPreviewSlice.actions;

export default bodyPreviewSlice.reducer;
