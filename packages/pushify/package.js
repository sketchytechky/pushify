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
    'react',
    'kadira:flow-router-ssr',
    'kadira:react-layout',
    'ecmascript',
    ]);
  api.addFiles([
    'pushify.js',
    'router.js',
    'layouts/home.jsx',
    //'pushify.html'
    ], ['client','server']
    );
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('sketchytechky:pushify');
  api.addFiles('pushify-tests.js', ['client']);
});