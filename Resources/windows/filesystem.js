/**
 * @file
 * Fileystem Examples.
 * 
 * @see https://wiki.appcelerator.org/display/guides/Filesystem+Access+and+Storage
 */

W.Filesystem = function() {
  var win = UI.Win({title:'Filsystem Examples'});
  var label = Ti.UI.createLabel({
    text:'Everything is happening in the log file...',
    textAlign:'center',
    font:{fontSize:14}
  });
  win.add(label);
  
  /**
   * Places where data can be stored on a device.
   */
  // Application Directory (read/write)
  // This will be THE directory to store most of the files used.
  var appDir = Ti.Filesystem.getApplicationDataDirectory();
  Ti.API.log('The application directory is ' + appDir);
  
  // Resources Directory (read only).
  // This is where all the files from the Resources directory
  // are stored on the device.
  var resourceDir = Ti.Filesystem.getResourcesDirectory();
  Ti.API.log('The resources directory is ' + resourceDir);
  
  // Temporary Directory (read/write).
  // Store files here temporarily.
  var tempDir = Ti.Filesystem.getTempDirectory();
  Ti.API.log('The temporary directory is ' + tempDir);
  
  
  
  /**
   * File Handle
   * Every file action requires a file handle.
   * If the file doesn't exist, the file handle
   * can still be used to write data to it.
   */
  
  // Writing to a file.
  var file = Ti.Filesystem.getFile(appDir, 'emptyfile.txt');
  // Determine if this file exists.
  if (!file.exists()) {
    Ti.API.log('The file emptyfile.txt does not exist yet. Let us add some data to it!');
    file.createFile(); // This is unnecessary, because Titanium creates take of this automatically.
  }
  // Write data to the file.
  file.write('foo file');
  
  // Copying a file from the Resources directory into the app directory.
  var imageFile = Ti.Filesystem.getFile(resourceDir, 'images/photo.png');
  Ti.API.log('The original location of the image file is: ' + imageFile.nativePath);
  var imageFileNew = Ti.Filesystem.getFile(appDir, 'photo.png');
  imageFileNew.write(imageFile.read());
  // Log some information about the new image file.
  var newImageContent = imageFileNew.read();
  Ti.API.log('The content of the new image file is: ' + newImageContent);
  Ti.API.log('The text output of the new image file is: ' + newImageContent.text);
  Ti.API.log('The mime type of the new image file is: ' + newImageContent.mimeType);
  
  // Reading from a file.
  var file = Ti.Filesystem.getFile(appDir, 'emptyfile.txt');
  var fileContent = file.read();
  Ti.API.log('The content of emptyfile.txt is: ' + fileContent);
  
  // Deleting files.
  var file = Ti.Filesystem.getFile(appDir, 'photo.png');
  // Delete the photo.png file if it exists.
  if (file.exists()) {
    var success = file.deleteFile();
    var log = (success === true) ? 'File was deleted successfully' : 'There was an error deleting the file';
    Ti.API.log(log);
  }
  
  
  
  /**
   * Directories
   * 
   * Titanium's "File Object" is used for both files 
   * and directories. When working with directories,
   * the functions are different, e.g. createDirectory
   * instead of createFile.
   */
  // Create a file to start out with.
  var file = Ti.Filesystem.getFile(appDir, 'myfile.txt');
  file.write('foo');
  
  // Create a new subdirectory.
  var subDir = Ti.Filesystem.getFile(appDir, 'subDir');
  subDir.createDirectory();
  // Let's make sure this directory exists.
  if (subDir.exists()) {
    Ti.API.log('The subdirectory subDir was successfully created.');
  }
  
  // Move the file we just created into that directory.
  file.move(appDir + 'subDir/myFile.txt');
  var subDirListing = subDir.getDirectoryListing();
  Ti.API.log('A list of files in the subDir directory: ' + subDirListing);
  
  // Directories with files can only be deleted if the 
  // recursive flag is set to true.
  if (subDir.deleteDirectory() === false) {
    Ti.API.log('The subDir directory was not deleted right away, because it still had files in it.')
    Ti.API.log('Delete recursively');
    subDir.deleteDirectory(true);
  }
  
  return win;
}
