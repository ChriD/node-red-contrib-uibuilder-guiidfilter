
module.exports = function(RED) {
    "use strict";

    class UIBuilder_IDFilter
    {
        constructor(_config){
            RED.nodes.createNode(this, _config);
            var self = this;
            this.config = _config;

            // attach the "on" event
            this.on('input', function(_msg) { self.input(_msg) });
        }


        input(_msg) {

            var node = this;

            try
            {
                // if there is an id and ist the same as given in the parameters then let the message pass
                if(_msg.guiid && _msg.guiid == this.config.guiid)
                    node.send(_msg)

            }
            catch(_e)
            {
                node.error(_e.toString());
            }
        }


    }
    RED.nodes.registerType("uibuilder-guiidfilter", UIBuilder_IDFilter);
}