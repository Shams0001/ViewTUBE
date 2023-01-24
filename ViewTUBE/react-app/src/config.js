import ResetPassword from "./components/ResetPassword";

var config = {
    GetProfileURL:'http://localhost:7000/api/auth/profile',
    loginURL: 'http://localhost:7000/api/auth/login',
    registerURL: 'http://localhost:7000/api/auth/register',
    changePasswordURL: 'http://localhost:7000/api/auth/changePassword',
    editProfileURL: 'http://localhost:7000/api/auth/editProfile',
    resetPasswordURL:"http://localhost:7000/api/auth/resetPassword"
}
export default config;