import UsersApi from "./apis/users/usersApi";

class UserService {
    #p_username;
    #p_password;

    #p_usersApi = null;

    constructor(username, password) {
        this.#p_username = username;
        this.#p_password = password;
        this.#p_usersApi = new UsersApi()
    }

    async authAsync(){
        try {
            return await this.#p_usersApi.authAsync(
                this.#p_username,
                this.#p_password
            )
        }
        catch (e){
            throw new Error(e)
        }
    }


}

$('form #login').click(async () => {
    const username = $('#username')
    const password = $('#password')

    const userService = new UserService(username, password);

    try {
        const res = await userService.authAsync()
        document.location.href = res;
    }
    catch (e){
        alert(e);
    }
})
