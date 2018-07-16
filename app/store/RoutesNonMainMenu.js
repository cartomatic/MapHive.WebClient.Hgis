//Disable some of the JSLint warnings
/*global window,console,Ext,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('Hgis.store.RoutesNonMainMenu', {
        extend: 'Ext.data.Store',

        requires: [
            'mh.data.model.NavRoute'
        ],

        model: 'mh.data.model.NavRoute',

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