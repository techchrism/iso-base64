exports.atob = str => Buffer.from(str, 'base64').toString()
exports.btoa = str => Buffer.from(str).toString('base64')
