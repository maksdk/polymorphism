//@ts-check
import State from "./State";
import ClockState from "./ClockState";
import BellState from "./BellState";

export default class AlarmState extends State {
   constructor(clock) {
      super(clock);
      this.nextState = ClockState;
   }

   getMode() {
      return "alarm";
   }

   clickH() {
      this.clock.incrementH("alarmTime");
   }

   clickM() {
      this.clock.incrementM("alarmTime");
   }

   tick() {
      if (this.clock.isAlarmTime() && this.clock.isAlarmOn()) {
         this.setNextState(BellState);
      }
   }
}
