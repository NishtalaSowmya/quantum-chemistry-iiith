//water molecule
function water(){
	
		var camera = new THREE.PerspectiveCamera(35, (window.innerWidth/4) / (window.innerHeight/2), 0.1, 3000);
		var scene = new THREE.Scene();
		
		var renderer = new THREE.WebGLRenderer();
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth/4, window.innerHeight/2);
		document.getElementById('simulator').appendChild(renderer.domElement);
	//initial dimensions
		var O_radius = 80;
		var H_radius = 50;
		var bond_radius = 10;
		
	//Creating molecule
		
		//light on the screen
			var light = new THREE.AmbientLight(0xffffff, 0.5);
			scene.add(light);
			var light1 = new THREE.PointLight(0xffffff, 0.5);
			scene.add(light1);

		//Creating atoms
			var oxygen_Geo = new THREE.SphereGeometry( O_radius, 50, 200 ); //Geometry
			var hydrogen_Geo = new THREE.SphereGeometry( H_radius, 50, 200 );

			var hydrogen_material = new THREE.MeshPhongMaterial({color: '#C0C0C0'}); //Material
			var oxygen_material = new THREE.MeshPhongMaterial({color: 'red'}); 

			var hydrogen_mesh= new THREE.Mesh(hydrogen_Geo, ); //Mesh
			var oxygen_mesh = new THREE.Mesh(oxygen_Geo, );

		//Adjusting the position (matrix)
			oxygen_mesh.updateMatrix();
			hydrogen_mesh.position.y=200;
			hydrogen_mesh.updateMatrix();

		//Creating Bonds
			var bond_Geo = new THREE.CylinderGeometry( bond_radius, bond_radius, 200, 32);
			var bond_mesh = new THREE.Mesh(bond_Geo, );
			bond_mesh.position.y=100;
			bond_mesh.updateMatrix();

		//Merging bond and Hydrogen atoms
			var temp=new THREE.Geometry();
			temp.merge(hydrogen_mesh.geometry, hydrogen_mesh.matrix);
			temp.merge(bond_mesh.geometry, bond_mesh.matrix);
			//H1+bond
			var temp_mesh = new THREE.Mesh(temp, );
			temp_mesh.applyMatrix( new THREE.Matrix4().makeRotationZ( -Math.PI / 4 ) );
			//H2+bond
			var temp_mesh1 = new THREE.Mesh(temp, );
			temp_mesh1.applyMatrix( new THREE.Matrix4().makeRotationZ( Math.PI / 4 ) );


        //Merging the atoms 
			var geo=new THREE.Geometry();
				
			geo.merge(temp_mesh1.geometry,temp_mesh1.matrix,0);
			geo.merge(temp_mesh.geometry,temp_mesh.matrix,1);
			geo.merge(oxygen_mesh.geometry,oxygen_mesh.matrix,2);

			var mesh = new THREE.Mesh(geo, new THREE.MeshFaceMaterial([hydrogen_material,hydrogen_material,oxygen_material]));
			scene.add(mesh);
			mesh.position.set(0,0,-1000);
			renderer.render( scene, camera );

		// Event Listener (on screen resize)
	  	window.addEventListener( 'resize', onWindowResize, false );

		// Resize
		function onWindowResize() {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize( window.innerWidth/4, window.innerHeight/2 );
		}
}


/****************************************************************************************************************************/


