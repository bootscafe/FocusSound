<?php
function print_new($entry_date,$days=3)
{
    $result=date("Ymd", mktime( 0,0,0,date("m") ,date("d") - $days, date("Y")));
    if ( $entry_date >= $result ) print "class=\"new\"";
}
?>