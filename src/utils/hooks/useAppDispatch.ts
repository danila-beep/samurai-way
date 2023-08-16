import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../../store/store";

export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
