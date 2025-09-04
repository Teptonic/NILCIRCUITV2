class Vector2 {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static fromArray(array) {
        if (!(array instanceof Array)) {
            throw new Error("Argument must be an Array");
        }
        if (array.length < 2 || array.length > 2) {
            throw new Error(`Array size isn\'t correct
                    Expected size: 2
                    Gotten size:   ${array.length}`);
        }
        return new Vector2(array[0], array[1]);
    }

    static fromNum(n) {
        if (!(n instanceof Number || n instanceof BigInt)) {
            throw new Error("Argument must be a Number or BigInt");
        }

        return new Vector2(n, n);
    }

    sum() {
        return this.x + this.y;
    }

    add(o) {
        if (!(o instanceof Vector2)) {
            throw new Error("Argument must be a Vector2");
        }
        return new Vector2(this.x + o.x, this.y + o.y);
    }

    sub(o) {
        if (!(o instanceof Vector2)) {
            throw new Error("Argument must be a Vector2");
        }
        return new Vector2(this.x - o.x, this.y - o.y);
    }

    div(o) {
        if (!(o instanceof Vector2)) {
            throw new Error("Argument must be a Vector2");
        }
        return new Vector2(this.x / o.x, this.y / o.y);
    }

    mul(o) {
        if (!(o instanceof Vector2)) {
            throw new Error("Argument must be a Vector2");
        }
        return new Vector2(this.x * o.x, this.y * o.y);
    }

    mod(o) {
        if (!(o instanceof Vector2)) {
            throw new Error("Argument must be a Vector2");
        }
        return new Vector2(this.x % o.x, this.y % o.y);
    }

    abs() {
        return new Vector2(Math.abs(this.x), Math.abs(this.y));
    }
    
    asArray() {
        return [this.x, this.y];
    }
};

class Vector3 {
    x;
    y;
    z;
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    

    static fromArray(array) {
        if (!(array instanceof Array)) {
            throw new Error("Argument must be an Array");
        }
        if (array.length < 3 || array.length > 3) {
            throw new Error(`Array size isn\'t correct
                    Expected size: 3
                    Gotten size:   ${array.length}`);
        }
        return new Vector3(array[0], array[1], array[2]);
    }

    static fromNum(n) {
        if (!(n instanceof Number || n instanceof BigInt)) {
            throw new Error("Argument must be a Number or BigInt");
        }

        return new Vector3(n, n, n);
    }

    sum() {
        return this.x + this.y + this.z;
    }

    add(o) {
        if (!(o instanceof Vector3)) {
            throw new Error("Argument must be a Vector3");
        }
        return new Vector3(this.x + o.x, this.y + o.y, this.z + o.z);
    }

    sub(o) {
        if (!(o instanceof Vector3)) {
            throw new Error("Argument must be a Vector3");
        }
        return new Vector3(this.x - o.x, this.y - o.y, this.z - o.z);
    }

    div(o) {
        if (!(o instanceof Vector3)) {
            throw new Error("Argument must be a Vector3");
        }
        return new Vector3(this.x / o.x, this.y / o.y, this.z / o.z);
    }

    mul(o) {
        if (!(o instanceof Vector3)) {
            throw new Error("Argument must be a Vector3");
        }
        return new Vector3(this.x * o.x, this.y * o.y, this.z * o.z);
    }

    mod(o) {
        if (!(o instanceof Vector3)) {
            throw new Error("Argument must be a Vector3");
        }
        return new Vector3(this.x % o.x, this.y % o.y, this.z % o.z);
    }

    abs() {
        return new Vector3(Math.abs(this.x), Math.abs(this.y), Math.abs(this.z));
    }
    
    asArray() {
        return [this.x, this.y, this.z];
    }
}

const LOG_LEVEL = {
    DEBUG: 0,
    INFO:  1,
    WARN:  2,
    ERROR: 3,
    FATAL: 4
}

class Logger {
    id;
    name;

    static loggers = [];
    
    constructor(name) {
        Logger.loggers.forEach(logger => {
            if (logger.name == name) return; // Quick sanity check.
        });

        this.name = name;
        this.id = crypto.randomUUID();
        Logger.loggers.push(this)
    }

    log(level, ...args) {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        switch (level) {
            case 0:
                console.log(`(${hours}:${minutes}:${seconds}) [DEBUG] ${args}`)
                break;
            case 1:
                console.log(`(${hours}:${minutes}:${seconds}) [INFO] ${args}`)
                break;
            case 2:
                console.warn(`(${hours}:${minutes}:${seconds}) [WARN] ${args}`)
                break;
            case 3:
                console.error(`(${hours}:${minutes}:${seconds}) [ERROR] ${args}`)
                break;
            case 4:
                throw new Error(`(${hours}:${minutes}:${seconds}) [FATAL] ${args}`);

            default:
                throw new Error("Invalid log level");
        }

    }

    static getByName(name) {
        Logger.loggers.forEach(logger => {
            if (logger.name == name) return logger;
        })
    }
}