export function loggerBuilder(prefix: string): (p1: string) => void {
    return (txt) => console.log(`${prefix}[customized functional logging]: ${txt}`);
}

export default class Logger {
    private _prefix: string;
    
    constructor(prefix: string) {
        this._prefix = prefix;
    }

    log(message: string) {
        console.log(this._prefix + "[customized oo logging]: " + message);
    }

    public get prefix(): string {
        return this._prefix
    }

    public set prefix(newPrefix: string) {
        if (newPrefix === this._prefix) {
            console.log('useless setter invocation, skipping...')
            return;
        }

        this._prefix = newPrefix
    }
}