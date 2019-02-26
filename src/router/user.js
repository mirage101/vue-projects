import Index from '@/pages/User/Index'
import Edit from '@/pages/User/Edit'
import Wishlist from '@/pages/User/Wishlist'
import Orders from '@/pages/User/Orders'

export default{
    path:'/user',
    component: Index,
    children: [
        {
            path: 'orders',
            name: 'Orders',
            component: Orders
        },
        {
            path: 'edit/:id',
            name: 'Edit',
            component: Edit
        },
        {
            path: 'wishlist',
            name: 'Wishlist',
            component: Wishlist
        }
    ]
}