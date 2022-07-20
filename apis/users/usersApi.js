// без di
import ApiHelper from "../apiHelper";

export default  class UsersApi {
    #p_apiHelper = null;

    constructor() {
        this.#p_apiHelper = new ApiHelper('/user')
    }

    async authAsync(_username, _password){
        try {
            return this.#p_apiHelper.requestJsonAsync(
                `/authenticate?username=${_username}` +
                `&password=${_password}`,
                {
                    method: "POST"
                }
            )
        }
        catch (e){
            throw new Error(e)
        }
    }
}
