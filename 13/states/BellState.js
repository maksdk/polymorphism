//@ts-check
import State from "./State";
import ClockState from "./ClockState";
// console.log (State)

export default class BellState extends State {
   constructor(clock) {
      console.log(State)
      super(clock);
      this.nextState = ClockState;
   }

   getMode() {
      return "bell";
   }

   clickH() {
      // this.clock.clockH += 1;
   }

   clickM() {
      // this.clock.clockM += 1;
   }

   tick() {
      this.setNextState();
   }
}
// export default class BellState  {
//    constructor(clock) {
//       this.clock = clock;
//       this.nextState = ClockState;
//    }

//    setNextState() {
//       this.clock.setState(this.nextState) ;
//    }

//    getMode() {
//       return "bell";
//    }

//    tick() {
//       this.setNextState();
//    }
// }