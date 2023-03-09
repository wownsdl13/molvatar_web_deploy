'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "05de9744eca75aec08d5eb301df560e5",
"favicon.ico": "de3b0521d50ceaa79a1c50cc796174b9",
"index.html": "019d1208ab13cb9442733c8d36c2c4d6",
"/": "019d1208ab13cb9442733c8d36c2c4d6",
"js/face_recognize.js": "2238ac5c9d34f55b8dea2d217a51ddbe",
"js/utils/face_cal.js": "582f90e8b98b312b4392b1717f80f445",
"js/api/face-api.js": "52b046e26889b310b941b501b1f7144f",
"js/api/holistic.js": "d10b1cdabd4905dec736b78e095071e7",
"js/worker/worker_order.js": "210e6de65f105c8f13de385ec39469bd",
"js/worker/expression_worker.js": "eec953b560b20cb16efec9031f7c16d1",
"js/worker/face_env_worker_patch.js": "e7bcdbac652b3fcd7111eddda52fc3c6",
"main.dart.js": "4036448b4761a7da050491b8ac2ca84a",
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
"assets/AssetManifest.json": "7eb72b7732034f9b744bf93912a7b06e",
"assets/NOTICES": "12be18a8b0f9e33d6ccb38ab449d848c",
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
"assets/assets/images/mac.svg": "ec161b5a43f68023fe878b71c7c22156",
"assets/assets/images/blur.svg": "93a7c88acb8f13b7b221b0a69f236861",
"assets/assets/images/empty/cube.svg": "200692328bc534b087dcd2176bbbb9d1",
"assets/assets/images/empty/click.svg": "90aa9d213a9bedfd909ef238f26a7c85",
"assets/assets/images/empty/object.svg": "164d30651384d93e2cc5051c0f40cfd5",
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
