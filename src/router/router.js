import App from '../App'

export default [{
    path: '',
    component: App,
    children: [
         {
            path: '/8',
            component: r => require.ensure([], () => r(require('../page/ibed/ibed8')), 'ibed')
        },
        
        {
            path: '/9',
            component: r => require.ensure([], () => r(require('../page/ibed/ibed9')), 'ibed')
        },
        {
            path: '/10',
            component: r => require.ensure([], () => r(require('../page/ibed/ibed10')), 'ibed')
        }
        
        
    //     {
    //     path: '',
    //     component: r => require.ensure([], () => r(require('../page/home')), 'home')
    // }
    // , {
    //     path: '/item',
    //     component: r => require.ensure([], () => r(require('../page/item')), 'item')
    // }

    // , {
    //     path: '/score',
    //     component: r => require.ensure([], () => r(require('../page/score')), 'score')
    // }
    
    
]
}]