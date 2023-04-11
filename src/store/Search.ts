import { makeAutoObservable } from "mobx"

type SearchState = "pending" | "error" | "success" | "waiting"

export class SearchStore {
  searchVal = ""
  state: SearchState = "waiting"
  searchData: any

  constructor() {
    makeAutoObservable(this)
  }

  setSearchData(data: any) {
    this.searchData = data
  }
}

export default new SearchStore()