param($installPath, $toolsPath, $package, $project)

$file = $project.ProjectItems | ForEach-Object { $_.ProjectItems } | where { $_.Name -eq "_references.js" }
if($file) {
    $file.Open()
    $file.Document.Activate()
    $file.Document.Selection.StartOfDocument()
	$file.Document.Selection.Insert("/// <reference path=`"array.extensions.js`" />`n")
}