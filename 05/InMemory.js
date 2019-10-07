
class InMemory {
   constructor(initial = {}) {
      this.storage = new Map();
      this.init(initial);
   }
   init(initial) {
      Object.entries(initial)
         .forEach(([key, value]) => this.set(key, value));
   }
   set(key, value) {
      this.storage.set(key, value);
   }
   get(key, def = null) {
      if (this.storage.has(key)) return this.storage.get(key);
      return def;
   }
   unset(key) {
      this.storage.delete(key);
   }
   toObject() {
      const obj = {};
      for (let props of this.storage) {
         const [key, value] = props;
         obj[key] = value;
      }
      return obj;
   }
}

function swapKeyValue(map){
   const obj = map.toObject();

   Object.entries(obj)
      .forEach(([key, value]) => {
         map.unset(key);
         map.set(value, key);
      });
   return map;
}