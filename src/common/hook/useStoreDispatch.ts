import { useDispatch } from "react-redux";
import { TStoreDispatch } from "../types/store.types";

export const useStoreDispatch = () => useDispatch<TStoreDispatch>();