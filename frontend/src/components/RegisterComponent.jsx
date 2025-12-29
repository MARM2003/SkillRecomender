export default function RegisterComponent(){

    return(
        <>
            {/* <div className="flex-3">
                <div className=" mb-2">
                    <input type="email" name="" placeholder="E-mail" />
                </div>
                 <div className=" mb-2">
                    <input type="email" name="" placeholder="E-mail" />
                </div>
                 <div className="">
                    <input type="email" name="" placeholder="E-mail" />
                </div>
                <div>
                    <p>------OR------</p>
                    <button>continue with Google</button>
                </div>
            </div> */}
            <div className="flex flex-col gap-3 w-full max-w-md mx-auto p-4">
    
    {/* Input Fields */}
    <input
        type="email"
        placeholder="E-mail"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <input
        type="text"
        placeholder="Name"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <input
        type="password"
        placeholder="Password"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <button className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-red-600 transition">
        Register
    </button>
    {/* OR Divider */}
    <div className="flex items-center justify-center my-3">
        <p className="text-gray-500 text-sm">------ OR ------</p>
    </div>

    {/* Google Button */}
    <button className="w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition">
        Continue with Google
    </button>
</div>

        </>
    )
}