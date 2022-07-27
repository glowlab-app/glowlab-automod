const { CID } = require ('multiformats/cid');

module.exports = {
    getCIDv1: (url) => {
        try {
            // return CID.parse(url.replace("ipfs://", "")).toV1().toString()
            return url.replace ("ipfs://", "");
        } catch (e) {
            return null;
        }
    }
}