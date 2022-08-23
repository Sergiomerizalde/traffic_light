import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";



//create your first component
const Home = () => {
	const [color1,setColor1]= useState(""); 
	const [color2,setColor2]= useState("");
	const [color3,setColor3]= useState("");

	function colores() {
		if(color1 === "") {
			setColor1("shadow-lg")
		} else if(color2 === "shadow-lg" || color3 === "shadow-lg") {
			setColor2("")
			setColor3("")
		}
		if(color2 === "") {
			setColor2("shadow-lg")
		} else if(color1 === "shadow-lg" || color3 === "shadow-lg") {
			setColor1("")
			setColor3("")
		}
		if(color3 === "") {
			setColor3("shadow-lg")
		}else if(color2 === "shadow-lg" || color1 === "shadow-lg") {
			setColor2("")
			setColor1("")
		}
	}

	return (
		<div className="text-center">
		<div className="card justify-content-center" style={{width: "18rem"}}>
  			<div className="card-body" style={{height: "350px", background: "grey"}}>
				<div className={"rounded-circle bg-danger " + color1} style={{width: "100%", height: "100px"}} onClick={colores}> </div>
				<div className={"rounded-circle bg-warning " + color2} style={{width: "100%", height: "100px"}} onClick={colores}> </div>
				<div className={"rounded-circle bg-success " + color3} style={{width: "100%", height: "100px"}} onClick={colores}> </div>
			</div>
		</div>
		</div>
	)
};

export default Home;
