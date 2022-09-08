import { defineStore } from 'pinia'
import { store } from '../index'
import http from '../../utils/axios'

interface ListState {
  currentId: string
  paths: Array<FileInfo>
}

function isInPaths(path: FileInfo, paths: Array<FileInfo>) {
  for (let i = 0; i < paths.length; i++) {
    if (paths[i].id === path.id) {
      return i
    }
  }
  return -1
}

function toFileInfo(data: any): FileInfo {
  return data
}

async function getFileInfo(id: string): Promise<FileInfo> {
  const res = await http.get('https://api-drive.mypikpak.com/drive/v1/files/' + id, {
    params: {
      _magic: '2021',
      thumbnail_size: 'SIZE_LARGE',
    },
  })
  return toFileInfo(res.data)
}

async function getAncestors(id: string): Promise<Array<FileInfo>> {
  let items: Array<FileInfo> = []
  const item = await getFileInfo(id)
  items.push(item)
  if (item.parent_id) {
    const p = await getFileInfo(item.parent_id)
    items = [ ...[p], ...items ]
  }
  return items
}

export const useListStore = defineStore({
  id: 'list',
  state: (): ListState => ({
    currentId: '',
    paths: [],
  }),
  getters: {
    getPaths(): Array<FileInfo> {
      return this.paths
    },
  },
  actions: {
    async clear() {
      this.paths = []
    },
    async push(path: FileInfo) {
      // 如果`path.parent_id`为空，则只保留该`path`
      // 如果`path.parent_id`不为空，检查该path是否在当前paths中，
      //    如果在，移除该path之后的path；
      //    如果不在：如果`path.parent_id`是paths的最后一个，则将该path追加到paths尾部，
      //       否则，重新获取全部
      if (!path.parent_id) {
        // console.log('[empty parent_id] 重置为该path')
        this.set([path])
      } else {
        const index = isInPaths(path, this.paths)
        if (index >= 0) {
          // console.log('[inPaths]', index)
          this.paths.splice(index + 1)
        } else {
          // console.log('[not in paths]', index)
          if (this.paths.length && this.paths[this.paths.length - 1].id === path.parent_id) {
            // console.log('append')
            this.paths.push(path)
          } else {
            // console.log('get ancestors')
            const ancestors = await getAncestors(path.parent_id)
            await this.set([ ...ancestors, ...[path] ])
          }
        }
      }
    },
    async init() {},
    async set(paths: Array<FileInfo>) {
      this.paths = paths
    },
    async pushId(id: string, preferCache: boolean = true) {
      if (preferCache && this.paths.length) {
        const item = this.paths.find(v => v.id === id)
        if (item) {
          await this.push(item)
          return
        }
      }
      const item = await getFileInfo(id)
      await this.push(item)
    },
  },
})

export function useListStoreWithOut() {
  return useListStore(store)
}
