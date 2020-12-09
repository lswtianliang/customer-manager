import mitt, { Emitter, EventType, Handler } from 'mitt';

let eventBus: Emitter;

export const setEvtBus = (evtBus: Emitter) => {
  eventBus = evtBus;
};

const initEventBus = () => {
  if (!eventBus) {
    eventBus = mitt();
  }
};

export const eventOn = (event: EventType, callBack: Handler<EventType>) => {
  initEventBus();
  eventBus.on(event, callBack);
};

export const eventEmit = (event: EventType, data: any) => {
  initEventBus();
  eventBus.emit(event, data);
};

export const eventOff = (event: EventType, callBack: Handler<EventType>) => {
  initEventBus();
  eventBus.off(event, callBack);
};
