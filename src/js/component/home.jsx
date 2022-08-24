import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";



//create your first component
const Home = () => {
	const [color1,setColor1]= useState(""); 
	return (
	<div className="text-center">
		<div className="card" style={{width: "18rem"}}>
  			<div className="card-body justify-content-center" style={{height: "450px", background: "grey"}}>
				<div className={"rounded-circle bg-danger " + (color1 === "bg-danger" ? "shadow-lg" : "")} style={{width: "100%", height: "130px"}} onClick={()=>setColor1("bg-danger")}> </div>
				<div className={"rounded-circle bg-warning " + (color1 === "bg-warning"? "shadow-lg" : "")} style={{width: "100%", height: "130px"}} onClick={()=>setColor1("bg-warning")}> </div>
				<div className={"rounded-circle bg-success " + (color1 === "bg-success" ? "shadow-lg" : "")} style={{width: "100%", height: "130px"}} onClick={()=>setColor1("bg-success")}> </div>
			</div>
		</div>
	</div>
	)
};

export default Home;
