import { configureStore } from '@reduxjs/toolkit';
import bodyPreviewReducer from '../state-slices/bodyPreviewSlice';

export default configureStore({
	reducer: {
		bodyPreview: bodyPreviewReducer,
	},
});
