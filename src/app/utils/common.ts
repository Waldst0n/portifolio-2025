export function isGif(url: string) {
  return url?.toLowerCase().split("?")[0].endsWith(".gif");
}
export function isVideo(url: string) {
  return url?.toLowerCase().split("?")[0].endsWith(".mp4");
}
