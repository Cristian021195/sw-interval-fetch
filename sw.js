self.addEventListener('install', event => {
    console.log('V1 installing…');
  
    // cache a cat SVG
    event.waitUntil(0
      //caches.open('static-v1').then(cache => cache.add('/cat.svg'))
    );
  });
  
  self.addEventListener('activate', event => {
    setInterval(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1').then(res=>res.json()).then(res=>console.log).catch((err)=>console.log(err))
    }, 5000);
    console.log('V1 now ready to handle fetches!');
  });
  
  self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
  
    // serve the cat SVG from the cache if the request is
    // same-origin and the path is '/dog.svg'
    //if (url.origin == location.origin && url.pathname == '/dog.svg') {
    //  event.respondWith(caches.match('/cat.svg'));
    //}
  });