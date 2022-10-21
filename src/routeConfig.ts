import Home from 'pages/Home';
import BlockHeight from 'pages/BlockHeight';
import NfrDetail from 'pages/NfrDetail';
import ContractDetail from 'pages/ContractDetail';
import WalletDetail from 'pages/WalletDetail';
import Transaction from 'pages/Transaction';
import RecentInfo from 'pages/RecentInfo';

export default [
    { path: "home", PageComponent: Home },
    { path: "recentInfo/:type", PageComponent: RecentInfo },
    { path: "blockHeight/:type", PageComponent: BlockHeight },
    { path: "nfrDetail/:type", PageComponent: NfrDetail },
    { path: "contractDetail/:type", PageComponent: ContractDetail },
    { path: "walletDetail/:type", PageComponent: WalletDetail },
    { path: "transaction/:type", PageComponent: Transaction },
    { path: "*", PageComponent: Home }
];