Package.describe({
  summary: 'Add Image Helpers to Collections'
});

Package.on_use(function (api) {
  api.add_files('lib/common.js', ['client', 'server']);

  api.export('imageHelpers', ['client', 'server']);
});
