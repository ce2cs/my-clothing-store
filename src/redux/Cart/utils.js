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

export const clearItem = (currItems, clearingItem) => {
  return currItems.filter(item => (
    item.id !== clearingItem.id
  ))
}

export const removeItem = (currItems, removingItem) => {
  const itemExists = currItems.find((item) => (item.id === removingItem.id));
  if (!itemExists) return {...currItems};
  if (removingItem.quantity === 1) {
    return clearItem(currItems, removingItem);
  }
  return currItems.map((item) => {
      if (item.id === removingItem.id) {
        return {
          ...item,
          quantity: item.quantity - 1
        };
      } else {
        return item;
      }
    });
}
