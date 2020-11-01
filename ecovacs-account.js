module.exports = function(RED) {
    function EcovacsAccountNode(n) {
        RED.nodes.createNode(this,n);
        this.mail = n.mail;
        this.password = n.password;
        this.countryCode = n.countryCode;
    }
    RED.nodes.registerType("ecovacs-account",EcovacsAccountNode);
}