function ammonia(){
	
		var camera = new THREE.PerspectiveCamera(35, (window.innerWidth/4) / (window.innerHeight/2), 0.1, 3000);
		var scene = new THREE.Scene();
		
		var renderer = new THREE.WebGLRenderer();
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth/4, window.innerHeight/2);
		document.getElementById('simulator').appendChild(renderer.domElement);

		var N_radius = 100;
		var H_radius = 55;
		var bond_radius = 12;
			
		//light on the screen
			var light = new THREE.AmbientLight(0xffffff, 0.5);
			scene.add(light);
			var light1 = new THREE.PointLight(0xffffff, 0.5);
			scene.add(light1);

		//Creating atoms
			var nitrogen_Geo = new THREE.SphereGeometry( N_radius, 50, 200 ); //Geometry
			var hydrogen_Geo = new THREE.SphereGeometry( H_radius, 50, 200 );

			var hydrogen_material = new THREE.MeshPhongMaterial({color: '#C0C0C0'}); //Material
			var nitrogen_material = new THREE.MeshPhongMaterial({color: 'blue'}); 

			var hydrogen_mesh= new THREE.Mesh(hydrogen_Geo, ); //Mesh
			var nitrogen_mesh = new THREE.Mesh(nitrogen_Geo, );

		//Adjusting the position (matrix)
			nitrogen_mesh.updateMatrix();
			hydrogen_mesh.position.y=225;
			hydrogen_mesh.updateMatrix();

		//Creating Bonds
			var bond_Geo = new THREE.CylinderGeometry( bond_radius, bond_radius, 250, 32);
			var bond_mesh = new THREE.Mesh(bond_Geo, );
			bond_mesh.position.y=100;
			bond_mesh.updateMatrix();

		//Merging bond and Hydrogen atoms
			var temp1 = new THREE.Geometry();
			temp1.merge(hydrogen_mesh.geometry, hydrogen_mesh.matrix);
			temp1.merge(bond_mesh.geometry, bond_mesh.matrix);
			
			//H1+bond
			var temp_mesh1 = new THREE.Mesh(temp1, );
			temp_mesh1.applyMatrix( new THREE.Matrix4().makeRotationZ( Math.PI / 1.3) );
			temp_mesh1.applyMatrix( new THREE.Matrix4().makeRotationY( -Math.PI / 1 ) );
			temp_mesh1.applyMatrix( new THREE.Matrix4().makeRotationX( Math.PI / 3.5 ) );

			//H2+bond
			var temp_mesh2 = new THREE.Mesh(temp1, );
			temp_mesh2.applyMatrix( new THREE.Matrix4().makeRotationZ( -Math.PI / 1.3 ) );
			temp_mesh2.applyMatrix( new THREE.Matrix4().makeRotationY( Math.PI / 1 ) );
			temp_mesh2.applyMatrix( new THREE.Matrix4().makeRotationX( Math.PI / 3.5 ) );
 			
 			//H3+bond
			var temp_mesh3 = new THREE.Mesh(temp1, );
			temp_mesh3.applyMatrix( new THREE.Matrix4().makeRotationZ( Math.PI/ 1.3 ) );
			temp_mesh3.applyMatrix( new THREE.Matrix4().makeRotationY( Math.PI / 2 ) );
			temp_mesh3.applyMatrix( new THREE.Matrix4().makeRotationX( -Math.PI / 12) ); 

        //Merging the atoms 
			var geo=new THREE.Geometry();

			geo.merge(temp_mesh2.geometry,temp_mesh2.matrix,0);
			geo.merge(temp_mesh1.geometry,temp_mesh1.matrix,1);
			geo.merge(temp_mesh3.geometry,temp_mesh3.matrix,2);
			geo.merge(nitrogen_mesh.geometry,nitrogen_mesh.matrix,3);

			var mesh = new THREE.Mesh(geo, new THREE.MeshFaceMaterial([hydrogen_material,hydrogen_material,hydrogen_material,nitrogen_material]));
			
			scene.add(mesh);
			mesh.position.set(0,50,-1000);
			renderer.render( scene, camera );

		// Event Listener (on screen resize)
	  	window.addEventListener( 'resize', onWindowResize, false );

		// Resize
		function onWindowResize() {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize( window.innerWidth/4, window.innerHeight/2 );
		}

}



/******************************************************************************************************************************/


