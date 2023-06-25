/** @type {import('next').NextConfig} */
<<<<<<< Updated upstream

=======
const { with } = require('@/next-plugin')
>>>>>>> Stashed changes
const withImages = require('next-images')
const { join } = require('path')

process.env.IGNORE_TS_CONFIG_PATHS = 'true'
process.env._TARGET = 'web'
process.env._DISABLE_WARN_DYNAMIC_LOAD = '1'

const boolVals = {
  true: true,
  false: false,
}

const withTM = require('next-transpile-modules')([
  'solito',
  // add other packages here that need transpiling, such as moti
])

const disableExtraction =
  boolVals[process.env.DISABLE_EXTRACTION] ?? process.env.NODE_ENV === 'development'

<<<<<<< Updated upstream

const plugins = [
  withImages,
  withTM,
=======
/* console.log(`

Welcome to !

You can update this monorepo to the latest  release just by running:

pnpm upgrade:

We've set up a few things for you.

See the "excludeReactNativeWebExports" setting in next.config.js, which omits these
from the bundle: Switch, ProgressBar Picker, CheckBox, Touchable. To save more,
you can add ones you don't need like: AnimatedFlatList, FlatList, SectionList,
VirtualizedList, VirtualizedSectionList.

Even better, enable "useReactNativeWebLite" and you can remove the
excludeReactNativeWebExports setting altogether and get tree-shaking and
concurrent mode support as well.

🐣

Remove this log in next.config.js.

`) */

const plugins = [
  withImages,
  with({
    config: './.config.ts',
    components: ['', '@my/ui'],
    importsWhitelist: ['constants.js', 'colors.js'],
    logTimings: true,
    disableExtraction,
    // experiment - reduced bundle size react-native-web
    useReactNativeWebLite: false,
    shouldExtract: (path) => {
      if (path.includes(join('packages', 'app'))) {
        return true
      }
    },
    excludeReactNativeWebExports: ['Switch', 'ProgressBar', 'Picker', 'CheckBox', 'Touchable'],
  }),
>>>>>>> Stashed changes
]

module.exports = function () {
  /** @type {import('next').NextConfig} */
  let config = {
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      disableStaticImages: true,
    },
    transpilePackages: [
      'solito',
      'react-native-web',
      'expo-linking',
      'expo-constants',
      'expo-modules-core',
        /*
        leave these here, and enable if installing dependancies causes issues
        '@my/api',
        '@my/db',
         */
    ],
    experimental: {
      // optimizeCss: true,
      scrollRestoration: true,
      legacyBrowsers: false,
    },
  }

  for (const plugin of plugins) {
    config = {
      ...config,
      ...plugin(config),
    }
  }

  return config
}
