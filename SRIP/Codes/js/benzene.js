 //load z-matrix_calc onto this page. 'calculation' div contains the z-matrix calculation part
	  	$("document").ready(function() {
	        $('.c-atoms').load('benzene_z-matrix.html #ben1');
	    });


	/***********************************calculation for c atoms***************************************/
		var calc=0;
		//calculation step one
		function one1(){
			var a1 = document.getElementsByName("atom1")[0].value;
			if(a1=='C'){
				$('#ben1').load('benzene_z-matrix.html #ben1-1');
				document.getElementById("result").innerHTML="<p id='result1'>Correct Answer</p>";
				calc=11;
				change_controls();
			}
			else{
				document.getElementById("result").innerHTML="<p id='result2'>Incorrect Option, Try Again!</p>";
			}
			
	    
		}

		//calculation step two
		function one2(){
			var a2 = document.getElementsByName("atom2")[0].value;
			var num = document.getElementsByName("number")[0].value;
			if(a2=='C' && num=='1'){
				$('#ben1').load('benzene_z-matrix.html #ben1-2');
				document.getElementById("result").innerHTML="<p id='result1'>Correct Answer</p>";
				calc=12;
				change_controls();
			}
			else{
				document.getElementById("result").innerHTML="<p id='result2'>Incorrect Option, Try Again!</p>";
			}
		}

		//calculation step three
		function one3(){
			var a3 = document.getElementsByName("atom3")[0].value;
			var num1 = document.getElementsByName("number_1")[0].value;
			var num2 = document.getElementsByName("number_2")[0].value;
			if(a3=='C' && num1=='2' && num2=='1'){
				$('#ben1').load('benzene_z-matrix.html #ben1-3');
				document.getElementById("result").innerHTML="<p id='result1'>Correct Answer</p>";
				calc=13;
				change_controls();
			}
			else{
				document.getElementById("result").innerHTML="<p id='result2'>Incorrect Option, Try Again!</p>";
			}
		}

		//calculation step four
		function one4(){
			var a4 = document.getElementsByName("atom4")[0].value;
			var num1 = document.getElementsByName("number_1")[0].value;
			var num2 = document.getElementsByName("number_2")[0].value;
			var num3 = document.getElementsByName("number_3")[0].value;			
			if(a4=='C' && num1=='3' && num2=='2' && num3=='1'){
				$('#ben1').load('benzene_z-matrix.html #ben1-4');
				document.getElementById("result").innerHTML="<p id='result1'>Correct Answer</p>";
				calc=14;
				change_controls();
			}
			else{
				document.getElementById("result").innerHTML="<p id='result2'>Incorrect Option, Try Again!</p>";
			}
		}

		
		function one5(){
			var a5 = document.getElementsByName("atom5")[0].value;
			var num1 = document.getElementsByName("number_1")[0].value;
			var num2 = document.getElementsByName("number_2")[0].value;
			var num3 = document.getElementsByName("number_3")[0].value;			
			if(a5=='C' && num1=='4' && num2=='3' && num3=='2'){
				$('#ben1').load('benzene_z-matrix.html #ben1-5');
				document.getElementById("result").innerHTML="<p id='result1'>Correct Answer</p>";
				calc=15;
				change_controls();
			}
			else{
				document.getElementById("result").innerHTML="<p id='result2'>Incorrect Option, Try Again!</p>";
			}
		}

		function one6(){
			var a6 = document.getElementsByName("atom6")[0].value;
			var num1 = document.getElementsByName("number_1")[0].value;
			var num2 = document.getElementsByName("number_2")[0].value;
			var num3 = document.getElementsByName("number_3")[0].value;			
			if(a6=='C' && num1=='1' && num2=='2' && num3=='3'){
				$('#ben1').load('benzene_z-matrix.html #ben1-final');  //completion of C-atoms
				$('.h-atoms').load('benzene_z-matrix.html #ben2-1');   //start of H-atoms
				document.getElementById("result").innerHTML="<p id='result1'>Correct Answer</p>";
				calc=16;
				change_controls();
			}
			else{
				document.getElementById("result").innerHTML="<p id='result2'>Incorrect Option, Try Again!</p>";
			}
		}

		//***************************************calculation for H atoms********************************************
	
	    function two1(){
			var a7 = document.getElementsByName("atom7")[0].value;
			var num1 = document.getElementsByName("number_1")[0].value;
			var num2 = document.getElementsByName("number_2")[0].value;
			var num3 = document.getElementsByName("number_3")[0].value;			
			if(a7=='H' && num1=='1' && num2=='6' && num3=='5'){
				$('#ben1').load('benzene_z-matrix.html #ben1-final');  //completion of C-atoms
				$('#ben2-1').load('benzene_z-matrix.html #ben2-2');   //start of H-atoms
				document.getElementById("result").innerHTML="<p id='result1'>Correct Answer</p>";
				calc=21;
				change_controls();
			}
			else{
				document.getElementById("result").innerHTML="<p id='result2'>Incorrect Option, Try Again!</p>";
			}
		}

		function two2(){
			var a8 = document.getElementsByName("atom8")[0].value;
			var num1 = document.getElementsByName("number_1")[0].value;
			var num2 = document.getElementsByName("number_2")[0].value;
			var num3 = document.getElementsByName("number_3")[0].value;			
			if(a8=='H' && num1=='2' && num2=='1' && num3=='6'){
				$('#ben1').load('benzene_z-matrix.html #ben1-final');  
				$('#ben2-1').load('benzene_z-matrix.html #ben2-3');   
				document.getElementById("result").innerHTML="<p id='result1'>Correct Answer</p>";
				calc=22;
				change_controls();
			}
			else{
				document.getElementById("result").innerHTML="<p id='result2'>Incorrect Option, Try Again!</p>";
			}
		}

		function two3(){
			var a9 = document.getElementsByName("atom9")[0].value;
			var num1 = document.getElementsByName("number_1")[0].value;
			var num2 = document.getElementsByName("number_2")[0].value;
			var num3 = document.getElementsByName("number_3")[0].value;			
			if(a9=='H' && num1=='3' && num2=='2' && num3=='1'){
				$('#ben1').load('benzene_z-matrix.html #ben1-final');  
				$('#ben2-1').load('benzene_z-matrix.html #ben2-4');   
				document.getElementById("result").innerHTML="<p id='result1'>Correct Answer</p>";
				calc=23;
				change_controls();
			}
			else{
				document.getElementById("result").innerHTML="<p id='result2'>Incorrect Option, Try Again!</p>";
			}
		}

		function two4(){
			var a10 = document.getElementsByName("atom10")[0].value;
			var num1 = document.getElementsByName("number_1")[0].value;
			var num2 = document.getElementsByName("number_2")[0].value;
			var num3 = document.getElementsByName("number_3")[0].value;			
			if(a10=='H' && num1=='4' && num2=='3' && num3=='2'){
				$('#ben1').load('benzene_z-matrix.html #ben1-final');  
				$('#ben2-1').load('benzene_z-matrix.html #ben2-5');   
				document.getElementById("result").innerHTML="<p id='result1'>Correct Answer</p>";
				calc=24;
				change_controls();
			}
			else{
				document.getElementById("result").innerHTML="<p id='result2'>Incorrect Option, Try Again!</p>";
			}
		}

		function two5(){
			var a11 = document.getElementsByName("atom11")[0].value;
			var num1 = document.getElementsByName("number_1")[0].value;
			var num2 = document.getElementsByName("number_2")[0].value;
			var num3 = document.getElementsByName("number_3")[0].value;			
			if(a11=='H' && num1=='5' && num2=='4' && num3=='3'){
				$('#ben1').load('benzene_z-matrix.html #ben1-final');  //completion of C-atoms
				$('#ben2-1').load('benzene_z-matrix.html #ben2-6');   //start of H-atoms
				document.getElementById("result").innerHTML="<p id='result1'>Correct Answer</p>";
				calc=25;
				change_controls();
			}
			else{
				document.getElementById("result").innerHTML="<p id='result2'>Incorrect Option, Try Again!</p>";
			}
		}

		function two6(){
			var a12 = document.getElementsByName("atom12")[0].value;
			var num1 = document.getElementsByName("number_1")[0].value;
			var num2 = document.getElementsByName("number_2")[0].value;
			var num3 = document.getElementsByName("number_3")[0].value;			
			if(a12=='H' && num1=='6' && num2=='1' && num3=='2'){
				$('#ben1').load('benzene_z-matrix.html #ben1-final');  //completion of C-atoms
				$('#ben2-1').load('benzene_z-matrix.html #ben2-final');   //start of H-atoms
				document.getElementById("result").innerHTML="<p id='result1'>Correct Answer</p>";
				calc=26;
				change_controls();
			}
			else{
				document.getElementById("result").innerHTML="<p id='result2'>Incorrect Option, Try Again!</p>";
			}
		}

		//submit button action 
		function submit(){
			var molecule_name="benzene";
			localStorage.setItem('molecule',molecule_name);
			window.document.location='./gamessinput.html';
		}


		function change_controls(){
		 	var sp = document.control_options.spacefill.value.split(" ");
		    var wr = document.control_options.wireframe.value; 
		    scene.remove.apply(scene, scene.children);  
			molecule(sp[0],sp[1],wr);
		 }