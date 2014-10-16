/**
 * Created by rob on 16/10/2014.
 */

Package.describe({
    summary: "A pattern to display application errors to the user",
    version: "0.0.1",
    git:     "https://github.com/robwatkin/robsw-errors.git"
});

Package.onUse(function (api, where) {
    api.versionsFrom('METEOR@0.9.4');

    api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');

    api.add_files(['errors.js', 'errors_list.html', 'errors_list.js'], 'client');

    if (api.export)
        api.export('Errors');
});

Package.onTest(function(api) {
    api.use('robsw:errors', 'client');
    api.use(['tinytest', 'test-helpers'], 'client');

    api.add_files('errors_tests.js', 'client');
});