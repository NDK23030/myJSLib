import $ from "../core";

$.prototype.getAttr = function(name) {
    // return this[0].getAttribute(name);

    for(let i = 0; i < this.length; i++) {
        if(!this[i].getAttribute(name)) {
            continue;
        }
        return this[i].getAttribute(name);
    }

    return this;
};

$.prototype.mapAttr = function(name) {
    const arr = [];
    for(let i = 0; i < this.length; i++) {
        if(!this[i].getAttribute(name)) {
            continue;
        }

        arr.push(this[i].getAttribute(name))
        if(i == this.length - 1) {
            return arr;
        }
    }

    return this;
}

$.prototype.setAttr = function(name, value) {
    for(let i = 0; i < this.length; i++) {
        this[i].setAttribute(name, value);
    }

    return this;
};

$.prototype.removeAttr = function(name) {
    for(let i = 0; i < this.length; i++) {
        if(!this[i].getAttribute(name)) {
            continue;
        }
        this[i].removeAttribute(name);
    }

    return this;
};

$.prototype.toggleAttr = function(name, value) {
    for(let i = 0; i < this.length; i++) {
        if(this[i].hasAttribute(name)) {
            this[i].removeAttribute(name);
        } else {
            this[i].setAttribute(name, value);
        }
    }

    return this;
};