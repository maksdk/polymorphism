const list = {
   "a": "href",
   "img": "src",
   "link": "href"
};

const getLinks = (tags) => {
   const result = tags.reduce((acc, tag) => {
      const link = list[tag.name] && tag[list[tag.name]];
      if (link) return [...acc, link];
      return acc;
   }, []);

   return result;
};

const tags = [
   {
      name: 'img',
      src: 'hexlet.io/assets/logo.png'
   },
   {
      name: 'div'
   },
   {
      name: 'link',
      href: 'hexlet.io/assets/style.css'
   },
   {
      name: 'h1'
   },
];

const links = getLinks(tags);