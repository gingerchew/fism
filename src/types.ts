/**
 * Are Actions and Listeners the same thing?
 * 
 * For the time being yes. Once the idea for what `context` will be
 * in this... context... these two will differentiate themselves.
*/
export type Action = (ctx: State|InactiveState) => void;
export type Listener = (ctx: State|InactiveState) => void

export interface StateTarget {
    target: string;
    actions: Action[];
}

export type Events = Record<string, string | StateTarget>;

export interface State {
    type: string|-1;
    on: Events;
    enter: Action|Action[];
    exit: Action|Action[];
}

export const inactiveState = { type: -1 };

export type InactiveState = Partial<State> & typeof inactiveState;
export type UnformattedState = Partial<State> & { type: string };

export interface Machine {
    current: State['type'];
    done: boolean;
    next: (requestedState?:string) => void;
    subscribe: (listener:Listener) => () => void;
    send: (eventType: string) => void;
    destroy: () => void;
}