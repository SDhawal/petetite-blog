const Navbar  = () => {
    return (  
        <nav className="navbar">
            <h1>The Petetitie Blog</h1>
            <div className="links">
                <a href="#">Home</a>
                <a href="/create">New Blog</a> 
            </div>
        </nav>
    );
}
 
export default Navbar;
/* //
                style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}
                style as dynamic value  inner curly braces are the object of JS
                its more like a key value */