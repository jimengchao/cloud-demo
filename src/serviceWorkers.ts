
export function register(){
  console.log('service worker register');
  window.addEventListener('load', () => {
    console.log('service worker loaded');
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  })
}