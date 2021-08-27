import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '@/views/Inicio'
import CompraView from '@/views/Compra'
import CarritoView from '@/views/Carrito'
import FormularioView from '@/views/Formulario'
import Producto from '@/views/Producto'

const routes = [
{
    path: '/inicio',
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
},
{
    path: '/product/:id',
    name: 'Product',
    component: Producto
  }


]

const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
routes
})

export default router