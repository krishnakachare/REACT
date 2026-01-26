// Private Folder: _foldername
// Only used for internal purpose, public URL won't be created
// Tip: If ever want to use a folder with "_" as URL use "%5" (encoded version of "_").
// Example change "_lib" to "%5lib" and access http://localhost:3000/%5lib
 
export default function PrivateRoute(){
    return <h1>You cannot view this in the browser</h1>
}