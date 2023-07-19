//eslint-disable-next-line no-undef
module.exports = function(api) {
  api.cache(true)
  return {
    presets: [
      'babel-preset-expo',
      'module:metro-react-native-babel-preset',
    ],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            tests: ['./tests/'],
            '@components': './src/components',
          }
        }
      ],
      [
        'module:react-native-dotenv', {
          'moduleName': 'react-native-dotenv',
          'path': '.env',
          'blacklist': null,
          'whitelist': null,
          'safe': false,
          'allowUndefined': true
        }
      ]
    ]
  }
}
