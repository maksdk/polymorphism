//@ts-check
import State from "./State";
import AlarmState from "./AlarmState";
import BellState from "./BellState";

export default class ClockState extends State {
   constructor(clock) {
      super(clock);
      this.nextState = AlarmState;
   }

   setNextState(nextState) {
      this.clock.setState(nextState || this.nextState);
   }

   getMode() {
      return "clock";
   }

   clickH() {
      this.clock.incrementH("clockTime");
   }

   clickM() {
      this.clock.incrementM("clockTime");
   }

   tick() {
      if (this.clock.isAlarmTime() && this.clock.isAlarmOn()) {
         this.setNextState(BellState);
      }
   }
}