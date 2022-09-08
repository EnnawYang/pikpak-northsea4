interface Window {
  $message: any,
  $downId: string[]
}

interface FileInfo {
  kind: string,
  mine_type: string,
  id: string,
  parent_id: string,
  thumbnail_link: string,
  icon_link: string,
  name: string,
  size: number,
  hash: string
}