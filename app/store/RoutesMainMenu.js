//Disable some of the JSLint warnings
/*global window,console,Ext,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

        Ext.define('Hgis.store.RoutesMainMenu', {
        extend: 'Ext.data.Store',

        requires: [
            'mh.data.model.NavRoute',
            'mh.FontIconsDictionary',

            'Hgis.view.map.Map'
        ],

        model: 'mh.data.model.NavRoute',

        data: [
            {
                id: 'map',
                xtype: 'map',
                navigationRoute: 'map',
                //dataRoute: 'map',
                iconCls: 'mainMenuMap'
            }
        ]
    });

}());