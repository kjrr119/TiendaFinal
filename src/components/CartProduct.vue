<template>
    <tr>
        <td>
            {{cartItem.productoNombre}}
        </td>
        <td>
            {{cartItem.productoCantidad}}
        </td>
        <td>
            $ {{cartItem.productoPrecioUnitario}}
        </td>
        <td>
            $ {{cartItem.productoPrecioTotal}}
        </td>
        <td> 
           <button class="btn btn-danger btn-sm" @click="deleteCartItem()">
                <i class="fas fa-trash"></i>
           </button>
        </td>
        
    </tr>
</template>

<script>

export default {
    name: "cartItem",

    props: {
        cartItem: {
            type: Object,
            required: true,
        }
    },

    data () {

    },
    methods: {
        deleteCartItem(){
            this.$emit('delete', {
                item: this.cartItem
            })
        }
    }

}
</script>


<style scoped>

.button{
    width: 100%;
    color: black;
    background:whitesmoke;
    border: none;
}

</style>
