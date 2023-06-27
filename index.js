import { registerRootComponent } from 'expo';

import App from './App';

// console.log(`V8 version is ${global._v8runtime().version}`);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
