<?php
require_once "simple_html_dom.php";
function parse_one_file($filename){
  
  $html = file_get_html($filename);
  $scripts = array();
  $title = '';
  foreach($html->find('title') as $e){
    $title = $e->innertext;
  }

  foreach($html->find('script') as $e){
    $text = $e->innertext;
    //print $text."\n   below\n";
        
    //$text = preg_replace("/\n\s*/","\n",$text);
    $text = str_replace("\n        ","\n",$text);
    //print $text."\n";
    //die;
    $text = str_replace('alert','print',$text);
    //print $text;
    $scripts[] = $text;
  }

  $content = "//https://github.com/nzakas/professional-javascript/blob/master/".$filename."\n";
  $content .= "//$title";
  foreach($scripts as $script_text){
    $content .= $script_text;
  }
  print "\nwrite to file ".$filename."\n";
  file_put_contents(str_replace('.htm','.js',$filename),$content);
}

$dir = $path[] = "edition2";
/*$filename = 'test.htm';
parse_one_file($filename);
die;
*/
while(count($path) != 0)
{
  $v = array_shift($path);
  foreach(glob($v) as $item)
  {
    //print $item."\n";
    if (is_dir($item))
      $path[] = $item . '/*';
    elseif (is_file($item))
    {
      //do something
      if(preg_match('/.htm$/i',$item)){
        print $item."\n";
		parse_one_file($item);
      }
    }
  }
}
die;
/*foreach(glob($dir) as $file){
  $filename = $file.'.js';
   print $file."\n";
  if(!file_exists($filename)){
    print "parse filename = ".$file."\n";
    //parse_one_file($file);
  }else{
    continue;
  }
  }*/
?>
