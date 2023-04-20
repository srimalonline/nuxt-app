export default defineNuxtRouteMiddleware((to, from) => {
    // console.log(from);
    // to is the destination route
    console.log(to);
    // from is the source route
    const isLoggedIn = false;
    if (isLoggedIn) {
        // redirect to the page we want to go
    }
    // redirect to login page
})