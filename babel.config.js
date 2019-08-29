module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@components": "./src/components",
          "@navigators": "./src/navigators",
          "@reducers": "./src/reducers",
          "@res": "./src/res",
          "@sagas": "./src/sagas",
          "@services": "./src/services",
          "@themes": "./src/themes",
          "@views": "./src/views",
          "@configs": "./src/configs",
        },
      },
    ],
  ],
  
};
