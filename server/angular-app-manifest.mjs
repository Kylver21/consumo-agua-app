
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/consumo-agua-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/consumo-agua-app/meta",
    "route": "/consumo-agua-app"
  },
  {
    "renderMode": 2,
    "route": "/consumo-agua-app/meta"
  },
  {
    "renderMode": 2,
    "route": "/consumo-agua-app/registro"
  },
  {
    "renderMode": 2,
    "route": "/consumo-agua-app/resumen"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1230, hash: '9aa7d8e61a8e4d4783bb88ef7930e4a012f572e86955b4c0271de41ab25a84b9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1454, hash: '73a33126e312fda4b12eef11946aa57502d1be84e3f862ff4adc074309bde9b4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'meta/index.html': {size: 5459, hash: '5fe24dacef4b0168ffe048991f23db9cd2cc1618975df370aa2ddd353e6dbb62', text: () => import('./assets-chunks/meta_index_html.mjs').then(m => m.default)},
    'registro/index.html': {size: 5703, hash: '0979b8bbafdc16560a07e30a03cc548261ac0049ab7b514dd763ad0fa17377d1', text: () => import('./assets-chunks/registro_index_html.mjs').then(m => m.default)},
    'resumen/index.html': {size: 4987, hash: '71ffb8ba741a59e99d16ddf09d9fe9a7a8cd1e6217468c8ffba023917bcf8375', text: () => import('./assets-chunks/resumen_index_html.mjs').then(m => m.default)},
    'styles-HP6WMEX3.css': {size: 1862, hash: 'RqRjglFI0oI', text: () => import('./assets-chunks/styles-HP6WMEX3_css.mjs').then(m => m.default)}
  },
};
