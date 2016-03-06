module.exports = {
  filesToMove: [
    './app/**/*.html',
    './app/**/*.md'
  ],
  hosts: [
    "CNAME"
  ],
  vendorCSS: [
    './bower_components/font-awesome/css/font-awesome.css'
  ],
  images: [
    './app/assets/images/**/*',
  ],
  fonts: [
    './bower_components/font-awesome/fonts/*'
  ],
  sass: {
    toCompile: [
      './app/assets/sass/*.scss',
    ],
    toWatch: [
      './app/assets/sass/**/*.scss'
    ]
  }
}
