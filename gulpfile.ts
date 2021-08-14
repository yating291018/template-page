import del from 'del'
import { src, dest, series } from 'gulp'
import gts from 'gulp-typescript'

const dist = 'dist'

function clean () {
  return del('dist')
}

function script () {
  return src('src/**/*.ts', { base: 'src' })
    .pipe(gts.createProject('tsconfig.json')())
    .pipe(dest(dist))
}

export default series(clean, script)