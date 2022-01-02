import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import appReducer from "../features/appSlice";
import { Store } from "@mui/icons-material";

export default configureStore({

  reducer: {
    user: userReducer,
    app: appReducer,
  },
  
});
