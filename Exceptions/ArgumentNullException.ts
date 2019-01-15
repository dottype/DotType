import { Exception } from "./Exception";

/** 
 * The exception that is thrown when a null or undefined reference
 * is passed to a method that does not accept it as a valid argument. 
 * */
export class ArgumentNullException extends Exception
{
    /**
     * Initialize a new instance of ArgumentNullException class
     * @param message The exception message
     */
    constructor(argumentName: string) 
    {
        var message = "Null or undefined argument: " + argumentName;
        super(message);
        this.name = Exception.name;
    }
}