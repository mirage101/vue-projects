import Index from '@/pages/Admin/Index'
import Edit from '@/pages/Admin/Edit'
import New from '@/pages/Admin/New'
import Products from '@/pages/Admin/Products'

export default{
    path:'/admin',
    component: Index,
    children: [
        {
            path: 'new',
            name: 'New',
            component: New
        },
        {
            path: 'edit/:id',
            name: 'Edit',
            component: Edit
        },
        {
            path: '',
            name: 'Products',
            component: Products
        }
    ]
}