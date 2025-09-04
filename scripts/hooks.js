function hookFunc(pre, post, ogFunc) {

    const original = ogFunc;

    ogFunc = function(...args) {

        pre(args);

        const result = original.apply(this, args);

        post(result, args);

        return result;
    }
}