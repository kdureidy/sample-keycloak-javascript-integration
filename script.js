var keycloak = new Keycloak();
// keycloak.init({ promiseType: 'native' }).then(function(authenticated) {
//     alert(authenticated ? 'authenticated' : 'not authenticated');
// }).catch(function() {
//     alert('failed to initialize');
// });
keycloak.init({
    onLoad: 'login-required',
    promiseType: 'native',
}).then(function (authenticated) {
    console.log(authenticated ? 'authenticated' : 'not authenticated');
    if (authenticated) {
        keycloak.loadUserProfile()
            .then(function (profile) {
                console.log(JSON.stringify(profile, null, "  "));

                document.getElementById("username").innerText = profile.username;
                document.getElementById("email").innerText = profile.email;
                document.getElementById("firstName").innerText = profile.firstName;
                document.getElementById("lastName").innerText = profile.lastName;

                document.getElementById("content").removeAttribute("class");

            }).catch(function () {
                alert('Failed to load user profile');
            });
    }
}).catch(function () {
    alert('failed to initialize');
});
console.log(keycloak);