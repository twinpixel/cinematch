'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "1067a5829781a6eeea3f1034c8024078",
"index.html": "fea8f33f31fe189c92a7df2b6b3e5eb6",
"/": "fea8f33f31fe189c92a7df2b6b3e5eb6",
"main.dart.js": "417b9c3a5f19732f99e97d46c48c5052",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "be15e596b9cd56cd575bde19ed0c17d1",
".git/config": "1d143fdb85e3fd6da925335bebffd70f",
".git/objects/9e/2b88feae53d79eddb09177c06cf7eac96d1426": "9498adeadbf3f1f1bd0efeb8ae8ff45d",
".git/objects/05/071ad1c8db8d9e02b089757fe40de82946cf54": "70100c1df6b365ec145521a0bff6edd2",
".git/objects/f3/2aad3d4bd7685a0049ac3131b64553ed3aecd2": "a7f6ad7cbf3c5ceeaa1431c2c94b597f",
".git/objects/c9/b62ca3e41f748d4de32dbc0e03ce132b87ab62": "649ebcd78e9b5e6f2fd1d8a3ab807e88",
".git/objects/c9/8ada4c1d85ab420cf28ff7545a3018809c261b": "840b7e20b7472c387c9087361985e31a",
".git/objects/e4/b96b69f99ac881237d196e02fe656e238bb31d": "adc1e1457e4d3ab0f3f22790dda28f4e",
".git/objects/ed/15109a82b3b741f99a5b7bf0051090336ac09f": "35d3ddc6c3be0fd4474c3269914d93a1",
".git/objects/pack/pack-c3ac53dd95d0f4ceff395744a1ff45e025ad219f.idx": "beb1d13ebed7aa2c1d060daf5959acc2",
".git/objects/pack/pack-c3ac53dd95d0f4ceff395744a1ff45e025ad219f.rev": "36016524a71c221648a53a22f8ec0e15",
".git/objects/pack/pack-c3ac53dd95d0f4ceff395744a1ff45e025ad219f.pack": "079428a80752869edcfb3f5da95a1180",
".git/objects/16/ac020b70b2e5be95318c7cd256f959404b7ef2": "80696eee787343d78114bbf5be575496",
".git/objects/16/c8c76e4123ed2f6a983998fd0f1fc4f49f5840": "2fa2e0d548a35aa8bae98efec82129dd",
".git/objects/89/88bf77feb010913e2d696846c318029d880fe0": "336be1e850838262edaedd4b09debf35",
".git/objects/17/721249fff4c21d823199368c701707bae0f0c0": "e6a918d2d5379bd9bf7b1ffc3d020278",
".git/objects/4d/067af2fd1f8f8501dc1f8b562a6a8589d16484": "6ab1405a7cce982c3f86f77fbb5f731c",
".git/objects/6e/40313fecf78ce4b438f3119eb6e06108f8136c": "91cecb5690ad777d3e137774f59ce1ba",
".git/objects/09/52f726487ed36c3e69b3fd4cba412578eb27e9": "9cb469998974d8a0cad1ebbc5eba7b66",
".git/objects/96/be137e8c721deb9a4379efdba3e4c81058e6d9": "559c172148bd192eec1aed2c032e86a8",
".git/objects/3f/02fe7903f5f218e7c3abbd1b257f7f13819884": "42adc2fd0351c6748f78863d273fe08b",
".git/objects/5b/808d6bb7a6e1fe08e3dbcabf12c917303caeea": "7a886477394325c69363827955d2d141",
".git/objects/52/1bb45c33b2a493d8083c3f60c32a94a3bec384": "93363dc580d4f63c74dea7629dc76eb7",
".git/objects/0a/d1a306d4733020883c74b802c64599e21763f1": "a75aa39cd3453c8fd3d659cb414b5a2d",
".git/objects/b1/eea49a64eff2d0b29464c1ec7d61e5446d7966": "1185775aff072abe145c6e656193d0a5",
".git/objects/dd/6852fd005691478bf51d02929dfbf63f2158fc": "4eef75614777bbf73414c075885b23e2",
".git/objects/a9/165fb158ca7df1ef2787d6dc2a602ba293bdd0": "cff089280184f68fd1c605b75a43d251",
".git/objects/a1/a494a2c184b1c693b7f8706b779d9d1a4dc74b": "9408b80e97970f9b12d86a37ab54b535",
".git/objects/e8/b0563050d291abcc7b9d531dcb51b03dbc5e91": "29559bf9fb886e6ea09757919b159cfb",
".git/objects/ff/2d19bd9ad24187f852fe14dfb41ffd369ab0bf": "277212e9041bcb64e60af3171080028d",
".git/objects/c5/cf4bc506412202039cc5175e2855d1b80545bc": "54a340d026cd1c9381865af29f5da6af",
".git/objects/2c/f68abfd16c3c5a04c565089e83775fd29cb4b9": "d73b86a1eb92d279779967f122f42851",
".git/objects/84/323674b5a52060edf794214313d54c58b39ac2": "3c2ed03866af719bf3b1294a0f6e6a93",
".git/objects/24/643b24870d766946d9a4231849e456d772ee6b": "c758f88fb2a257b6bce19aee4960a163",
".git/objects/40/c0be2419b75a11644d1b6de37c7b797a8b9f35": "a2f1e47a5dd7b33fd25aad68aca8c364",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "beb286eb1bb52debc2b4c7a39bf51c28",
".git/logs/refs/heads/main": "beb286eb1bb52debc2b4c7a39bf51c28",
".git/logs/refs/remotes/origin/HEAD": "d7907181ade291e59e203452270b65e9",
".git/logs/refs/remotes/origin/main": "1d62c6b63c0593ebcd6334508b62a6c5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "3ff4994794ed286ee9354a2b0c5f558b",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "3ff4994794ed286ee9354a2b0c5f558b",
".git/index": "368dd41072659a718e537dc48182ebba",
".git/packed-refs": "2e1a394a76c0d77e5d601d6463cbe035",
".git/COMMIT_EDITMSG": "9a8ad92c50cae39aa2c5604fd0ab6d8c",
".git/FETCH_HEAD": "63c6b9528a99564b2ce733d3cbd15762",
"assets/AssetManifest.json": "0d1040be8fc97bdc65a9815ea5a66589",
"assets/NOTICES": "d7d1abe91c33b9d38dc61e4ee259fe91",
"assets/FontManifest.json": "91e91b8a479d59ec02e6543b78fe1b70",
"assets/AssetManifest.bin.json": "883d6ed6edd1b10f02463b4dda273593",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "a7a7976917d2546de02f048f0a3b4c52",
"assets/fonts/MaterialIcons-Regular.otf": "2d72b8fef4bd51105c8ba2c0982bf641",
"assets/assets/images/icon.png": "d59f9b75abda3c4a505f8c5a2f6027cb",
"assets/assets/images/background.png": "489cd0c08cdfad0c0da278d523a828a3",
"assets/assets/images/ph3.png": "48e91c1c678a294f0cc6e9b7c52e60ef",
"assets/assets/images/ph2.png": "6f8d6bb9070999f5d21f71f1cb95a484",
"assets/assets/images/ph1.png": "1afce4416d54121b1a4225d37e5f717f",
"assets/assets/images/ph5.png": "95f5437597fbf2ba6728deb8a4b94bf4",
"assets/assets/images/ph4.png": "b3200ea0cb3c4979206c311c5b59f74a",
"assets/assets/questions.json": "d2f624e641b69f1ab9038df0fe5fac5c",
"assets/assets/videos/film_reel_loading.gif": "03ab78041723a6ffb5949625055cb426",
"assets/assets/videos/wait.gif": "55ecc8ea0fc8e9b902e2c8ff21278857",
"assets/assets/fonts/StupendousJack.ttf": "9dca8ad823a0ec5ee7209a55715c6adb",
"assets/assets/fonts/cinema.ttf": "5ae75b215b653d5f1ca0df1823d24be0",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
