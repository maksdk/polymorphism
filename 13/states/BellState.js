//@ts-check
import State from "./State";
import ClockState from "./ClockState";

export default class BellState  extends State {
   constructor(clock) {
      super(clock);
      
      this.clock = clock;
      this.nextState = ClockState;
   }

   setNextState() {
      this.clock.setState(this.nextState) ;
   }

   getMode() {
      return "bell";
   }

   tick() {
      this.setNextState();
   }
}
