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
                    <button class="font-oswald uppercase bg-red-500 text-white text-xl py-3 px-2 ml-5 mt-5" @click="submitOrder">
                      <NuxtLink to="/checkout">Confirm My Order</NuxtLink>
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
        </div>
        <Footer />
    </div>
    <!--
    <template>
    <div>
        <div id="header" class="relative bg-left bg-[url('/menu-light.png')]">
            <BurgerNavBar />
            <h1 class="font-oswald uppercase text-6xl text-center pt-24 pb-28 z-20 text-black dark:text-white">
                Orders
            </h1>
        </div>
        <div v-if="user === null" id="login" class="text-center mt-20">
            <p> This page is limited to authorized users only. </p>
            <button class="font-oswald uppercase bg-red-500 text-white text-center py-3 px-8 mt-5" @click="login">
                Log in
            </button>
        </div>
        <div v-if="user" id="logout" class="text-center mt-20">
            <p> This page is limited to authorized users only </p>
            <button class="font-oswald uppercase bg-red-500 text-white text-center py-3 px-8" @click="logout">
                Log out
            </button>
        </div>
        <div>
           <table class="table-auto w-2/3 mt-20 mx-auto">
                <thead class="text-3xl font-oswald text-black uppercase">
                    <tr>
                        <th class="text-left">Name</th>
                        <th class="text-center">Price</th>
                        <th class="text-center">Quantity</th>
                        <th class="text-center">Total</th>
                        <th class="text-center">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="order in $store.state.orders"
                        :key="order.name"
                        class="font-oswald uppercase text-2xl border-b"
                    >
                            <td class="py-10">{{ order.name }}</td>
                            <td class="text-right">RM {{ order.price.toFixed(2) }}</td>
                            <td class="text-center">{{ order.quantity }}</td>
                            <td class="text-right">RM {{ (order.price*order.quantity).toFixed(2) }}</td>
                            <td class="text-center"><button @click="removeItem">✖️</button></td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr class="font-oswald font-bold text-2xl bg-gray-100 border-t border-b uppercase">
                        <td class="py-10" colspan="3">Total</td>
                        <td class="text-right">RM {{ total }}</td>
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
                          @click="submitOrder"
                        >
                          Confirm My Order
                        </button>
                      </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [],
      user: {}
    };
  },

  head() {
    return {
      script: [
        {
          src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'
        }
      ]
    }
  },

  mounted() {
    this.user = window.netlifyIdentity.currentUser();
    if (this.user) {
      this.readOrders();
    }
  },

  methods: {
    readOrders() {
      this.$axios.get('/.netlify/functions/readorders', {
        headers: {
          Authorization: `Bearer ${this.user.token.access_token}`,
        },
      })
        .then((response) => {
          this.orders = response.data;
        });
    },

    login() {
      window.netlifyIdentity.open()
      window.netlifyIdentity.on('login', (user) => {
        this.user = user;
        this.readOrders();
      })
    },

    logout() {
      window.netlifyIdentity.logout();
      this.user = null;
      this.orders = [];
    }
  }

}

</script>

-->
    </style>
</template>

<script>
export default {
  data() {
    return {
      orders: [],
    };
  },

  mounted() {
    this.$axios.get('/.netlify/functions/readorders').then(
      (response) => {
        this.orders = response.data;
      });
  },
};
</script>
