/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Hgis.Application',

    name: 'Hgis',

    requires: [
        // This will automatically load all classes in the Hgis namespace
        // so that application classes do not need to require each other.
        'Hgis.*'
    ]

    /////Do not create a view yet. Let the app decide how to handle it
    //mainView: 'Hgis.view.main.Main'
});
