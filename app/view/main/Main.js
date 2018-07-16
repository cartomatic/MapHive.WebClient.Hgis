//Disable some of the JSLint warnings
/*global window,console,Ext,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('Hgis.view.main.Main', {
        extend: 'mh.module.mainView.MainView',

        requires: [
            'mh.module.mainView.NavMenu',
            'mh.module.mainView.NavMenu',
            'Hgis.view.main.MainController',
            'Hgis.store.RoutesMainMenu',
            'Hgis.store.RoutesNonMainMenu',
            'Hgis.view.main.Icons',
            //default user profile view for side nav menu
            'mh.module.userProfile.UserProfile'
        ],

        xtype: 'main',

        controller: 'main',

        navMenu: {
            xtype: 'mh-main-view-nav-menu',
            ui: 'dark micro',
            menuStore: 'Hgis.store.RoutesMainMenu' //registered via application.stores
        },

        nonMenuRoutesStore: 'Hgis.store.RoutesNonMainMenu' //registered via application.stores
    });

}());