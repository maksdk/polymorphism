//@ts-check
class Easy {
   static getNextStep(field) {
      return field.reduce((acc, row, i) => {
         const j = row.indexOf(null);
         if (acc.length === 0 && j !== -1) {
            return [i, j];
         }
         return acc;
      }, []);
   }
}

export default Easy;