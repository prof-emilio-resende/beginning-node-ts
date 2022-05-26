// Ferramentas
// node, npm, nvm

function main(): void {
    console.log('main is running...')
    // Dynamic types

    const text: string = 'text'
    const integerNumber: number = 10
    const decimalNumber: number = 10.3
    const arr: string[] = []
    const dictionary: Record<string,string> = {'teste': 'funciona'}

    console.log(typeof (text))
    console.log(typeof (integerNumber))
    console.log(typeof (decimalNumber))
    console.log(typeof (arr))
    console.log(typeof (dictionary))

    console.log(Object.getPrototypeOf(arr).constructor.name)
    console.log(Object.getPrototypeOf(dictionary).constructor.name)

    console.log(arr instanceof Array)

    // using a builder function
    loggerBuilder('[funny logs]')('business message...')
    const logger = new Logger('[funny logs]')
    logger.log('business message...')
    logger.prefix = '[funny logs]'
    logger.log('business message...')
    console.log(logger.prefix);
}

function loggerBuilder(prefix: string): (p1: string) => void {
    return (txt) => console.log(`${prefix}[customized functional logging]: ${txt}`);
}

class Logger {
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

main()
