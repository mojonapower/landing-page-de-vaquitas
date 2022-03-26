import React from "react";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<Navbar titulo="Mi Super Navbar" />
			<div className="row">
				<Card
					img="http://www.masquesaludanimal.es//posts/asset_upload_file89331_522110.jpg"
					titulo="Mira! es peludita"
				/>
				<Card
					img="https://dkt6rvnu67rqj.cloudfront.net/sites/default/files/styles/max_1000/public/media/cr_files/nariz.jpg?itok=l93S3p1h"
					titulo="Una vaca tradicional"
				/>
			</div>
		</div>
	);
};

export default Home;