function formaldehyde(){
		var camera = new THREE.PerspectiveCamera(35, (window.innerWidth/4) / (window.innerHeight/2), 0.1, 3000);
		var scene = new THREE.Scene();
		
		var renderer = new THREE.WebGLRenderer();
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth/4, window.innerHeight/2);
		document.getElementById('simulator').appendChild(renderer.domElement);
		
		var C_radius = 90;
		var O_radius = 80;
		var H_radius = 50;
		var bond_radius = 10;
		var bond_radius_oxy = 6;
		
	//Creating molecule
		//light on the screen
			var light = new THREE.AmbientLight(0xffffff, 0.5);
			scene.add(light);
			var light1 = new THREE.PointLight(0xffffff, 0.5);
			scene.add(light1);

		//Creating atoms
			var carbon_Geo = new THREE.SphereGeometry( C_radius, 50, 200 ); //Geometry
			var oxygen_Geo = new THREE.SphereGeometry( O_radius, 50, 200 ); //Geometry
			var hydrogen_Geo = new THREE.SphereGeometry( H_radius, 50, 200 );

			var hydrogen_material = new THREE.MeshPhongMaterial({color: '#C0C0C0'}); //Material
			var oxygen_material = new THREE.MeshPhongMaterial({color: 'red'}); 
			var carbon_material = new THREE.MeshPhongMaterial({color: 'yellow'}); 

			var hydrogen_mesh= new THREE.Mesh(hydrogen_Geo, ); //Mesh
			var oxygen_mesh = new THREE.Mesh(oxygen_Geo, );
			var carbon_mesh = new THREE.Mesh(carbon_Geo, );

		//Adjusting the position (matrix)
			carbon_mesh.updateMatrix();
			oxygen_mesh.position.y=230;
			oxygen_mesh.updateMatrix();
			hydrogen_mesh.position.y=230;
			hydrogen_mesh.updateMatrix();

		//Creating Bonds
			var bond_Geo = new THREE.CylinderGeometry( bond_radius, bond_radius, 200, 32);
			var bond_mesh = new THREE.Mesh(bond_Geo, );
			var bond_Geo_oxy1 = new THREE.CylinderGeometry( bond_radius_oxy, bond_radius_oxy , 200, 32);
			var bond_mesh_oxy1 = new THREE.Mesh(bond_Geo_oxy1, );
			var bond_Geo_oxy2 = new THREE.CylinderGeometry( bond_radius_oxy, bond_radius_oxy , 200, 32);
			var bond_mesh_oxy2 = new THREE.Mesh(bond_Geo_oxy2, );
			
			bond_mesh.position.y=120;
			bond_mesh_oxy1.position.y=120;
			bond_mesh_oxy2.position.x=0;
			bond_mesh_oxy2.position.y=120;
			bond_mesh_oxy2.position.x=15;
			
			bond_mesh.updateMatrix();
			bond_mesh_oxy1.updateMatrix();
			bond_mesh_oxy2.updateMatrix();

			//Merging bond and Hydrogen atoms
			var temp1 = new THREE.Geometry();
			temp1.merge(hydrogen_mesh.geometry, hydrogen_mesh.matrix);
			temp1.merge(bond_mesh.geometry, bond_mesh.matrix);

			//Merging bonds and Oxygen atom
			var temp = new THREE.Geometry();
			temp.merge(oxygen_mesh.geometry, oxygen_mesh.matrix);
			temp.merge(bond_mesh_oxy1.geometry, bond_mesh_oxy1.matrix);
			temp.merge(bond_mesh_oxy2.geometry, bond_mesh_oxy2.matrix);

			//O+2bonds
			var temp_oxy = new THREE.Mesh(temp, );
			
			//H2+bond
			var temp_mesh = new THREE.Mesh(temp1, );
			temp_mesh.applyMatrix( new THREE.Matrix4().makeRotationZ( Math.PI / 1.3 ) );
			temp_mesh.applyMatrix( new THREE.Matrix4().makeRotationY( -Math.PI / 1 ) );
			
			//H1+bond
			var temp_mesh1 = new THREE.Mesh(temp1, );
			temp_mesh1.applyMatrix( new THREE.Matrix4().makeRotationZ( -Math.PI/ 1.3 ) );
			temp_mesh1.applyMatrix( new THREE.Matrix4().makeRotationY( Math.PI / 1 ) );
			
            //Merging the atoms 
			var geo=new THREE.Geometry();

				geo.merge(temp_oxy.geometry,temp_oxy.matrix,0);
				geo.merge(temp_mesh1.geometry,temp_mesh1.matrix,1);
				geo.merge(temp_mesh.geometry,temp_mesh.matrix,2);
				geo.merge(carbon_mesh.geometry,carbon_mesh.matrix,3);

				var mesh = new THREE.Mesh(geo, new THREE.MeshFaceMaterial([oxygen_material,hydrogen_material,hydrogen_material,carbon_material]));
			
			
			scene.add(mesh);
			mesh.position.set(0,50,-1200);
			renderer.render( scene, camera );

		// Event Listener (on screen resize)
	  	window.addEventListener( 'resize', onWindowResize, false );

		// Resize
		function onWindowResize() {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize( window.innerWidth/4, window.innerHeight/2 );
		}
}


/*****************************************************************************************************************************/


function methane(){
		var camera = new THREE.PerspectiveCamera(35, (window.innerWidth/4) / (window.innerHeight/2), 0.1, 3000);
		var scene = new THREE.Scene();
		
		var renderer = new THREE.WebGLRenderer();
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth/4, window.innerHeight/2);
		document.getElementById('simulator').appendChild(renderer.domElement);
	
}

/******************************************************************************************************************************/


function benzene(){
		var camera = new THREE.PerspectiveCamera(35, (window.innerWidth/4) / (window.innerHeight/2), 0.1, 3000);
		var scene = new THREE.Scene();
		
		var renderer = new THREE.WebGLRenderer();
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth/4, window.innerHeight/2);
		document.getElementById('simulator').appendChild(renderer.domElement);
	
}


/******************************************************************************************************************************/


function c_60(){
		var camera = new THREE.PerspectiveCamera(35, (window.innerWidth/4) / (window.innerHeight/2), 0.1, 3000);
		var scene = new THREE.Scene();
		
		var renderer = new THREE.WebGLRenderer();
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth/4, window.innerHeight/2);
		document.getElementById('simulator').appendChild(renderer.domElement);
	
}