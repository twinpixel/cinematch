'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "8419bb3b0d1bcc45cc7507160ff2c89f",
"version.json": "1067a5829781a6eeea3f1034c8024078",
"index.html": "baf2270b2cff95db7396933a0c054791",
"/": "baf2270b2cff95db7396933a0c054791",
"main.dart.js": "e9fff93f3558a339935cc423f6a32330",
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
".git/objects/ab/8aa0655072caab5340a392b9f3ef095b35dbb9": "d7f0772d2956100dbc0acb5e6a3edbcd",
".git/objects/e2/75b58ca52078dbda0b62d61888ca74c6f6afde": "2d85e2c84cf4bc83c8b5e5086a7ba564",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/cfd5c8f69d15108d50a587bfb26e5660d4a7ce": "c5d8daf1febc4b03fa943d7bfb0e28ae",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/e3/ada354eb2019099eb0885d5d740dc8e057740a": "873933481a36f3db0c4fb74091155f29",
".git/objects/ec/743cf7114e28034e9178a579d1c0526ac38154": "917b94801043b3509ff26e0eadb14065",
".git/objects/pack/pack-880ece3671f1a21b0514764988a19b151b7cbd5e.pack": "9275f5db75a3c20dc89b89a04c0641bc",
".git/objects/pack/pack-880ece3671f1a21b0514764988a19b151b7cbd5e.rev": "53d9c5b9a8f1520a55855775cd6359e0",
".git/objects/pack/pack-880ece3671f1a21b0514764988a19b151b7cbd5e.idx": "85a86b9b51522f65deea10971378af95",
".git/objects/7d/7a748d7c1438f3893eeee239c1afb7b5cf8a52": "44d1129f50bbd545e82ff186156046d7",
".git/objects/1a/0e17059d2299d059a36629ca68854f2f9d97bd": "c670807c76a74550e74294a6afba203e",
".git/objects/17/9ea94dc62858c89095bd5a258a10d407320af3": "44379cccfd4c703bc13daaba46581b3e",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/10/4b75c70f3adcb07d406c2296c23a2c522a0589": "32e1f8ba1639c3875b617d0af21441c7",
".git/objects/10/841786ec001ecb80921e88a37a18b21b2417ee": "d5c1c85b8815423fcdd60430fb04299d",
".git/objects/86/44871ae3e9309a3758dad3e25b9811ceff5340": "149f05f1f47256a642c95d54edf4339f",
".git/objects/2a/c376640cdf64a25907f0d8f6323d8abe64438c": "ae652d42eb548e9ebbd39974ad187229",
".git/objects/6b/9d5bff09b5a71e447a8f47b0d0a1da0f3d3915": "21374faf4b75da4b427eb71234ea453d",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/07/235fa2ac9f689123b872ccc05f02e40b225643": "5b4a5956c7216c551c1f25761c023002",
".git/objects/00/28360a357b36ba8af7f4f4f08a71731b2a893e": "58ebc4a78ebe6ef0c6e2155702715537",
".git/objects/5c/29318258a1d32309ecef517f0166f66b081270": "d7348aaf9095c16dac68a661738b2306",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/62/d9843fa3c603e88fa2555c895ec77308fcdb5c": "0a79232215d66b225c25a9b2752df311",
".git/objects/3a/8413d98ef917e677045f14f4217f75257a297b": "fa2e104c2891838db2677e52acf76f8b",
".git/objects/53/c44bdee84dc0ad5eeba0e7eb5a6564a49b9d7c": "0ab1420fc2fc98b48b74529074294827",
".git/objects/3f/81eeee98b9da4456f72f006416a3b197a22116": "ce36944c69775ab742b4bbbb2317e933",
".git/objects/08/287f7cb171bab8682be9b0416f27b4ec2fe115": "b1888865a8b4a1680fbb4c40a82d129b",
".git/objects/97/6d97071bb911d5023015e8ab6750ccf618e762": "69b757dbe0cec778bb5997e95a537ec7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/1092817b313728f8f55cc119bcd586045ef845": "cd34676edc4f57d900205cbc32736825",
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
".git/objects/79/c63e01464a8489d268d59303799ebe83f0ed87": "c87ffd0067860743bdb09146dbeafbb0",
".git/objects/2d/c75095f333d4b399654f7960989add233ad0a8": "6cff4e720155e4a3dba8d57ae4a7cc5d",
".git/objects/41/86d6055f70840622d6ec82c2c1dfe8e97682a3": "3e3afc325ade861902f89a21e7345497",
".git/objects/48/f0797114a9b70a570d553033e2a7284b2aeebf": "f9805a5e7d7069356eb0f57ef614c6cc",
".git/objects/70/4168ec8a49d5d38274141de51b21e56fb39208": "6635f01ace5493b4450582a97f415d56",
".git/objects/1e/765f067b928b87d0fb09b62e73fa360088505b": "ec8854399befdaf61873f058200d4a7e",
".git/objects/84/a3f6a6a869a71a641f83b4936aa229b60e67b3": "fbe34ae1d6545e9f8389e4ba7f0d8796",
".git/objects/4a/8f54cc2c4f2cbe180637a55ebe277e773af0fe": "e658159e3fe168c4b5c944f6af768150",
".git/objects/24/e8720cc5bada1fa94406da89be3d7673cd1daf": "6d3b9b00129c54ca9829b35728321343",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/2b/b0a9c9c4d77708ffc4631f5692a145426a17da": "0272698ffb8990f354f84585076dc4b0",
".git/objects/78/e07135b79de77150164b252948f7ab49cbe36e": "7fb06aa984177d0775f791c572f1a130",
".git/objects/78/c6a057a3641a840023288363e6f26075337823": "18c2ecf9fc21041a55e7bd32def1e1a3",
".git/objects/7f/4b37138ea48ee400a38cf8d5a587387542b9aa": "e87769aa9df6aa0bcb4278465178450e",
".git/objects/14/fc76659dd2d2e45a9e6a5d2e60483d411f0c10": "68e8c81ea7d909f3dcb1fc30b04aa70d",
".git/objects/8e/c4152187ddfdffdd7f5561da49a382cc491e95": "ded81ee9ee6196d49d2cb5752a577ed8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fade1a6bb9d606e4ebc8b59a77c35f15",
".git/logs/refs/heads/main": "fade1a6bb9d606e4ebc8b59a77c35f15",
".git/logs/refs/remotes/origin/HEAD": "a9a0b3b8312cc01e449affa2011baf30",
".git/logs/refs/remotes/origin/main": "938562fa7b5d6f06759d1050b50d3b6f",
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
".git/refs/heads/main": "49f5716c907f063cd6ddbd22aa5e8fe9",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "49f5716c907f063cd6ddbd22aa5e8fe9",
".git/index": "5c1c2c2671edb487875273283d71cd97",
".git/packed-refs": "f1e9423c969ae573d4b4e7270e9753d5",
".git/COMMIT_EDITMSG": "9ffbf43126e33be52cd2bf7e01d627f9",
".git/FETCH_HEAD": "49ab6914294db5e896dd069eebd1f6b2",
"assets/AssetManifest.json": "659d90ab79673c7e31f48bc861ce2d00",
"assets/NOTICES": "fe8edb9fe3ddf85363b457ae6487993d",
"assets/FontManifest.json": "91e91b8a479d59ec02e6543b78fe1b70",
"assets/AssetManifest.bin.json": "0266658f062be0c65c88d68bd952a30c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d1c0d693cfb1b783e8798fd6c113716c",
"assets/fonts/MaterialIcons-Regular.otf": "064e3d8bbd6345d611d2442235bd429f",
"assets/assets/posters/Kirikou_and_the_Sorceress.jpg": "23acf5e38ccb81d263581336f9ab890c",
"assets/assets/posters/First_Reformed.png": "be262daf2606997cfe40e2e885bbf1dc",
"assets/assets/posters/Andrei_Rublev.jpg": "01359e198479f9315ef4e8aafcaab774",
"assets/assets/posters/Shakespeare_in_Love.jpg": "a8e01d59e6fda05ed94cde6e3297046f",
"assets/assets/posters/Paris__Texas.jpg": "beb3314be759daa65a5c048832b9ca69",
"assets/assets/posters/Midsommar.png": "fd15f4cb9e7722fe214a5f70e3d30b2a",
"assets/assets/posters/The_Souvenir.png": "9cf245a7bf7169289686c51ecf3ecc14",
"assets/assets/posters/Dolor_y_gloria.jpg": "c2db7783d82ca19901bd1a9b7247160f",
"assets/assets/posters/My_Joy.jpg": "187c69563c6ed742c9ed1b65dc37f9cc",
"assets/assets/posters/Days_of_Eclipse.jpg": "ae613d7aec0da65752691abebae85952",
"assets/assets/posters/The_Babadook.jpg": "0d3ac4d437b3849be60d4bb14d83c9a0",
"assets/assets/posters/Run_Lola_Run.jpg": "a998a3ed175c4a6c70d1072a6729b95b",
"assets/assets/posters/Fantastic_Mr__Fox.jpg": "93a9cde8308363c3b84774f6c5287803",
"assets/assets/posters/12_Years_a_Slave.jpg": "ef2caf30ca1ec402f2cd328692232f8c",
"assets/assets/posters/Raise_the_Red_Lantern.jpg": "e4a8a15237628eff7a61827aa35fb7a7",
"assets/assets/posters/Boogie_Nights.png": "11cbd5df04a272aff4477b8e662479bd",
"assets/assets/posters/Black_Coal__Thin_Ice.jpg": "1388d6b72b47a2ed7c44e1a9c1323b88",
"assets/assets/posters/Fitzcarraldo.jpg": "8498b0b54e8e88688c5145a0ce7453ff",
"assets/assets/posters/The_Deer_Hunter.jpg": "ac428ce3d228aee51ce14496f6dfe0ca",
"assets/assets/posters/The_Good__the_Bad_and_the_Ugly.jpg": "70ad4f5a92a6f816f27ff474aedb06c0",
"assets/assets/posters/My_Life_as_a_Zucchini.jpg": "a6c9db6b329bbeb9b287ff31c299fd76",
"assets/assets/posters/The_Wandering_Earth.jpg": "906eacdec547b5c54b39a192c8e132c3",
"assets/assets/posters/Scenes_from_a_Marriage.jpg": "5f1c80273e422706821bd7c86c6dd5cc",
"assets/assets/posters/Once_Upon_a_Time_in_the_West.jpg": "ce9712a1625504851e9c6c43e5bb668c",
"assets/assets/posters/The_Usual_Suspects.jpg": "df52dd1aa6119881c63b4b8e3e912771",
"assets/assets/posters/Le_Cercle_rouge.jpg": "b6392c21520eeb3c56f4c5f65ac3bf49",
"assets/assets/posters/The_Cook__the_Thief__His_Wife___Her_Lover.jpg": "f66166d56c9f843d6c1f27d717981a4a",
"assets/assets/posters/Upstream_Color.jpg": "acb8973667a60ac259be160cb71606ad",
"assets/assets/posters/La_dolce_vita.jpg": "f057d7e67a6b25508e04317a0856c067",
"assets/assets/posters/Wolfwalkers.png": "4c7a6042db879ecfa4d20866c2fdb22d",
"assets/assets/posters/Ruben__stlund.jpg": "62b80bac57001810546d0264754b855e",
"assets/assets/posters/Ash_Is_Purest_White.jpg": "3b2d7b07b1ae7029b07efa9ab7dd1860",
"assets/assets/posters/Harold_and_Maude.jpg": "70154052a178ddc597af08d4de0b3694",
"assets/assets/posters/The_Garden_of_the_Finzi_Continis.jpg": "835858a638bce7d3d6255833f3f5ae7f",
"assets/assets/posters/Rashomon.jpg": "6bb62e94e6345963ffb2e34df90aee70",
"assets/assets/posters/Le_Doulos.jpg": "cb1ed23a8422e70786846774f952c8a3",
"assets/assets/posters/Yeelen.jpg": "fc5e57ad7ae01af5314ad7f41df7377c",
"assets/assets/posters/Aguirre__the_Wrath_of_God.jpg": "afbadcb463134e781cf7a4f38ff5a597",
"assets/assets/posters/Abre_los_ojos.jpg": "2618e9d1a3ced17b55bf1109faa39ce6",
"assets/assets/posters/Pan_s_Labyrinth.jpg": "6cccbb47034e4c5ef6194bc6320b999a",
"assets/assets/posters/The_Shawshank_Redemption.jpg": "fcbe4b407a3e0109ab60e41c848d3f83",
"assets/assets/posters/Detective_Conan__The_Fourteenth_Target.jpg": "12395223550e62549644b9f27ff0f36d",
"assets/assets/posters/The_Great_Ziegfeld.jpg": "871270b22b5fd69415e2a031f118a1bd",
"assets/assets/posters/House_of_Flying_Daggers.JPG": "fbe555115a8a66d0b9a58a2911cd85e5",
"assets/assets/posters/The_White_Ribbon.jpg": "a8276d7f61495ab1006481b29e278474",
"assets/assets/posters/A_Brighter_Summer_Day.jpg": "1cf639c575a3b40ba6d43f41bf336ee0",
"assets/assets/posters/Parasite.png": "bc90d780981d46c888d8987cf664ef3d",
"assets/assets/posters/Eraserhead.jpg": "2c1bef548a24dd8a139cedb74a69aafb",
"assets/assets/posters/Nattvardsg_sterna.jpg": "03ca25f1d82a2723f6f75e27c03cd2ed",
"assets/assets/posters/The_Turin_Horse.jpg": "0beb59c163e5d33a2ebd0ae8da94d8b3",
"assets/assets/posters/The_King_s_Speech.jpg": "c7b7e55b6f5f22effdca05c3e2524d94",
"assets/assets/posters/M.png": "8904981cde499a087901b30921e59fd9",
"assets/assets/posters/The_Dark_Knight.jpg": "25ff8011460c45c1915622098ef31414",
"assets/assets/posters/Weathering_with_You.jpg": "83a704a9ae452847bb20a3c157b7bf40",
"assets/assets/posters/A_Touch_of_Zen.jpg": "486d55c984a814378e044a8afeac236a",
"assets/assets/posters/Decision_to_Leave.jpg": "80d9dc8e4cb1287877165a61b406d7f6",
"assets/assets/posters/Saraband.jpg": "c95e3816aceb8d5f27df37d4df881886",
"assets/assets/posters/Titane.jpeg": "2bbb1619f5a8c3c090d2b494f60213c6",
"assets/assets/posters/Anomalisa.jpg": "eada9fe64912b84dcfd7177533861d6c",
"assets/assets/posters/Hour_of_the_Wolf.jpg": "e1528eb4c37640325ac86c29dba30eb8",
"assets/assets/posters/C_era_una_volta_il_West.jpg": "ce9712a1625504851e9c6c43e5bb668c",
"assets/assets/posters/Kinetta.jpg": "cac448075c1e782c22e96bf3b284e978",
"assets/assets/posters/Kontroll.jpg": "85bc9845bf99848ba231fb574e5259b4",
"assets/assets/posters/Le_sang_d_un_po_te.jpg": "700b34dadd07e72526cc74eceb411d72",
"assets/assets/posters/The_English_Patient.jpg": "cfd17aa69967047088148c4454b5b19a",
"assets/assets/posters/Triangle_of_Sadness.jpg": "896416bbc9b8990f7b9d16028e37ef67",
"assets/assets/posters/Gosford_Park.jpg": "e60b517835d09c28de38739ce66e69cc",
"assets/assets/posters/A_Funny_Thing_Happened_on_the_Way_to_the_Forum.jpg": "f8f5e2b8bd718e957b40bec12e3bba1c",
"assets/assets/posters/The_Science_of_Sleep.jpg": "13ae9b34232a7365664b2765b2aa04f4",
"assets/assets/posters/Driving_Miss_Daisy.jpg": "28be4bb0ec43145e21acfe8479ae56f7",
"assets/assets/posters/Everything_Everywhere_All_at_Once.jpg": "852750719c649c3bf21d1c0a5d26cdb3",
"assets/assets/posters/Il_mucchio_selvaggio.jpg": "f9eb7ca31cf64eb8baf4f7e9641e2555",
"assets/assets/posters/Adaptation_.jpg": "044eaca8aaf931f4878d4274b06c1597",
"assets/assets/posters/Cries_and_Whispers.jpg": "152bc02395762d7a028258af6bbfc7dc",
"assets/assets/posters/Rosetta.jpg": "72f64ccf71c2d4bc448ab942ad2f0963",
"assets/assets/posters/Cabiria.jpg": "4f5bb8fd76cbd85deb9b0b8b4fd6d027",
"assets/assets/posters/Russian_Ark.jpg": "af3150600986c14484fa688832afe2cb",
"assets/assets/posters/Duck__You_Sucker_.jpg": "fd9ed442a5474da85fde099c4ccbfd59",
"assets/assets/posters/Au_hasard_Balthazar.jpg": "7446a73d2391f38723806d8dbfdd98c7",
"assets/assets/posters/Jungfruk_llan.jpg": "9c8f3a6bb472ccbc23e2490c35d2fe5e",
"assets/assets/posters/Jurassic_Park.png": "66cb581e4c576564bd1d2fb1f7a6be26",
"assets/assets/posters/Watership_Down.jpg": "fb8dccc28c837e10890dba34f7c75337",
"assets/assets/posters/He_Got_Game.jpg": "1aa60735ffcafc76557cf34308e8a927",
"assets/assets/posters/Phantom_Thread.png": "a7f4e7ceffc040e0f7e7e76c3a61c618",
"assets/assets/posters/Lancelot_du_Lac.png": "de5e989bba54d1ac64ec9f01c84846ce",
"assets/assets/posters/Butch_Cassidy.jpg": "24213897cea556b7df1bd22aa7f21f36",
"assets/assets/posters/ParaNorman.jpg": "6032355e4deb0662f07380ca374cad23",
"assets/assets/posters/Taxidermia.jpeg": "dc13e0a30a69b2d10f31bd586d9a23f1",
"assets/assets/posters/Winter_Light.jpg": "03ca25f1d82a2723f6f75e27c03cd2ed",
"assets/assets/posters/Pretty_Woman.jpg": "3afc5dbebac748050cd4c2bc20ec9e30",
"assets/assets/posters/The_Searchers.jpg": "547d29c9b3e0fb58008074b1af62ae7e",
"assets/assets/posters/L_angelo_azzurro.jpg": "7c3f5b9cf089dbd833762467bb5dee7c",
"assets/assets/posters/Ivan_s_Childhood.jpg": "85c06077ccfbf4aef7461fd240759268",
"assets/assets/posters/La_Chienne.jpg": "e3774007d41003db63c7912b42f572ca",
"assets/assets/posters/Monos.jpg": "f7922d2fc56dc6b30196e6d1fbc84ad1",
"assets/assets/posters/Sans_Soleil.jpg": "016c224ff2e70d313d70d7a351a70b70",
"assets/assets/posters/L_eclisse.jpg": "00a56065b27f6a2be75815ac22ff1127",
"assets/assets/posters/Biutiful.jpg": "793ba82b1c7680fdcd1284c15a27b7ad",
"assets/assets/posters/Kubo_and_the_Two_Strings.png": "9ba7c8698abc726a8e4f4e917435f956",
"assets/assets/posters/Bamboozled.jpg": "94b5c916a5c4260f0eeed36d4803e92f",
"assets/assets/posters/The_City_of_Lost_Children.jpg": "39aa011b09ed3f9a037a451c93eeba19",
"assets/assets/posters/Autumn_Sonata.jpg": "76c737b1bec8002731abbcbbfb83756d",
"assets/assets/posters/So_Long__My_Son.jpg": "eb39cef8bdd66684bbacf76b9470c7ec",
"assets/assets/posters/P_jaros_de_verano.png": "1e1ed164126853ddf4d8d8dcc3645b1f",
"assets/assets/posters/En_passion.jpg": "53d460baa7e8952f6c4905c956e97676",
"assets/assets/posters/Titanic.jpg": "8a68b04bc7c6be12bc20567046c2060d",
"assets/assets/posters/Galaxy_Express_999.jpg": "00f5d42aeb2c1c745e7f111b83bc1380",
"assets/assets/posters/City_of_Sadness.jpg": "2ef5742930e86e7b3472c2af2bd00d40",
"assets/assets/posters/Le_Voyage_dans_la_Lune.jpg": "29a36625f7052c75033dee03510c3037",
"assets/assets/posters/Playtime.jpg": "572185da7b4873a209449d9b0de498ee",
"assets/assets/posters/3_Iron.jpg": "9e0b8fc079ee23bd8fb02663ea0610dc",
"assets/assets/posters/The_Shape_of_Water.png": "59b46280195295240537a6fe679fa960",
"assets/assets/posters/Battleship_Potemkin.jpg": "efd562d88ac3c78b9b83a0d8e8eb907d",
"assets/assets/posters/Days_of_Heaven.jpg": "5ef3465fe0db2be94c736c42ea0d0c9f",
"assets/assets/posters/Sorry_to_Bother_You.png": "f44c001d5c2f88472f3a40daa79f7018",
"assets/assets/posters/Reservoir_Dogs.png": "7d99ed696346e6120860393b834dc4e6",
"assets/assets/posters/West_Side_Story.jpg": "b88e7e16c297d530a79762ece0086759",
"assets/assets/posters/Three_Billboards_Outside_Ebbing__Missouri.png": "3ad4818e5d3a1574cd11fd7aec4813e2",
"assets/assets/posters/Nixon.jpg": "8496ad209982153b98cdb98c15377ca0",
"assets/assets/posters/Chicago.jpg": "f61642b9802db7e9af14e8cbd9360218",
"assets/assets/posters/Ernest___Celestine.jpg": "ef5b56ad53701e07d488777063d6c11a",
"assets/assets/posters/Le_Jour_se_l_ve.jpg": "78120eb195da4fda4db2563380e6f288",
"assets/assets/posters/The_Third_Murder.png": "396d54755676c596193eb6e488745d77",
"assets/assets/posters/Le_Gamin_au_v_lo.png": "accc6402463a56b0e755502d05f5065a",
"assets/assets/posters/Germania_anno_zero.jpg": "8f00f5621c668f6f589aba95ee30aabb",
"assets/assets/posters/Footloose.jpg": "7c8c857de1d1e4cda1bd157c38197287",
"assets/assets/posters/In_the_Fog.jpg": "2a428c3797feb987b16e46c75d92815a",
"assets/assets/posters/The_Life_of_Emile_Zola.jpg": "33a9381714a98b10bb27342e2f734251",
"assets/assets/posters/El_hoyo.jpg": "42c020a5069ac8187a3fba6556388787",
"assets/assets/posters/Man_with_a_Movie_Camera.png": "d6130abd26f63c26ff083bb8df6ef784",
"assets/assets/posters/Mujeres_al_borde_de_un_ataque_de_nervios.jpg": "f466abf21c4f4ca77d70bd482bcbd6c9",
"assets/assets/posters/Mad_Max__Fury_Road.jpg": "68def2996f6efc20765d411257724f45",
"assets/assets/posters/Pais_.jpg": "72cee877251551bc4a2d4c3a77a9bc32",
"assets/assets/posters/Psyco.png": "817f7060b734fa600b918c42f387d82b",
"assets/assets/posters/Arrebato.jpg": "00c2fcc39ed0876d338e3ca49eb6c25a",
"assets/assets/posters/Rodrigo_D__No_Future.jpg": "33b13bdf98b9f88e977ce7f47a11361b",
"assets/assets/posters/The_White_Snake.jpg": "de17d299196e9561be6f4e74681ad432",
"assets/assets/posters/Blind_Shaft.jpg": "1bbd23d7a3b71781dfb05493b9a166ae",
"assets/assets/posters/Swiss_Army_Man.png": "99bd3ba79e110d0b35e1cddfabfab1d9",
"assets/assets/posters/Barry_Lyndon.jpg": "9983b5521b26355324e82bf5dd6c3ea1",
"assets/assets/posters/Three_Colors__Red.jpg": "309a29c80c875304d2b2346bdb29aba3",
"assets/assets/posters/The_Bridge_on_the_River_Kwai.jpg": "ec54990ac3735f5f8849aa31a5fcbd8a",
"assets/assets/posters/The_Old_Man_and_the_Sea.jpg": "d4c14e963d677cc938183ec9abe7491a",
"assets/assets/posters/How_Green_Was_My_Valley.jpg": "2ae0910ac3d4577e729bdcfa5ecd539b",
"assets/assets/posters/Casablanca.jpg": "dd5958d338824ebee53caa579b56660b",
"assets/assets/posters/Patlabor_2__The_Movie.jpg": "03a93f0113c2643dd6c39b7a4a45861e",
"assets/assets/posters/The_Godfather_Part_II.jpg": "44286bdd268777f0d84a0463d99936e3",
"assets/assets/posters/Tokyo_Sonata.jpg": "6eee33c046475893ef8e3a3887ab1a3c",
"assets/assets/posters/Los_cronocr_menes.jpg": "dd1e8d5336eb739883fe35037c08bbc6",
"assets/assets/posters/Minari.png": "e5effa0d2a61a103e9f35e133ec4ad29",
"assets/assets/posters/Deux_jours__une_nuit.jpg": "bba58afbae8e759abf16e44d7b72dfef",
"assets/assets/posters/Salo__or_the_120_Days_of_Sodom.jpg": "d65bcfc9d7335c17628efd9181896e35",
"assets/assets/posters/Mystic_River.jpg": "9749a50a941d0d07a9078b251d9f81b5",
"assets/assets/posters/Un_dollaro_tra_i_denti.jpg": "22376f66d9979c8836354ad719c1d779",
"assets/assets/posters/Wings_of_Desire.jpg": "8af2d9cdf3839478138fb2472896b1be",
"assets/assets/posters/La_Vie_d_Ad_le.png": "3da1dddfd547eebe600bf3d2047153c3",
"assets/assets/posters/Brazil.png": "6377b9a788e94bdfdbe9dc1de65a0ef9",
"assets/assets/posters/All_About_Eve.jpg": "a6aaeda6beae19b96ac91be631e8059d",
"assets/assets/posters/Midnight_Cowboy.jpg": "8945516d3d78dc5ee26c633539268b50",
"assets/assets/posters/Punch_Drunk_Love.png": "16682365896e7731a9c6414c40f8d8bf",
"assets/assets/posters/Carlito_s_Way.jpg": "f7b660b8d61b051be92bb01fd62a6471",
"assets/assets/posters/The_Birth_of_a_Nation.jpg": "0291096583e69c2b57212e6ba6ae8b9e",
"assets/assets/posters/Nosferatu.jpg": "9f2117145d95c17724104a625d087d00",
"assets/assets/posters/Napol_on.jpg": "c41b5348177cf20c0f214b70233ce77f",
"assets/assets/posters/Chungking_Express.jpg": "02b7ec914b4ba1abc25a29cbed6d5480",
"assets/assets/posters/Fando_y_Lis.jpg": "281e044ca5a259df5465031bb5433e37",
"assets/assets/posters/The_Act_of_Killing.jpg": "3a6c12dcc2de260becb1663f389c1732",
"assets/assets/posters/The_Blue_Kite.jpg": "5b37d13a5515eb3e8b36c1e8f7acc053",
"assets/assets/posters/Being_John_Malkovich.jpg": "bb0714c29b94bcb059193bd4c0ac480f",
"assets/assets/posters/Mulholland_Drive.png": "741371541c529e494e9c115f52a61b2c",
"assets/assets/posters/Das_Cabinet_des_Dr__Caligari.jpg": "b0471597f3a7b11b0f471ef91da1afb5",
"assets/assets/posters/Fanny_and_Alexander.jpg": "b48c3b9f8260a01dd24395c79a8205e0",
"assets/assets/posters/Goodfellas.jpg": "b4d54cbca06c3a921f8f466b75ee73ec",
"assets/assets/posters/Un_condamn____mort_s_est__chapp_.jpg": "21ea0a1f7e9ea33a6c17473c471c25e9",
"assets/assets/posters/The_Double_Life_of_V_ronique.jpg": "d4dbe7716d17e5cd0f8464579c7514cc",
"assets/assets/posters/Il_monello.jpg": "853801af2510f1919e6cf026d316c072",
"assets/assets/posters/Waking_Life.jpg": "c9f64148a56cc25abde7fc3a14569868",
"assets/assets/posters/Memories_of_Murder.jpg": "ad527bfd09e01630f241eec4713715f1",
"assets/assets/posters/Raging_Bull.jpg": "cf448e3e372c0ce646a9b96ab5cd339a",
"assets/assets/posters/La_vendedora_de_rosas.jpg": "bc75fb9494dab45cf572ed55e7d26b7a",
"assets/assets/posters/Vacanze_romane.png": "d0b9cd2ecd1b4d4d31a4b293c4703778",
"assets/assets/posters/In_the_Mood_for_Love.jpg": "348be7a8293ea9f03a117f6a9ee566ee",
"assets/assets/posters/Saint_Maud.jpg": "fac68dda1dd9a5bc1a2df05ea14f5839",
"assets/assets/posters/25th_Hour.jpg": "9a214a5e9a902afdea1b942a2aabaa57",
"assets/assets/posters/Eternal_Sunshine_of_the_Spotless_Mind.png": "ec923089ec0ad79439519ba9f218e5e6",
"assets/assets/posters/Dragon_Inn.jpg": "0533388d6e06c488774efd518c66e74b",
"assets/assets/posters/Million_Dollar_Baby.jpg": "e40490494d55022669f2155e72176b52",
"assets/assets/posters/La_Passion_de_Jeanne_d_Arc.png": "a7adab97f79389e71986d40adc4a12e0",
"assets/assets/posters/Belladonna_of_Sadness.png": "5fecaedcc3ce38d5cd8565f498017e3b",
"assets/assets/posters/Broken_Blossoms.jpg": "75c1b89d678e0cd7466bf3c836859237",
"assets/assets/posters/Mouchette.jpg": "6426dd707125dbbcaee256a4e67db431",
"assets/assets/posters/Manhattan.jpg": "8902c6242ca0db1cc9d0bac368b527a9",
"assets/assets/posters/Jeux_interdits.jpg": "0ddcc2ea632331f6f819e85664c8d5da",
"assets/assets/posters/No_Country_for_Old_Men.jpg": "b20b7ee4ff1461e086decc889a301543",
"assets/assets/posters/La_Roue.jpg": "9123fbe46d29e9f7d4d890e28d8e37f5",
"assets/assets/posters/On_the_Waterfront.jpg": "6302ff24866d468d5c376716925ff98e",
"assets/assets/posters/Persepolis.jpg": "f388cbccebb866717381eb6c303e1dd3",
"assets/assets/posters/One_Piece_Film__Z.png": "64fd41ba6a0551d98073f86a7e1602de",
"assets/assets/posters/Amores_perros.jpg": "2e7ff42488823d19f0aa1a728526d852",
"assets/assets/posters/La_Noire_de___.png": "f879f07c43764a5f0036b3f8f22926de",
"assets/assets/posters/It_Follows.jpg": "4afab714947a96ac5a82dd72fbcd9170",
"assets/assets/posters/I_Lost_My_Body.jpg": "fbd213b3b0b3861da7a9fcff903285e0",
"assets/assets/posters/The_Exterminating_Angel.jpg": "732b3540906fd681c358da6468a4afcc",
"assets/assets/posters/Y_tu_mam__tambi_n.png": "a4d524266b0c6814eea3c5c8bffd1c0b",
"assets/assets/posters/Pulp_Fiction.jpg": "ba8d01dca426cfecf6601edfb3d93c1d",
"assets/assets/posters/H_stsonaten.jpg": "76c737b1bec8002731abbcbbfb83756d",
"assets/assets/posters/Hiroshima_mon_amour.jpg": "4ec3838add3c52d8dbc3d20f684461e3",
"assets/assets/posters/The_Secret_of_Kells.jpg": "31105d75113a66416deafd6c0901200e",
"assets/assets/posters/Timbuktu.jpg": "2b7e6c933acc83f642b399a52a6a37f7",
"assets/assets/posters/Le_M_pris.jpg": "f4522c64d1d4209540bdd720c855bd75",
"assets/assets/posters/8_.jpg": "e857609c042b810529a480dcfedf0e5f",
"assets/assets/posters/The_Conformist.jpg": "dde36abaa5d726791614a36ae43a4757",
"assets/assets/posters/Going_My_Way.jpg": "382b99bc70806196417791047faec6a4",
"assets/assets/posters/Viskningar_och_rop.jpg": "152bc02395762d7a028258af6bbfc7dc",
"assets/assets/posters/Le_fabuleux_destin_d_Am_lie_Poulain.jpg": "84fbc9a778cc5b47599e5b520f10132e",
"assets/assets/posters/Hy_nes.jpg": "f1f382c7729ad12c752429d758aedd19",
"assets/assets/posters/Caf__Lumi_re.jpg": "66e15bfc755ce18747677c5eaf9d2ba1",
"assets/assets/posters/El_esp_ritu_de_la_colmena.jpg": "64edecd8d8f1eed4aa8bf32f8893c68a",
"assets/assets/posters/Schindler_s_List.jpg": "f8be347705d8985f448f1ca0a5814ff7",
"assets/assets/posters/Bringing_Out_the_Dead.jpg": "db2f9a338fa8107530297c016cf58983",
"assets/assets/posters/The_Broadway_Melody.jpg": "128af334212a64cf98299ecdb672a2b0",
"assets/assets/posters/The_Last_Emperor.jpg": "7fd1f7999f012447bde95731628e16d1",
"assets/assets/posters/Loving_Vincent.png": "dd8cbe4aeeb5e99bfd475d341d71fb10",
"assets/assets/posters/Requiem_for_a_Dream.jpg": "34e2f04799a6184992dc7244dac1ca27",
"assets/assets/posters/Perfect_Blue.png": "01e2fd17a0dce727637ee424c076325f",
"assets/assets/posters/The_Terrorizers.jpg": "b878f4f8f5d31ea760e4f99eef585ea3",
"assets/assets/posters/Spirited_Away.png": "c11c10a871cc7b4d25ec08fc986e1324",
"assets/assets/posters/Francofonia.jpg": "11099acda59c2dafd37e0a0c0ed8fee4",
"assets/assets/posters/Inland_Empire.jpg": "e46c0f86a5e431082d6699386125f4a5",
"assets/assets/posters/Todo_sobre_mi_madre.jpg": "7b7382281167e262a4cc4e34f4df4249",
"assets/assets/posters/The_Bicycle_Thieves.jpg": "6e7123df4328d76670ec2af86d722eb1",
"assets/assets/posters/Only_Lovers_Left_Alive.png": "29f3c6d7bbe7adb44bdd7e4d71b8ded9",
"assets/assets/posters/Cl_o_de_5___7.jpg": "1ae95f1ce1b23dceb49294cf8852f48d",
"assets/assets/posters/Nostalghia.jpeg": "cfc7ca297930ed844a8402fe90501667",
"assets/assets/posters/Investigation_of_a_Citizen_Above_Suspicion.jpg": "0e9405a213fd5840b7543335f0c8c354",
"assets/assets/posters/Viridiana.jpg": "074c5af6b0e37304be629e7ffd32f4ea",
"assets/assets/posters/Yaaba.jpg": "3097bb0de41e1dcb2d6d1c4e04f2a995",
"assets/assets/posters/The_Gold_Rush.jpg": "0a3ca1a9e926bfd4b69b9196fbf7553e",
"assets/assets/posters/Tokyo_Story.jpg": "69304367fd144f7d90b80564092f33af",
"assets/assets/posters/The_Irishman.jpg": "978aebbc2df14a768766ef8ba4f4021c",
"assets/assets/posters/Last_Tango_in_Paris.jpg": "3ff0cec2ffd9d576d5163b203362a093",
"assets/assets/posters/Braveheart.png": "d596dd397b364b9aacf2f7459b1ddcbf",
"assets/assets/posters/Annie_Hall.jpg": "2ccc6dcf9efc1e9d5e5f9c920cf018cc",
"assets/assets/posters/The_Passion_of_Anna.jpg": "53d460baa7e8952f6c4905c956e97676",
"assets/assets/posters/Zero_Dark_Thirty.jpg": "c5b0f5dcd14c6f6c42de4038a95938f9",
"assets/assets/posters/Porco_Rosso.jpg": "5501f5dbc1da3fd2de8f32963ef7a3d7",
"assets/assets/posters/The_Virgin_Spring.jpg": "9c8f3a6bb472ccbc23e2490c35d2fe5e",
"assets/assets/posters/Videodrome.jpg": "b56d3578763120978882f9ee72d21c50",
"assets/assets/posters/Blindspotting.jpg": "f6672b557535e364fc5a19958c59bc7b",
"assets/assets/posters/Yi_Yi.jpg": "619cf9a012ab837dc38abd7dec41540f",
"assets/assets/posters/Rain_Man.jpg": "047844a833b0ee2eb877bb229e9a1fda",
"assets/assets/posters/Flavors_of_Youth.jpeg": "c86bee5926cb20d7a008665160395912",
"assets/assets/posters/Orph_e.jpg": "518eb96996dca33d1b8c61a6be433682",
"assets/assets/posters/A_Fistful_of_Dollars.jpg": "e7cd85fcc13aecc05bfff635d8f24579",
"assets/assets/posters/La_Jet_e.jpg": "5ea2c700600184ec5836664484c2b2f5",
"assets/assets/posters/Ju_Dou.jpg": "19c8c170ea11055e00888b0046e93f5e",
"assets/assets/posters/The_Handmaiden.png": "a5f6c4f1c21d591817480a5d8029262d",
"assets/assets/posters/Slumdog_Millionaire.png": "d073bde231065ec1123263123aa215b9",
"assets/assets/posters/Le_Dernier_M_tro.jpg": "7da6b2f12b91a11911514c1ff42b31ab",
"assets/assets/posters/Secret_Sunshine.png": "071df01b46caeca427075c8fc7890ea5",
"assets/assets/posters/Le_salaire_de_la_peur.jpg": "dd12cff10b7a425b45eb889f9cb7a175",
"assets/assets/posters/Blade_Runner.png": "02058d1967c1dcea8479f250ea85d32d",
"assets/assets/posters/El_Topo.jpg": "a1b7f3081700a1e856b98eb69114c14e",
"assets/assets/posters/La_Sortie_de_l_usine_Lumi_re___Lyon.jpg": "a46a985a55ac1e5d8ca26b06ccfaff9d",
"assets/assets/posters/Rocky.jpg": "462960657a30a54ad8c17333547ae56c",
"assets/assets/posters/The_Lobster.jpg": "ac30006424288f3de8559425e89594a8",
"assets/assets/posters/Kramer_vs__Kramer.jpg": "ed4ad0d061619e191f95953abec61b81",
"assets/assets/posters/Dogville.jpg": "d6e50b61662c41b089c9fe5a90fc9023",
"assets/assets/posters/Your_Name_.png": "930727c563e0b7bf2755176ac64bc380",
"assets/assets/posters/Forrest_Gump.jpg": "9984ec319b4e1bf127738397cbb394c4",
"assets/assets/posters/The_Hurt_Locker.jpg": "5e5c806a11271b2d3c73799c82de826e",
"assets/assets/posters/Secret_Honor.jpg": "15709464a1013178f75cbff015b8d44b",
"assets/assets/posters/Taxi_Driver.jpg": "cf4b1878933a16e07c66208375648d00",
"assets/assets/posters/Short_Cuts.jpg": "dc462e6f85d22ffe494919a4a673cb33",
"assets/assets/posters/Le_Fant_me_de_la_libert_.jpg": "780168e3b5cbf82db10d68bb1866bc17",
"assets/assets/posters/The_Hateful_Eight.jpg": "fdfc38b69b608a6a62cc1642ae5da4bf",
"assets/assets/posters/Alcarr_s.jpg": "1398e2f8cca491a840c471aa388ecbad",
"assets/assets/posters/High_Noon.jpg": "5a1531da882a0fc9830b7e321045421e",
"assets/assets/posters/JFK.jpg": "ea3c7d0450f7c7ba9506783e2d836d28",
"assets/assets/posters/Ladri_di_biciclette.jpg": "6e7123df4328d76670ec2af86d722eb1",
"assets/assets/posters/Michael_Clayton.jpg": "aade51c9f87f18946cec455d68cd4b04",
"assets/assets/posters/Blow_Up.jpg": "0fa379e2cc265b737b94ae2352331769",
"assets/assets/posters/Mary_and_Max.jpg": "4c1d7471a94df2dcd06ef03ea9cae808",
"assets/assets/posters/Les_Parapluies_de_Cherbourg.jpg": "71243f825c574e0a218c67742f995ff7",
"assets/assets/posters/The_Florida_Project.jpg": "04a44126c25a1c6074446d192e2987d5",
"assets/assets/posters/Hyenas.jpg": "45395de6f3305b683ed7f9e91d78eff9",
"assets/assets/posters/Crouching_Tiger__Hidden_Dragon.png": "c03a23dcde7b6826c83d2bc6da7fcff7",
"assets/assets/posters/Aftersun.jpg": "d9ec2b168bacd3969b29f180c8c5eb27",
"assets/assets/posters/Waltz_with_Bashir.jpg": "5023281087769099473c5862d2d3aa8f",
"assets/assets/posters/Il_deserto_rosso.jpg": "21f831fc0d980ebad77b93cb7a33108c",
"assets/assets/posters/Come_Drink_with_Me.jpg": "eb40215b81466a947c8df8b5ecd68229",
"assets/assets/posters/Breaking_the_Waves.png": "d58b75fe851fc103443182e080a93d04",
"assets/assets/posters/Dancer_in_the_Dark.png": "abaee2213374d6dade79db83323655bc",
"assets/assets/posters/Melancholia.jpg": "bbdb0c0eaa57775da17d662f924c4ba3",
"assets/assets/posters/Three_Colors__Blue.jpg": "49939057f33e739f31769cd7ff8bc8ca",
"assets/assets/posters/Amelie.jpg": "84fbc9a778cc5b47599e5b520f10132e",
"assets/assets/posters/Boudu_sauv__des_eaux.jpg": "031c4c94fa4a98ceaff0bf3f4b83f071",
"assets/assets/posters/Unforgiven.jpg": "ce82fe08c02f225ac5c58fa5fa723d7a",
"assets/assets/posters/The_Red_Turtle.png": "90b52b5d7299290687f34f39336c1ea5",
"assets/assets/posters/Le_Grand_Bleu.jpg": "59c608508686f5ca03fd109966f73df6",
"assets/assets/posters/Nomadland.jpeg": "7b6aefdda3113ce4d5c76458cecb1767",
"assets/assets/posters/Attenberg.jpg": "5f76d69a1de1a68989801ba82c046596",
"assets/assets/posters/Donbass.png": "8b7caf41af6fde5dfb98758947326b2c",
"assets/assets/posters/Donnie_Darko.jpg": "58d7acf0d7bac758dc7c2d7f81ba8a75",
"assets/assets/posters/The_Tenant.jpg": "524d2ca5990b5e5d2c72740a9c708319",
"assets/assets/posters/The_Departed.jpg": "62df296ff216069dbd3f340974e3a733",
"assets/assets/posters/Dunkirk.jpg": "64f2882f14903dc50d88052f45653571",
"assets/assets/posters/Come_and_See.jpg": "205181340fcd458b8c5b1268e1e48bf7",
"assets/assets/posters/Death_in_Venice.jpg": "d89d546cf3e14cf8806e4ed35fab51e8",
"assets/assets/posters/Les_Demoiselles_de_Rochefort.jpg": "b1d8cb42b336780144c922d3fbd76cf5",
"assets/assets/posters/Meshes_of_the_Afternoon.png": "fdd81f7b1b36a6fcac73518ec7217808",
"assets/assets/posters/Inglourious_Basterds.jpg": "ae2c218443d90d83f2c9d8fa52886109",
"assets/assets/posters/12_Monkeys.jpg": "9e2a606c6756258653d75486a0f89893",
"assets/assets/posters/The_Night_Porter.jpg": "b7e1edd5da53742dc18151c5bd78b68a",
"assets/assets/posters/Donnie_Brasco.jpg": "5f648684ccf361ab4997e265615ba32e",
"assets/assets/posters/Wallace___Gromit__The_Curse_of_the_Were_Rabbit.jpg": "3d29da2f0d3d8059e7a195ffe03f55a8",
"assets/assets/posters/Days_of_Being_Wild.jpg": "c299295ee84338da469476a5bee90e30",
"assets/assets/posters/McCabe___Mrs__Miller.png": "6a67b27197fdf2eaed263df1474aaadc",
"assets/assets/posters/Natural_Born_Killers.jpg": "d2095020395990fbe6fcbd7b0762328d",
"assets/assets/posters/Still_Walking.jpg": "44a7d910302e6adc588cd3b22f83c951",
"assets/assets/posters/Inherent_Vice.jpg": "ac2298b85dae4a63c4221d2ef15e4727",
"assets/assets/posters/Lawrence_of_Arabia.jpg": "511e1ab02451eff45ed3df1e241c4217",
"assets/assets/posters/Tystnaden.jpg": "9eabf477e40d1c81b9ddbdf579a550f1",
"assets/assets/posters/L_avventura.jpg": "3180cfc29410ccc8e81a41e662cd0aee",
"assets/assets/posters/Inside_Man.jpg": "c45246425bb878c34298946760fa6baf",
"assets/assets/posters/S_som_i_en_spegel.jpg": "5e4e278bf188d084d7f2de6ede081605",
"assets/assets/posters/The_Sting.jpeg": "bd086a59798cfb4c1e2f6be235271a46",
"assets/assets/posters/Hamlet.jpg": "b7224ae48d0467efe92a08c0adbdae54",
"assets/assets/posters/Ghost_in_the_Shell.png": "777aefef5063cce6a299c0e18e5a2022",
"assets/assets/posters/Un_perro_andaluz.jpg": "b54ad04516af2b63bb3edb69a5ee145c",
"assets/assets/posters/Children_of_Men.jpg": "f704eabfa28fde1c4f6f40baf7c48e8f",
"assets/assets/posters/The_Wild_Goose_Lake.jpg": "e86266e84f10b3b89a71264f3a7a44cf",
"assets/assets/posters/Dust_in_the_Wind.jpg": "7307548b3bd9761a2791ac8c1ccf6fff",
"assets/assets/posters/Touki_Bouki.jpg": "4f77d87a450bbe3c69a1f35a378265b8",
"assets/assets/posters/Satantango.jpeg": "d6de04e4e966fb3d419cb794c8c97c22",
"assets/assets/posters/Snowpiercer.jpg": "d8a1cbce7432c0aeeb0a3ad608c4b5f4",
"assets/assets/posters/The_Lives_of_Others.jpg": "027989ad216588fd6f5402ea942e9463",
"assets/assets/posters/Bullitt.jpg": "8358de16943d7153f8a143233373e280",
"assets/assets/posters/Pink_Flamingos.jpg": "638382e8079086846bfa3900c0c02ec2",
"assets/assets/posters/Holy_Motors.png": "df0e5e17ad45b2b303a70ffa533151d9",
"assets/assets/posters/The_Great_Beauty.jpg": "323eae1ba3f1eb92ed190c1112d7a2c4",
"assets/assets/posters/Sambizanga.png": "8fcfe7ee72b693e372f37c380d22bf7d",
"assets/assets/posters/Le_Beau_Serge.jpg": "939872a016369d7baaec4acd960261a8",
"assets/assets/posters/Not_One_Less.jpg": "4f2790080ca6dffd9860cfbe71f37b7d",
"assets/assets/posters/Mean_Streets.png": "203e555721d5e216f67a98514663da49",
"assets/assets/posters/Fight_Club.jpg": "1ca04e2cc25a7d3c313d475dd4f42979",
"assets/assets/posters/Neon_Genesis_Evangelion__The_End_of_Evangelion.JPG": "5397e36013e579a747d49eb61ac4f4f0",
"assets/assets/posters/Roma_citt__aperta.jpg": "b29a0993322e500282ac99c821fbcf26",
"assets/assets/posters/Portrait_de_la_jeune_fille_en_feu.jpg": "4a7e8368498f0706ac3b660459f195ad",
"assets/assets/posters/Django_Unchained.jpg": "62fc0c8f115890f321a5736fc615b456",
"assets/assets/posters/The_Sun.jpg": "c70a83be904acba65728a6d8d7f4b293",
"assets/assets/posters/Werckmeister_Harmonies.jpg": "f8d1172e41be5f5ae9c5ddddff98a793",
"assets/assets/posters/Notting_Hill.jpg": "cdd97f16609b9f9079a0f41c99fde17c",
"assets/assets/posters/Frankenstein.jpg": "ee159d5c2de5fe6aae2eed73460fbc13",
"assets/assets/posters/Okja.png": "9335e32530679b2a5bf34c3e2b05e1b7",
"assets/assets/posters/The_Story_of_Qiu_Ju.jpg": "55b05fdf2c27270ca12341cda29947c6",
"assets/assets/posters/Cet_obscur_objet_du_d_sir.jpg": "ccd53b4d4f2fe5a19992c030893bb480",
"assets/assets/posters/Terms_of_Endearment.jpg": "a3640fa8ef76651244f04e58686954e0",
"assets/assets/posters/Zero_de_conduite.jpg": "a8f1c09e804ca2b0fb928432f2515f02",
"assets/assets/posters/Nashville.jpg": "8fbd5fc8bd10e87a56e95bd328ce36ca",
"assets/assets/posters/Good_Bye_Lenin_.jpg": "a4d307b6786c18e9fdfba274221e6a1a",
"assets/assets/posters/Sunrise__A_Song_of_Two_Humans.jpg": "70f682dad9d72707e3ea383f5b8dcef1",
"assets/assets/posters/Dracula.jpg": "43a84581c4b767f7a36e7b2dfb55d446",
"assets/assets/posters/A_Scanner_Darkly.jpg": "808223441a7a7a697a287bec2ea61818",
"assets/assets/posters/Chariots_of_Fire.jpg": "cf991c709d4c81b01a1c0b0643a71968",
"assets/assets/posters/The_Discreet_Charm_of_the_Bourgeoisie.jpg": "9615a543fa7c2ebac1781ac1d9051264",
"assets/assets/posters/Train_to_Busan.jpg": "5c7f7e9b0cf5661904e11354b05b41e2",
"assets/assets/posters/La_Haine.jpg": "061f76afd1358b233ca6793787766547",
"assets/assets/posters/There_Will_Be_Blood.jpg": "8bfc506af556fc1500c74f67fec5fe30",
"assets/assets/posters/El_abrazo_de_la_serpiente.jpg": "bb2055e86e0c58ff8db0e46ce291da8b",
"assets/assets/posters/April_and_the_Extraordinary_World.jpg": "89008d24442a52a11617ec4dedce1427",
"assets/assets/posters/Un_Chien_Andalou.jpg": "b54ad04516af2b63bb3edb69a5ee145c",
"assets/assets/posters/Rebecca.jpg": "f4182e21ef9f2b173b74f603c5b3a82f",
"assets/assets/posters/Eyes_Wide_Shut.png": "007d3fe7d67f8c1d631d60e69f5c8a5e",
"assets/assets/posters/Fantastic_Planet.jpg": "4cbd2a9284c951365c83dae6ba9cf3b0",
"assets/assets/posters/Mrs__Miniver.jpg": "4c83daf31353438c4cd4a9ed58e9c429",
"assets/assets/posters/Long_Way_North.jpg": "649b67ebcbaa441aa7f52220d64333ce",
"assets/assets/posters/Get_Out.png": "a8f547ded923a69589d7e5c30c890db1",
"assets/assets/posters/Syriana.jpg": "0d22a1b34a65c482e53b5becef1850ec",
"assets/assets/posters/Hable_con_ella.png": "b689aaa314d10e3774f6fc12e2492ecc",
"assets/assets/posters/Smultronst_llet.jpg": "044bbc2932f71341efb2d24245dd97fb",
"assets/assets/posters/Do_the_Right_Thing.png": "69bf42cab2731ba616a76d1d4a0330cb",
"assets/assets/posters/Tumbbad.jpg": "76b255cd96e8ba78ab229aef940a84b5",
"assets/assets/posters/Azur___Asmar__The_Princes__Quest.jpg": "a8d876fe618eca8440ba991b5249dab5",
"assets/assets/posters/La_Promesse.jpg": "da95bdcab8088c1f91c5bf20d068021e",
"assets/assets/posters/Scanners.jpg": "b3a86cf1ec9f22504665060b2adec0c8",
"assets/assets/posters/El_laberinto_del_fauno.jpg": "6cccbb47034e4c5ef6194bc6320b999a",
"assets/assets/posters/Magnolia.jpg": "1daccff7606c2bf1990eb5c7bc59031d",
"assets/assets/posters/Avengers__Endgame.jpg": "832530f2496f33d68e9c96375d0303a8",
"assets/assets/posters/Dances_with_Wolves.jpg": "c25c433d8f107cf7534054a825c9f305",
"assets/assets/posters/Three_Colors__White.jpg": "190be705c4c2150eb4c9f2c24168dd02",
"assets/assets/posters/Pierrot_le_Fou.jpg": "db1465605086cf97170a4b322e442557",
"assets/assets/posters/Millennium_Mambo.jpg": "b91731b11a1196f3f6845e654c23aec0",
"assets/assets/posters/Oliver_.jpeg": "547ee8f0c9ab6fa3aedab6c454f66616",
"assets/assets/posters/Sympathy_for_Mr__Vengeance.jpg": "1171fcf06385671cebd5797c2441c772",
"assets/assets/posters/Le_Charme_discret_de_la_bourgeoisie.jpg": "9615a543fa7c2ebac1781ac1d9051264",
"assets/assets/posters/Blancanieves.jpg": "44aaeb6d9fca283a5b20badc1e8878f1",
"assets/assets/posters/Le_Corbeau.jpg": "c7212922536112e95dc2ad0d81253bf0",
"assets/assets/posters/Chicken_Run.jpg": "d2d3785d028b927c3d978c5f0ddad417",
"assets/assets/posters/The_Seventh_Seal.jpg": "b1225db769517e0c9139c21fc4da1cdc",
"assets/assets/posters/The_Lord_of_the_Rings__The_Return_of_the_King.jpg": "5355d15b4277f9160633fa5c4cb70968",
"assets/assets/posters/Paprika.jpg": "453dcb93c655c1874c87f07c98e099eb",
"assets/assets/posters/Uncut_Gems.jpg": "f8ea6b062aa6d4f8a797d155dafa8ef2",
"assets/assets/posters/La_La_Land.png": "c8638c4620d5ce2c0170dee498554f19",
"assets/assets/posters/A_Girl_Walks_Home_Alone_at_Night.jpg": "0de96a685595586db51beedc9f014c21",
"assets/assets/posters/Intouchables.jpg": "54e2ec71c8042ff360466ec732d23a39",
"assets/assets/posters/Who_s_Afraid_of_Virginia_Woolf_.jpg": "572ba2721afd6ea02f0fc21ba5c7c543",
"assets/assets/posters/Klute.jpg": "ec47f99e7e0cfa2cea8cd420b631effc",
"assets/assets/posters/Amarcord.jpg": "ec2ba3d165babd39db9afefe9e49e723",
"assets/assets/posters/Any_Given_Sunday.jpg": "362911580f9ab232baba4034e0f38e44",
"assets/assets/posters/Tekkonkinkreet.jpg": "7ed8e25eadeb7dbe0bb8325cb409643e",
"assets/assets/posters/Volver.jpg": "63670f4045d725a59a521161351c106e",
"assets/assets/posters/Rabid.png": "600002a1dd900402a63c2b78d5976aa0",
"assets/assets/posters/Xala.jpg": "b72d665493c5ae8ccb349759734d4083",
"assets/assets/posters/Le_Jeune_Ahmed.jpg": "46c439eca621edba05cb7287544e0970",
"assets/assets/posters/La_isla_m_nima.jpg": "c500fc374a478d187627284661990579",
"assets/assets/posters/Naked_Lunch.jpg": "88b58585da6c92d429583109b5ce9a37",
"assets/assets/posters/The_Best_Years_of_Our_Lives.jpg": "6d9b96331f96f3eb166a19dc746f7f0f",
"assets/assets/posters/Le_Cinqui_me__l_ment.jpg": "5e168cc8fe9b83a5b3dc2f35724a4e2c",
"assets/assets/posters/A_torin_i_l_.jpg": "0beb59c163e5d33a2ebd0ae8da94d8b3",
"assets/assets/posters/Gandhi.jpg": "3d33cf6e721b9770d177f0a8762a67d9",
"assets/assets/posters/If_Beale_Street_Could_Talk.JPG": "384fd04e37e73364901441b01c11df79",
"assets/assets/posters/Inception.jpg": "4da4c9bee7caaea8d0366ad82ce515c2",
"assets/assets/posters/Lady_Vengeance.png": "25ca381edc0897cd8e0a929a4f8a6db2",
"assets/assets/posters/Moolaad_.jpg": "669ed4cd0e8bd17b1d1757f62f3b4266",
"assets/assets/posters/Once_Upon_a_Time_in_Hollywood.png": "72cb018e81133da4abb7b4afab671b00",
"assets/assets/posters/eXistenZ.jpg": "9df6d09f1bfbbcccbf00e32724afa7af",
"assets/assets/posters/The_Royal_Tenenbaums.jpg": "42f015fe5767defa4a8c67a00bcafde5",
"assets/assets/posters/Spring__Summer__Fall__Winter____and_Spring.jpg": "fdfd43874e3b1c67b20747c9e053f6cd",
"assets/assets/posters/Cat_Soup.jpg": "d0e33500c27fe804c605642119090219",
"assets/assets/posters/Synecdoche__New_York.jpg": "6998de52d76786ad9c12f7c619d074a3",
"assets/assets/posters/All_Quiet_on_the_Western_Front.jpg": "10b2ef22fa9f46786f84dff310986945",
"assets/assets/posters/Thelma___Louise.png": "b6e96eb01479ae32f364559821649a0d",
"assets/assets/posters/Tetsuo__The_Iron_Man.jpg": "954977ed170b720b7ccb841af05f420e",
"assets/assets/posters/H_tel_du_Nord.jpg": "99242113cf3192a71c13c92365266846",
"assets/assets/posters/Vivre_sa_vie.jpg": "cc8ad9a919c942e65f30e1a96b95a3fa",
"assets/assets/posters/La_Fille_inconnue.jpg": "0c52155ec2c8ba62bcbd80728e99d3f2",
"assets/assets/posters/An_Elephant_Sitting_Still.jpg": "9e47787dc9420ffe8bffa654776736b8",
"assets/assets/posters/Le_Samoura_.jpg": "962d5126fae82f85ec18e5947eb3951c",
"assets/assets/posters/Birdman_or__The_Unexpected_Virtue_of_Ignorance_.png": "d7a3c39822a9b8793070c664428d243a",
"assets/assets/posters/Les_Enfants_du_paradis.png": "ed1fd92164feb618dc645c858c96e3d1",
"assets/assets/posters/Burkina_Faso.png": "096a3c62c4d8503deba9dadaa5a92fea",
"assets/assets/posters/Da_5_Bloods.jpeg": "ff499f26b4c0307e80b66758554c46a9",
"assets/assets/posters/Le_Million.jpg": "09c16ab192e5f0cf8532468ad1b1db44",
"assets/assets/posters/Apocalypse_Now.jpg": "d8f91b910cbd3b0886c710f479f4e0a6",
"assets/assets/posters/The_Idiots.jpg": "4581dfce53f8dc7ffed419bc9c053dc4",
"assets/assets/posters/Quai_des_brumes.jpg": "79c7c3ea69160acae15066831c00717c",
"assets/assets/posters/L_Arriv_e_d_un_train_en_gare_de_La_Ciotat.jpg": "a2e5cb2ddd90a0131fdd74c9eb0c97bf",
"assets/assets/posters/Flashdance.jpg": "de11c93551a701b365b5904ca4dfaa3a",
"assets/assets/posters/Coraline.jpg": "0652684f82eb2377fdefffda22d35309",
"assets/assets/posters/I_m_Thinking_of_Ending_Things.jpeg": "6ffc10807629dd190ddfc32284c02fa0",
"assets/assets/posters/The_Killing_of_a_Sacred_Deer.png": "5a66abe1d1bbd57accddb2967edee644",
"assets/assets/posters/Per_un_pugno_di_dollari.jpg": "e7cd85fcc13aecc05bfff635d8f24579",
"assets/assets/posters/Seven_Samurai.jpg": "13ae6bdbb1637498a89b666565634d62",
"assets/assets/posters/A_Trip_to_the_Moon.jpg": "29a36625f7052c75033dee03510c3037",
"assets/assets/posters/Mon_oncle.jpg": "73396163050db260792b42bcb7a4f955",
"assets/assets/posters/Dead_Man.jpg": "50385c7841838f710be3e498977cde01",
"assets/assets/posters/Malcolm_X.jpg": "366c8b58b5edf177ec7b1e0ddbde586a",
"assets/assets/posters/Our_Little_Sister.jpeg": "f6e0b124a7a616ced84a9837e077439b",
"assets/assets/posters/For_a_Few_Dollars_More.jpg": "625f89d7dbbbc7b85344ccec3f8dcb39",
"assets/assets/posters/Triplets_of_Belleville.jpg": "ba6ef174f5a8f1bc3f4371ae782eef13",
"assets/assets/posters/From_Here_to_Eternity.jpg": "e7eccfe9a25fc3e85d1e221a1f1ee316",
"assets/assets/posters/BlacKkKlansman.png": "4c5a83144194678b8167064d2a529757",
"assets/assets/posters/Tesis.jpg": "17b878d1ecefbfbef12ef6c61de82e5e",
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
