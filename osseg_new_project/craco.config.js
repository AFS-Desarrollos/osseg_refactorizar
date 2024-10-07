const million = require('million/compiler')


const cracoConfig = {
  webpack: {
    plugins: { add: [million.webpack({ auto: true })] },
  },
  typescript: {
    enableTypeChecking: true
  },
};