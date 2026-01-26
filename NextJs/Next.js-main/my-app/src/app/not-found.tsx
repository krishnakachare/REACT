// Custom Not Found Page 
// It works same way as by default Not Found page but can also be triggerd programatically when needed (Used in Reviews Page)
// Also to make the message more specific we can create new Custom Not Foun Page (Used in Product Page)
export default function NotFound(){
    return(
        <div>
            <h2>Page Not Found</h2>
            <p>Could not find requested resouce</p>
        </div>
    )
}