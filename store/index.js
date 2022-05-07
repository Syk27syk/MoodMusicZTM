const state = () => ({
  subscriptions: '',
  giftCards: [
    { giftCardID: '1576996323453', delivery: 'email', design: 'Mood Bot', giftCardAmount: '$15', recipientName: 'Shi Min', recipientEmail: 'Shimin.khoo@gmail.com', recipientAddress: 'changkat sungai ara', senderName: 'Shi Yun', senderEmail: 'Shiyun.khoo@gmail.com', personalizedMessage: 'Hi. I love you.' },
    { giftCardID: '1576996323454', delivery: 'email', design: 'Mood Music Logo', giftCardAmount: '$15', recipientName: 'Shi Min', recipientEmail: 'Shimin.khoo@gmail.com', recipientAddress: 'changkat sungai ara', senderName: 'Shi Yun', senderEmail: 'Shiyun.khoo@gmail.com', personalizedMessage: 'Hi. I love you.' },
    { giftCardID: '1576996323455', delivery: 'email', design: 'Brain Plug', giftCardAmount: '$15', recipientName: 'Shi Min', recipientEmail: 'Shimin.khoo@gmail.com', recipientAddress: 'changkat sungai ara', senderName: 'Shi Yun', senderEmail: 'Shiyun.khoo@gmail.com', personalizedMessage: 'Hi. I love you.' },
    { giftCardID: '1576996323456', delivery: 'email', design: 'Quaver Heart', giftCardAmount: '$15', recipientName: 'Shi Min', recipientEmail: 'Shimin.khoo@gmail.com', recipientAddress: 'changkat sungai ara', senderName: 'Shi Yun', senderEmail: 'Shiyun.khoo@gmail.com', personalizedMessage: 'Hi. I love you.' }
  ],
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
  addGiftCard(state, giftCard) {
    state.giftCards.push({
      delivery: giftCard.delivery,
      design: giftCard.design,
      giftCardAmount: giftCard.giftCardAmount,
      recipientName: giftCard.recipientName,
      recipientEmail: giftCard.recipientEmail,
      recipientAddress: giftCard.recipientAddress,
      senderName: giftCard.senderName,
      senderEmail: giftCard.senderEmail,
      personalizedMessage: giftCard.personalizedMessage,
    })
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
