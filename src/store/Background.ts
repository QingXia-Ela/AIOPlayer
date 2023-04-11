import { makeAutoObservable } from "mobx"

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

export class BackgroundStore {
  type: BackgroundType = "css"
  options: BackgroundOptionsType = {}
  maskOpacity = 0
  filterVal = 0
  duration = 300

  constructor() {
    makeAutoObservable(this)
  }

  toggleType(type: BackgroundType, options: BackgroundTypeOptionsCollect[typeof type]) {
    this.type = type
    this.options = JSON.parse(JSON.stringify(options))
  }

  setMaskOpacity(val: number) {
    this.maskOpacity = val
  }

  setFilterVal(val: number) {
    this.filterVal = val
  }
}

const BackgroundStoreInstance = new BackgroundStore()

export default BackgroundStoreInstance
