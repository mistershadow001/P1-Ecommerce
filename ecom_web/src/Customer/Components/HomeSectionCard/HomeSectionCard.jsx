

function HomeSectionCard(props){

    return(
        <div className='cursor-pointer flex flex-col items-center color bg-white w-[15rem] mx-3 shadow-lg rounded-lg'>
            <div className='h-[13rem] w-[10rem]'>
                <img className="object-cover object-top w-full h-full" src={props.image}></img>

            </div>
            <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">{props.name}</h3>
                <p>{props.des}</p>
                <div className="flex items-center space-x-2 p-3">
                    <p className="font-semibold">{props.price}</p>
                    <p className="line-through opacity-50">{props.main_price}</p>
                    <p className="text-green-600 font-bold">{props.discount}</p>
                </div>

            </div>

        </div>

        

    );

}

export default HomeSectionCard;