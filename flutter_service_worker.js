'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "116f177b5cff03a9d74fe9b8e91547b9",
"version.json": "1067a5829781a6eeea3f1034c8024078",
"index.html": "3bc1f92b940c989fda378b9c9414557d",
"/": "3bc1f92b940c989fda378b9c9414557d",
"main.dart.js": "16f1a3ebd5dd896979b94ed42bb591f2",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "be15e596b9cd56cd575bde19ed0c17d1",
".git/config": "1d143fdb85e3fd6da925335bebffd70f",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/51/6cd94735eb0970aeb65ed2f728b8ca43e554b7": "767cdfa1cd0a47fc73adddcfecbab67e",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/02/0b95fb071ace29264e3d06a8862858fdef129d": "ffff9d04a1f2d2d85219b1b90c0b3d27",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/bb/7dc9b36934b526efbb7e4082a3f84e0f39ce7c": "59831c8f612e907e845429174bcbd649",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/b3/0a01006f80c13684ba75429820c62da47b62f1": "4f1e84a08aab49ad353d22d723772558",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/42fa912d0d49e7424b28f27564c4e7efa95391": "de57e6b61160b8c9fd0e3b925054da4f",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d1/d611ddbbe82bc278d2d6fdcd514ed2e6ba39c7": "bafa4e3f52ad7325f06d9cb665bd0acf",
".git/objects/d1/30338d92388282932301ea2769570c7a671314": "f8d472da76f95a3981c6d6add4712c02",
".git/objects/e2/75b58ca52078dbda0b62d61888ca74c6f6afde": "2d85e2c84cf4bc83c8b5e5086a7ba564",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/cfd5c8f69d15108d50a587bfb26e5660d4a7ce": "c5d8daf1febc4b03fa943d7bfb0e28ae",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ec/743cf7114e28034e9178a579d1c0526ac38154": "917b94801043b3509ff26e0eadb14065",
".git/objects/pack/pack-880ece3671f1a21b0514764988a19b151b7cbd5e.pack": "9275f5db75a3c20dc89b89a04c0641bc",
".git/objects/pack/pack-880ece3671f1a21b0514764988a19b151b7cbd5e.rev": "53d9c5b9a8f1520a55855775cd6359e0",
".git/objects/pack/pack-880ece3671f1a21b0514764988a19b151b7cbd5e.idx": "85a86b9b51522f65deea10971378af95",
".git/objects/7d/7a748d7c1438f3893eeee239c1afb7b5cf8a52": "44d1129f50bbd545e82ff186156046d7",
".git/objects/17/9ea94dc62858c89095bd5a258a10d407320af3": "44379cccfd4c703bc13daaba46581b3e",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/10/4b75c70f3adcb07d406c2296c23a2c522a0589": "32e1f8ba1639c3875b617d0af21441c7",
".git/objects/10/841786ec001ecb80921e88a37a18b21b2417ee": "d5c1c85b8815423fcdd60430fb04299d",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/07/235fa2ac9f689123b872ccc05f02e40b225643": "5b4a5956c7216c551c1f25761c023002",
".git/objects/00/28360a357b36ba8af7f4f4f08a71731b2a893e": "58ebc4a78ebe6ef0c6e2155702715537",
".git/objects/5c/29318258a1d32309ecef517f0166f66b081270": "d7348aaf9095c16dac68a661738b2306",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/62/d9843fa3c603e88fa2555c895ec77308fcdb5c": "0a79232215d66b225c25a9b2752df311",
".git/objects/3a/8413d98ef917e677045f14f4217f75257a297b": "fa2e104c2891838db2677e52acf76f8b",
".git/objects/53/c44bdee84dc0ad5eeba0e7eb5a6564a49b9d7c": "0ab1420fc2fc98b48b74529074294827",
".git/objects/97/6d97071bb911d5023015e8ab6750ccf618e762": "69b757dbe0cec778bb5997e95a537ec7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/23513e89a39cd67e2991ba358525f287c6b7c9": "3e1d3118a0c7b7ece610a03ee8295cf8",
".git/objects/a0/2861ef62dc4c304f98560547933c5c35d559ff": "b42dc07cbe62da4f68c93b3ee750ccd0",
".git/objects/a0/67b9877fcf70b51b723a06edc685346a485682": "d83cb3685a699d1d8d08ac89ed919480",
".git/objects/b6/37980703bc650145602432e09d70ffe85d2801": "439229c6cf2848b0de7297971b1fa546",
".git/objects/d5/a9da80469d23b1a6e0bca1a4e3014c9394b21a": "24df92987a7bcedf66def3d10dd9f2da",
".git/objects/d2/46813172bfbc1f9883163b7872be01582dc6d6": "fa7c265b9b6c9eb30852d96f5a7b3962",
".git/objects/aa/cb07bb1c67a74056b42628ec38300a53ef1a43": "63b46a01166d6501fae37b3ed859b68f",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/de/2c98451367ab4069f5812917927d0a07761982": "c8f69b1e4d3f02df0dfdad03051c99a5",
".git/objects/a6/60b34691b0ae0cbc4334827e653c39181458fa": "372e823f0bf8b762f41c408db0517387",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/141bca823fcf631ece9ef6124a7e79e29a8e65": "8370cacefac35527931c991ebbb2a0cf",
".git/objects/f7/6d66c8e748ebda6a18c52f2b0c6284be8ed688": "ea8beb9a6ded34bc025a926d5c2555ff",
".git/objects/f7/be3146c0c1ddac08a3fad83e562f62c567ba32": "8de27d1886a2c52726b6196d913b627f",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f8/ba4e6382e343ed11be575449e178ec1d048945": "b534e5a198391e02c590a26559c0ec88",
".git/objects/ce/00130734f4c13c3fd673142dc62c91442b6fbf": "7dc5a577faabc28d80a790019862ee8d",
".git/objects/2d/c75095f333d4b399654f7960989add233ad0a8": "6cff4e720155e4a3dba8d57ae4a7cc5d",
".git/objects/41/86d6055f70840622d6ec82c2c1dfe8e97682a3": "3e3afc325ade861902f89a21e7345497",
".git/objects/48/f0797114a9b70a570d553033e2a7284b2aeebf": "f9805a5e7d7069356eb0f57ef614c6cc",
".git/objects/70/4168ec8a49d5d38274141de51b21e56fb39208": "6635f01ace5493b4450582a97f415d56",
".git/objects/84/a3f6a6a869a71a641f83b4936aa229b60e67b3": "fbe34ae1d6545e9f8389e4ba7f0d8796",
".git/objects/4a/8f54cc2c4f2cbe180637a55ebe277e773af0fe": "e658159e3fe168c4b5c944f6af768150",
".git/objects/24/e8720cc5bada1fa94406da89be3d7673cd1daf": "6d3b9b00129c54ca9829b35728321343",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/2b/b0a9c9c4d77708ffc4631f5692a145426a17da": "0272698ffb8990f354f84585076dc4b0",
".git/objects/78/c6a057a3641a840023288363e6f26075337823": "18c2ecf9fc21041a55e7bd32def1e1a3",
".git/objects/7f/4b37138ea48ee400a38cf8d5a587387542b9aa": "e87769aa9df6aa0bcb4278465178450e",
".git/objects/14/fc76659dd2d2e45a9e6a5d2e60483d411f0c10": "68e8c81ea7d909f3dcb1fc30b04aa70d",
".git/objects/8e/c4152187ddfdffdd7f5561da49a382cc491e95": "ded81ee9ee6196d49d2cb5752a577ed8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6e9c59a735deef65bbfe927c0c2eb0a5",
".git/logs/refs/heads/main": "6e9c59a735deef65bbfe927c0c2eb0a5",
".git/logs/refs/remotes/origin/HEAD": "da92ce6e4ef8bae89124e1263837c150",
".git/logs/refs/remotes/origin/main": "5d2f628df64e0c233adb4d0b9704c996",
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
".git/refs/heads/main": "810063fbc3c9c680546d4fa5827c3ce8",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "810063fbc3c9c680546d4fa5827c3ce8",
".git/index": "6b581219b3ebb61bf79ff97b7a777a06",
".git/packed-refs": "f1e9423c969ae573d4b4e7270e9753d5",
".git/COMMIT_EDITMSG": "920df382ab316eca2d5e57fc5581f577",
".git/FETCH_HEAD": "53239372738b83d07ee33c11b912d683",
"assets/AssetManifest.json": "3cdad2e1ba5896ac69320d86f0c9769c",
"assets/NOTICES": "fe8edb9fe3ddf85363b457ae6487993d",
"assets/FontManifest.json": "91e91b8a479d59ec02e6543b78fe1b70",
"assets/AssetManifest.bin.json": "ea5197f6c442787320906a6829d9ad43",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1ed28a9b46ec98e052251cbba6c5d502",
"assets/fonts/MaterialIcons-Regular.otf": "064e3d8bbd6345d611d2442235bd429f",
"assets/assets/images/ph9.png": "8f12895943cfdc09aa668fadf48ceb5c",
"assets/assets/images/icon.png": "d59f9b75abda3c4a505f8c5a2f6027cb",
"assets/assets/images/ph8.png": "de11239eb86e040206923ab21da6e1b9",
"assets/assets/images/ph10.png": "e76ce64cec9964d3d7e571921d4b44a1",
"assets/assets/images/ph11.png": "c4fbb4af9cbb456d21e77b4ae43d8b12",
"assets/assets/images/background.png": "489cd0c08cdfad0c0da278d523a828a3",
"assets/assets/images/ph3.png": "48e91c1c678a294f0cc6e9b7c52e60ef",
"assets/assets/images/ph2.png": "6f8d6bb9070999f5d21f71f1cb95a484",
"assets/assets/images/ph1.png": "1afce4416d54121b1a4225d37e5f717f",
"assets/assets/images/ph5.png": "95f5437597fbf2ba6728deb8a4b94bf4",
"assets/assets/images/ph4.png": "b3200ea0cb3c4979206c311c5b59f74a",
"assets/assets/images/ph6.png": "74516cf5f67a721fcc1de7532a57250e",
"assets/assets/images/ph7.png": "8e7fb0bb26137335b2c5ea9af5e7e3bf",
"assets/assets/questions.json": "8d20a3f5277e7668996d6c43b4b277e7",
"assets/assets/videos/film_reel_loading.gif": "03ab78041723a6ffb5949625055cb426",
"assets/assets/videos/wait.gif": "55ecc8ea0fc8e9b902e2c8ff21278857",
"assets/assets/fonts/StupendousJack.ttf": "9dca8ad823a0ec5ee7209a55715c6adb",
"assets/assets/fonts/cinema.ttf": "5ae75b215b653d5f1ca0df1823d24be0",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
