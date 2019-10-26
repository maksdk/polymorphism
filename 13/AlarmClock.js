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
   }

   setState(stateClass) {
      this.state = new stateClass(this);
   }

   clickMode() {
      this.state.setNextState();
   }

   longClickMode() {
      // включает или отключает часы
   } 

   getCurrentMode() {
      return this.state.getMode();
   } 
   
   isAlarmOn() {
      
   } 
   isAlarmTime() {} // - возвращает true, если время на часах совпадает со временем на будильнике
   
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
      
   } 
   
   clickM() {
      
   } 

   tick() {}//- при вызове увеличивает время на одну минуту и, если нужно, активирует звонок будильника
} 
