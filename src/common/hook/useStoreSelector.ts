import { TypedUseSelectorHook, useSelector } from "react-redux";
import { TStoreState } from "../types/store.types";

export const useStoreSelector: TypedUseSelectorHook<TStoreState> = useSelector;