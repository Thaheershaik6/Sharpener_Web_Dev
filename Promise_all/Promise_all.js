const users = [
    { title: 'User one', body: 'This is user one', lastActivity: '6th September 2022' },
    { title: 'User two', body: 'This is user two', lastActivity: '23rd Februaty 2023 03:15 PM (Indian Standard Time)' }
]

//Create new user function
function createUser(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            users.push({ ...user, lastActivity: new Date().toString() })
            resolve()
            //console.log(users);
        });
    })
}
//Creating function updateLastUserActivityTime
function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout((user) => {
            users.forEach((user) => {
                //    user.lastActivity = new Date().toString();
                console.log('Before creating ' + user.title + ', User last Activiy time = ' + user.lastActivity);

                console.log('After creating >>>> ' + user.title)
            })
            console.log(users)
            console.log('User last activity time ' + new Date().getTime())
            resolve();
        }, 1000)
    })
}
//Calling the functions by promisw.all
Promise.all([createUser({ title: 'User three', body: 'This is user three' }), updateLastUserActivityTime()])

// function userUpdate() {
//     Promise.all([createUser, updateLastUserActivityTime]).then(([createUserResolves, updateLastUserActivityTimeResolves]) => {
//         console.log(updateLastUserActivityTime)
//     }).catch(error => console.log(error))
// }

