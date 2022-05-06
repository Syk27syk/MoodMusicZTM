<template>
    <div>
        <Header />
        <MoodBot />
        <div>
           <table class="table-auto w-2/3 mt-20 mx-auto">
                <thead class="text-3xl font-oswald text-black uppercase">
                    <tr>
                        <th class="text-left">Item</th>
                        <th class="text-center">Price</th>
                        <th class="text-center">Quantity</th>
                        <th class="text-center">Total</th>
                        <th class="text-center">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="font-oswald uppercase text-2xl border-b">
                        <td class="py-10">text</td>
                        <td class="text-right">text</td>
                        <td class="text-center">text</td>
                        <td class="text-right">text</td>
                        <td class="text-center"><button>✖️</button></td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr class="font-oswald font-bold text-2xl bg-gray-100 border-t border-b uppercase">
                        <td class="py-10" colspan="3">Total</td>
                        <td class="text-right">text</td>
                        <td class="text-transparent">text</td>
                    </tr>
                    <tr>
                      <td colspan="3">
                        <input
                          id="email"
                          type="email"
                          placeholder="Please enter your email"
                          class="w-full border border-gray-300 text-xl mt-5 py-3 px-2"
                        />
                      </td>
                      <td colspan="2" class="text-right">
                        <button
                          class="font-oswald uppercase bg-red-500 text-white text-xl py-3 px-2 ml-5 mt-5"
                        >
                        <NuxtLink to="/checkout">
                          Confirm My Order
                        </NuxtLink>
                        </button>
                      </td>
                    </tr>
                </tfoot>
            </table>
        </div>
        <Footer />
    </div>
</template>

<script>

export default {
  computed: {
    giftCardTotal(giftCard) {
      let giftCardTotal = 0;
      this.$store.state.giftCards.forEach((order) => {
        giftCardTotal = giftCardTotal + giftCard.price * giftCard.quantity;
      });
      return giftCardTotal;
    },
    grandTotal(giftCardTotal, subscription) {
      const grandTotal = giftCardTotal + subscription.price
      return grandTotal;
    }
  },
  methods: {
    removeItem(name) {
      this.$store.commit('removeItem', name);
    },
    submitOrder() {
      this.$axios.post('/netlify/functions/email', {
        email: document.getElementById('email').value,
        orders: this.$store.state.orders,
      });
      this.$axios.post('/netlify/functions/db', {
        email: document.getElementById('email').value,
        orders: this.$store.state.orders,
      });
    }
  },
};

</script>
