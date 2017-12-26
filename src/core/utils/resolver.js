/*
    FOR DEV PURPOSES: we will keep a fake .babelrc under /loaders
    When we'll get to dev the build command, we will adjust accordingly
 */
const base = require('../../__dev/buukrc.json')

export const paths = {
    'manifest': `${base.base_path}/tmp.json`,
    'docs' : `${base.base_path}/docs/`
}