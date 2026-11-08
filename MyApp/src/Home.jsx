import react from "react"
function Home(props) {
  
  return (
    <div style={{backgroundColor:"red", width:"100px",height:"800px", color:"white" ,padding:"20px" ,margintop:"20px"}}>
    <p>Home: {props.FullName}</p>
     <p>Age: {props.Age}</p>
      <p>Phone: {props.Phone}</p>
        
       

    </div>
  );
}

export default Home;
