import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Icon } from '@iconify/vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import vClickOutside from 'click-outside-vue3';
import mitt from 'mitt';
import { VueMasonryPlugin } from 'vue-masonry/src/masonry.plugin';

import './index.css';

// Global Components
const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

const emitter = mitt();
const app = createApp(App);

// Global Components
requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  );

  app.component(componentName, componentConfig.default || componentConfig);
});

app.component('Icon', Icon);

app.use(router);
app.use(store);
app.use(vClickOutside);
app.config.globalProperties.emitter = emitter;
app.use(VueMasonryPlugin);

app.mount('#app');
