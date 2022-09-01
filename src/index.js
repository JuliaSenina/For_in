export default function orderByProps(obj, sortingOrder) {
  const newArr1 = [];
  const newArr2 = [];

  for (const prop in obj) {
    if (sortingOrder.includes(prop)) {
      newArr1.push({ key: prop, value: obj[prop] });
    } else {
      newArr2.push({ key: prop, value: obj[prop] });
    };
  };
  
  newArr2.sort((a, b) => (a.key > b.key ? 1 : -1));
  
  return [...newArr1, ...newArr2];
};