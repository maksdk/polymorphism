//@ts-check
export default class LabelTag {
   constructor(text, body) {
      this.text = text;
      this.body = body;
   }
   render() {
      return `<label>${this.text}${this.body}</label>`
   }

   toString() {
      return this.render();
   }
}