'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "1067a5829781a6eeea3f1034c8024078",
"index.html": "026a5ad57bef7dc409ad88a21461232f",
"/": "026a5ad57bef7dc409ad88a21461232f",
"main.dart.js": "d15222cb64772b220104236c571b17d1",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "be15e596b9cd56cd575bde19ed0c17d1",
".git/config": "916b73eadcadf50989c533e926be0588",
".git/objects/59/15be1436a1492f66c928215f4102ae9ed9485e": "229cc40245c70566be625164dfd37cdf",
".git/objects/66/770e85c029beef5c81da91bc68ddc043eae225": "6aa9efa9979a559c620664301b2f71ac",
".git/objects/9e/3bbd3abea997fb5fc36da75c456364c0f46b2d": "28b384e638b03bdb8b5ae7e0160a9b3e",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/6a/7770aed8225951559745f40f4386c743fd2451": "2442fc5c100f8bce40e61893094ff294",
".git/objects/58/e1b78578197ab9e9b5c7a3d691d675e8e42f88": "98044826597f45387f959b5182556de4",
".git/objects/0b/3770613eba30d9bbe8389bd490d6b784e8d5bc": "2aca572993ac0c83cd1741622012b52b",
".git/objects/93/a17c20a52c107bd86dc8916b151ae4561e148d": "8a705b9b3b617977b4ec1db5b4538162",
".git/objects/93/335a4c0513c051b7a1ed8a4124a7d33173233a": "b06108089b7227d68134e1049783f21b",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/8648b76bd2248b30bdbda36f5248f31f88cc36": "9100f6d023e21dd039a6a1b497eae353",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/60/955cab3249ca6f3b4575c8f80a338f71b643fd": "e424c4cdfedf5445946976357f30466a",
".git/objects/60/68bf5a94ad9eafa29b372abdb0b5ea8b9c1113": "654d3df50f586e8af7cdefdae79427fa",
".git/objects/05/8191f362883d8f988ed397d9d7e1297ddfe855": "2e6e6cbe3130019aebce050079c525b8",
".git/objects/9d/785c107adcdc878dca4c2ed57d7f1d6a5bf9ff": "6e8cefa1cb187ed67b2d5a8eaf1d0210",
".git/objects/a3/983bfbf503cd3112570034e8715b6b76daefc8": "dfad26cc6f64f4c8bd59498e6e3c0a7e",
".git/objects/a3/165a0e5dd1d3273427cc697baea35d0bab13ed": "508e1a1f366bf76e339e48066b82031d",
".git/objects/b5/cca94fde09ffa16b307388c6a1dff8ae92e77c": "0d17abf8a9f20605b3f5097e6d741f1a",
".git/objects/d9/593dff6737522d8987cc269dcadd8dc5ce8bff": "62d22d3be632c31cd8b16f0c66104cf1",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/5a7e2f7493d81ca95e7e8c287e9fb2c44f1629": "905b09f712907f9bf0e83535f07d9207",
".git/objects/b3/849ff8b1a4d03cc4438d7008bcbe843af4af3a": "7895c8f1c0f04eaedb3ccf319cf88802",
".git/objects/bd/38889905616f3d5542b22fdd25ffb82f7b6400": "570f9956da42f53d725896485f39197e",
".git/objects/bd/0fe1a22e553b78c45ba2e3a89b0d2891e8f88e": "eaf370de435acf63e337943ae6e0ee58",
".git/objects/d1/da76b30db35bbf2508d1c90ffc29b432e8c48c": "84d5e3541f17a13587f9e13305711ff6",
".git/objects/d1/8bb00d82f968d9607c12914dc548cd4374108a": "fe6fa4c105d941136f9fe178bf9228d3",
".git/objects/d1/5b02d583650aba4da75da0cfa3641aaa8c8fc4": "43bd0f4d41f6e1e1882d74d6fb15744d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/cd94d56ef5546a49c09ad05d668f6ff1a94d20": "c27b3649da9b5ce3d67f6a22fae1f55c",
".git/objects/ae/d3f849e297cc15eca4a47ff51f1f86474f0e3d": "30d010cd7d679bb6f20dbe82b92075b0",
".git/objects/ae/12e54ea340f2e81d26e871282a3b2f15c49bd6": "91df3eeae2c60ed856bec4366998b9f8",
".git/objects/ae/c53a162b3c81fd406893234f339cbd14c2d75b": "12c3db0693fed1b86f1187192a8593e4",
".git/objects/ab/09ed9bbf53bd821f90892e73e196457d52a95d": "18abdd2feaf61cf0e4d50a34861ad3be",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/23e11a03162e4f4b6ce5d546427d1a1aa5912c": "0dfe31b730394af56987fe7c3cc9e242",
".git/objects/eb/4e3893d246e5c74a5bdc3fed6f43754626d57f": "66c976edfb1427f77724fc4f30665046",
".git/objects/ee/a7d56b2858d47a9344444870f8ea74d66b4e55": "8e9614f3dadca3cd1e7bb2830b7fb952",
".git/objects/ee/ebe1b732f16d57a7407b4e13ad54a0e68eec5e": "dd0f74c1d0face77e104a3dacf5780fc",
".git/objects/c9/a954042a9fbedac49542cd265783604174c824": "a05dad37a96854dc08afe7d73c388e9d",
".git/objects/c9/a87efc1f30aa53a4dae549a07a4ade106d423d": "6762a0992306ef97d2b05d859f901718",
".git/objects/c9/36d960051095813c3a2e56958f1f1cdcb9b1f3": "3be9e626bee9c0b9d31ab0de2357622d",
".git/objects/fd/eb1d0755eaa9dc12a6752d9c14cdf67a1dfb93": "69e6af26d2bd0babe8b3681bb6b7fdd4",
".git/objects/f2/6a7d71064efe79f9afa2bea1084de8f7bd7c34": "38d14132372e8ed85eebbe2276f1f124",
".git/objects/f5/a8040c4edebc6f75f768a630d8da064d8af344": "3ffa87600fece6bbb50b0a5a41e18c1f",
".git/objects/cf/6806fed1daca0bcac2a00f15c4bdf07bf3d768": "3f1b0368cad4d773600547f9d83f36e2",
".git/objects/fe/d24831de9359a03845aef05482999841fff845": "c1329cf9383e130a573f1f07025037f8",
".git/objects/4e/3545aeb7e29d30f6e20c32a6945122ee8ef6e6": "548d030d72b3ff0d83059f4aa125c33a",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/7d/ed4d5d2942818f63f4c6313d63e8c638a6d2f6": "7b221ac626bab1908726800b2f479875",
".git/objects/89/176d13e9e0715390ce3e8297bfc816e0e6ae6d": "e7f52216d593b818d35f892ee1546969",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/80/247d685e9a9a07a24c5a11f6cd4515144e148a": "f52bb6551f44870396fcd4f1632a5552",
".git/objects/7b/384a9d249ee17a4a919abb88b29456922cd605": "178e88c4cca20d4474188aed2ed8a05b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/dc1d932d4a29f015b254db4615d064df317d8e": "f75a950ee7febd7f89e26ada582ccb33",
".git/objects/81/a1ee579be50899eebcecd5299a7f605381ad51": "4160612c5fe31fd7fceb21d5a06330f0",
".git/objects/72/8cead3560c14033a585e2dcdcb3393e9e467b0": "836fc5a58d0be3ea6c36c3f310a1da7c",
".git/objects/44/814303038eb59513ca9a5170539e6245590302": "6b6d0015fc36a43d347a97acc018907f",
".git/objects/43/9fc00465e9dd9d80b6bee810b171b0eb2bcb45": "c8f13e7fc6c1e1642068387f94fe99ae",
".git/objects/43/6274d0e963f84883b09c8d50a316ad333ae370": "84dfab14c3c4c01e15d6c2c359036817",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/3b86cb0121b7d8ce49a6a8800aeaf2a02e2335": "aa1f47603a53b2758e8ecbcfbe1b2949",
".git/objects/38/6dae0688faabc17f40b3005cf57dc69dc3acbd": "bab99501d40cb7ab7e930dd6c36d2787",
".git/objects/9a/bd5d272e6ae58beb4cf59875489772309cf0ee": "12b2e8cd2f6890b45e05226a97513155",
".git/objects/9a/ffee989700f7456df3baf839a604ef1a5a61a7": "eb54bfbfcf1b0ef358cde29619db6557",
".git/objects/9a/1211ad2150ddd54c26cb1969f4d4cc2376e566": "b22bed6af71d1f0908493f518c0a176e",
".git/objects/9a/d57d2b88ded839d046b7d0f85c70bf59bdca80": "7b8b08d789bed32b4b0458f0245588c3",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/96/246001f802b87a101a7536b491a527b14ca62a": "a58a907a2eb92de75e54db140fd71d2b",
".git/objects/3f/0bfd625066619f123a4dbb2cbc6c6f42620848": "e5785e9deb4e024a6310b655d26cc01a",
".git/objects/5e/db707ccbca683c62869ef186b10bbe4bcfdfa3": "6e85d113ae1802c7cb7f8d4e27fae938",
".git/objects/5b/1aea3aa9cdcb41162f86a966cbd1e3e8918804": "a5dafd6d8a4bf66c0b5955abea002d97",
".git/objects/6d/6bcf1990b4fed7eb2e6e00787f682ba62579b4": "3d880981ced059d7ee314fb0069aef7e",
".git/objects/06/e9d4e69f0b5e09a866bf18330645165d0f3a42": "5e364d599dca0864dbedbbbc20d830d0",
".git/objects/99/1cf1d8417d6c2456622361d098c75659dda0e9": "bc397db20149164026318b33a4fb727b",
".git/objects/63/ca158d2fbf74a44b2c7a20696d66a6e6d4ebb0": "86597107cb79523544e996cda85d96fe",
".git/objects/d3/4eee26ed89b768f30c3976824bf8e81806527b": "8a1f8d9336c7bd33d3b28ec10946b353",
".git/objects/d4/5a8b4445de73bb2056eaab03f6833e15e23426": "55caff6c5f930cfa00eca0daaa105319",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a7/7e97e0b73c3098ab1c5a44216556062f9c1378": "fd5471d12a1955cec566481f9701f94f",
".git/objects/b1/84c48039f73c9b90e02df94e33f7c27aedc80b": "9e4f45673311258b786f3f7d0138bf67",
".git/objects/dd/c9d01582e7c5daf79b292e9f25c89a59b7c52c": "de67d689e75b319c015a6e430a9c8a32",
".git/objects/b6/ea3a2e28c90728ae86614580fb070676f1318d": "5c78b479651a22a37119dcbf7536ee0e",
".git/objects/b6/ecffd7d4401bb191e43d321aeffce69a9e0018": "0ed19f9afdd7bb1d9ebb84f22de6308b",
".git/objects/d2/c224b958a95d1a1e7b37298be35da0cf678105": "387816d064bcf15683cb946b60f85375",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/a165d389a8dc5eeb55ae42d1a731b053f61efd": "f394b24b74e46d64f44b18ef78234b40",
".git/objects/de/9e95bb6c17fbcf163fbd9d589a23998fe7da5d": "90ce705b67242a3cf71a2e4ecf10b477",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/032a7d5c2d37878b53c8a5ae37d41e4fa8d3d9": "3e8cbf4bfffb42ff31250c2a51a21ac7",
".git/objects/a1/040703931664546bf6287a06cd8452392d042c": "c41218b4cde24b6a02483868e2b120c7",
".git/objects/c3/38a2c8f7d7e2a72c8be85ac5158a2eff558d07": "9c32d202136618e5e8d012d08ed18b30",
".git/objects/c3/bffaef46df78009ba46815c933a053fe51bd46": "e36e0e58d77a4032559a778a92f17950",
".git/objects/e1/1c1579ade714db376180d4b627b5d2a1cde379": "dc15c5b13c6328f43389bc1084544279",
".git/objects/e1/d02435f0c6e26b17d6876b55f73369d8514174": "80b785c2825fbb08ab8d146f06b77b45",
".git/objects/cd/fe09b24671e4f7bc4ed77d0ace5f7746a585f8": "ef6506c617bff5b57d507b80f7402bee",
".git/objects/f0/153f119f629026e6df2906582e52fa9708625c": "a569d6b96eae50b39352629dd9c8b014",
".git/objects/ff/599d535c33605dfe030e202b0a1171f59f8b5d": "da04a7fdc5e5f77ceb04eb7791977d1d",
".git/objects/e9/69d311937fa3f54d3bb4347d0f6993d025983c": "decb8115c37e1e3f0c99ae60b9942337",
".git/objects/e0/4d44b73a6ba564cca6d9e550f69dc3211ce867": "8943ca0807e88e1e8a3eb81bdb4e3450",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/2008a08382f8fd11a12f0ca51b152ef14a8c37": "4f83e86762d6dad02253438995152cdb",
".git/objects/2c/db2170e3f0e3578026a2c12dd9c1361d9fe621": "f025d0d5e54b555a537aa8cb6a08890d",
".git/objects/2c/7d7d20d923d597d3a8b728f3a14acc2f9b6f4a": "2866a6ae559ae17f3b5e98be34352f67",
".git/objects/79/7c4fd196ad234ad298b3834e0e7dc5aefbca08": "4cde1c9545af7837e0d1f8d1db677089",
".git/objects/2d/762e67f5b281d1696131ac45fa31c09aba5f6f": "b7ab581c979d674fcaa35d12a2d39b38",
".git/objects/2d/859c47c5364ee17e27bdb2a92af0d8e94c39d2": "8d7adfa8da3deb01aed1e9d7bac8a1ff",
".git/objects/2d/6aecf0df023122c5524adfc7df3d973979d2df": "17c4eb64c9a41ccb964a502bc1ed7e3b",
".git/objects/83/b936e15b7135108b38e311aaa7565316f3fab9": "6a1b09f9788ffc781c8a754f6ed7f849",
".git/objects/83/707d3b077162515a9ae4afb28185e280353667": "7238fc69976d851f9086ef29d573d195",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/24/2a37147f022eabe00da9c8f329295be54ffd8d": "438b0b64b468107514df7a600cb1b78e",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/15/6cf1fd529c4cb1bb48f30de6383d5b8ae009dd": "c14b402a083570355154b8937b8e7136",
".git/objects/85/223c4085ea7eac606b9af0fade42a9a3f36a39": "0c6a38e8819a6882f65815aac55c530a",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/76/24b714090d2479beb979da6327142f5e1e65c1": "da6914fa0e5d0975944cc4e9930c86d8",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2b/c55fd73de3bd3824ef0d2572624bb42c623469": "ed834113107213e4898ad60953ee9f36",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2b9b5aafb90e897908072ee07810d333",
".git/logs/refs/heads/main": "2b9b5aafb90e897908072ee07810d333",
".git/logs/refs/remotes/origin/HEAD": "13e5baa55baccfc1bb46e8de5cc21592",
".git/logs/refs/remotes/origin/main": "6289e124cf4342093a06f600b1294b1d",
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
".git/refs/heads/main": "d5a442601defae9341f4e1cd1bdc4b4b",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "d5a442601defae9341f4e1cd1bdc4b4b",
".git/index": "1712cf6a29b2b2fde107115c25285e22",
".git/COMMIT_EDITMSG": "a8a78d0ff555c931f045b6f448129846",
".git/FETCH_HEAD": "14827b9c8246a4f020edceb036179eba",
"assets/AssetManifest.json": "b3a99bc2b924eafaf9f583efb07df66c",
"assets/NOTICES": "d7d1abe91c33b9d38dc61e4ee259fe91",
"assets/FontManifest.json": "91e91b8a479d59ec02e6543b78fe1b70",
"assets/AssetManifest.bin.json": "30739dac103819a3eead01e4c5f82cec",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "21871e46e5dae0854d648c4c56f37054",
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
