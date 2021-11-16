import { createSlice } from '@reduxjs/toolkit';

export const bodyPreviewSlice = createSlice({
	name: 'bodyPreview',
	initialState: {
		body: '', //DUMMY_DATA[key].body.substring(0, 50).concat('... '),
		button: 'MORE',
	},
	reducers: {
		previewOff: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.body = 'off'; //DUMMY_DATA[key].body;
		},
		previewOn: (state) => {
			console.log('preview on action!!');
			state.body = 'on'; //DUMMY_DATA[key].body.substring(0, 50).concat('... ');
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
export const { previewOff, previewOn, buttonLess, buttonMore } = bodyPreviewSlice.actions;

export default bodyPreviewSlice.reducer;
