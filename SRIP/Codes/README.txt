Lab Name: QUANTUM CHEMISTRY
Experiment Name: GEOMETRIC OPTIMIZATION USING AB INITIO CALCULATIONS


Start of the experiment:

1. Before start of the experiment, ensure that the browser is compatible with JS and its libraries.(here: jquery)
2. To start the experiment, Open the header.html page.
3. Click "Start the experiment" to navigate to other page with a navigation tab.
4. Choose an option from tha tab to run the experiment for that molecule.



Z-matrix calculation:

1. After selecting a molecule, you can see the molecule diagram on left side, simulator container in the middle, some options to the right.

2. For the simuation to work , first calculate the z-matrix for the given molecule.

 			Z-matrix : It is calculated by identifying each atom in a molecule by a bond distance, bond angle and dihedral angle 
 			            (so called internal coordinates) in relation to other atoms in the molecule.

3. Select an atom from the drop down list and click "Render" to add that atom to the z-matrix.

4. Next, select other atom along with the adjacent atoms' positions.This can be done by identifying the respective numbers of the atoms in 	
   the order added i.e.; ith atom has number 'i'.

5. Continue to add the other atoms to complete the entire structure of the molecule.
	
	For example, consider water molcelue H2O :
	
	It consists of 3 atoms, their numbers are O-1, H-2 ,H-3
	i. First add an oxygen atom '1'.
	ii. Next add a hydrogen atom '2' : (H 1)
			here, H 1 represents the atom H with number '2' is bonded with atom number '1' (O atom). 
	iii. Finally, add another hydrogen atom'3' : ( H 1 2) 
		  to complete the molecule.
					(Z-matrix calculations for each molecule is given below)

		1.	O   
		2.	H  1   0.9473206
		3.	H  1   0.9473206  2   105.4977920

		-->	 H 1 represents the atom H with number '2' is bonded with atom number '1' (O atom). Bond length = 0.9473206 Armstrong
		-->	 H 1 2 gives the angle between atom H '3' , H '2' ,O '1' = 105.4977920 degrees

6. At each step, the page displays the result of the selection of an atom and their adjacent atoms.
		i. If the selection is correct, "Correct Answer" is dispalyed.
		ii. If not, "Incorrect option, Try Again!"

7. Select 'Go to next step' button.





General Atomic and Molecular Electronic Structure System (GAMESS) :

GAMESS Input and Output:

1. The page directs to other one which displays Gamess software, procedures and methods used.

2. Click 'Go to next step' button.

3. The next page displays the generated Gamess input file. It contains the optimized calculation of z-matrix for that matrix.

4. Click 'Run Gamess' button.

5. The next page shows the output generated from Gamess calculation.





Z-matrix Calcualtions for each molecule:

1. Water (H2O) :

atom-number atom 
----------- ----
	1.		O   
	2.		H  1   
	3.		H  1  2  

2. Ammonia (NH3) :

		1.	N
		2.	H  1 
		3.	H  1  2 
		4.	H  1  2  3 

3. Formaldehyde (CH2O) :

		1.	O
		2.	C  1
		3.	H  2  1
		4.	H  2  1  3

4. Methane (CH4):

		1.	C
		2.	H  1
		3.	H  1  2
		4.	H  1  2  3
		5.	H  1  2  3

5. Benzene (C6H6):

		1.	C
		2.	C  1
		3.	C  2  1
		4.	C  3  2  1
		5.	C  4  3  2
		6.	C  1  2  3
		7.	H  1  6  5
		8.	H  2  1  6
		9.	H  3  2  1
		10.	H  4  3  2
		11.	H  5  4  3
		12.	H  6  1  2

