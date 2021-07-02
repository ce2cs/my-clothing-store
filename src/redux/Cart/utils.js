export const addItemToCart = (currItems, sourceItem) => {
  const itemExists = currItems.find((item) => (item.id === sourceItem.id));
  if (itemExists) {
    return currItems.map((item) => {
        if (item.id === sourceItem.id) {
          return {
            ...item,
            quantity: item.quantity + 1
          };
        } else {
          return item;
        }
      }
    );
  } else {
    return [...currItems, {...sourceItem, quantity: 1}];
  }
}
