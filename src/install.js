/**
 * Quasar App Extension install script
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/install-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/InstallAPI.js
 */

module.exports = function (api) {
  api.render('./templates/core')

  api.extendJsonFile('package.json', {
    dependencies: {
      "rb-auth-provider-simple": "^0.8.1",
      "rb-core-module": "^0.14.0",
      "rb-data-provider-json-server": "^0.16.0",
      "rb-vue": "^0.5.0",
      "rb-vue-smart-components": "^0.0.7",
      "vue-i18n": "^9.0.0",
      "vuex": "^4.0.1"
    },

    devDependencies: {
      "quasar-app-extension-rb-ui": "0.0.1"
    }
  })
}
