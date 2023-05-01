<template>
    <div class="bg-none md:bg-white-dark mx-auto md:m-0 flex flex-col justify-center items-center h-full w-full sm:max-w-sm gap-4 py-8 px-4 rounded-xl drop-shadow-md">
        <p class="text-xl">Subtotal: <span class="font-bold">${{ amountToPay }}</span></p>
        <SolidButton message="Proceder al pago"/>
    </div>
</template>

<script>
import SolidButton from '../buttons/SolidButton.vue'
export default {
    name:'InvoiceContainer',
    props:{
        amountToPay:{
            type: String,
        }
    },
    components: {
        SolidButton
    }
}
</script>