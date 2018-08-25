//Disable some of the JSLint warnings
/*global window,console,Ext,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('Hgis.store.RoutesNonMainMenu', {
        extend: 'Ext.data.Store',

        requires: [
            'mh.data.model.Route'
        ],

        model: 'mh.data.model.Route',

        data: [
            // {
            //     id: 'some-id',
            //     xtype: 'some-xtype',
            //     navigationRoute: 'nav-route',
            //     dataRoute: 'data-route',
            //     iconCls: 'icon-cls'
            // }
        ]
    });

}());