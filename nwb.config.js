module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactTripleSelectBox',
      externals: {
        react: 'React',
      }
    }
  },
  babel: {
   plugins: ['jsx-control-statements' ]
  },
  webpack: {
     rules: {
       babel: {
         test: /\.jsx?/
       },
     },
   }
}
