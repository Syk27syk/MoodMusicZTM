const state = () => ({
  subscriptions: '',
  giftCards: [
  ],
  termsAndConditions: false,
  searchFields: [],
})

const mutations = {
  addSubscription(state, selectedSubscription) {
    state.subscriptions.push({
      name: selectedSubscription.name,
      price: selectedSubscription.price,
      quantity: 1,
    })
  },
  removeSubscription(state, selectedSubscription) {
  },
  addGiftCard(state, selectedGiftCard) {
  },
  removeGiftCard(state, selectedGiftCard) {
  },
};

/*
addItem(state, selectedItem) {
  const index = state.orders.findIndex((item) => {
    return item.name === selectedItem.name;
  });

  if (index === -1) {
  //
    });
  } else {
    state.orders[index].quantity++;
  }
},
removeItem(state, selectedItem) {
  const index = state.orders.findIndex((item) => {
    return item.name === selectedItem.name
  });
  state.orders.splice(index, 1);
}
};
*/
const getters = {
  totalGiftCards(state) {
    return state.giftCards.length;
  }
}

export default {
  state,
  mutations,
  getters,
};
