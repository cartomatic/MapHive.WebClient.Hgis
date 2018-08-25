//Disable some of the JSLint warnings
/*global window,console,Ext,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

        Ext.define('Hgis.store.RoutesMainMenu', {
        extend: 'Ext.data.Store',

        requires: [
            'mh.data.model.Route',
            'mh.FontIconsDictionary',

            'Hgis.view.map.Map',
            'mh.module.dataView.users.DataView',

            'mh.data.model.User'
        ],

        model: 'mh.data.model.Route',

        //see comments in mh.data.model.Route on how to use the route models

        data: [
            {
                id: 'map',
                xtype: 'map',
                navigationRoute: 'map',
                //dataRoute: 'map',
                iconCls: 'mainMenuMap'
            },
            {
                id: 'users',
                xtype: 'mh-users-data-view',
                navigationRoute: mh.module.dataView.users.DataView.navigationRoute,
                dataRoute: mh.data.model.User.getEntityNavigationUrlBase(), //data routes handle specific models, so take it of a model!
                iconCls: 'mainMenuUsers'
            }
        ]
    });

}());