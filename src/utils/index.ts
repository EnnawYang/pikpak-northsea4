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

export const isMagnetLink = (val: string) => {
  return /magnet:\?xt=urn:btih/.test(val)
}

export const getMagnetLinksFromText = (text: string,strict: boolean = false) => {
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
