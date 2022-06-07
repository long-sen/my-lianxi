import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path:"/",
      redirect:'/home'
    },
    {
      path:"/home",
      component:()=>import("../views/Home.vue"),
      children:[
        {
          path:"two-home",
          component:()=>import("../views/two-router/two-home.vue"),
          children:[
            {
              path:"three-home",
              component:()=>import("../views/three-router/three-home.vue")
            }
          ]
        }
      ]
    },
    {
      path:"/music",
      component:()=>import("../views/Music.vue"),
      children:[
        {
          path:"two-music",
          component:()=>import("../views/two-router/two-music.vue")
        }
      ]
    },
    {
      path:"/nav",
      component:()=>import("../views/nav.vue")
    },
    {
      path:"/xuesheng",
      component:()=>import("../views/xuesheng.vue")
    },
    {
      path:"/index",
      component:()=>import("../views/index.vue")
    }
  ],

});


