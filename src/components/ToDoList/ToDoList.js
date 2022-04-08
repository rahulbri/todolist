import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid,Button } from '@mui/material';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import {loadUsers, deleteUsers } from '../../redux/action';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';



export default function ToDoList() {
const dispatch = useDispatch();


  React.useEffect(() => {
 dispatch(loadUsers());
  
  },[]);


  const {users} = useSelector((state) => state.data)
    console.log("users,data",users.data);



    const handleDelete= (id)=>{
      if (window.confirm("are you sure delete this message")){
        dispatch(deleteUsers(id))
      }

    }

    const [searchs,setSearchs]=React.useState("");

  return (<>

{/* <input type='text' placeholder='search' onChange={event=> {setSearchs(event.target.value)}}/> */}
  <div className='mainCard'>
  {  users.data && users.data.filter((row)=>{
            if (searchs == ""){
              return row 
            }else if(row.date.toLowerCase().includes(searchs.toLowerCase())){
              return row
            }
            return
          }).map((row) => (
            <>
            {console.log('priority',row.priority)}
            <Card  
            className='card' key={row}
            >
              <CardActionArea
              className={row.priority=='heigh'? 'heigh' : row.priority=='low'? 'low' : 'normal' }
              > 
                <CardContent>
                  <Box className='subCard'>
                  <Typography gutterBottom variant="body2" component="div" style={{textTransform:'uppercase',fontWeight:700}}>
                    {row.priority}
                  </Typography>

                  <Button style={{color:'black'}}  onClick={()=>handleDelete(row.id)}><RemoveCircleOutlineOutlinedIcon/></Button>
                  </Box>
        
                <Box className='subCard'>
                <Typography gutterBottom variant="h6" component="div" style={{fontWeight:500}}> {row.taskName} </Typography>
                <Typography gutterBottom variant="subtitle2" component="div" style={{fontWeight:700,marginTop:'10px',fontSize:'13px'}}>{`${row.date} (${row.time})`} </Typography>
                </Box>
                  
                </CardContent>
              </CardActionArea>
            </Card>
            </>
          ))}
 
  </div>
    
    </>
  );
}




