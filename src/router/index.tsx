import { RouteObject } from "react-router-dom";
import { createBrowserHistory } from 'history'
import Redirect from "@/components/Rediect";
import ListPage from "@/pages/list";
import DownloadPage from "@/pages/download";

type RouteObjectExtends = RouteObject & {
  navInfo?: {
    name: string
    path: string
    browser?: boolean
  }
}

const routerList: RouteObjectExtends[] = [
  {
    path: '/',
    element: <Redirect to="/download" />
  },
  {
    navInfo: {
      name: "我的音乐",
      path: "/list"
    },
    path: '/list/:type?/:id?/:page?',
    element: <ListPage />
  },
  {
    navInfo: {
      name: "正在播放",
      path: "/music"
    },
    path: '/music/:id?',
    element: ""
  },
  {
    path: '/settings',
    element: ""
  },
  {
    navInfo: {
      name: "下载管理",
      path: '/download',
    },
    path: '/download',
    element: <DownloadPage />
  },
  {
    path: '/*',
    element: <div>404</div>
  }
]

const asyncRouterList: RouteObject[] = []

const history = createBrowserHistory()

export {
  routerList,
  asyncRouterList,
  history
}

export default [...routerList, ...asyncRouterList]