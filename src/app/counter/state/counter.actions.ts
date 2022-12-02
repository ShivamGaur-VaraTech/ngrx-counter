import { createAction, props } from "@ngrx/store";
// import { command as commandtype } from '../components/buttons/buttons.component'

export const increment = createAction('increment')
export const decrement =  createAction('decrement')
export const reset = createAction('reset')
export const customIncrement = createAction('customIncrement',props<CustomIncrementData>())
export const changeChannelName = createAction('changechannelname',props<changeChannelNamePayload>())


export interface CustomIncrementData{
    val:number
}
export interface changeChannelNamePayload{
    name:string
}