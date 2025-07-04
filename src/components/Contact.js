const Contact=()=>{
    return(
        <div>
            <h1 className="font-bold text-3xl m-4 p-4">Contact Us Page</h1>
            <form>
                <input type="text" placeholder="Enter your name" className="border border-black p-2 m-2"/>
                <input type="text" placeholder="Enter your Phone Number" className="border border-black p-2 m-2"/>
                <button className="border border-black text-white p-2 mx-4 bg-blue-500 rounded-2xl hover:bg-blue-700">Submit</button>

            </form>
        </div>
    )
}

export default Contact;