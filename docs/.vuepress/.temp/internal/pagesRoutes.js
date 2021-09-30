import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-22a39d25","/about.html","Über OCR4all",["/about","/about.md"]],
  ["v-87e9e61a","/activities.html","Aktivitäten",["/activities","/activities.md"]],
  ["v-5d7259d4","/guide.html","",["/guide","/guide.md"]],
  ["v-3ac5ce46","/projects.html","Projekte",["/projects","/projects.md"]],
  ["v-8daa1a0e","/","Home",["/index.html","/README.md"]],
  ["v-1d79747a","/team.html","Team",["/team","/team.md"]],
  ["v-64f82839","/en/about.html","About",["/en/about","/en/about.md"]],
  ["v-21f64e5f","/en/activities.html","Activities",["/en/activities","/en/activities.md"]],
  ["v-139b5e2a","/en/guide.html","",["/en/guide","/en/guide.md"]],
  ["v-272a7ab2","/en/projects.html","Projects",["/en/projects","/en/projects.md"]],
  ["v-2d0a870d","/en/","Home",["/en/index.html","/en/README.md"]],
  ["v-1931efa2","/en/team.html","Team",["/en/team","/en/team.md"]],
  ["v-b2d5dcfe","/software_download/software_download.html","Software und Download",["/software_download/software_download","/software_download/software_download.md"]],
  ["v-f25310fa","/software_download/vm-download.html","",["/software_download/vm-download","/software_download/vm-download.md"]],
  ["v-24d40195","/en/software_download/software_download.html","Software and Download",["/en/software_download/software_download","/en/software_download/software_download.md"]],
  ["v-ca7ff2d2","/en/software_download/vm-download.html","",["/en/software_download/vm-download","/en/software_download/vm-download.md"]],
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
