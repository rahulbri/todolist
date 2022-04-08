



import { Box} from '@mui/system'
import { Button} from '@mui/material';


import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { editUsers, UpdateUsers} from "../../redux/action";
import { useParams } from 'react-router-dom';


const EditUser = () => {
  const initialFormState = { id: null, 
        name: "",
        email: "",
        address: "",
        contact: "",
     }
  const [user, setUser] = useState(initialFormState)

  const [error,setError]=useState('');
  let {id}=useParams();


  const users=useSelector((state)=>state.data)

//   console.log("users",users);

    // console.log("Name",users.user.name);
    
  let dispatch = useDispatch()

  useEffect(() => {
    
  dispatch(editUsers(id))
//   console.log(editUsers(id));

  }, [])

  useEffect(()=>{

      if(users){
        setUser({ ...users.user })

      }

  },[users])
  

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <div className="mt-10">
     
          <Box
              
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
             
            >
                <h1>Edit Users</h1>
            {error && <h3>{error}</h3>}

            
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (!user.name || !user.email|| !user.address|| !user.contact){
          setError("please fill all input filed")

        }else {
          dispatch(UpdateUsers(user,id));
          setError('')
         alert(" update users data")
        }

        
       
        
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name || ""}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="email"
        value={user.email || ""}
        onChange={handleInputChange}
      />
            <label>address</label>
      <input
        type="text"
        name="address"
        value={user.address || ""}
        onChange={handleInputChange}
      />
            <label>contact</label>
      <input
        type="text"
        name="contact"
        value={user.contact || ""}
        onChange={handleInputChange}
      />
      <Button
            color="primary"
            type="submit"
            variant="contained"
            aria-label="outlined primary "
            style={{ margin: "30px" }}
          >
            Submit
          </Button>
    </form>

     
    </Box>

    </div>
  )
}

export default EditUser
