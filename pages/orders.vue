<template>
    <div>
        <Header />
        <MoodBot />
        <div id="authentication">
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
        </div>
        <div id="orders">
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
                    v-for="order in $store.state.order"
                    :key="order.giftCardID"
                    class=""
                    >
                    <td> {{ order.giftCardID }} </td>
                    <td> {{ order.delivery }} </td>
                    <td> {{ order.design }} </td>
                    <td> {{ order.giftCardAmount }} </td>
                    <td> {{ order.recipientName }} </td>
                    <td> {{ order.recipientEmail }} </td>
                    <td> {{ order.recipientAddress }} </td>
                    <td> {{ order.personalizedMessage }} </td>
                    <td> {{ order.senderName }} </td>
                    <td> {{ order.senderEmail }} </td>
                  </tr>
                </tbody>
            </table>
        </div>
        <Footer />
    </div>
</template>

<script>
export default {
  data() {
    return {
      order: [],
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
/*
  mounted () {
    this.$axios.get('/netlify/functions/readorders').then((response) => {
      this.order = response.data;
    });
  }
*/
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
          this.order = response.data;
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
  */
}
</script>
