const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/Interno_Page/' : '/',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @use "@/assets/style/scss/_color.scss" as *;
          @use "@/assets/style/scss/_fonts.scss" as *;
          
        `,
      },
    },
  },
});
