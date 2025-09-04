class Vector2 {
    x; y;
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

        let time = `(${hours}:${minutes}:${seconds})`;
        let log = "";

        switch (level) {
            case 0:
                log = `${time} [DEBUG] ${args}`;
                console.warn(log);
                break;
            case 1:
                log = `${time} [INFO] ${args}`;
                console.warn(log);
                break;
            case 2:
                log = `${time} [WARN] ${args}`;
                console.warn(log);
                break;
            case 3:
                log = `${time} [ERROR] ${args}`;
                console.error(log);
                break;
            case 4:
                log = `${time} [FATAL] ${args}`;
                throw new Error(log);

            default:
                throw new Error("Invalid log level");
        }

        return log; // For forwarding to other outputs

    }

    static getByName(name) {
        Logger.loggers.forEach(logger => {
            if (logger.name == name) return logger;
        })
    }
}