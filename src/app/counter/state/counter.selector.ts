import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterStateType } from "../state/counter.state";

const getCounterState = createFeatureSelector<CounterStateType>('counter') 

export const getCounter = createSelector(getCounterState,state=>{
    return state.counter;
})

export const getChannelName = createSelector(getCounterState,state=>{
    return state.channelName;
})