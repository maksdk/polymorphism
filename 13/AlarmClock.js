//@ts-check
import ClockState from "./states/ClockState";

export default class AlarmClock {
   constructor() {
      this.clockTime = {
         h: 12,
         m: 0
      };

      this.alarmTime = {
         h: 6,
         m: 0
      };

      // this.clockH = 12;
      // this.clockM = 0;

      // this.alarmH = 6;
      // this.alarmM = 0;

      this.state = null;
      this.setState(ClockState);

      this.alarmOn = false;
   }

   setState(stateClass) {
      this.state = new stateClass(this);
   }

   clickMode() {
      this.state.setNextState();
   }

   longClickMode() {
      this.alarmOn = !this.alarmOn;
   } 

   getCurrentMode() {
      return this.state.getMode();
   } 
   
   isAlarmOn() {
      return this.alarmOn;
   } 

   isAlarmTime() {
      return this.hours() === this.alarmHours() && 
      this.minutes() === this.alarmMinutes();
   } 
   
   hours() {
      return this.clockTime.h;
   }
   
   minutes() {
      return this.clockTime.m;
   } 
   
   alarmHours() {
      return this.alarmTime.h;
   } 
   
   alarmMinutes() {
      return this.alarmTime.m;
   } 
   
   clickH() {
      this.state.clickH()
   } 
   
   clickM() {
      this.state.clickM()
   } 

   incrementH(typeTime) {
      this[typeTime].h = (this[typeTime].h + 1) % 24;
   }

   incrementM(typeTime) {
      this[typeTime].m = (this[typeTime].m + 1) % 60;
   }

   tick() {
      this.incrementM("clockTime");
      if (this.minutes() === 0) {
         this.incrementH("clockTime");
      }
      this.state.tick();
   }
} 
