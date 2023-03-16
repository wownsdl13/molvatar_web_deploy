'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "05de9744eca75aec08d5eb301df560e5",
"favicon.ico": "de3b0521d50ceaa79a1c50cc796174b9",
"index.html": "f045cbe9c518dd9ae8d6976e70c839a4",
"/": "f045cbe9c518dd9ae8d6976e70c839a4",
"js/face_recognize.js": "92d8d51de2d08d0ce5a8d3aa8ab1ef48",
"js/utils/face_cal.js": "582f90e8b98b312b4392b1717f80f445",
"js/api/face-api.js": "52b046e26889b310b941b501b1f7144f",
"js/api/holistic.js": "d10b1cdabd4905dec736b78e095071e7",
"js/worker/worker_order.js": "210e6de65f105c8f13de385ec39469bd",
"js/worker/expression_worker.js": "eec953b560b20cb16efec9031f7c16d1",
"js/worker/face_env_worker_patch.js": "e7bcdbac652b3fcd7111eddda52fc3c6",
"main.dart.js": "cf3e94ffaf5dff87f06abb588a551f0e",
"404.html": "3084506016d87a877a4c8919893767a1",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"models/face_landmark_68_tiny_model-shard1": "47047fee26557b55d985952bdfc6cba1",
"models/ssd_mobilenetv1_model-shard1": "37ef238973ea93daac91f1914478c40b",
"models/face_expression_model-weights_manifest.json": "e5a3cf2829ccd7f8dce77062d7ff06db",
"models/ssd_mobilenetv1_model-weights_manifest.json": "cd2d65ec62107ba72b8b8d5047011647",
"models/face_landmark_68_tiny_model-weights_manifest.json": "bed02b74fca2b337840961a8c264e687",
"models/ssd_mobilenetv1_model-shard2": "b6d5e81e2506145360be5c4278067080",
"models/face_expression_model-shard1": "33ec63fec9fc41801930d44f4f4ea8f0",
"favicon.png": "28742e0023047aac22e9037d756ea90d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8097cbf597b53dce84548cb2eb109853",
".git/config": "adaada185789107cf90963db7fbe5573",
".git/objects/61/9cdf6d46e8757999a250616782ddb3e25c6504": "f7ce6d4cb7b7f5fa9fa2c59d5fedf7e1",
".git/objects/0d/3b866a1c9f9655d610c906b883fd2575a339c8": "795b0739490d7de1280324020f96eb32",
".git/objects/95/1b83a7f9c31ecbc168359f2be4b616c139c59a": "f5a16caf4beb03adb1860169f670139a",
".git/objects/92/d438531501c9ec752f16b04f4944eba5955b58": "b6a7b77cffa6019822dfac20c0b2b1c8",
".git/objects/66/aa04653fb538e98ee6b9231d286a5ea2037be2": "8a80dc652cfc0f465a5477f339abe0b1",
".git/objects/66/233d99559f40240730dfa72a5a625d415086cf": "c9e3124d94b7aa829b7d9fdf284c71b9",
".git/objects/3e/2e1fbcfc16b0edd454bc9fb8144370154dfaf6": "d66327f65146eb6cfc7dd57d6fb6b42a",
".git/objects/3e/c6b23eb6e21e6a978a0d2f642a9af7b0e52774": "9c9157dd66a09138225d6a5a4b32cd5b",
".git/objects/68/57e2c02a23d552e1c75ffd4ed9c46519807edc": "6f5a967bfd2b5945f04853fcc74adbfd",
".git/objects/57/968480b53cd0ddb81b816a6e23d2a4937c48d0": "ec970c1cba323306217a7b1b62cedafb",
".git/objects/6f/1524d3d567c49d3a52c217f372ad73c2fa0dcb": "de9f809deb80964b1e755c0a5c6e3539",
".git/objects/03/e03978b34de97a84c76058170815723d437a6b": "991e6830b19c441610631f5331fc1ecc",
".git/objects/6a/0fcc4a6b9871a59cdd7f78725bc02049387c2f": "69ed66f12d17388f3a1097a3675be8db",
".git/objects/6a/c455c93074a885fe7cb9619c3322156eb099c4": "c538c8bc34ba154b03982fe06f166fb9",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/3d/053b8e37be7bb5a2224b6ea3e578028629a690": "06367fc702f1001ea2515090b9c50251",
".git/objects/0e/ad12b07833cc50d8746c67ca43fc830a241bb9": "17a21fc231708ae3c9ea527ec45f4d6f",
".git/objects/0e/9db9ebcb72be4e8f26be2209a08bd3d349fe1a": "da3ee77ad1c51832cb6bc28bb387e954",
".git/objects/60/9827cd7b6059417ff8972731370beaa311f2e2": "7c487e526ddae5ebae7471415609bfa7",
".git/objects/05/0ae31f82e7fb949e309bea00cc5cba8a093f63": "beb50b869e9748eccf1ac49a52bf88b0",
".git/objects/02/669e723de889af68b07afdd7281c42fc620c04": "a4ec7bfdddd674bc2a50a275315e80eb",
".git/objects/02/0fca6ed2a7e7d4e896d12e221c779a8be0a7e3": "fc55993c048e7d77901df9c00a2ee4da",
".git/objects/a4/f6460ed242c226d40274f71a5d3853a2d2a52d": "a0ada0daa3ce5e940c439ec9a7e3346c",
".git/objects/a4/ef7f4fea8c59577c3a707b4fa61ac0695ccca5": "baef21d9179caf12cfcec5535fa09599",
".git/objects/a3/d98a96034a530754892b5e8fc3374e8115ff20": "b4889f83f7c669dd087ac3c39a499654",
".git/objects/b5/20d01843427a1a48518d9d2058c61476a97c6b": "665941f156245a2e476758f7e8bdd73d",
".git/objects/b5/5c778ca4315c5bb3f49bda3e610a946243c71f": "c4f377cc985448c1c8076db4303c9ca2",
".git/objects/d9/b315c26ef57266f5bf972750ae2a21ae74dfb2": "3b0ad7e3695f7fa2b6ff157a79c7043b",
".git/objects/d9/1a3a1371881b8c50213779adea6d1815bdf97f": "f122b4eb9770d978bef833fa81723600",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/d0/d52c0a106cec8c64f820964e77fd6196cc255a": "71bd606a1461058a6cff1ad97118453d",
".git/objects/d0/d29ad63e94bf4a04db4f6fbf449943bfc2af25": "7dabe668888c949b5850a27aa55a8fe2",
".git/objects/b3/dd253912b9d99ca3a6e522e1f2c445caa10ed2": "a889382956f8db85db8185d269def2ce",
".git/objects/a2/c13aa4fa1409b34568bd9d83b37a0124f81f57": "3f00628d2c28d7bbf5f23bb6dcb4c629",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/10623a5d11f7da560a840213da8261f2d34a96": "056089789a4aab59fbe7952b8d80299c",
".git/objects/bc/18f6e61c6ddb1854a8ae943141cc0e9c08905b": "20ef0e8104007edc278593b7c9cf1666",
".git/objects/d8/4684605de14df9ac9bc6b74a7b2156d52de674": "7949e1582cb23b3d2459d406f572ddab",
".git/objects/d8/51209cf76c200767b701d74c33f14df2adb2bf": "2e3f3c3abd4b3af77ba23374c7427005",
".git/objects/e5/0df1bbfb8c9776316eb2b1fcaa72b73b5ed489": "011accdf4e488ceae2d31ae8e957251a",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/a9d1b6bdcf6bc3dfcf3ed01d5a3d8f0d436465": "d2f75d945327745cf5cbe4e0b777ed57",
".git/objects/f3/924168ae4d5f5b0435e224b16ba929c0d59752": "37737488b76b4c39ad431a2a9808e068",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/a8e1f5f817fe99ab5297d859825144e108c8c4": "c6ed1669c48d83efe17b756299464957",
".git/objects/c7/6c475dc0770d178d9c6f0ec3fb7de60b3328fd": "df10a51409c8e32478f07bfe66f82d65",
".git/objects/c0/746cd5a12fb332cf177b8cec77887e49de2ae6": "9b733c00fa41be330c909e8a40757d82",
".git/objects/ee/96cf24ee9b0d4c6fe21c547ce6db4472d7fa82": "926d745a90ca1593ddd79bec4bd08191",
".git/objects/fc/a0e3e378d7ec8663d9f864005c6f0e3eb39659": "6dd80e3c3413e609c674ff859e570c05",
".git/objects/f2/62050d2b24ec955b754382317cbf44912cf44e": "cf9e5fa130f4274e3adcfef70cdff792",
".git/objects/e4/5bece1e8d680fc6705558d97c6b91a995d88d3": "bfee5b06e0b40a4f636624eb4c558eed",
".git/objects/e4/9659c60047e2438ca6592d55c0dfd3ff575741": "72cdfcee226afc2c5d4a59d0565cd72d",
".git/objects/fb/57db0489b6023002841685147cc0c52ad74376": "4f3c76f937cd89abd63aaacf598c201e",
".git/objects/ed/a2233fc513c0b3ac11b72f1a505859929cc0de": "92ec2872cd46b62c2dfe155564a1e2d7",
".git/objects/ec/ff30e546131940236a8259194c22448604d6bb": "4f6d1686e316b40eb1ce8ce723e24427",
".git/objects/ec/9a5f0285027695bbff933eb5dc9a86cfbf03ae": "b30170d3ba908ced6a8beb0208a651ac",
".git/objects/20/4e0d13c87e9c059e4995f39447dcc45921a630": "5923434277b3040ffe9fcfb0e86eb65f",
".git/objects/18/2ac1c58cccc476bc5b4abf1eddf45c25a1ee9d": "e29aff734e45e5993cc9c75062f717e6",
".git/objects/27/7d26f2ff30650941c7136c3f854e9d06a1b5ad": "34f3dc7e2add1bdd3ab278852142f6e6",
".git/objects/4b/b915ccf4097089149657b22662bd3e91087da6": "0ed26a82aa0f669c290a917c1410458f",
".git/objects/4b/18708bb5d3588e9cb4c4cdd2ef67db92c51f9e": "a2cae89bd9db9301700667f4c7a521c1",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/42/081e12719ea529f2715d94456f10dbd1a5d742": "fc27aeb6097789b5b3f264b261860a05",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/87/d54a092af889db4c6132a0ee4ba95ec658124d": "c8a8ff9a6441e62703a616ad5d2daaec",
".git/objects/28/27539fe6316a21f1e00e4fd4ecffceb5bd4433": "10eac7d49e13b23d5a4c441cac241136",
".git/objects/17/6fd0b5d4e31da156411d942cfb99dd85b4337a": "231f9f45934357b8f83bbe62ab3739b3",
".git/objects/17/ad7ec95c7eb3ea5b89426b6d2848e5bc5b595d": "f3cfe3b0e428c74a276642b85acf8d7e",
".git/objects/17/427f9f456972e3619e6cae6f950029ee5bbac2": "ba81156fba71cfb7d47ba29d82e45e5f",
".git/objects/7e/96b610859e9c275e214f87329c8980dd089ec1": "42e975347c4f56fbd93711976d017f20",
".git/objects/21/b88b1ca53fbfd4a13583b3c24d2966cb4ce23c": "c2dc041173572a628503940465adc209",
".git/objects/21/0ed0eae74e47ca405ffc775f44893fc597b1fa": "6d2137d2d6cbf8d51512a1511815e7bc",
".git/objects/21/0cf07b3945676bb3d32417f7f9a794f07cf216": "b0db8694dbd3f5fe4222ac90ecac8a6d",
".git/objects/75/123b52e0f1ee7263409178d806b0f53196b869": "315e4b8ce28eaa6f063437ed06d42397",
".git/objects/75/a338e74db705b8d82d676366e0bb98af023825": "146e2d724ba5c480c829327bc9762d37",
".git/objects/75/35f361168ad97ed416ecede6472cbd109d44df": "18320133dd9b4b6938fb6cc96686c7f3",
".git/objects/86/bfc9d7720c3ace9624e514b39cfc559305ecf7": "093479afc6da8a0bff58c65eca81ed66",
".git/objects/86/de92e3d9245b1f23b9038550b0f3e047c32c10": "ce9053bb101500d7bedbb75f0b385816",
".git/objects/72/61bbe77a7eba8404e4dec7074843d00166a28b": "55a6ddbdddb8392d2990e5346eb1a4f1",
".git/objects/44/bda9b0f0bcb523a521990c658c15e11d77dc1b": "07ac1bf557f371a6613fbceba2208734",
".git/objects/43/942d2f0ca46e24faebda830071423b802896e3": "ad7f50ca7e68b52d9595ef578e59cfe8",
".git/objects/43/07adf201433c2664c7b80a0ceaf2874e2cebeb": "3525e4bf5c374a2e593557a844a3b5ff",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/2ea422748ff9e8a594655e7d7a9345ba27e2f4": "0244c8f3f15db5d79eb6ad594671ce5e",
".git/objects/38/ac7ee6a1b2b5774791c2650fe32c757d126576": "1291cc8ae85e9c086e51943ee33d4c35",
".git/objects/00/0900f01d8964a9647c29dfe048ac62022d9e32": "0a3c0d5723305e70a452e9f99f1feff6",
".git/objects/00/d150686c9a57f208b3f09ff7ccd761099a4d77": "5aa49f330301acfedb144136273646c1",
".git/objects/00/8b8b373b6ac93558b498a2e3e7e0fe0d8ef26e": "f3823993390532968f343cfa95692c55",
".git/objects/6e/380d52513b629c538860866853de5473487316": "b259749eb810c6ff238124e187926edf",
".git/objects/36/671bba6a998dfde6c7809a79aebea2a9d197cc": "a7c2f33d09c744266669105877eb949b",
".git/objects/5c/2db93e28a60bfafb26f2d576cdb20dec168811": "6599fc4475086b81eea7024a704a8dd2",
".git/objects/91/6503e56fcc61c50963388a02a85ad5958d6053": "84e99f676c490e13d166fe223abf33c0",
".git/objects/65/9bce89647e80ad94bf8be7620e1bc19422d2a8": "ed37b19acc176e5cabdb5296535f783b",
".git/objects/53/6e51eec823f8cfccefe8bbe072e29cba2046a4": "a03a19e04fc99041ac421391c7ad7fd1",
".git/objects/3f/2a8fbca0418d3f9f154044ae75d2be9ffbbaae": "95c14d9615d9a267ca40ced2dafc5860",
".git/objects/5e/bca1329d9a31e3ce1e260294872a39ebfd3a1e": "648c872ce89b6e95356cb1f1c1fa4875",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/6c/314539ec25df67884f21fd318b8535fbfc67c4": "de1a794e03a5d2ff773bd9dd48538cb4",
".git/objects/99/cd084e9a7d500c6ec53f066e20a3eec9a5bfb9": "1a1101ec9808a1a3eb1b71e8e420c85c",
".git/objects/52/d948e1af4b55d7c2ec9337eb6897866dbc7300": "d159364624e4fae9eadaaeb417ebc115",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/63/48df0558a39c8d65c4133459b7a82fbbc385b3": "df8001971d2556d304f576d6fc072247",
".git/objects/0f/227b5a1d62fe876b184ebb592fababc31bd065": "8091c17cca1b59ee7412a4ba6a6b9049",
".git/objects/0f/c7704af41d38d7292d1474a158097a02dc873f": "19e25e3898711e5dad11b0e0fd6d9dc7",
".git/objects/90/38701d78503fbe8fb1fc49304c1d21c113d5c3": "e5ae4776a67af6a21a138bb4b169d09c",
".git/objects/bf/112dec23f4128cc638f9b16bacd50e23256f85": "733123dd842850669abd35f962cd42b2",
".git/objects/d3/a92a23bf01deeb86dcb27a08881ce9dd1f150d": "b5de1094667eb9b866e9d8cda702557e",
".git/objects/ba/2ec2cdb00eadd363d171065230e9eac2f292de": "ad651ee26c36f4a19bcfce692bb11c3e",
".git/objects/ba/1cf918468ff3890a8c0a7cd54a285935145493": "8f66b19f79cf04c28819c663f53cae0e",
".git/objects/b8/2cb194bb2caf48a680986fcf8dd0378d82abc5": "9c93edcb80962a3686b9035bc2bc338b",
".git/objects/b6/6149075de2d0cfe5cebdbd004726afdacf6d63": "f0d6ff5e0fe76eef98566347c53a69aa",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/474bd5ec8bf900f7e135617d58ff816e8b6084": "ee5f79409713a813d79e9d37c5cafcda",
".git/objects/b7/aa245021ec3feec4147de6f1891f7d32a6ff61": "81c32a02fc0b53ea22f64eb17dcbb17e",
".git/objects/b7/74487391b780f1b9a603010205b5283cb9e1eb": "31eaa7cf0073f1d3108b0a29f71365ee",
".git/objects/b0/9dff67ac4225e5e9c124e3b68e9e42cf5d2fed": "a2dd301dcbea55431e8132fbb1f8aa37",
".git/objects/b0/f1c3f6835ee4de11cf6c6a8a62661c29dcc14e": "ae69cf87474794522b8af7900c6c28b6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ea/d218632049b1366674835d759c75008cbefd5a": "fd122368bba93249cdd0e5c14492609d",
".git/objects/ea/6893138624e8aa6cb657dc7f222c6dc2084551": "89da51ebf18df80cc62638881bc3b2f4",
".git/objects/e1/fdadf4dc2c8c90c3db032348397521999febea": "ac162ff9201e1d66817fe39aa5569e18",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cc/752534f5dbdb738f75a3dca78a62813ada4e4c": "b9bc09796d5bdf167caa49432eafe07b",
".git/objects/cc/34b2e4379834d2126031bea8d6850cdd7552a7": "96d87692d25f85761655042731274730",
".git/objects/e6/8363e3bef47d79cbbb56a2e7de948e58fa8e89": "31ab0908028a2f26a9197f21d6663a20",
".git/objects/f9/1d4e0716e0a464bda993926b7726e28d6d0c7c": "ce647f0501ba68f554ee643e53754f8d",
".git/objects/f0/4a9d5ecd26eb59062ea72c6617a955af22cc5c": "b334b3282ab7f62b28a512950573fdec",
".git/objects/f7/18b15d00548471bdfd40cf8b5836bda0f100cb": "f93d52ffbb7cc39037e8e875f25ffd93",
".git/objects/e8/110f7679f4cde54a90f21430178970945aa94e": "49a7e4f8c18f10c1131e2fc6e466454d",
".git/objects/fa/a821be2b4349207645aa8fb0fe998de65c83da": "68ce3db803a5b74ee377f4014e7a5bf6",
".git/objects/ff/200d4a46f7d6b3745f77e4f8e0fc53d6089503": "4422196bb07b9a8448c0960bbe670169",
".git/objects/e0/97ce9977c6a8787b77845a4755f16ebe83f2a3": "6ae4d6094ecad59e9f95e292ef715c78",
".git/objects/46/16f72b29ebd6c3f5491963a581cd57daea79bf": "c0e298b3aa8e0ab3a40cbf9ada8bd9b6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/266243e63a02e2a1acc15a11b4cc953b96d892": "e04ce5ca004fb39e3b99f40d0db1f9ff",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/a20ef26e842d24859847976ad21ca88451f9bd": "ccab0e66eeba856f303468e8af7fa9e3",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/83/f85f1197a575dad260ca4b106f88be80e163ab": "bc1b9a04639815d8932c1717500e181f",
".git/objects/1b/a2aa9b0a4070fbcf9db7b50e533f4c3935ae42": "3841d40724fd42f0369429162d261ef1",
".git/objects/1b/8ba01b0cb875dcd57afabd32e22679963697cf": "bfc1714d57dad62f3b5557f9cd9157f5",
".git/objects/8d/b2bf1b484f9efd80432c378697e6e1ca9c2e97": "6dfa3c07aee54384ceabe1077f723fbb",
".git/objects/15/5c093c40cfe8e825015f8b2e6360da509e9a54": "f3428882f7ac15b34cc2cd51e710961a",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/fec810de8c5fc6cac0ef55fb543af86acef918": "5c678bcdeada015d09dddbc07b0c0b31",
".git/objects/85/459338cf7bc385cb3fae6cacf98509895aa91a": "8447f4c47105b792441185bcdb3e8232",
".git/objects/1d/f769462d9df2d45dc0f8a3fa16ea93cf917e0d": "84416dee7035fafc218651cae55ce239",
".git/objects/71/088cf7072fbc6957be8706e862be649f8348fe": "6907cb0cde862c790c9c8f6f0993bce9",
".git/objects/71/10ee8c555aab8fda39cebba3a8c697e95982c9": "aa32532af3f1c139a562d57cb3b7fbf1",
".git/objects/1c/4e972408e3bbc0d939aeb3af288052c9ac1351": "75051b45f79ce54ad1d0391e0a5f597a",
".git/objects/1c/5154a11069c8ad117dc2cba879efaffe42bb10": "68380e3163481a571072d5a22bc6b4ab",
".git/objects/40/d91c0bb98ce6eb4911eeea727d6e0c1f7075de": "a1e0d1b5089a28012e6849acd5ac514d",
".git/objects/40/029e80af99a05fa033849375ad6d37412621b5": "14c977243a3140445975680140d14924",
".git/objects/47/f02f86bfeca02e362ebc5bf02332c876bff681": "be9203e04d92935a0baf0b76deaa0bf0",
".git/objects/7f/6b3e8ae79bdf49e3d89926ec8f08682f783ebd": "1c1d23c34c8fa7836e6968b5560e82c4",
".git/objects/7a/83366b28a79143aaa2581c50ab1dd3e04ba9ff": "01aa6d3f6a8b795e7044716124e9cb0b",
".git/objects/7a/846bbe8635c10660cd0740cad41a961e630434": "1013345faf43e5816e914c30534de97c",
".git/objects/22/e277710cff6c250b4ec031dfd803070688a66e": "5e087c83dd1752e7bb186c4cd5fe5e55",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6e02201d64810cba6bb6f522f2231754",
".git/logs/refs/heads/main": "6e02201d64810cba6bb6f522f2231754",
".git/logs/refs/remotes/origin/main": "2c9004ba72846fcbab3b09923423675b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
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
".git/refs/heads/main": "6e87a50aa338a781fd81148d6b6cd0dd",
".git/refs/remotes/origin/main": "6e87a50aa338a781fd81148d6b6cd0dd",
".git/index": "447b17a4f3eb5872d74bed563503f123",
".git/COMMIT_EDITMSG": "45c9eb7fa6e6a781268f8a3b8d62d8b9",
"assets/AssetManifest.json": "004c9a048b0c0b5d3b6c36e3c2aa53f3",
"assets/NOTICES": "f5304bc849ea4b4cac682a131e1b5c7f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/pixel_color_picker/assets/images/picker.png": "3e71419f9c5b13c01e2714aba9c22172",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/instructions/mac_4.png": "68f981ea6b6ad1dd42327664da27adba",
"assets/assets/instructions/mac_2.png": "6840ece7e9f013491d9b851325bf4dd1",
"assets/assets/instructions/mac_3.png": "da82db28a2b108775d7ab4cbaaddaa5f",
"assets/assets/instructions/mac_1.png": "692fe8e8643da34490292e8e8f7964bb",
"assets/assets/tflite/emotion_detection.tflite": "b6b3bc1f87367d386a443ca0b6f2632c",
"assets/assets/tflite/face_landmark.tflite": "a2f063148e9ea5ac92e01c4734181a5e",
"assets/assets/tflite/face_detection_short_range.tflite": "fc0e8679f646a62f51cad3edd143bcc2",
"assets/assets/images/horizontal.svg": "7f4fbef9dfb1ffa980391357206cf695",
"assets/assets/images/mac.svg": "ec161b5a43f68023fe878b71c7c22156",
"assets/assets/images/blur.svg": "93a7c88acb8f13b7b221b0a69f236861",
"assets/assets/images/empty/cube.svg": "200692328bc534b087dcd2176bbbb9d1",
"assets/assets/images/empty/click.svg": "90aa9d213a9bedfd909ef238f26a7c85",
"assets/assets/images/empty/object.svg": "164d30651384d93e2cc5051c0f40cfd5",
"assets/assets/images/vertical.svg": "9d859fb0710109fcdb1dbb86327f72a8",
"assets/assets/images/paint.svg": "db7f1ee850d9eaa81743fb31f05ae5fe",
"assets/assets/images/selection.svg": "1d62b96a5634c8aa983117fbbbc015ef",
"assets/assets/images/layers.svg": "6ee936d2f0c8bf192c91f087c8b65e48",
"assets/assets/images/cursors.svg": "f323c1cf08a19ea0f172b625b0dd3ea1",
"assets/assets/images/gradient.svg": "d0a882386997b7de724e68476c2f1d72",
"assets/assets/images/focus.svg": "bc8e64c58c491ee80dac0de75ae321f1",
"assets/assets/images/add.svg": "d15b9bda59e308c3ab58257a4b07539e",
"assets/assets/images/move-arrows.svg": "ef930bd97eb04b36b733d1e2d99145c8",
"assets/assets/images/box.svg": "c41f6908a60ff346d5162c0f13db92f2",
"assets/assets/images/logo/google.svg": "09aea0f59807f6f4f66af7f5719cba9e",
"assets/assets/images/folder_border.svg": "fd9978cbd9de609b9f5987455d5b27fc",
"assets/assets/images/camera.svg": "cc07a7fcb60f1a1694e99e99df4cc3f4",
"assets/assets/images/line.svg": "470438edf6d34490d5d828d874630078",
"assets/assets/images/resize.svg": "00ddbde32779f44bc858dfcc612915fb",
"assets/assets/images/windows.svg": "3db3686bd631ec05f3eb85b9b7afcdc3",
"assets/assets/images/folder_open.svg": "abe63c21e9b88f90f51398f042db87a2",
"assets/assets/images/restriction.svg": "1cd30484aa9a8e9c9fb5e0c45939c468",
"assets/assets/images/cut.svg": "25e76befd96a652621f9dd61388fca27",
"assets/assets/images/logo.svg": "4bd373af745fc7451fd8cb3f5e179edd",
"assets/assets/images/folder.svg": "da7f2dab5573615f429bad6791eab620",
"assets/assets/images/emotions/happy.png": "7dfc4f888f7984979892454cfce6d27c",
"assets/assets/images/emotions/crying.png": "30c120aa30c7352d469aefe3bf57f799",
"assets/assets/images/emotions/surprised.png": "9e63ee116f43c508ed60728f89fd9a84",
"assets/assets/images/emotions/disgust.png": "a25691f93c0745d781aeac9b3cb96b3a",
"assets/assets/images/emotions/angry.png": "b0facccf8944f4a379de1531cfc1d38a",
"assets/assets/images/emotions/fear.png": "ac569b77a0bcf58dda63b2f09ddb3361",
"assets/assets/images/emotions/normal.png": "9c6b6d98600b44cacba782976e832302",
"assets/assets/sounds/mouse/mouse_down.mp3": "04e04f228804b9e81502734889989ad7",
"assets/assets/sounds/mouse/mouse_up.mp3": "e5977028785ead9cf81c3c3d023304f8",
"assets/assets/sounds/keyboard/key9.mp3": "ea93a50535a486908661d49acb83d2c2",
"assets/assets/sounds/keyboard/key8.mp3": "6a911be8df72ad7fc44b01e57bd60da2",
"assets/assets/sounds/keyboard/key12.mp3": "a827aa63dfd4fb9e664d1b1028d63c32",
"assets/assets/sounds/keyboard/key13.mp3": "3d22202d6e9dfcfc9f9c31f8b870ecb9",
"assets/assets/sounds/keyboard/key11.mp3": "1fa191997b928302ddadc04c63286c1f",
"assets/assets/sounds/keyboard/key10.mp3": "7be30df8c8b53c11ca8b600e18a07c5f",
"assets/assets/sounds/keyboard/key14.mp3": "20f36ea73e7e5ba536b77ef573c96665",
"assets/assets/sounds/keyboard/key15.mp3": "f2f81c6459a88549e17683da4b28641a",
"assets/assets/sounds/keyboard/key17.mp3": "9dbe1191d1b9f8fd785c285f1117f335",
"assets/assets/sounds/keyboard/key16.mp3": "9213c4aa47f8a8801d4120d1b9b100d3",
"assets/assets/sounds/keyboard/key18.mp3": "fbd583c5ec1ead8a7ba93a493905189d",
"assets/assets/sounds/keyboard/key6.mp3": "d3d35cb428fd007c1675a0b4b26279b1",
"assets/assets/sounds/keyboard/key7.mp3": "1b94221197b0eaf1804da6eb8516a952",
"assets/assets/sounds/keyboard/key5.mp3": "0d11e35fe782eb90d869488c05a4e310",
"assets/assets/sounds/keyboard/key4.mp3": "de9d4bdee59b83053ba345c702fbf094",
"assets/assets/sounds/keyboard/key1.mp3": "7fec0c7679242db5764617676fb5a7ad",
"assets/assets/sounds/keyboard/key3.mp3": "0dd4b6f678fd725af9972cb3b1c2e80a",
"assets/assets/sounds/keyboard/key2.mp3": "493b9f81231ff6f6f6240824cbdbd3eb",
"assets/assets/window.txt": "c00e21c77a2e44d81477fb1b99bbb882",
"assets/assets/downloads/Molvatar-Detector-Installer.dmg": "a6393165451a10f08f924f19c741dfaf",
"assets/assets/downloads/MolvatarDetector%20Setup.exe": "c93a8aa3918c0c00c890a914e0f6e21a",
"assets/assets/raw/terms_of_services.txt": "e3d6024f128273b3f1ccaad7e1cf530f",
"assets/assets/raw/account_license.txt": "d5354ad76fe131bf0eaa3d706bd5c890",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
