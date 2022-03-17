<template>
    <div id="app">
      <header>
        <h3>{{sitename}}</h3>
        <button @click="showCheckout">{{this.cart.length}} Checkout</button>
      </header>
      <product-list :products ="products" @addProduct='addToCart'></product-list>
      <checkout :cart="cart" @removeProduct='removeFromCart'></checkout>
    </div>
</template>

<script>
import Checkout from './components/Form.vue'
import productList from './components/Products.vue'

export default {
  
        components: {
            productList,
            Checkout
        },
        name: "App",
        data() {
            return {
              sitename:"Afterschool Application",
                cart: [],
                products: [{
                        subject: "Spanish",
                        location: "Latvia",
                        price: 32,
                        description: "Permítanos ayudarlo a hablar español con fluidez",
                        image: 'education.jpg',
                        inventory: 10,
                        inCart: 0
                    },
                    {
                        subject: "Language ",
                        location: "Ukraine",
                        description: "Languages help us communicate more effectively",
                        price: 60,
                        inventory: 10,
                        inCart: 0
                    },
                    {
                        subject: "Calculations",
                        location: "Lagos",
                        price: 91,
                        inventory: 10,
                        description: "All around the world, calculations are widely used during day to day activities",
                        inCart: 0
                    },
                ]
            }
        },
        methods: {
            showCheckout: function(){
                    this.showProduct = this.showProduct ? false : true;
                },
            addToCart(product){
                let added = false;
                this.cart.forEach((product2) => {
                    if(product2.id === product.id){
                         product.inCart++
                         added = true
                    }
                });
                    if(!added){
                        this.cart.push(product)
                        product.inCart = 1
                    }    
                        product.inventory--; 
             
            },
            removeFromCart(product){
                this.cart.forEach((product2) => {
                    if(product2.id === product.id) {
                        product.inventory++;
                        product.inCart--
                    }
                })
            }    
        }
    }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
