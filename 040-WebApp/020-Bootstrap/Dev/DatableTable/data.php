<?php
	header("Content-Type: application/json");
	
	$data = array(
		"data" => array(
			array("name" => "Tom", "age"=>25, "sex" => "m"), 
			array("name" => "Mary", "age"=>21, "sex" => "f"),
			array("name" => "Peter", "age"=>27, "sex" => "m")
		)		
	);
	
	echo json_encode($data);
?>