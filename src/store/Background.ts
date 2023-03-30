import { makeObservable, observable, action } from "mobx"

export interface cssBackgroundOptions {
  cssContent?: string
}

export interface videoBackgroundOptions {
  src: string
}

export interface imageBackgroundOptions {
  src: string
  moveWithMouse?: boolean
}

interface BackgroundTypeOptionsCollect {
  css: cssBackgroundOptions,
  video: videoBackgroundOptions,
  image: imageBackgroundOptions
}

export type BackgroundOptionsType = cssBackgroundOptions | videoBackgroundOptions | imageBackgroundOptions

export type BackgroundType = keyof BackgroundTypeOptionsCollect

class BackgroundStore {
  type: BackgroundType = "css"
  options: BackgroundOptionsType = {}
  maskOpacity = 0
  filterVal = 0

  constructor() {
    makeObservable(this, {
      type: observable,
      options: observable,
      maskOpacity: observable,
      filterVal: observable,
      toggleType: action,
      setMaskOpacity: action,
      setFilterOpacity: action
    })
  }

  toggleType(type: BackgroundType, options: Pick<BackgroundTypeOptionsCollect, typeof type>) {
    this.options = Object.assign(options)
  }

  setMaskOpacity(val: number) {
    this.maskOpacity = val
  }

  setFilterOpacity(val: number) {
    this.filterVal = val
  }
}

const BackgroundStoreInstance = new BackgroundStore()

export default BackgroundStoreInstance
