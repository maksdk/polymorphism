//@ts-check
export default class State {
   constructor(clock) {
      this.clock = clock;
      this.nextState = null;
   }

   setNextState(nextState) {
      this.clock.setState(nextState || this.nextState);
   }

   clickH() {

   }

   clickM() {

   }
}