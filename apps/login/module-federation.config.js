module.exports = {
  name: 'apps/login',
  exposes: {
    './Module': 'apps/login/src/app/remote-entry/entry.module.ts',
  },
};
