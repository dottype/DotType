/** 
 * Defines a mechanism for retrieving a service object; that is, an object that
 * provides custom support to other objects.
 */
export interface IServiceProvider
{
    /**
     * Gets the service object of the specified type.
     * @param serviceType An object that specifies the type of service object to get.
     * @returns A service object of type serviceType.-or- null if there is no service object of type serviceType.
     */
    GetService(serviceType: any): any | null;
}