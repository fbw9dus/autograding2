const { setup: setupDevServer } = require('jest-dev-server')
 
module.exports = async function globalSetup() {
  await setupDevServer({
    command: `npm run start`,
    usePortAction: 'ignore',
    launchTimeout: 50000,
    port: 3000,
  })
}