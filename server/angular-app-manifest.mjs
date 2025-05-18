
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/mpwr-app/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 832, hash: '50c137dc88b34f41589f6e228d1023a7542e099e6f516d56d8938311b0135ee6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1195, hash: '4f0de69446bcda471777e19f6bc807ddf1a0f40e210ab5ed704570e5275c246c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-2GB4626I.css': {size: 46, hash: 'ai9LLX8aq8g', text: () => import('./assets-chunks/styles-2GB4626I_css.mjs').then(m => m.default)}
  },
};
