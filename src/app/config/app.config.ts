export class AppConfig{

    public static BASE_ENDPOINT='http://localhost:4000';
    public static AUTH_ENDPOINT=AppConfig.BASE_ENDPOINT+'/login';
    public static FIND_PROFILES_ENDPOINT=AppConfig.BASE_ENDPOINT+'/v3/profiles';
    public static FIND_PROFILES_IMAGE_ENDPOINT=AppConfig.BASE_ENDPOINT+'/profiles/image';
    public static DELETE_PROFILES_ENDPOINT=AppConfig.BASE_ENDPOINT+'/v3/profiles/';
   

}