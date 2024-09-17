
//Username 
const emptyUsername = {
    username: '',
    password: 'phuong@123'
}
const errorUsername1 = {
    username: '1',
    password: 'phuong@123'
}
const errorUsername2 = {
    username: 'phuong1234',
    password: 'phuong@123'
}
const errorUsername3 = {
    username: 'Nếu người dùng nhập tài khoản hoặc mật khẩu, thông báo "Please enter a correct username and password',
    password: 'phuong@123'
}
const errorUsername4 = {
    username: 'Nếu người dùng nhập tài khoản hoặc mật khẩu, thông báo "Please enter a correct username and password"',
    password: 'phuong@123'
}

//Password
const emptyPassword = {
    username: 'phuong',
    password: ''
}

const errorPassword1 = {
    username: 'phuong',
    password: 'h'
}

const errorPassword2 = {
    username: 'phuong',
    password: 'Phuong@1'
}
const errorPassword3 = {
    username: 'phuong',
    password: 'Phuong@1234'
}
 exports.emptyUsername = emptyUsername;
 exports.emptyPassword = emptyPassword;
 exports.errorUsername1 = errorUsername1;
 exports.errorUsername2 = errorUsername2;
 exports.errorUsername3 = errorUsername3;
 exports.errorUsername4 = errorUsername4;
 exports.errorPassword1 = errorPassword1;
 exports.errorPassword2 = errorPassword2;
 exports.errorPassword3 = errorPassword3;
 

