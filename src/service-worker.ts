import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst } from 'workbox-strategies';


declare const self : ServiceWorkerGlobalScope;

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({url}) => url.origin === 'https://cloudflare-demo.mengchao10271254.workers.dev', 
  new NetworkFirst({
      cacheName: 'api-cache',
  })
);