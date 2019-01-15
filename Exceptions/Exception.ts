/** The base DotType Exception class. */
export class Exception extends Error
{
    /**
     * Initialize a new instance of Exception class
     * @param message The exception message
     */
    constructor(message: string) 
    {
        super(message);
        this.name = Exception.name;
    }
}