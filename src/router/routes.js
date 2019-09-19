import Home from '../pages/Home';
import Category from '../pages/Category';
import Shiwu from '../pages/Shiwu';
import ShopCart from '../pages/ShopCart';
import Profile from '../pages/Profile';
import Search from '../pages/Search';
import Find from '../pages/Shiwu/Find';
import Expert from '../pages/Shiwu/Expert';

export default [
  {
    path: '/home',
    component: Home,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/shiwu',
    component: Shiwu,
    children:[
      {
        path: '/shiwu/find',
        component: Find
      },
      {
        path: '/shiwu/expert',
        component: Expert
      }
    ],
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/shopcart',
    component: ShopCart,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/',
    redirect: '/home'
  }
]