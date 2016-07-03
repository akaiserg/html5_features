<?php 

header("Content-Type: text/event-stream");
$value= "The time is ".date("h:i:sa");
echo "data: ".$value."\n\n";
