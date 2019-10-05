const mapping = {
   "single": ({name, class:className, id}) => {
      const classNameStr = `${className ? ` class="${className}"` : ""}`;
      const idStr =  `${id ? ` id="${id}"` : ""}`;
      return `<${name}${classNameStr}${idStr}>`;
   },

   "pair": ({name, class:className, id, body}) => {
      const classNameStr = `${className ? ` class="${className}"` : ""}`;
      const idStr =  `${id ? ` id="${id}"` : ""}`;
      return `<${name}${classNameStr}${idStr}>${body}</${name}>`;
   }
};

function stringify(tag) {
   const { tagType } = tag;
   return mapping[tagType](tag);
}

const tag1 = {
   name: 'hr',
   class: 'px-3',
   id: 'myid',
   tagType: 'single',
};
const html1 = stringify(tag1); // <hr class="px-3" id="myid">

const tag2 = {
   name: 'div',
   tagType: 'pair',
   body: 'text2',
   id: 'wow',
};
const html2 = stringify(tag2); // <div id="wow">text2</div>
