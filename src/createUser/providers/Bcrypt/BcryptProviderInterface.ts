export interface BcryptProviderInterface {
    cryptPassword(password: string): Promise<string>;
}