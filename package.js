Package.describe({
  name: 'jhohlfeld:round10',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Fixes Math.round() by extending the Math object. Packaged from MDN\'s Math.round10() example.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jhohlfeld/meteor-round10.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('round10.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('jhohlfeld:round10');
  api.addFiles('round10-tests.js');
});
