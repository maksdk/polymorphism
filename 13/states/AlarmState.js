//@ts-check
import State from "./State";
import ClockState from "./ClockState";
// import BellState from "./BellState";

export default class AlarmState extends State {
   constructor(clock) {
      super(clock);
      this.nextState = ClockState;
   }

   getMode() {
      return "alarm";
   }

   clickH() {
      this.clock.alarmH += 1;
   }

   clickM() {
      this.clock.alarmM += 1;
   }
}