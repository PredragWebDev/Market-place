import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";

initializeFirebase()
const useFirebase = () => {
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()
    const facebookProvider= new FacebookAuthProvider()
    const githubProvider= new GithubAuthProvider()

    const [ user, setUser ] = useState({})
    const [ modal, setModal ] = useState(false)
    const [ authError, setAuthError ] = useState('');
    const [ isLoading, setIsLoading ] = useState(true)
    const [admin , setAdmin ] = useState(false)

    // observer user state
    useEffect( ()=>{
       const unsubscribe = onAuthStateChanged(auth, (user) =>{
            if(user){
                setUser(user)
                // setIsLoading(false)
            }else{  
                setUser(null)
               
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    },[])
// facebook function
const handleFacebookSingIn = () => {
    setIsLoading(true)

    signInWithPopup(auth, facebookProvider)
    .then(result => {
        const {displayName, photoURL,email} = result.user;
        console.log(result.user);
        const loggedInUser = {
            name:displayName,
            email:email,
            photo: photoURL
        }
        setUser(loggedInUser);
    }).catch((error) => {
        setAuthError(error.message)

      }).finally(() => setIsLoading(false));
}
// Github functon
const githubsignIn = () => {
    setIsLoading(true)

    signInWithPopup(auth, githubProvider)
  .then((result) => {
 
    const user = result.user;
    
    console.log(user)
  }).catch((error) => {
    setAuthError(error.message)
  }).finally(() => setIsLoading(false));

}
// google function 
    const googleSignIn = (location, navigate) =>{
        setIsLoading(true)
        signInWithPopup(auth,googleProvider)
        .then( result =>{
            setUser(result.user)
            saveUser(user.email, user.displayName, 'PUT');
            setAuthError('');
            // setModal(true)
            const destination = location?.state?.from || '/';
            navigate(destination);

                      
        })
        .catch( error =>{
            setAuthError(error.message)
        }).finally(() => setIsLoading(false));
    }

    // register function
    const registerUser = ( email,password, name , navigate ) =>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password )
        .then((userCredential) => {
          setAuthError('')
            const newUser = {email, displayName: name};
            console.log(newUser);
            setUser(newUser)
            saveUser(email, name , 'POST')
            
            updateProfile(auth.currentUser, {
                displayName: name 
              }).then(() => {
                setModal(true)
                
              }).catch((error) => {
                  setAuthError(error.massage)
               
              });
              navigate('/');
           
          })
          .catch((error) => {
            
            setAuthError(error.message);
            
          })
          .finally(() => setIsLoading(false));
    }

    // login function
    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                navigate(destination);
                // setModal(true)
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }  
    // admin
    useEffect( () => {
        fetch(`https://blooming-thicket-66783.herokuapp.com/users/${user.email} `)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    }, [user?.email])



    // logOut function
    const logOut = () =>{
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser(null)
          }).catch((error) => {
            setAuthError( error.message )
          }).finally(() => setIsLoading(false))
    }
    // https://blooming-thicket-66783.herokuapp.com/

    const saveUser = (email, displayName, method) => {
        console.log("saveUser")
        const user = { email, displayName };
        fetch('https://blooming-thicket-66783.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then( res => res.json() )
            .then(res => console.log(res))
    }


    return{
        user,
        admin,
        isLoading,
        authError,
        modal,
        githubsignIn,
        handleFacebookSingIn,
        googleSignIn,
        logOut,
        loginUser,
        registerUser,
    }
}

export default useFirebase;



