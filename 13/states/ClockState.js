//@ts-check
import State from "./State";
import AlarmState from "./AlarmState";

export default class ClockState extends State {
   constructor(clock) {
      super();
      this.clock = clock;
      this.nextState = AlarmState;
   }

   setNextState() {
      this.clock.setState(this.nextState);
   }

   getMode() {
      return "clock";
   }
}