import HeaderAsideLayout from '@/layouts/HeaderAsideLayout';
import NotFound from '@/pages/NotFound';
import Dashboard from '@/pages/Dashboard';
import Login from '@/pages/Login';
import CustomerManageAdmin from '@/pages/CustomerManageAdmin';
import CustomerInfo from '@/pages/CustomerInfo';
import CustomerStatistics from '@/pages/CustomerStatistics';

const routerConfig = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/customerManage',
    component: HeaderAsideLayout,
    children: [
      { path: '/customerManage/manage', component: CustomerManageAdmin },
    ],
  },
  {
    path: '/customerInfoManage',
    component: HeaderAsideLayout,
    children: [
      { path: '/customerInfoManage/customerInfo', component: CustomerInfo },
      { path: '/customerInfoManage/customerStatistics', component: CustomerStatistics },
    ],
  },
  {
    path: '/userManage',
    component: HeaderAsideLayout,
    children: [
      { path: '/userManage/userInfo', component: CustomerInfo },
      { path: '/userManage/userStatistics', component: CustomerStatistics },
    ],
  },
  {
    path: '/profile',
    component: HeaderAsideLayout,
    children: [
      { path: '/profile/success', component: NotFound },
      { path: '/profile/fail', component: NotFound },
    ],
  },
  {
    path: '/result',
    component: HeaderAsideLayout,
    children: [
      { path: '/result/success', component: NotFound },
      { path: '/result/fail', component: NotFound },
    ],
  },
  {
    path: '/',
    component: HeaderAsideLayout,
    children: [
      { path: '/dashboard/analysis', component: Dashboard },
      { path: '/dashboard/monitor', component: NotFound },
      { path: '/dashboard/workplace', component: NotFound },
    ],
  },
  { path: '*', component: NotFound },
];

export default routerConfig;
