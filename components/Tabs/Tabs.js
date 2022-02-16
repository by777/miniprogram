// components/Tabs/Tabs.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        /*接受父向子传递的数据*/
    },

    /**
     * 组件的初始数据
     */
    data: {
        tabs:[
            {
                id:0,
                name:"首页",
                isActivate:true
            },
            {
                id:1,
                name:"原创",
                isActivate:false
            },
            {
                id:2,
                name:"分类",
                isActivate:false
            },
            {
                id:3,
                name:"关于",
                isActivate:false
            },
        ]
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
