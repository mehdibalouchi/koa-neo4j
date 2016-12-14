/**
 * Created by keyvan on 11/27/16.
 */

class Procedure {
    constructor({
        cypherQueryFile, cypher, timeout = 4000, check = (params, user) => true,
        preProcess = params => params, postProcess = result => result, postServe = result => result,
        name = 'procedure', route
    } = {}) {
        this.cypherQueryFile = cypherQueryFile;
        this.cypher = cypher;
        this.timeout = timeout;
        this.check = check;
        this.preProcess = preProcess;
        this.postProcess = postProcess;
        this.postServe = postServe;
        this.name = route || name;
    }
}

export {Procedure};
