function importAll(r) {
  let files = {}
  r.keys().forEach(item => {
    files[item.replace("./", "")] = r(item)
  })
  return files
}

export const LottieArt = importAll(
  require.context("./lottie", false, /\.(json)$/)
)

export const Images = importAll(
  require.context("./images", false, /\.(png|jpe?g|gif|svg)$/)
)
