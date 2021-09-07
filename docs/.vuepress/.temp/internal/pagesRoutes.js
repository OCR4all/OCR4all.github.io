import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","Hello VuePress",["/index.html","/README.md"]],
  ["v-31365161","/de/about.html","about",["/de/about","/de/about.md"]],
  ["v-f128c392","/de/activities.html","activities",["/de/activities","/de/activities.md"]],
  ["v-64f82839","/en/about.html","about",["/en/about","/en/about.md"]],
  ["v-21f64e5f","/en/activities.html","activities",["/en/activities","/en/activities.md"]],
  ["v-2d0a870d","/en/","Hello VuePress",["/en/index.html","/en/README.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
