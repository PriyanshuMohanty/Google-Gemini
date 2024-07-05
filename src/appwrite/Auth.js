
import { Client, Account, ID } from "appwrite";
import { API_ENDPOINT, PROJECT_ID } from "../Conf/Conf";

class AuthService {
    Client = new Client();
    Account;

    constructor() {
        this.Client
            .setEndpoint(API_ENDPOINT)
            .setProject(PROJECT_ID);
        this.account = new Account(this.Client);
    }

    async createAccount({ email, password, name }) {
        try {
            let userData = await this.account.create(ID.unique(), email, password, name)
            if (userData) {
                return this.login({ email, password })
            } else {
                return userData;
            }
        } catch (error) {
            console.log("Appwrite::AuthServies::createAccount::error", error)
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            console.log("Appwrite::AuthServies::login::error", error)
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite::AuthServies::getCorrentUser::error", error.message)
        }
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite::AuthServies::logout::error", error)
        }
    }

}

const authService = new AuthService()

export default authService