Package.describe({
  name: 'sketchytechky:pushify',
  version: '0.0.1',
  summary: 'A simple way to create your own push notification',
  git: 'https://github.com/sketchytechky/pushify',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use([
    'react@0.14.3',
    'kadira:flow-router-ssr',
    'kadira:dochead',
    'kadira:react-layout',
    'aldeed:collection2@2.8.0',
    'ecmascript',
    'http',
    'accolver:twilio-meteor',
    'meteorhacks:picker@1.0.3',
    'aldeed:simple-schema',
    'meteorhacks:npm@1.5.0',
    ]);
  api.addFiles([
    'lib/collection.js',
    'pushify.js',
    'router.js',
    'layouts/home.jsx',
    'layouts/subscribed.jsx',
    'layouts/getchrome.jsx',
    ], ['client','server']
    );
    api.addFiles([
    'server.js',
    ], ['server']
    );

  api.addAssets([
    'assets/manifest.json',
    'assets/service-worker.js'
    ], 'client')

  Npm.depends({
    "body-parser": "1.14.2"
  });

  // XXX: This is only exported for the sake of testing :-(
  api.export("HomeLayout", "client");
  api.export("Signins", "server");
});

Package.onTest(function(api) {
  api.use(['react', 
    'sanjo:jasmine@0.21.0',
    'meteorhacks:fast-render@2.10.0',  // workaround bug in https://github.com/kadirahq/fast-render/issues/132
    'sketchytechky:pushify',
    'http'
    ]);
  
  api.addFiles('tests/client/component-spec.js', ['client']);
  api.addFiles('tests/server/api.js', ['server']);
});
