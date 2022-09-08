export const byteConvert = (bytes: number) => {
  if (isNaN(bytes)) {
    return ''
  }
  let symbols = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  let exp = Math.floor(Math.log(bytes) / Math.log(2))
  if (exp < 1) {
    exp = 0
  }
  let i = Math.floor(exp / 10)
  bytes = bytes / Math.pow(2, 10 * i)

  if (bytes.toString().length > bytes.toFixed(2).toString().length) {
    bytes = parseFloat(bytes.toFixed(2))
  }
  return bytes + ' ' + symbols[i]
}

export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const ensureEndingSlash = (text: string, withSlash: boolean) => {
  text = text.replace(/[\\]+$/g, '')
  return withSlash ? text + '/' : text
}

export const isPikpakLink = (val: string) => {
  // PikPak://PikPak Tutorial.mp4|19682618|123
  // PikPak://${item.name}|${item.size}|${item.hash}
  const pattern = /^PikPak:\/\/([^|]+)\|(\d+)\|(\w{40})/i
  return pattern.test(val)
}

export const getPikpakLinksFromText = (text: string, strict: boolean = false) => {
  const rows = text.split("\n")
  const links = []
  for (let i = 0; i < rows.length; i++) {
    if (isPikpakLink(rows[i])) {
      links.push(rows[i])
    } else if (strict) {
      throw new Error(`第${i + 1}行不是有效的秒传链接！`)
    }
  }
  return links
}

export const isMagnetLink = (val: string) => {
  return /magnet:\?xt=urn:btih/.test(val)
}

export const getMagnetLinksFromText = (text: string, strict: boolean = false) => {
  const rows = text.split("\n")
  const links = []
  for (let i = 0; i < rows.length; i++) {
    if (isMagnetLink(rows[i])) {
      links.push(rows[i])
    } else if (strict) {
      throw new Error(`第${i + 1}行不是有效的磁链！`)
    }
  }
  return links
}

export const isInfoHash = (val: string) => {
  return /^[a-z\d]{32,40}$/i.test(val)
}

export const buildMagnetLink = (hash: string) => {
  return `magnet:?xt=urn:btih:${hash}`
}

export const isCrossOrigin = (host: string = location.href) => {
  return host.indexOf('https://') === -1 
    && host.indexOf('http://localhost') === -1 
    && host.indexOf('http://127.0.0.1') === -1
}

export const refineDownloadUrl = (config: any, url: string) => {
  if (config.serverNumber) {
    url = url.replace(/\d+(\.mypikpak\.com)/, config.serverNumber + '$1')
  }

  if (config.reverseHost) {
    url = ensureEndingSlash(config.reverseHost, true) + url
  }
  
  return url
}

export const refineAria2DownloadUrl = (config: any, url: string, lastChoosenServerNumberIndex: number) => {
  if (config.reverseHost) {
    url = ensureEndingSlash(config.reverseHost, true) + url
  }

  if (lastChoosenServerNumberIndex >= -1 && config.batchStrategy === 'series') {
    let index = (lastChoosenServerNumberIndex + 1) % config.serverNumbers.length
    url = url.replace(/\d+(\.mypikpak\.com)/, config.serverNumbers[index] + '$1')
  }

  return url
}