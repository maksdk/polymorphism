//@ts-check
import State from "./State";
import AlarmState from "./AlarmState";
// import BellState from "./BellState";

export default class ClockState extends State {
   constructor(clock) {
      super(clock);
      this.nextState = AlarmState;
   }

   getMode() {
      return "clock";
   }

   clickH() {
      this.clock.clockH += 1;
   }

   clickM() {
      this.clock.clockM += 1;
   }

   tick() {
      if (this.clock.isAlarmTime() && this.clock.isAlarmOn()) {
         // this.setNextState(BellState);
      }
   }
}