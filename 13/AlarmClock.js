//@ts-check
import ClockState from "./states/ClockState";

export default class AlarmClock {
   constructor() {
      this.clockH = 12;
      this.clockM = 0;

      this.alarmH = 6;
      this.alarmM = 0;

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
      this.alarmOn = true;
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
      return this.clockH;
   }
   
   minutes() {
      return this.clockM;
   } 
   
   alarmHours() {
      return this.alarmH;
   } 
   
   alarmMinutes() {
      return this.alarmM;
   } 
   
   clickH() {
      this.state.clickH()
   } 
   
   clickM() {
      this.state.clickM()
   } 

   tick() {
      this.state.tick();

      
   }
} 
