import { Box } from "@mui/system";
import { Button, Alert, Grid } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUsers } from "../../redux/action";

const AddUser = () => {
  const initialFormState = {
  
    taskName: "",
    description: "",
    date: "",
    time: "",
    priority:'low',
  };
  const [user, setUser] = useState(initialFormState);
  const [error, setError] = useState("");

  let dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };
const navigate = useNavigate();
  return (
    <div className="mt-10 addUser">
      <Box
        sx={{
          "& > :not(style)": { m: 1},
        }}
      >
        {error && <h3>{error}</h3>}

        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (!user.taskName || !user.description || !user.date || !user.time|| !user.priority) {
              setError("please fill all input filed");
            } else {
              dispatch(addUsers(user));
              setError("");
              alert("add data");
              navigate('/')
            }
          }}
          className='form'
        >
          <Grid container style={{justifyContent:'center'}}>
            <Grid xs={12} md={6} p={1} my={2}>
          <label className='lable'>Task Name</label>
          <input
            type="text"
            name="taskName"
            value={user.taskName}
            onChange={handleInputChange}
            className='input-text'
          />
          <label className='lable'>Description</label>
          <input
            type="text"
            name="description"
            value={user.description}
            onChange={handleInputChange}
            className='input-text'
          />
          <label className='lable'>Date</label>
          <input
            type="date"
            name="date"
            value={user.date}
            onChange={handleInputChange}
            className='input-text'
            placeholder="Select Date"
          />
          <label className='lable'>Time</label>
          <input
            type="time"
            name="time"
            value={user.time}
            onChange={handleInputChange}
            className='input-text'
            placeholder="Select Time"
          />
          <label className='lable'>Priority</label>
          <select value={user.priority} name='priority' onChange={handleInputChange}  className='input-text'>
            <option value='low'>Low</option>
            <option value='heigh'>Heigh</option>
            <option value='normal'>Normal</option>
          </select>
      
          <div className='btnMain'>
          <Button
            type="submit"
            variant="contained"
            aria-label="outlined primary "
            className="submit"
            
          >
            AddTask
          </Button>
          </div>
          </Grid>
          </Grid>
        </form>
      </Box>
    </div>
  );
};

export default AddUser;



