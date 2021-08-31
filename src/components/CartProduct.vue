<template>
    <tr>
        <td>
            {{cartItem.name}}
        </td>
        <td>
            {{cartItem.quantity}}
        </td>
        <td>
            $ {{cartItem.unitPrice}}
        </td>
        <td>
            $ {{cartItem.totalPrice}}
        </td>
        <td> 
           <button class='button' @click="deleteCartItem()">Borrar</button> 
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
