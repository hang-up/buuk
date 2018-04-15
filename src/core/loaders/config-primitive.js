class ConfigPrimitive {
    constructor(key, value) {
        this.key = key;
        this.value = value || null;
    }

    get getKey() {
        return this.key;
    }

    get getValue() {
        return this.value;
    }
}

export default ConfigPrimitive;
