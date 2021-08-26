import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/Inicio.vue'
import CompraView from '@/views/Compra'
import CarritoView from '@/views/Carrito'
import FormularioView from '@/views/Formulario'

const routes = [
{
    path: '/',
    name: 'InicioView',
    component: InicioView
},

{
    path: '/compra',
    name: 'CompraView',
    component: CompraView
},

{
    path: '/carrito',
    name: 'CarritoView',
    component: CarritoView
},

{
    path: '/formulario',
    name: 'FormularioView',
    component: FormularioView
}


]

const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
routes
})

export default router