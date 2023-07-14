module.exports = {
  presets: ["babel-preset-expo"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src", "./assets"],
        extensions: [".js", ".jsx", ".ts", ".tsx", ".webp", ".png"],
        alias: {
          "@components": "./src/components",
          "@assets": "./assets",
          "@config": "./src/config",
          "@services": "./src/services",
          "@interfaces": "./src/interfaces",
          "@hooks": "./src/hooks",
          "@theme": "./src/theme",
          "@i18n": "./src/i18n",
          "@router": "./src/router",
          "@utils": "./src/utils",
          "@pages": "./src/pages",
        },
      },
    ],
    "react-native-paper/babel",
    "react-native-reanimated/plugin",
  ],
};
