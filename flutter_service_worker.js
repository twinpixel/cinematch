'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "1067a5829781a6eeea3f1034c8024078",
"index.html": "e5667fbfe31666cc4d0f37be5bedcefe",
"/": "e5667fbfe31666cc4d0f37be5bedcefe",
"main.dart.js": "f695588e6a1a40cd50e837577d077730",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "be15e596b9cd56cd575bde19ed0c17d1",
".git/config": "916b73eadcadf50989c533e926be0588",
".git/objects/9e/3bbd3abea997fb5fc36da75c456364c0f46b2d": "28b384e638b03bdb8b5ae7e0160a9b3e",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/6a/7770aed8225951559745f40f4386c743fd2451": "2442fc5c100f8bce40e61893094ff294",
".git/objects/0b/3770613eba30d9bbe8389bd490d6b784e8d5bc": "2aca572993ac0c83cd1741622012b52b",
".git/objects/93/a17c20a52c107bd86dc8916b151ae4561e148d": "8a705b9b3b617977b4ec1db5b4538162",
".git/objects/93/335a4c0513c051b7a1ed8a4124a7d33173233a": "b06108089b7227d68134e1049783f21b",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/60/68bf5a94ad9eafa29b372abdb0b5ea8b9c1113": "654d3df50f586e8af7cdefdae79427fa",
".git/objects/05/8191f362883d8f988ed397d9d7e1297ddfe855": "2e6e6cbe3130019aebce050079c525b8",
".git/objects/9d/785c107adcdc878dca4c2ed57d7f1d6a5bf9ff": "6e8cefa1cb187ed67b2d5a8eaf1d0210",
".git/objects/a3/983bfbf503cd3112570034e8715b6b76daefc8": "dfad26cc6f64f4c8bd59498e6e3c0a7e",
".git/objects/a3/165a0e5dd1d3273427cc697baea35d0bab13ed": "508e1a1f366bf76e339e48066b82031d",
".git/objects/b5/cca94fde09ffa16b307388c6a1dff8ae92e77c": "0d17abf8a9f20605b3f5097e6d741f1a",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/5a7e2f7493d81ca95e7e8c287e9fb2c44f1629": "905b09f712907f9bf0e83535f07d9207",
".git/objects/bd/38889905616f3d5542b22fdd25ffb82f7b6400": "570f9956da42f53d725896485f39197e",
".git/objects/d1/da76b30db35bbf2508d1c90ffc29b432e8c48c": "84d5e3541f17a13587f9e13305711ff6",
".git/objects/d1/5b02d583650aba4da75da0cfa3641aaa8c8fc4": "43bd0f4d41f6e1e1882d74d6fb15744d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/12e54ea340f2e81d26e871282a3b2f15c49bd6": "91df3eeae2c60ed856bec4366998b9f8",
".git/objects/ab/09ed9bbf53bd821f90892e73e196457d52a95d": "18abdd2feaf61cf0e4d50a34861ad3be",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/23e11a03162e4f4b6ce5d546427d1a1aa5912c": "0dfe31b730394af56987fe7c3cc9e242",
".git/objects/eb/4e3893d246e5c74a5bdc3fed6f43754626d57f": "66c976edfb1427f77724fc4f30665046",
".git/objects/ee/ebe1b732f16d57a7407b4e13ad54a0e68eec5e": "dd0f74c1d0face77e104a3dacf5780fc",
".git/objects/fd/eb1d0755eaa9dc12a6752d9c14cdf67a1dfb93": "69e6af26d2bd0babe8b3681bb6b7fdd4",
".git/objects/f5/a8040c4edebc6f75f768a630d8da064d8af344": "3ffa87600fece6bbb50b0a5a41e18c1f",
".git/objects/fe/d24831de9359a03845aef05482999841fff845": "c1329cf9383e130a573f1f07025037f8",
".git/objects/4e/3545aeb7e29d30f6e20c32a6945122ee8ef6e6": "548d030d72b3ff0d83059f4aa125c33a",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/89/176d13e9e0715390ce3e8297bfc816e0e6ae6d": "e7f52216d593b818d35f892ee1546969",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/dc1d932d4a29f015b254db4615d064df317d8e": "f75a950ee7febd7f89e26ada582ccb33",
".git/objects/81/a1ee579be50899eebcecd5299a7f605381ad51": "4160612c5fe31fd7fceb21d5a06330f0",
".git/objects/72/8cead3560c14033a585e2dcdcb3393e9e467b0": "836fc5a58d0be3ea6c36c3f310a1da7c",
".git/objects/43/9fc00465e9dd9d80b6bee810b171b0eb2bcb45": "c8f13e7fc6c1e1642068387f94fe99ae",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/3b86cb0121b7d8ce49a6a8800aeaf2a02e2335": "aa1f47603a53b2758e8ecbcfbe1b2949",
".git/objects/38/6dae0688faabc17f40b3005cf57dc69dc3acbd": "bab99501d40cb7ab7e930dd6c36d2787",
".git/objects/9a/ffee989700f7456df3baf839a604ef1a5a61a7": "eb54bfbfcf1b0ef358cde29619db6557",
".git/objects/9a/1211ad2150ddd54c26cb1969f4d4cc2376e566": "b22bed6af71d1f0908493f518c0a176e",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/96/246001f802b87a101a7536b491a527b14ca62a": "a58a907a2eb92de75e54db140fd71d2b",
".git/objects/5b/1aea3aa9cdcb41162f86a966cbd1e3e8918804": "a5dafd6d8a4bf66c0b5955abea002d97",
".git/objects/06/e9d4e69f0b5e09a866bf18330645165d0f3a42": "5e364d599dca0864dbedbbbc20d830d0",
".git/objects/63/ca158d2fbf74a44b2c7a20696d66a6e6d4ebb0": "86597107cb79523544e996cda85d96fe",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b6/ea3a2e28c90728ae86614580fb070676f1318d": "5c78b479651a22a37119dcbf7536ee0e",
".git/objects/d2/c224b958a95d1a1e7b37298be35da0cf678105": "387816d064bcf15683cb946b60f85375",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/a165d389a8dc5eeb55ae42d1a731b053f61efd": "f394b24b74e46d64f44b18ef78234b40",
".git/objects/de/9e95bb6c17fbcf163fbd9d589a23998fe7da5d": "90ce705b67242a3cf71a2e4ecf10b477",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/032a7d5c2d37878b53c8a5ae37d41e4fa8d3d9": "3e8cbf4bfffb42ff31250c2a51a21ac7",
".git/objects/e1/1c1579ade714db376180d4b627b5d2a1cde379": "dc15c5b13c6328f43389bc1084544279",
".git/objects/e9/69d311937fa3f54d3bb4347d0f6993d025983c": "decb8115c37e1e3f0c99ae60b9942337",
".git/objects/e0/4d44b73a6ba564cca6d9e550f69dc3211ce867": "8943ca0807e88e1e8a3eb81bdb4e3450",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/db2170e3f0e3578026a2c12dd9c1361d9fe621": "f025d0d5e54b555a537aa8cb6a08890d",
".git/objects/2c/7d7d20d923d597d3a8b728f3a14acc2f9b6f4a": "2866a6ae559ae17f3b5e98be34352f67",
".git/objects/79/7c4fd196ad234ad298b3834e0e7dc5aefbca08": "4cde1c9545af7837e0d1f8d1db677089",
".git/objects/2d/762e67f5b281d1696131ac45fa31c09aba5f6f": "b7ab581c979d674fcaa35d12a2d39b38",
".git/objects/2d/859c47c5364ee17e27bdb2a92af0d8e94c39d2": "8d7adfa8da3deb01aed1e9d7bac8a1ff",
".git/objects/83/b936e15b7135108b38e311aaa7565316f3fab9": "6a1b09f9788ffc781c8a754f6ed7f849",
".git/objects/83/707d3b077162515a9ae4afb28185e280353667": "7238fc69976d851f9086ef29d573d195",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2b/c55fd73de3bd3824ef0d2572624bb42c623469": "ed834113107213e4898ad60953ee9f36",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "aa7cb2297dad06c6db07fa497942b3a9",
".git/logs/refs/heads/main": "aa7cb2297dad06c6db07fa497942b3a9",
".git/logs/refs/remotes/origin/HEAD": "7cbcd4ea665cc44368ce6797b600eeae",
".git/logs/refs/remotes/origin/main": "e2468908dd0569032fc0dad4553c55ad",
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
".git/refs/heads/main": "dd3168c6cc073f030dfe779290ca97eb",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "dd3168c6cc073f030dfe779290ca97eb",
".git/index": "d3fc0ccb93d1ef162b41059b7a41f589",
".git/COMMIT_EDITMSG": "788a53553f0b8b182ca427a4227e4f61",
".git/FETCH_HEAD": "99d4c8214a63251c643bce3e3e1fcbe5",
"assets/AssetManifest.json": "252cfe0dca5baed22f5e3a813d9b59a0",
"assets/NOTICES": "d7d1abe91c33b9d38dc61e4ee259fe91",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "151b1c3359ae9a40459afaa07011e775",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "cc54ed000617731a6dcaf10e2cd8cf5a",
"assets/fonts/MaterialIcons-Regular.otf": "4a605f5da94f25c87a21ab9601e256e1",
"assets/assets/images/icon.png": "d59f9b75abda3c4a505f8c5a2f6027cb",
"assets/assets/images/background.png": "489cd0c08cdfad0c0da278d523a828a3",
"assets/assets/images/ph3.png": "48e91c1c678a294f0cc6e9b7c52e60ef",
"assets/assets/images/ph2.png": "6f8d6bb9070999f5d21f71f1cb95a484",
"assets/assets/images/ph1.png": "1afce4416d54121b1a4225d37e5f717f",
"assets/assets/images/ph5.png": "6f8d6bb9070999f5d21f71f1cb95a484",
"assets/assets/images/ph4.png": "b3200ea0cb3c4979206c311c5b59f74a",
"assets/assets/videos/film_reel_loading.gif": "03ab78041723a6ffb5949625055cb426",
"assets/assets/videos/wait.gif": "55ecc8ea0fc8e9b902e2c8ff21278857",
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
