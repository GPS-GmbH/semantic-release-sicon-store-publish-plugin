const { getApp } = require('sicon-app-store-deploy')
const publish = async ({ app, maturity = 'stable', dockerTag, name, changelog }, { nextRelease, branch }) => {
    const appStore = getApp(process.env.APPSTORE_LOGIN_APP || app)
    return appStore.publishVersion({
        maturity,
        name: name || nextRelease.name,
        dockerTag: dockerTag || branch.name,
        changelog: changelog || nextRelease.notes,
    })
}
module.exports = {
    publish,
}