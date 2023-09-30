console.log('Person1: shows ticket');
console.log('Person2: shows ticket');

const preMovie = async () => {
    const promiseWifeBringingTickets = new Promise((resolve, reject) => {
        setTimeout(() => resolve('tickets'), 2000);
    });

    let getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));

    let addButter = new Promise((resolve, reject) => resolve(`Butter`));

    let getColdDrinks = new Promise((resolve, reject) => resolve('Cold Drink'))

    let ticket = await promiseWifeBringingTickets;

    console.log(`wife: I have the ${ticket}`)
    console.log('husband: we should go in');
    console.log('wife: no I am hungry');

    let popcorn = await getPopcorn;

    console.log(`husband: I got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: I need butter on my popcorn');

    let Butter = await addButter;

    console.log(`husband: I got some ${Butter}`);
    console.log(`husband: anything else...?`);

    let ColdDrink = await getColdDrinks;

    console.log(`husband: I got ${ColdDrink}`);
    console.log(`husband: Want to anything more..?`)
    console.log('wife: lets go we are getting late');
    console.log('husband: Thank you for the remainder *grins*')

    return ticket;
}

//preMovie()
preMovie().then((m) => console.log(`Person3: shows ${m}`))

console.log('Person4: shows ticket');
console.log('Person5: shows ticket');