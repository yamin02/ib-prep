// FirebaseUI config.
var uiConfig = {
'callbacks': {
    'signInSuccess': function(currentUser, credential, redirectUrl) {
        console.log(currentUser.email, currentUser, credential)
        location.href = "index.html"
        // Do something.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return false;
    }
    },
    'signInOptions': [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    'tosUrl': '/'
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);