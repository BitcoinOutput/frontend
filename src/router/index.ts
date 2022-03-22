
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  // Main Pages no login

  {
    path: '/',
    name: 'home',
    component: () => import('../pages/Index.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../pages/auth/Profile.vue'),
  },
  {
    path: '/sell',
    name: 'sell',
    component: () => import('../pages/vendor/Sell.vue'),
  },
  {
    path: '/vendoragreement',
    name: 'vendoragreement',
    component: () => import('../pages/legal/VendorAgreement.vue'),
  },
  {
    path: '/vendor/itemsforsale',
    name: 'forsale',
    component: () => import('../pages/vendor/itemsForSale.vue'),
  },
  {
    path: '/item/:id',
    name: 'item',
    component: () => import('../pages/Item/Item.vue'),
  },

  {
    path: '/vendor/createitem',
    name: 'createquick',
    component: () => import('../pages/vendorcreateitem/CreateItem.vue'),
  },
  {
    path: '/vendor/edititem/:id',
    name: 'edititem',
    component: () => import('../pages/vendorcreateitem/EditItem.vue'),
  },
  {
    path: '/wallet',
    name: 'wallet',
    component: () => import('../pages/wallets/WalletHome.vue'),
  },
  {
    path: '/wallet/btc',
    name: 'btcwallet',
    component: () => import('../pages/wallets/btc/BtcTransactions.vue'),
  },
  {
    path: '/wallet/btc/send',
    name: 'btcwalletsend',
    component: () => import('../pages/wallets/btc/BtcSend.vue'),
  },
  {
    path: '/wallet/btc/recieve',
    name: 'btcwalletrecieve',
    component: () => import('../pages/wallets/btc/BtcRecieve.vue'),
  },
  {
    path: '/wallet/bch',
    name: 'bchwallet',
    component: () => import('../pages/wallets/bch/BchTransactions.vue'),
  },

  {
    path: '/wallet/bch/send',
    name: 'bchwalletsend',
    component: () => import('../pages/wallets/bch/BchSend.vue'),
  },
  {
    path: '/wallet/bch/recieve',
    name: 'bchwalletrecieve',
    component: () => import('../pages/wallets/bch/BchRecieve.vue'),
  },
  {
    path: '/wallet/xmr',
    name: 'xmrwallet',
    component: () => import('../pages/wallets/xmr/XmrTransactions.vue'),
  },
  {
    path: '/wallet/xmr/send',
    name: 'xmrwalletsend',
    component: () => import('../pages/wallets/xmr/XmrSend.vue'),
  },
  {
    path: '/wallet/xmr/recieve',
    name: 'xmrwalletrecieve',
    component: () => import('../pages/wallets/xmr/XmrRecieve.vue'),
  },
  // checkout
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../pages/checkout/Cart.vue'),
  },
    {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../pages/checkout/Checkout.vue'),
  },
    {
    path: '/confirmpayment',
    name: 'confirmpayment',
    component: () => import('../pages/checkout/ConfirmPayment.vue'),
  },
  // Plain Stuff
  {
    path: '/auth/login',
    name: 'login',
    component: () => import('../pages/auth/Login.vue'),
  },
  {
    path: '/auth/register',
    name: 'register',
    component: () => import('../pages/auth/Register.vue'),
  },
  {
    path: '/auth/forgotpassword',
    name: 'forgotpassword',
    component: () => import('../pages/auth/ForgotPassword.vue'),
  },
  // Account  Logged in Required
  {
    path: '/account',
    name: 'account',
    component: () => import('../pages/auth/account/AccountHome.vue'),
  },
  {
    path: '/account/profile',
    name: 'accountprofile',
    component: () => import('../pages/auth/account/ProfileBasic.vue'),
  },
  {
    path: '/auth/changepassword',
    name: 'changepassword',
    component: () => import('../pages/auth/ChangePassword.vue'),
  },
  {
    path: '/auth/changepin',
    name: 'changepin',
    component: () => import('../pages/auth/ChangePin.vue'),
  },
  {
    path: '/auth/account-seed',
    name: 'accountseed',
    component: () => import('../pages/auth/AccountSeed.vue'),
  },
  {
    path: '/auth/account-seed-confirm',
    name: 'accountseedconfirm',
    component: () => import('../pages/auth/AccountSeedConfirm.vue'),
  },
  // Error Pages
  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/error/Error404.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;