import listZip from 'https://tomashubelbauer.github.io/esm-list-zip/index.js';

window.addEventListener('load', async () => {
  // TODO: Do this for all the archives sequentially showing progress in the UI
  for await (const entry of listZip(url, onFetch, onNoRange)) {
    // { name: string; offset: number; size: number; content?: ArrayBuffer; }
  }
});
