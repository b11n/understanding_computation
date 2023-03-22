module.exports = class Environment {
    env_ = new Map();
    
    get(key) {
        return this.env_.get(key);
    }

    set(key,val){
        return this.env_.set(key, val);
    }
}