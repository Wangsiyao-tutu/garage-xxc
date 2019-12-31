// 登陆
function login(callback) {
    wx.showLoading({
        mask: true, //显示透明蒙层，防止触摸穿透,
    });
    // 异步执行语句
    wx.login({
        success: res => {
            if (res.code) {
                getUserInfo(res.code, callback);
            }
        },
        fail: (res) => {
            console.log('__Login请求失败__');
        },
    });
}

// 获取用户信息
function getUserInfo(code, callback) {
    wx.getUserInfo({
        withCredentials: false,
        // 获取成功，全局存储用户信息，开发者服务器登录
        success: res => {
            console.log(res);
            // 全局存储用户信息,这里暂时用本地缓存代替
            wx.setStorage({
                key: 'storeUpdateWxUser',
                data: res.userInfo
            });
            //向后端请求
            postLogin(code, res.iv, res.encryptedData, callback);
        },
        // 获取失败，弹窗提示一键登录
        fail: () => {
            console.log('——请求用户信息失败——');
            wx.hideLoading();
            // 获取用户信息失败，清除全局存储的登录状态，弹窗提示一键登录
            // 使用token管理登录态的，清除存储全局的token
            // 使用cookie管理登录态的，可以清除全局登录状态管理的变量
            wx.removeStorage({
                key: 'storeUpdateToken',
                success: res => {
                    console.log('——成功清除storeUpdateToken——');
                }
            });
            // 获取不到用户信息，说明用户没有授权或者取消授权，弹窗提示一键登录。
            // showLoginModal()
        }
    });
}

// 开发者服务端登陆
function postLogin(code, iv, encryptedData, callback) {
    let param = {
        code,
        iv,
        encryptedData
    };
    console.log('——到了request，没有服务器，请求结束——');
    wx.hideLoading();
    // request(apiURL, param, 'POST').then((res) => {
    //     if (res.code == 1) {
    //         wx.hideLoading();
    //         // 登陆成功
    //         // 使用token管理登录态的，存储全局token，用于当做登录态判断，
    //         // 使用cookie管理登录态的，可以存任意变量当做已登录状态
    //         wx.setStorage({
    //             key: 'storeUpdateToken',
    //             data: res.data.token
    //         });
    //         callback && callback()
    //     } else {
    //         showToast();
    //     }
    // })
}

// 显示toast弹窗
function showToast(content = '登录失败，请稍后再试') {
    wx.showToast({
        title: content,
        icon: 'none'
    });
}

export default {
    login,
    showToast,
    postLogin,
    getUserInfo,
};