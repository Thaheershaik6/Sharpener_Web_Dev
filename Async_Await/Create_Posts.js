
const posts = [{ title: 'POST1' }, { title: 'POST2' }];
//Print the posts
function printPost() {
    posts.forEach((post) => {
        console.log(post.title)
    })
}
//create 3rd post
function create3rdPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ title: 'POST3' });
            resolve('POST3')
        }, 3000)
    })
}
//create 4th post
function create4thPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ title: 'POST4' });
            resolve('POST4');
        }, 2000)
    })
}

//to remove you can use array.pop method
function deletePost() {
    //complete this function
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.pop();
            resolve();
        }, 2000)
    })

}

//Implementing asyne await
async function postsData() {
    try {
        printPost();

        const ThirdPost = await create3rdPost();
        console.log(ThirdPost);

        const FourthPost = await create4thPost()
        console.log(FourthPost);

         await deletePost();
        console.log(`After poping posts data`);
        printPost();
    } catch (error) {
        console.log('Some thing went wrong');
    }

}

postsData();
