import { useRoutes, RouteObject } from "react-router-dom";

type RouteObjectExtends = RouteObject & {
  name?: string
}

const routerList: RouteObjectExtends[] = [
  {
    index: true,
    path: '/',
    element: <div>index</div>,
  },
  {
    name: "我的音乐",
    path: '/list/:type?/:id?/:page?',
    element: <div>list/:type/:id/:page</div>
  },
  {
    path: '/music/:id?',
    element: <div>music:id</div>
  },
  {
    path: '/settings',
    element: <div>settings</div>
  },
  {
    name: "已下载",
    path: '/download',
    children: [
      {
        path: 'processing',
        element: <div>download/processing</div>
      },
      {
        path: 'done',
        element: <div>download/done</div>
      }
    ]
  },
  {
    path: '/*',
    element: <div>404</div>
  }
]

const asyncRouterList: RouteObject[] = []

export {
  routerList,
  asyncRouterList
}

export default [...routerList, ...asyncRouterList]