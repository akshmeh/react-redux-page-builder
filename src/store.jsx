import { configureStore } from '@reduxjs/toolkit'
import WidgetReducer from './reducer/WidgetReducer'

// eslint-disable-next-line react-refresh/only-export-components
export default configureStore({
  reducer: {
    widget: WidgetReducer,
  },
})