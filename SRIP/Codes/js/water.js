	//load z-matrix_calc onto this page. 'calculation' div contains the z-matrix calculation part
	
		$("document").ready(function() {
	        $('#calculation').load('water_z-matrix.html #t1');
	    });

	//submit button action 
		function submit(){
			var molecule_name="water";
			localStorage.setItem('molecule',molecule_name);
			window.document.location='./gamessinput.html';
		}


		var calc=0;

	//calculation step one
		function first(){
			var a1 = document.getElementsByName("atom1")[0].value;
			if(a1=='O'){
				$('#t1').load('water_z-matrix.html #t2');
				document.getElementById("result").innerHTML="<p id='result1'>Correct Answer</p>";
				calc=1;
				change_controls();
			}
			else{
				document.getElementById("result").innerHTML="<p id='result2'>Incorrect Option, Try Again!</p>";
			}	    
		}

	//calculation step two
		function second(){
			var a2 = document.getElementsByName("atom2")[0].value;
			var num = document.getElementsByName("number")[0].value;
			if(a2=='H' && num=='1'){
				$('#t1').load('water_z-matrix.html #t3');
				document.getElementById("result").innerHTML="<p id='result1'>Correct Answer</p>";
				calc=2;
				change_controls();
			}
			else{
				document.getElementById("result").innerHTML="<p id='result2'>Incorrect Option, Try Again!</p>";
			}
		}

	//calculation step three
		function third(){
			var a3 = document.getElementsByName("atom3")[0].value;
			var num1 = document.getElementsByName("number_1")[0].value;
			var num2 = document.getElementsByName("number_2")[0].value;
			if(a3=='H' && num1=='1' && num2=='2'){
				$('#t1').load('water_z-matrix.html #t4');
				document.getElementById("result").innerHTML="<p id='result1'>Correct Answer</p>";
				calc=3;
				change_controls();
			}
			else{
				document.getElementById("result").innerHTML="<p id='result2'>Incorrect Option, Try Again!</p>";
			}
		}
		

		function change_controls(){
		 	var sp = document.control_options.spacefill.value.split(" ");
		    var wr = document.control_options.wireframe.value; 
		    scene.remove.apply(scene, scene.children);  
			molecule(sp[0],sp[1],wr);
		 }
 