import { useEffect, useState } from "react"

const useToken = user =>{
    const [token,setToken] = useState('');
    useEffect(()=>{
        const name = user?.user.name;
        console.log(user)
        const email = user?.user?.email;
        const currentName = {name: name};
        const currentUser = {email: email};
        
        if(email){
            fetch(`https://warm-brushlands-82465.herokuapp.com/user/${email}`, {
                method:'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(currentName,currentUser)
            })
            .then(res=>res.json())
            .then(data => console.log(' data usetoken',data))
    }
}
    ,[user])
    return [token];
}
    export default useToken;
