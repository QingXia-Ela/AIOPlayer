import { albums } from "@/api/album"
import { action, makeAutoObservable } from "mobx"
import { SingleAlbumItem } from "monster-siren-api/dist/api"

type ActionState = "pending" | "done" | "error"

interface BasicActionData {
  state: ActionState
  timer?: NodeJS.Timer
  cacheTime: number
}

interface AlbumsDataProps extends BasicActionData {
  data: SingleAlbumItem[]
}

const _BASIC_CACHE_TIME_ = 60000

export class APIStore {
  AlbumsData: AlbumsDataProps = {
    data: [],
    state: "pending",
    cacheTime: _BASIC_CACHE_TIME_
  }

  constructor() {
    makeAutoObservable(this)
  }

  /**
   * 获取专辑数据
   * @param refresh 强制刷新
   */
  fetchAlbumsData(refresh = false) {

    this.AlbumsData.state = "pending"
    if (!refresh && this.AlbumsData.timer) {
      this.AlbumsData.state = "done"
      return
    }
    albums().then(
      action("fetchAlbumsSuccess", ({ data }) => {
        this.AlbumsData.state = "done"
        this.AlbumsData.data = data || []
        this.AlbumsData.timer = setTimeout(() => {
          clearTimeout(this.AlbumsData.timer)
          this.AlbumsData.timer = undefined
        }, this.AlbumsData.cacheTime);
      }),
      action("fetchAlbumsError", () => {
        this.AlbumsData.state = "error"
      }))
  }

  get AlbumsDataList() {
    return this.AlbumsData.data.map(({ cid, coverUrl, name, artistes }) => ({
      type: "img",
      id: cid,
      src: coverUrl,
      title: name,
      subTitle: artistes[0]
    }))
  }
}

const APIStoreInstance = new APIStore()

export default APIStoreInstance
